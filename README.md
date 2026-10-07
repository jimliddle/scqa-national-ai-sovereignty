# National AI Strategies Dashboard

An interactive SCQA review of national AI capability, delivery and sovereignty.

Published page: https://jimliddle.github.io/scqa-national-ai-sovereignty/

## October 2026 review

Reviewed 7 October 2026. Covers ten countries and the European Union across 14 initiatives and eight interactive views. Primary evidence, delivery status, editorial scoring and funding scope are documented in the page.

Corrections include DeepSeek V4; Sarvam 30B/105B; 19 EuroHPC AI Factories and 13 Antennas; EU enforcement; UK Sovereign AI and the Stargate UK pause; HUMAIN preview; OpenEuroLLM funding; Canada compute allocation; and Stargate campus versus cluster scope.

## Models & Control

A dedicated view separates frontier capability from model control for all 11 jurisdictions. A summary distinguishes frontier developers, foreign-controlled frontier research, challengers, domestic/specialist developers, and regional adaptations/previews. Cards include named models, dated evidence, developer ownership, weight availability, licence constraints, operational dependencies and source links.

Capability and control use explicitly editorial 1–10 rubrics. The Sovereign AI view now uses the shared model-control assessments instead of the earlier blended scores. Capability remains separate from the six-factor programme Posture Scorer; it is not silently added to an aggregate. UK-linked Google DeepMind research is credited for capability while corporate control is assessed separately. France and the EU overlap. Regional benchmark leadership does not establish general-purpose frontier leadership, and absence of evidence is not proof of absence.

Mistral Large 4 is marked as a 6 October 2026 preview with weights pending, Cohere Command A+ and Sarvam have release-specific deployment rights, SEA-LION shows base-model dependence, and HUMAIN M3 remains limited preview.

The UK Stargate pause is reflected in editorial compute, infrastructure and execution assessments. Funding retains original currencies and scopes; announced capacity is distinguished from operational delivery. Scores are not audited national indices.

## Running locally

Serve the repository with `python3 -m http.server 8000` and open http://localhost:8000. The single HTML page uses React, Recharts, Babel and Tailwind from CDNs and requires an internet connection. No package installation or compilation step is required.

## Maintenance

Use linked primary evidence and dated independent evaluations. Distinguish research geography, corporate control, model licences, previews, releases and commissioned capacity. Update shared model assessments so views remain consistent. Explain score changes, preserve the programme scorer methodology and avoid adding overlapping country/EU figures.
