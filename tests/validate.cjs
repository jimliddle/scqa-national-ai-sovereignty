// Run from the repository root with Node.js: node tests/validate.cjs
const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const html = fs.readFileSync('index.html', 'utf8');
const code = html.match(/<script type="text\/babel">([\s\S]*?)<\/script>/)[1];
const context = {};
vm.createContext(context);
vm.runInContext(code.slice(code.indexOf('const TABS'), code.indexOf('// 3. COMPONENTS')) +
  '\nthis.data = {TABS, CAPACITY_EXAMPLES, MODEL_CAPABILITIES, SOVEREIGN_DATA, INITIATIVES, TIMELINE_EVENTS, DEFAULT_WEIGHTS, weightedScores, sovereignAverage, scenarioRows, countryMeans};', context);
vm.runInContext(code.slice(code.indexOf('function timelineKey'), code.indexOf('function TimelineView')) + '\nthis.timelineKey = timelineKey;', context);
const d = context.data;
for (const rows of [d.MODEL_CAPABILITIES, d.SOVEREIGN_DATA]) {
  assert.equal(new Set(rows.map(r => r.country)).size, rows.length, 'Duplicate jurisdiction');
}
assert.equal(new Set(d.INITIATIVES.map(r => r.initiative)).size, d.INITIATIVES.length);
const dimensions = ['infra', 'regulation', 'sovereignty', 'openness', 'speed', 'talent'];
for (const row of d.INITIATIVES) for (const key of dimensions) assert(row[key] >= 1 && row[key] <= 10);
for (const row of [...d.INITIATIVES, ...d.SOVEREIGN_DATA, ...d.TIMELINE_EVENTS]) assert.match(row.sourceUrl, /^https:\/\//);
for (const row of [...d.MODEL_CAPABILITIES, ...d.INITIATIVES, ...d.SOVEREIGN_DATA]) {
  for (const [label, url] of row.sources) { assert(label); assert.match(url, /^https:\/\//); }
}
const scores = d.weightedScores(d.INITIATIVES, d.DEFAULT_WEIGHTS);
assert.equal(scores.find(r => r.country === 'United Kingdom').score, 62);
assert.equal(scores.find(r => r.country === 'United Arab Emirates').score, 60);
assert.equal(scores.find(r => r.country === 'Canada').score, 71);
assert.equal(scores.find(r => r.country === 'Saudi Arabia').score, 48);
assert(d.weightedScores(d.INITIATIVES, Object.fromEntries(dimensions.map(k => [k, 0]))).every(r => r.score === null));
assert.equal(d.weightedScores([], d.DEFAULT_WEIGHTS).length, 0);
// Synthetic mixed programmes verify equal averaging rather than budget weighting.
const fixture = [1, 9].map((value, i) => ({country:'Example',flag:'',archetype:'Example',investment:i?1000:1,...Object.fromEntries(dimensions.map(k=>[k,value]))}));
assert.equal(d.weightedScores(fixture, d.DEFAULT_WEIGHTS)[0].score, 50);
for (const country of ['South Korea', 'Switzerland', 'Germany', 'Spain']) {
  assert(d.MODEL_CAPABILITIES.some(r => r.country === country));
  assert(!scores.some(r => r.country === country), 'Unreviewed strategy must not be scored');
}
for (const row of d.TIMELINE_EVENTS) assert(Number.isFinite(context.timelineKey(row.date)), row.date);
assert.equal(context.timelineKey('2026-08'), context.timelineKey('2026-Aug'));
assert.equal(context.timelineKey('2024-Q4'), context.timelineKey('2024-Oct'));
const events = [...d.TIMELINE_EVENTS].sort((a,b)=>context.timelineKey(b.date)-context.timelineKey(a.date));
assert.equal(events[0].date, '2026-10-06');
assert.equal(events.at(-1).date, '2017');
assert(html.includes('timelineKey(b.date) - timelineKey(a.date)'), 'UI must sort newest first');
console.log(`PASS: coverage, sources, score bounds, arithmetic, undefined weights, programme selection and ${events.length} newest-first milestones.`);

for (const row of d.SOVEREIGN_DATA) {
  assert.equal(row.model, d.MODEL_CAPABILITIES.find(m => m.country === row.country).control, 'Model control must agree across views');
}
assert.equal(d.MODEL_CAPABILITIES.find(r => r.country === 'Japan').control, 8);
for (const row of d.CAPACITY_EXAMPLES) {
  assert(row.status && row.quantity && row.notes, 'Capacity needs status, quantity scope and notes');
  assert.match(row.sourceUrl, /^https:\/\//);
}
assert.equal(d.CAPACITY_EXAMPLES.find(r => r.country === 'Norway').status, 'Planned for 2027');
assert(d.CAPACITY_EXAMPLES.some(r => r.quantity.includes('5,448 NVIDIA GH200') && r.status.startsWith('Operational')));
assert(d.CAPACITY_EXAMPLES.some(r => r.quantity.includes('1,024 Intel Max 1550') && r.status.startsWith('Operational')));
assert(!html.includes('domesticChipDesign'), 'Binary chip-design label must not return');
assert(!/Earthmade|Greg(?:ory)? Lui|smuggling-more-300-million/i.test(html), 'Excluded criminal case must not be published');
assert(d.TABS.some(t => t.id === 'supply'));
console.log('PASS: cross-view control consistency, model-only coverage, capacity status and supply-chain view.');

// Scenarios must recalculate without altering the published assessment.
const baseline = JSON.stringify({models:d.MODEL_CAPABILITIES, sovereign:d.SOVEREIGN_DATA, programmes:d.INITIATIVES});
const uk = d.SOVEREIGN_DATA.find(r=>r.country==='United Kingdom');
assert.equal(d.sovereignAverage(uk), 16/3);
assert.equal(d.sovereignAverage(uk,{compute:0,model:1,data:0}),4);
assert.equal(d.sovereignAverage(uk,{compute:0,model:0,data:0}),null);
const ukProgramme = d.INITIATIVES.find(r=>r.country==='United Kingdom');
const scenario = d.scenarioRows({models:{'United Kingdom':{control:8}},sovereign:{'United Kingdom':{compute:9}},programmes:{[ukProgramme.initiative]:{infra:10}}});
assert.equal(scenario.sovereign.find(r=>r.country==='United Kingdom').model,8);
assert.equal(scenario.models.find(r=>r.country==='United Kingdom').control,8);
assert.equal(d.sovereignAverage(scenario.sovereign.find(r=>r.country==='United Kingdom')),(9+8+7)/3);
assert.equal(d.weightedScores(scenario.programmes,d.DEFAULT_WEIGHTS).find(r=>r.country==='United Kingdom').score,72);
assert.equal(d.countryMeans(scenario.programmes).find(r=>r.country==='United Kingdom').infra,10);
assert.equal(JSON.stringify({models:d.MODEL_CAPABILITIES, sovereign:d.SOVEREIGN_DATA, programmes:d.INITIATIVES}),baseline);
assert.equal(d.scenarioRows({}).sovereign.find(r=>r.country==='United Kingdom').model,4);
assert.equal(d.weightedScores(d.scenarioRows({}).programmes,d.DEFAULT_WEIGHTS).find(r=>r.country==='United Kingdom').score,62);
console.log('PASS: custom weights, zero-weight handling, shared model control, programme recalculation and baseline preservation.');
