# NIGHTINGALE: ZERO HOUR — CIS4430 Classroom Delivery

**Current format:** 60 minutes, two 20-minute gameplay turns, four cooperative departments, one human Director.

## Student and instructor boundaries

- **Nightingale Mission Control (GitHub Pages):** Public-safe classroom briefing, manual 60-minute timer, slide-like phase controls, demonstration decisions, and direct launch to Wargame AI.
- **Wargame AI (Render):** Authoritative exercise state, Keycloak authentication, private intelligence distribution, team submissions, AI Red Cell controls, adjudication, turn advancement, and after-action records.
- **No automatic synchronization exists between the websites.** Never project private packets or use the unprotected Team Workstation demo for graded student submissions.
- The static site stores demonstration choices locally within one browser. It neither reads nor alters the authoritative game session.

## Links

- [Nightingale classroom website](https://dragasakisn-beep.github.io/nightingale-zero-hour/)
- [Wargame AI production gateway](https://wargame-pilot-gateway.onrender.com/)
- [Nightingale GitHub Pages deployment](https://github.com/dragasakisn-beep/nightingale-zero-hour/actions/workflows/deploy-pages.yml)

## Classroom timeline

| Class time | Activity |
|---|---|
| 00:00–00:08 | Introduce incident, obligations, teams, scoring |
| 00:08–00:28 | Turn 1 — THE COMPROMISE |
| 00:28–00:30 | Director adjudication / escalation |
| 00:30–00:50 | Turn 2 — THE COMPLIANCE RECKONING |
| 00:50–01:00 | Four captain recommendations; executive decision and AAR |

## Teams

| In-game seat | Functional department |
|---|---|
| Blue | Cyber Operations |
| Red | Legal & Contracts |
| Green | GRC / Audit |
| White (playing seat) | Executive & Supply Chain |

The Director is **not** the White playing seat. The Director is the separate control role in Wargame AI.

## Instructor checklist

1. Open the GitHub Pages website and confirm the **Classroom Launch** tab exists and displays a 60:00 timer.
2. Open Wargame AI in a second, private instructor tab. Choose the Nightingale session; verify it is the **intended** classroom session, not an old rehearsal.
3. Verify each student's Keycloak access and the captain for each playing team. If testing solo, use **Play → AI Red Cell & Forecasts → Make AI-controlled**, followed by **Generate AI move** and the Director's explicit submission.
4. Verify private packet recipients and public Turn 1 brief. Turn 2 packets must not release early.
5. Do not advance an actual Wargame AI turn using the GitHub Pages demo; the projector's phase selector is manual only.
6. Adjudicate the four teams in Wargame AI and record the final executive recommendation.
7. If internet access fails, run the public-safe demo and collect paper decisions. Clearly label those outcomes as local simulation, not Wargame AI submissions.

## Scoring

Legal and contractual accuracy 30%; evidence quality 25%; risk reduction 20%; business judgment 15%; cross-team coordination 10%.

## Current limitations

- No Keycloak integration on the public GitHub Pages site.
- No private packet isolation on its demo Team Workstation.
- No live read/write API connection between Nightingale and Wargame AI.
- No automatic syncing of its classroom timer or phase selector with engine state.

## Next milestone after class

Integrate a read-only, backend-authorized public session projection within the existing Wargame AI gateway. Only then add team-specific workstations, captain submission, and Director controls after role-isolation tests.

**Caution:** This is fictional training material. Scoring is not a legal compliance determination, CMMC assessment, or certification status.
