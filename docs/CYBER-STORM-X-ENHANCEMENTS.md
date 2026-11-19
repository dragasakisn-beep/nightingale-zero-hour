# Cyber Storm X-inspired exercise enhancements — Nightingale: Zero Hour

Date: 2026-11-19

## Source basis
CISA's September 18, 2026 Cyber Storm X announcement describes a four-day, approximately 2,000-participant exercise involving over 200 public/private organizations. Its fictional scenario centered on a nation-state adversary affecting transportation (including ports and rail) and water/wastewater, and tested coordination, information sharing, response plans and resilience. See:
- https://www.cisa.gov/resources-tools/resources/cyber-storm-x
- https://www.cisa.gov/news-events/news/cisa-hosts-cyber-storm-x-nationwide-cybersecurity-exercise-strengthen-resilience
- https://www.cisa.gov/news-events/news/cyber-storm-x-20-years-readiness-resilience-and-real-world-impact

**Source boundary:** These are Nightingale classroom adaptations, not a reproduction of CISA's specific scenario, restricted exercise content or actual Cyber Storm playbook.

## Scenario expansion: OPERATION BROKEN CHAIN
A fictional aerospace predictive-maintenance supplier suffers credential compromise and possible manipulation of aircraft maintenance telemetry. The company must balance safety, service continuity, contract clauses, compliance evidence, supplier oversight and potential government coordination. No actual aircraft, government data, or live external system is involved.

## Design shift
Replace multiple-choice as the primary play mechanic with free-form structured **captain decisions**:
1. Proposed action
2. Justification and relevant obligation
3. Evidence cited
4. Requested coordination or information
5. Accountable owner
6. Residual risk / anticipated operational effect

Multiple choice remains optional as an instructor warm-up/knowledge check. The existing static UI is a demo, not the intended final gameplay.

## Five turns (180 minute class)
1. **Suspicious Activity** — vendor account / anomalous telemetry; ask for facts, triage and evidence.
2. **Operational Consequences** — unreliable maintenance recommendations; choose proportionate operational response.
3. **Contractual & Regulatory Exposure** — contested supplier notification, flowdown analysis and responsible disclosure.
4. **Audit / SSP / POA&M Crisis** — reconcile claims, document findings and verify current CMMC eligibility rules.
5. **Cross-Organization Escalation** — fictional government coordination cell warns of related compromise; leadership gives evidence-based final recommendation.

## White Cell mechanics
- Director chooses a turn and releases the public inject.
- Director privately releases unique team packets through Wargame AI server-filtered intelligence.
- Teams submit decisions and cross-team coordination requests.
- AI may provide **advisory** situation estimates, but a human Director approves rulings.
- Next inject is selected from a controlled consequence library, based on game state (no unreviewed autonomous legal decisions).
- Maintain a decision and rationale log for after-action analysis.

## New interface requirements
- Public projector: mission clock, timeline, incident board, status indicators, published consequences; **never render private intelligence**.
- Team portals: role objectives, authorized packets, evidence artifacts, structured move composer, request/response thread, captain approval.
- Director: release queue, inject library, state version, team decisions, override rationale, scoring, AAR export.
- Executive board hearing: four team summaries plus a single enterprise readiness statement.

## Game state indicators (fictional / not compliance scores)
- Incident containment: 0–100
- Evidence integrity: 0–100
- Operational continuity: 0–100
- Contractual exposure: low / medium / high / critical
- Decision confidence: low / medium / high
These are educational simulation metrics **not** official CMMC or audit scores.

## Adjudication criteria
Legal and contract applicability (30%), quality of evidence (25%), risk reduction (20%), business judgment (15%), coordination (10%). Mandatory rules override points: a high exercise score cannot authorize an inaccurate contractual or CMMC representation.

## Acceptance test
- Four teams and one Director can play through all five turns.
- Each team receives only its own private packets (server-enforced).
- Team captains submit open-form moves.
- Director can publish public/targeted follow-on injects and record decision rationales.
- AAR includes decisions, evidence, coordination delays and improvements.
- No real sensitive data, secrets or student identifiers in the public repository.
