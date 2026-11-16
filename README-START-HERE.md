# myFAP -> Antigravity handoff

## What is included

- `design/reference/reference-full.png`: full design board.
- `design/reference/01-home.png` to `05-profile.png`: zoomed crops for all five tabs.
- `design/reference/06-dark-home-preview.png`: partial dark reference.
- `design/UI_SPEC.md`: detailed visual requirements.
- `ANTIGRAVITY_PROMPT.md`: strict implementation prompt to paste into Antigravity.

## How to use on Windows

1. Open `C:\Users\hachimi\Downloads\myfap_decompiled` as the workspace in Antigravity. The directory is an example from the previous conversation; use the actual repo folder if different.
2. Copy the `design` folder and `ANTIGRAVITY_PROMPT.md` from this kit into the repo root. Do not copy the whole kit folder as a nested folder.
3. Attach the full screenshot directly to the Antigravity agent chat if image attachments are supported. The files in `design/reference/` are also there for independent inspection.
4. Paste the contents of `ANTIGRAVITY_PROMPT.md` to the agent. Prefer agent mode with project-file read/write and terminal access.
5. Demand real screenshots of the running app before accepting completion.

## Note

The repo currently stores decompiled Hermes code; it may not be possible to build directly from that blob. The prompt explicitly instructs the agent to audit the repo and create a new app layer if needed. Source analysis does not itself constitute live integration.
