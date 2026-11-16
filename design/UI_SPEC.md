# myFAP – Minimal UI Redesign: UI SPEC

## Source of truth

- `design/reference/reference-full.png`: the **only authoritative visual target**.
- `design/reference/01-home.png` through `05-profile.png`: individual screen crops for close inspection.
- `design/reference/06-dark-home-preview.png`: partial dark-mode reference.
- This is a **design reference**, not evidence that the decompiled APK contains directly buildable React Native source.
- The large title header, phone frames, and feature summary *outside the phone screens* are promotional presentation material and MUST NOT be recreated in the app.

## Design direction (strict)

Native-feeling, quiet student utility UI. Use warm FPT orange **only as an accent**. Flat off-white backgrounds, black/charcoal text, light-gray separators, minimally rounded rectangles, and restrained elevation. No creative redesign or additional decorative visuals.

Visual tokens are **approximate**; when there is a conflict, follow the reference screenshot pixel appearance.

| Element | Starting token |
| --- | --- |
| Background | `#F8F9FA` / near white |
| Surfaces | `#FFFFFF` |
| Primary text | `#17191C` |
| Secondary text | `#5E646F` |
| Borders | `#EAECF0` |
| Accent | `#F36A21` |
| Alert tint | `#FFF2EB` |
| Screen horizontal padding | 18–22 dp |
| Row height | 54–64 dp |
| Cards / small panels | 12–16 dp corner radius |
| Header text | ~24–26 sp, strong |
| List item text | ~14–16 sp, medium/semibold |
| Supporting text | ~12–13 sp, muted |
| Navigation | 5 evenly-spaced items; small outline icons above labels |

Avoid large gradients, glassmorphism, oversized pills, colorful icon tiles, emoji, unnecessarily heavy shadows, animated decorations, giant KPI cards, and arbitrary accent colors.

## Navigation — important!

Keep **exactly five bottom tabs**, in this exact order and Vietnamese spelling:

1. `Hôm nay`
2. `Lịch`
3. `Học tập`
4. `Dịch vụ`
5. `Cá nhân`

The selected tab uses the orange accent. Others are charcoal gray. Each has a coherent outline icon + small label. Persistent navigation and safe-area handling.

## Screen 01 — Hôm nay (`01-home.png`)

- Title `Hôm nay`, date immediately underneath, notification bell upper right with small alert dot.
- Small, white bordered `Lớp tiếp theo` card with a thin orange left edge. Class title prominent; below is time and room; chevron at right. **Do not** turn this into a full orange gradient hero.
- `Lịch hôm nay`: timeline with class times, titles, room codes, and status markers; muted gray for passed classes, orange for upcoming/current.
- Near bottom: restrained pale-orange upcoming-exam notice with date and course.
- Bottom tabs stay visible.

## Screen 02 — Lịch (`02-schedule.png`)

- Title `Lịch`.
- Underline-style two-option selector `Lịch học` and `Lịch thi`.
- Compact week strip, active day as orange short pill/rounded rectangle, labels T2–CN.
- Day heading and stacked clean schedule cards: time, course, room; small status icon at right.
- The **Lịch thi** tab should group exams by *actual exam date and time*, not combine different exam sessions incorrectly.

## Screen 03 — Học tập (`03-academics.png`)

- Title `Học tập`.
- One compact summary panel, with GPA on left and credits on right. Small progress bar underneath.
- Four simple, mostly white menu rows in the screenshot order: `Bảng điểm`, `Tiến độ học tập`, `Chuyên cần`, `Thực tập (OJT)`.
- Only numbers matching real data should appear when integrated. Use clearly labeled fixture data in prototype mode.

## Screen 04 — Dịch vụ (`04-services.png`)

- Title `Dịch vụ`.
- A simple stack of five full-width list rows: `Học phí & thanh toán`, `Đơn từ & thủ tục`, `Tin nhắn & hỗ trợ`, `Thông báo & tin tức`, `Tiện ích khác`.
- Monochrome outline icon left, label center, chevron right. No brightly colored feature tiles.

## Screen 05 — Cá nhân (`05-profile.png`)

- Title `Cá nhân`, settings gear right.
- Neutral round placeholder avatar next to student name, student ID and major.
- One compact two-column information block for `Học kỳ` and `Cơ sở`.
- Flat list entries: `Hồ sơ sinh viên`, `Bảo mật & quyền riêng tư`, `Giao diện tối` with real working toggle, `Trợ giúp & phiên bản`.
- Light-bordered `Đăng xuất` row with restrained orange/red text.

## Dark Mode

Implement with shared tokens, using a near-black charcoal background and legible gray text. `06-dark-home-preview.png` is a partial reference, not a mandate to invent extra effects. A working switch on the Profile screen is mandatory.

## Functionality / data boundaries

- First build a visual prototype with deterministic sample data (names, dates, classrooms, scores are placeholders).
- Do not imply demo data is live university data.
- Do not invent FPT API routes, credentials, token workflows, backend behavior, or authentication bypasses.
- Before integrating, audit whether the `decompiled_index.js` Hermes decompilation has real build tooling. Do not edit a ~39 MB decompiled blob in place as the first implementation step.
- Create a dedicated clean React Native app/workspace if necessary, preserving the forensic/source archive.
- Existing login and data features should only be connected after verifying lawful access and actual working integration points.

## Verification and acceptance

- Render at one agreed mobile viewport (e.g. 360 x 800 dp) and one additional Android viewport. Respect native status and bottom safe areas.
- Capture actual screenshots from a running build for each of the five tabs in light mode and the Home/Profile in dark mode.
- Compare side-by-side with the corresponding reference crops. Work iteratively until spacing, hierarchy, card sizes, bottom nav and orange accents match.
- Verify all five tabs open; schedule toggle and dates work; dark toggle works; scrolling works; content stays legible on small phones.
- No layout overflow, frozen controls, missing icons, placeholder `Lorem ipsum`, or console errors.
- Report exactly what was implemented, commands used to run/build, and what remains mocked/unverified. Never claim live API integration or APK production readiness without proof.
