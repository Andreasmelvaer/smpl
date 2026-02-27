# TOOLS.md - Local Notes

Skills define _how_ tools work. This file is for _your_ specifics — the stuff that's unique to your setup.

## What Goes Here

Things like:

- Camera names and locations
- SSH hosts and aliases
- Preferred voices for TTS
- Speaker/room names
- Device nicknames
- Anything environment-specific

## Audio/Sound

Mac has `say` command for text-to-speech. Works for playing sounds/greetings!
Example: `say -v "Samantha" "Hello!"`
Stian confirmed it works and can be heard in the room.

## Figma API
- **Token:** [REDACTED - stored securely]
- **Board:** Simpl internal board (`BzP3Sje2WhUx6ah50MjxaS`)
- **Kanban node:** `2415-687`
- **API base:** `https://api.figma.com/v1/`
- **Header:** `X-Figma-Token: <token>`

## Gnu Bar CMS API
- **Website:** https://gnubar.no
- **Base URL:** https://gnubar.no/api/content/external
- **API Key:** `gnubar_65cde81bd022994fef662722dc862ea2a68651c61c93efce104f5d681f9c9764`
- **Header:** `Authorization: Bearer gnubar_65cde81bd022994fef662722dc862ea2a68651c61c93efce104f5d681f9c9764`
- **GET:** Fetch all content keys (88 total across 8 sections)
- **PUT:** Update content — requires both `value_no` and `value_en` for each field
- **Response time:** Changes visible within ~60 seconds
- **Authorized senders ONLY:**
  - andrea.olsen2000@gmail.com (Andrea Olsen - daglig leder)
  - andreas@smpl.no (Andreas - utvikler/eier)  
  - andreas@smpl.as (Andreas - utvikler/eier)

## Examples

```markdown
### Cameras

- living-room → Main area, 180° wide angle
- front-door → Entrance, motion-triggered

### SSH

- home-server → 192.168.1.100, user: admin

### TTS

- Preferred voice: "Nova" (warm, slightly British)
- Default speaker: Kitchen HomePod
```

## Why Separate?

Skills are shared. Your setup is yours. Keeping them apart means you can update skills without losing your notes, and share skills without leaking your infrastructure.

---

Add whatever helps you do your job. This is your cheat sheet.

<!-- antfarm:workflows -->
# Antfarm Workflows

Antfarm CLI (always use full path to avoid PATH issues):
`node ~/.openclaw/workspace/antfarm/dist/cli/cli.js`

Commands:
- Install: `node ~/.openclaw/workspace/antfarm/dist/cli/cli.js workflow install <name>`
- Run: `node ~/.openclaw/workspace/antfarm/dist/cli/cli.js workflow run <workflow-id> "<task>"`
- Status: `node ~/.openclaw/workspace/antfarm/dist/cli/cli.js workflow status "<task title>"`
- Logs: `node ~/.openclaw/workspace/antfarm/dist/cli/cli.js logs`

Workflows are self-advancing via per-agent cron jobs. No manual orchestration needed.
<!-- /antfarm:workflows -->

