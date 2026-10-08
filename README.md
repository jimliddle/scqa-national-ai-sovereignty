# National AI Strategies Dashboard

An interactive SCQA review of national AI capability, delivery and sovereignty.

Published page: https://jimliddle.github.io/scqa-national-ai-sovereignty/

## October 2026 review

Reviewed 8 October 2026. The page covers ten countries and the European Union across 14 initiatives. Linked primary sources and a methodology note explain evidence dates, delivery status, editorial scores and funding scopes.

Corrections include DeepSeek V4 release; Sarvam 30B/105B; 19 EuroHPC AI Factories and 13 Antennas; current EU enforcement and high-risk timelines; UK Sovereign AI launch; HUMAIN launch and limited model preview; OpenEuroLLM budget; Canada compute funding; and Stargate UAE cluster versus campus scope.

Announced capacity is distinguished from commissioned infrastructure. Funding remains in original currencies and is not aggregated. Scores are editorial comparisons, not audited national indices.

## Running locally

Serve the repository with a static HTTP server, for example `python3 -m http.server 8000`, and open http://localhost:8000.

The single-page application uses React, Recharts, Babel and Tailwind from external CDNs. There is no package installation or compilation step; an internet connection is required to load those dependencies.

## Maintenance

Update dated facts with linked primary evidence. Preserve announcement dates and distinguish plans, previews, releases and commissioned capacity. Keep repeated summaries and the timeline consistent. Reassess scores only with an explicit rationale.

## Scoring transparency and ownership correction

Posture Scorer displays the formula, normalized slider shares, default weights, dimension criteria, a UK worked example and all country dimension means. Programme inputs are equally averaged within each country; weights are editorial preferences. The model capability/control scores remain separate from the six-factor posture formula.

UK domestic model capability is corrected from 9 to 3: US-controlled Google Gemini is no longer credited as a UK domestic frontier model. France/EU remain 7 for domestic frontier challenger Mistral, with preview access distinguished from pending Large 4 weights. UK programme tech sovereignty is revised 6 to 4 for foreign frontier dependence and early domestic development; default posture changes from 66 to 62. Talent retains its separate research credit. These are editorial judgments, not measured benchmark scores.

The £500M UK figure is a fund envelope, not verified disbursed spending or a dedicated frontier training budget. The timeline includes Fable/Mythos export controls and their lifting, Astra safety gating, Google's Fairwind managed access, the EU Cloud Sovereignty Framework and the proposed Cloud and AI Development Act. Government export controls, provider safety restrictions, legislative proposals and implemented procurement are identified separately.

Validation: JSX compilation; country classification and score arithmetic including zero weights; source-linked timeline milestones; live browser verification after deployment.
