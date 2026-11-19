# Wargame AI Integration — Architecture and Security Contract

## Verified source baseline
The linked `dragasakisn-beep/wargame-ai-v41` README identifies **Build 49.6.3**, a FastAPI / PostgreSQL / Keycloak / React(Vite) application. The architecture describes authenticated sessions, membership-based permissions, team-private intelligence, move submissions, director adjudication, state-version protections and AAR. Read `ARCHITECTURE.md`, `docs/API-REFERENCE.md`, and current OpenAPI before implementing live integrations.

## Intended integration
Nightingale is a separate repository and **frontend experience**, not a fork. It must treat Wargame AI as the source of truth for authenticated sessions, membership, move lifecycle, adjudication and event history.

```
Nightingale Mission Control + Team Portal (React/Vite)
                    |
                    | authenticated, backend-enforced API
                    v
            Wargame AI FastAPI
              |          |
         PostgreSQL    Keycloak
```

## Existing API candidates (verify at deployed version)
- `/scenario-templates` for scenario management.
- `/sessions/{sid}/control` and `/sessions/{sid}/intelligence` for progression and release.
- `/sessions/{sid}/dashboard` and `/sessions/{sid}/aar` for instructor reporting.
- `/moves/{mid}/adjudication` for instructor decisions.
- `/sessions/{sid}/rules` and `/sessions/{sid}/rules/preview` for deterministic consequences.
- `/sessions/{sid}/assessment` and `/sessions/{sid}/analytics` for evidence-linked instructor assessment.
- Wargame Build 42 matrix-case endpoints for optional AI advice / human-confirmed decision.

**Do not assume paths or request models are compatible solely because they appear in historical documentation.** Inspect `/api/openapi.json` and running server before connecting.

## Security requirements before student access
1. Keycloak OIDC with PKCE, correct token validation, backend team membership enforcement.
2. Server-only private packets; never bundle private scenario answers, keys, or grades in a public frontend.
3. Director-only controls and adjudication protected by backend authorization.
4. Exercise-scoped event and audit records; concurrency protection via expected state version.
5. No secrets in Git; use deployment secrets and CORS restrictions.
6. Never submit actual student records or sensitive material to optional AI without approval and applicable privacy review.
7. Graceful handling of unavailability, stale moves and paused sessions.

## Adjudication design
Wargame AI can recommend scenario-specific effects and explanatory text, but regulations are validated through instructor-approved references and deterministic guardrails. **Human director makes final decision.** The compliance engine does not infer that a POA&M makes any unmet CMMC requirement eligible.

## Prototype limits
The initial `index.html` uses local browser sessionStorage for a single facilitator preview. It cannot authenticate teams, persist across machines or safely isolate confidential intelligence. These require backend integration and acceptance testing.
