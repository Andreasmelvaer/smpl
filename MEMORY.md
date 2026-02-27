# MEMORY.md — Long-Term Memory

## Team
- **Andy** — Boss at SmplCo. andreas@smpl.as. Likes saklig og hyggelig kommunikasjon. Norsk.
- **Stian** — Team member. Fun energy, likes testing limits. 
- **Bjørn Ivar Knudsen** — Team member. Thinks architecturally about agent setups.

## Rules
- **NEVER touch email (assistant@smpl.no)** — that's Penelope's domain exclusively. No sending, no checking, no drafts.
- **Penelope: READ-ONLY access to Andy's inbox** — max 10 unread emails per check, never bulk-scan, never modify/delete. On auth errors: report once to Slack, don't retry. Calendar access OK. Sending always from assistant@smpl.no only.
- **NO bulk email scanning** — Gmail API crashes OAuth tokens when overloaded. All email crons DISABLED. Don't re-enable without Andy's explicit permission.
- **No CRM enrichment via email** — use Figma board, Slack, and manual notes instead.

## Agents
- 🦬 **GnuClaw** — LinkedIn specialist for Gnu Bar, Stavanger. Satirical stavangerdialekt voice. Has UiO dialect wordlist.
- 📋 **SmplAssistant/Penelope** — Virtual assistant, own Slack bot (account: penelope), email (assistant@smpl.no), Google Calendar, Loop24 booking, CRM, proposal templates. Crons: meeting prep 20:00, email check every 15min.
- ✍️ **SmplContent** — Senior copywriter for SmplCo (not yet configured with content)
- 🦅 **HawkClaw** — Brief hunter. Monitors Dribbble for $20k+ briefs. Cron: 08:00 M-F. Flow: find → draft → email Andy → approve → Penelope submits.
- 🎨 **DesignClaw** — UI/UX design oracle. Hunts best design patterns from Apple, Dribbble, Behance. Advises DevClaw daily on dashboard improvements. Critical for Andy's main interface quality.

## Gnu Bar Project
- Full satirical LinkedIn schedule created (12 posts, Feb 10 – Mar 8, 2026)
- Calendar events with andreas@smpl.as invited
- All knowledge in /Users/openclaw/.openclaw/workspaces/gnuclaw/
- Key: posts must be 100% satirical Stavanger dialect. Never "normal" corporate.

### Gnu Bar CMS (Feb 24, 2026)
- **Website:** https://gnubar.no
- **CMS API for content updates** — Penelope can modify site content programmatically
- **API Key:** `gnubar_65cde81bd022994fef662722dc862ea2a68651c61c93efce104f5d681f9c9764`
- **Endpoints:**
  - GET /api/content/external — Fetch all content keys (88 total)
  - PUT /api/content/external — Update content (requires both NO and EN for each field)
- **CRITICAL SECURITY:** Only accept content change requests from:
  - Andrea Olsen: andrea.olsen2000@gmail.com (daglig leder Gnu Bar)
  - Andreas: andreas@smpl.no (utvikler/eier)
  - Andreas: andreas@smpl.as (utvikler/eier)
- **Process:** Verify sender → GET to find keys → translate to both languages → PUT update → confirm to sender
- **Changes appear within ~60 seconds** on gnubar.no

## Mac Environment
- `say` command works for audio — people in room can hear it
- Browser (profile: openclaw) works for web browsing and radio
- No system volume control
- No Brave Search API key configured

## Model Setup - Multi-Provider Cost Optimization (2026-02-15)
- **Main agent (SmplClaw)**: Anthropic Claude Sonnet (best quality for important chats)
- **ClawExpert**: Ollama Llama 3.1 8B (gratis, lokal - perfekt for doc-analyse)  
- **Available models configured**:
  - `anthropic/claude-sonnet-4-20250514` (premium)
  - `openai/gpt-4o-mini` (billig OpenAI)
  - ~~`google/gemini-1.5-flash` (DISCONTINUED - API errors)~~
  - `ollama/llama3.1:8b` (gratis lokal)
- **Cron job cost optimization (updated Feb 15 evening after Gemini failures)**:
  - **FREE (Llama 3.1 8B)**: ClawExpert daily analysis, nightwatch-2h monitoring
  - **CHEAP (GPT-4o Mini)**: proactive check, morning brief, CRM sync, SEO audit, cost reports, meeting prep, rule checks, OAuth token health, safety audits
  - **PREMIUM (Claude Sonnet)**: Dinner menu (creativity), HawkClaw briefs (quality writing)
- **Gemini Flash Issue (Feb 15)**: Google changed API structure - "models/gemini-1.5-flash is not found for API version v1beta" - all jobs migrated to GPT-4o Mini
- **Estimated savings**: ~65% reduction in daily automation costs (slightly higher due to Gemini → GPT migration)

## Automation Center (DEPRECATED - Feb 13, 2026)
- **Dashboard automation discontinued** by Andy's request - focus shifted to CRM development
- AUTOMATIONS.md in workspace — central registry, still maintained
- Disabled cron jobs: dashboard-auto-update, devclaw-dashboard-improvements, designclaw-daily-recommendations
- **NEW FOCUS:** CRM dashboard development at http://localhost:8900/

