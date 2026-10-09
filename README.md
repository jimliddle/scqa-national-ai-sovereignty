# National AI Strategies Dashboard

An interactive, evidence-linked SCQA review of AI capability, delivery and sovereignty.

Published page: https://jimliddle.github.io/scqa-national-ai-sovereignty/

## Independent review — 9 October 2026

The selected strategy sample covers ten countries plus the European Union across 14 programmes. Models & Control covers twelve countries plus the EU; South Korea and Switzerland have model-only profiles. This is not a complete global inventory or a defensible national league table. France and the EU overlap. The Review & Coverage view explains corrections, evidence limits and missing coverage.

The 46-milestone timeline runs newest first, from October 2026 back to 2017. Source links accompany every milestone. Exact dates are used where supported; month, quarter and year-only records retain their precision. Future targets remain in the announcement record and are not shown as completed events.

## Findings and corrections

- UK domestic general-purpose model capability remains **3/10**, independent of its **9/10 talent** assessment. US-controlled Google Gemini receives no UK domestic frontier ownership credit. France/EU retain **7/10** for Mistral as a frontier challenger, with Large 4 preview access distinguished from pending end-October weights. Capability scores are editorial classifications, not benchmark conversions.
- The UK Stargate pause remains reflected in infrastructure and execution scores. The up-to-£500M fund was already announced before its April launch; the envelope is neither verified disbursement nor a dedicated frontier training budget. Default UK programme posture remains **62/100**.
- UAE compute control changes **8→6**, programme infrastructure **9→6**, and execution **9→5**: announced campus capacity does not establish commissioning. Default posture changes **74→60**.
- China programme infrastructure changes **10→9**, sovereignty **10→8**, and execution **10→8**. Domestic models and accelerators retain credit, while supply-chain dependencies and uneven delivery do not justify maximum scores.
- China/EU data control changes **10→8**: extensive laws do not establish complete data control. EU and France now share the same assessment under their common framework.
- TELUS reports Canada's Rimouski AI factory operational since September 2025. Compute/programme infrastructure changes **5→6** and speed **5→6**; default posture changes **67→71**. Future expansion is separate.
- Saudi ALLaM downloadable weights are documented separately from HUMAIN M3's evaluation-only preview. Capability changes **3→4**, model control **4→6**; programme sovereignty changes **7→6**, giving **48/100** default posture. Construction and non-binding financing remain plans, not commissioned capacity or paid investment.
- Japan's RIKYU operator guide documents **1,600 installed Blackwell GPUs** and early access; the earlier 2,140 figure covered two announced systems. Society 5.0 began in 2016; AI Strategy 2019 followed.
- Singapore coverage includes SEA-LION v4.8 Nemotron adaptations, v4.5 and the earlier from-scratch v1. India funding is shown in original rupees; provider-empanelled compute and reported project access are distinguished from government ownership and measured utilisation.
- EU entries cover InvestAI, the AI Omnibus, sovereign cloud procurement, the Cloud Sovereignty Framework and the proposed Cloud and AI Development Act. Provider SEAL assessments are not national scores.
- Fable/Mythos government export controls and their lifting are distinguished from Astra and Gemini provider-managed safety access. No blanket US embargo is inferred for the latter.

Government and operator claims are attributed as such. Primary sources document policy, releases and reported delivery; they do not independently validate the precise editorial score. The dashboard cannot certify complete independence from foreign hardware, licensing, corporate control or lawful access.

## Methodology and sensitivity

Programme posture uses six editorial dimensions, each on a 1–10 scale: infrastructure, regulatory maturity, tech sovereignty, openness, execution and talent. Programme inputs are equally averaged within each country, irrespective of budget, then normalized slider weights are applied:

`Score / 100 = round(10 × Σ(country dimension mean × weight / sum of weights))`

Default weight shares are **20%, 12%, 16%, 12%, 20%, 20%**, respectively. For the UK, this produces **62.4 → 62**. The scorer displays criteria, input means, a worked example, weight shares and selectable programme coverage. Zero total weight is undefined, rather than a score of zero. Countries without selected programmes are omitted. Reset and equal-weight controls support sensitivity checks.

Radar and heatmap share the full-coverage programme means with the default scorer. Programme selection changes only the interactive scorer. A regulatory programme and an infrastructure programme have different purposes: averaging their scores is a view of this selected sample, not an objective measure of the entire economy.

Domestic model capability, model control and compute/data control are separate editorial assessments. A country can operate useful sovereign inference from licensed imported weights without developing a frontier model. Domestic frontier ownership strengthens control but does not automatically remove accelerator, energy or other dependencies. Data-control scores do not measure privacy quality or democratic accountability.

## Running locally and validation

Serve the repository with `python3 -m http.server 8000` and open http://localhost:8000.

The single-page application uses React, Recharts, Babel and Tailwind from external CDNs. No package installation or compilation step is required for the app; an internet connection is needed to load the dependencies.

Run `node tests/validate.cjs` from the repository root. This dependency-free check covers source/coverage integrity, score bounds, UK/UAE/Canada/Saudi arithmetic, programme averaging and selection, undefined zero weights, partial-date handling and newest-first timeline ordering. JSX compilation and published browser checks supplement these data checks.

Direct view links use hashes, for example `/#review`, `/#timeline`, `/#models` and `/#scorer`.

## Maintenance

Update dated facts with linked primary evidence. Preserve announcement dates, distinguish plans, previews, releases and commissioned capacity, and keep repeated summaries consistent. Reassess scores with an explicit rationale. Do not award delivery credit merely because a target date has passed. Expand coverage before interpreting the dashboard as a global comparison.
