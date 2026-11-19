# Confirmed Wargame AI Render environment — 2026-11-19

## Deployment confirmation
Verified through the connected Render workspace:
- Workspace: N's workspace (ID omitted from public display)
- Gateway URL: https://wargame-pilot-gateway.onrender.com/
- Gateway service: wargame-pilot-gateway (public web service, Render)
- Backend API: wargame-pilot-api (Render private service; not publicly reachable directly)
- Authentication: wargame-pilot-keycloak (Render private service behind gateway)
- Last successful gateway deploy: 2026-11-17 18:50 UTC
- Live commit: `4e2296c83c02450da54c7515c25059d02825a656`
- Deployment notes: Build 49.7.1 — scenario from prompt

## Integrated now
- Nightingale's Wargame AI Setup tab defaults to the verified Render gateway.
- Director can open Wargame AI from Nightingale and use the generated scenario prompt from `docs/WARGAME-AI-GENERATION-PROMPT.md`.
- The base presentation and local-choice demo remain independent so an outage in Render does not stop a classroom briefing.

## Important distinction
**Configured external launch is not authenticated API synchronization.** As of this milestone, Nightingale does NOT read Wargame AI team submissions, released intelligence, decisions, scores or session state. It does not bypass Keycloak. A static GitHub Pages frontend on a separate origin cannot safely store client secrets or private scenario intelligence.

## Integration architecture for next milestone
Prefer same-origin exposure under the existing gateway or a Nightingale BFF using OIDC authorization code + PKCE and server-side access checks. Integration must be approved against Wargame AI Build 49.7.1's actual `/api/openapi.json` and working Keycloak realm client configuration. This endpoint was not directly readable from the current tool runtime; do not assume its production response schemas.

Minimum integration contract:
1. Director selects/launches an existing Wargame AI Nightingale scenario session.
2. Student signs into Wargame AI using existing Keycloak accounts (no duplicated password store).
3. Nightingale receives only backend-authorized projection of its team session state.
4. Director controls public projector release, never leaking private team packets.
5. Captain moves and instructor rulings are written only via authoritative engine endpoints with expected state-version protections.
6. Director-controlled AAR and export.
7. Test cross-team authorization and reconnect/stale state.

## Immediate Director action
In Wargame AI, sign in as Director; from Home / Scenario Library choose Generate from a prompt (Build 49.7.1). Copy full `docs/WARGAME-AI-GENERATION-PROMPT.md` prompt; choose Contemporary, Full Wargame, Cooperation, 5 turns, 20 min each, and four teams. Save **as a draft**, not save-and-launch. Review all private packets and terms before validation; real Keycloak users must be assigned to a launched rehearsal session.

## Next technical checks
- Obtain authenticated OpenAPI schema or inspect current backend code and deployed settings.
- Verify whether the existing gateway permits safe same-origin Nightingale hosting, or build a separate authenticated BFF.
- Select an existing Nightingale scenario/session ID for the application.
- Rehearse with at least four captains and a Director.