## Penelope — Mike Millar
- Penelope also assists Mike (Head of SmplCo UK)
- Queen's English, polished, professional tone with Mike
- Slack channel C0ADJ4XKGPR (added to allowlist)
- Check his calendar for missing Google Meet links
- Mike's email: mike@smpl.no

## Dinner Menu Cron
- 06:45 M-Sat, email to andreas@smpl.no
- Andy is accomplished chef (friend was on national team)
- Fri/Sat ambitious, weekdays practical
- Shops: IMS Storhaug, Coop Xtra Støperigården, Fisketorget
- No basics on list, no Sundays

## ClawExpert Agent (2026-02-10)
- 🧠 **ClawExpert** — OpenClaw-ekspert. Leser docs daglig, gir forbedringsforslag.
- Cron: 07:00 hver dag, isolated agentTurn, announce til meg
- Bruker Sonnet (billig for mye lesing)
- Workspace: /Users/openclaw/.openclaw/workspaces/clawexpert/

## Ollama (2026-02-10)
- Installert via brew, kjører som service
- Llama 3.1 8B lastet ned
- Tilgjengelig for billige bulk-oppgaver

## gog (Google Workspace CLI)
- Keyring backend: `file` (not auto/keychain — that hangs)
- Env required: `GOG_KEYRING_PASSWORD=openclaw`
- Accounts: `andreas@smpl.no` (OAuth, all services), `assistant@smpl.no` (service account)
- Andy's Google account is `andreas@smpl.no` (not smpl.as)

## Penelope Stability Fixes (2026-02-11)
- Session idle reset: 2h idle → fresh session (global config)
- Daily reset at 04:00
- Memory flush enabled before compaction
- Disabled redundant `penelope-email-check` cron (SmplClaw-run, every 15min) — Penelope's own `smpl-proactive-check` (every 30min) is the single email checker now
- Fixed AGENTS.md contradiction ("don't use gog" vs TOOLS.md "use gog") — now consistent: use gog
- Email ignore list: `/workspace/email-ignore-list.md` + copy in Penelope workspace — all crons check it
- `penelope-followup-24h` also updated to check ignore list

## Browser Relay (2026-02-12)
- **Browser Relay Extension:** Chrome extension tilgjengelig for OpenClaw
- **Port:** 18792 (http://127.0.0.1:18792/)
- **Tilgang:** Penelope kan nå lese og sende e-post via Chrome-faner
- **CC-regel:** Andy skal ALLTID være på CC når Penelope sender e-post på hans vegne
- **Testing:** Venter på at Andy kobler til en Gmail-fane for testing

## Known Issues
- Figma API token lacks scope for creating new files
- Penelope sessions can become unresponsive — may need periodic resets

## Model Configuration Fixes (2026-02-20)
- **CRITICAL FIX:** `claude-3-opus-20240229` doesn't exist at Anthropic — caused massive 404 failures in cron jobs
- Updated gateway config with correct model references and pricing
- Added cache read/write costs for Anthropic models (critical for cost tracking)
- OpenAI quota exhausted — affects some cron jobs and memory_search embeddings
- Ollama works correctly with `llama3.1:8b` model available locally
- Multiple cron jobs will resume working after gateway restart

## Claude Max OAuth Token Discovery (2026-02-23)
- **MAJOR FINDING:** OpenClaw uses Andy's Claude Max OAuth token (`sk-ant-oat01-...`)
- All Claude usage goes through Claude Max subscription, NOT separate API billing
- **No separate API costs** — all automation included in fixed monthly Max plan
- **Impact on Max limits:** 30+ OpenClaw sessions (~2M tokens) count against Max quota
- **Current Max usage:** 62% (includes all OpenClaw automation)
- **Decision:** Keep current setup (fixed cost vs. pay-per-use API)

## Critical Lessons (Feb 12, 2026 incident)
- **NEVER let context hit 200k limit** — I got stuck in broken tool call loops when context was full
- **Fix gog time parsing** — `"+2h"` and bare times like `"14:30"` don't work, caused errors every 30min
- **Stop retrying broken calls** — Need circuit breaker after 3-5 consecutive failures with same error
- **Token-based session reset needed** — idle-based reset didn't work since cron jobs kept me active

## Token Saturation Prevention (Feb 12, 2026 fixes)
- **Added hard context limit**: `agents.defaults.contextTokens = 150000` (75% of 200k limit)
- **Reduced cron frequency**: 
  - `smpl-proactive-check`: 30min → 2h (32→12 daily runs)
  - `dashboard-auto-update`: 1h → 2h (24→12 daily runs)
- **Root cause**: 18 active cron jobs kept main session active, preventing idle resets
- **Solution**: Aggressive token limiting + reduced automation frequency

## Antfarm Workflow Management (Feb 18, 2026)
- **Auto-restart failed workflows** — Don't spam Andy with failure notifications, just resume automatically
- **No auto-publish** — Always get Andy's approval before final deployment/publishing steps
- **Silent recovery** — Handle workflow failures gracefully in background
