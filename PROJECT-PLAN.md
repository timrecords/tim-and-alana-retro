# Two-Site Wedding Web Plan

## System architecture

### Site 1 — Joy / timandalana.com
The canonical guest-information system.

Owns:
- RSVP records
- guest groups and plus-ones
- private event visibility
- meal and dietary responses
- registry
- final schedule and logistics
- guest communications

### Site 2 — Retro microsite
The creative and storytelling experience.

Owns:
- homepage and countdown
- 1990s romantic-comedy relationship story
- original-TV-movie bridal party page
- arcade-tournament grooms party page
- time-travel travel page
- hidden secure-terminal Easter egg
- links back to Joy for transactional tasks

## Single-source-of-truth rule

Do not duplicate any information that is likely to change unless there is a strong
guest-experience reason.

Keep these only in Joy:
- RSVP form and answers
- registry items
- guest-specific event access
- meal selections
- last-minute logistics

The retro site may summarize public details, but its RSVP and registry buttons
should always lead back to Joy.

## Shared configuration

Edit `assets/js/config.js` once to set:

```js
joySiteUrl: "https://timandalana.com",
joyRsvpUrl: "YOUR FINAL JOY RSVP URL",
joyRegistryUrl: "YOUR FINAL JOY REGISTRY URL",
```

Buttons with `data-joy-site`, `data-joy-rsvp`, or `data-joy-registry` update
automatically.

## Page map

- `index.html` — general GeoCities/Space-Jam-era portal
- `story.html` — 1990s romantic-comedy story
- `wedding-party.html` — character-select hub
- `bridal-party.html` — original-TV-movie friendship ensemble
- `grooms-party.html` — arcade fighting tournament
- `schedule.html` — public schedule
- `travel.html` — time-travel logistics
- `faq.html` — guest FAQs
- `registry.html` — Joy registry portal
- `rsvp.html` — Joy RSVP portal
- `system-access.html` — hidden dinosaur-security Easter egg

## Build sequence

### Phase 1 — Functional skeleton
1. Publish the starter to GitHub Pages or Netlify.
2. Update names, date, city, and Joy URLs in `config.js`.
3. Verify every page and navigation link.
4. Replace the placeholder image.
5. Test mobile.

### Phase 2 — Canonical Joy integration
1. Finish Joy's RSVP settings.
2. Copy the final RSVP and registry URLs into `config.js`.
3. Test the outbound flow in a private/incognito browser.
4. Confirm browser Back returns cleanly to the retro site.

### Phase 3 — Content
1. Write the story page in short acts.
2. Gather names, roles, origin stories, and one fun stat for each party member.
3. Finalize travel and public schedule information.
4. Add only FAQs that help guests make decisions.

### Phase 4 — Visual assets
Use your own photographs and original graphics. Avoid uploading copied studio
logos, film stills, game sprites, or character artwork. The current pages convey
each genre through typography, composition, color, and interface language.

Recommended asset list:
- 1 homepage hero
- 3–6 story photos
- 1 portrait per wedding-party member
- optional city/hotel/venue images
- 2–4 original animated GIFs or icons

### Phase 5 — QA and launch
1. Test desktop and phone widths.
2. Test keyboard navigation.
3. Test RSVP and registry redirects.
4. Ask one invited guest to navigate without instructions.
5. Confirm no private guest data appears in GitHub.
6. Configure visitor counter.
7. Connect the retro site's own domain or subdomain.
8. Launch.

## Recommended domain pattern for the retro site

Keep `timandalana.com` pointed to Joy.

Use one of:
- `retro.timandalana.com`
- `www.timandalana.net`
- a separate playful domain

A subdomain is cheapest and keeps the relationship obvious, provided your DNS
host lets you point it to the static host.

## Content workflow with ChatGPT

For each themed page, provide:
- names
- roles
- 1–3 sentence relationship context
- one memorable story
- one joke or stat
- photo filename

Then replace the placeholder cards without changing the underlying layout.
