# NIGHTINGALE: ZERO HOUR
**CIS4430 — Contractual / Regulatory Compliance | Interactive tabletop wargame**

A fictional aerospace predictive-maintenance incident connects governance, third-party risk management, contractual obligations, audits, POA&Ms, NIST-aligned security planning and CMMC readiness.

## Status
**Phase 0: public-safe, standalone facilitator demonstration.** This is not yet connected to Wargame AI; team state is stored only in the local browser session. No authentication, realtime synchronization, production-grade access control or AI model is included in this prototype. Do not use real student data.

## Try it
Open `index.html` locally in a browser or publish this public-safe static prototype through GitHub Pages. Select **Mission Control**, **Team Workstation**, **Decision Board**, or **Director Notes**. Use demo-only simulated information.

## The class exercise
- Four teams: Alpha (Cyber Operations), Bravo (Legal & Contracts), Charlie (Audit & GRC), Delta (Executive & Supply Chain).
- Five turns: Compliance Exposure; Vendor Compromise; Audit Failure; POA&M Dilemma; Executive Decision.
- 3-hour class structure; team deliberations and instructor adjudication; post-exercise board hearing.
- Instructor is always the adjudication authority. The AI engine may recommend but must not make binding legal or certification determinations.

## Repository contents
- `index.html` — standalone interactive mission-control / team preview.
- `scenario/nightingale.json` — fictional scenario and learning outcomes.
- `docs/EXECUTION-CONCEPT.md` — classroom run of show, team responsibilities and scoring.
- `docs/WARGAME-INTEGRATION.md` — source-backed Wargame AI integration plan, security boundaries and API mapping.
- `docs/ROADMAP.md` — implementation backlog and test gates.
- `.gitignore` — excludes local configuration/secrets.

## Existing engine
The intended integration target is [Wargame AI v41](https://github.com/dragasakisn-beep/wargame-ai-v41), whose README identifies Build 49.6.3 and documents a React/Vite, FastAPI, PostgreSQL and Keycloak stack. Reuse its authenticated exercise sessions, team membership, move submissions, Director adjudication and AAR; do not copy its private code into this public repository without an explicit review.

## Education and legal disclaimer
The scenario uses fictional organizations, invented events, and simulated contract data. Actual regulatory and contractual applicability must be verified from controlling requirements and contract language. A classroom score is **not** a CMMC assessment score or certification status. The instructor should validate the current CMMC rules, phase status, and references before classroom use.

## Development milestones
1. Static functional front-end / scenario data (this foundation).
2. Validate Wargame AI Build 49.6.3 APIs and permissions against live OpenAPI.
3. Implement authenticated team portal adapter and Director-only mission control.
4. Add protected evidence vault and instructor-approved AI recommendations.
5. Test simultaneous multi-team sessions, role isolation, audit trails and exercise recovery.
