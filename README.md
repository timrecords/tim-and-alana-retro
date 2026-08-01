# Retro Wedding Website Starter

A no-build, plain HTML/CSS/JavaScript wedding site inspired by GeoCities,
Space Jam, starfield backgrounds, visitor counters, blinking text, and 56K modems.

## What is included

- `index.html` — homepage and countdown
- `story.html` — 1990s romantic-comedy relationship story
- `wedding-party.html` — wedding-party hub
- `bridal-party.html` — original-TV-movie bridal party
- `grooms-party.html` — arcade-tournament grooms party
- `system-access.html` — hidden secure-terminal Easter egg
- `schedule.html` — wedding events
- `travel.html` — hotels, transportation, local favorites
- `faq.html` — expandable questions
- `registry.html` — registry links
- `rsvp.html` — link to an external RSVP form
- `assets/css/style.css` — all visual styles
- `assets/js/config.js` — shared names, date, city, navigation, and counter settings
- `assets/js/main.js` — countdown, navigation, shared content, and counter behavior
- `assets/images/placeholder.svg` — replace with your own image

No framework, terminal, package manager, compiler, or installed application is needed.

---

## Fastest editing workflow on a locked-down work computer

### Option A: GitHub in the browser — recommended

1. Create a GitHub account or sign in.
2. Create a new repository, such as `retro-wedding`.
3. Unzip this starter on your computer.
4. In the repository, choose **Add file → Upload files**.
5. Drag in the contents of the folder—not the outer folder itself.
6. Commit the files.
7. Open `assets/js/config.js` in GitHub.
8. Click the pencil icon and replace the placeholder settings.
9. Commit each edit.
10. Go to **Settings → Pages**.
11. Publish from the `main` branch and `/root`.

This gives you version history, browser-based editing, and free hosting.

### Option B: Netlify Drop — fastest preview

1. Unzip the starter.
2. Drag the whole project folder into Netlify Drop.
3. Use the generated preview URL.
4. For later manual updates, edit the files and drag the folder into the site's Deploys area again.

This is fastest, but GitHub is easier for tracking and undoing edits.

### Option C: Neocities — most thematically appropriate

Neocities includes an in-browser HTML editor and file uploader. Re-create the same
folder structure and upload the files. It is ideal if participating in the
independent-web community is part of the fun.

---

## First edits to make

Open `assets/js/config.js` and change:

- couple names
- short names
- wedding date
- displayed date
- city
- email
- navigation labels, if desired

The countdown uses an ISO date with timezone:

```js
weddingDate: "2027-06-12T16:00:00-07:00"
```

Use `-07:00` for Pacific Daylight Time or `-08:00` for Pacific Standard Time.

Then replace all bracketed placeholders such as `[VENUE]`, `[DATE]`, and `[PLACE]`
inside the individual HTML pages.

---

## Replacing the image

1. Add your image to `assets/images/`.
2. Use a web-friendly filename such as `engagement-photo.jpg`.
3. In any HTML file, replace:

```html
assets/images/placeholder.svg
```

with:

```html
assets/images/engagement-photo.jpg
```

Keep images reasonably compressed. A width of roughly 1600–2000 pixels is plenty
for this layout.

---

## The countdown clock

The clock works immediately. Its date comes from `assets/js/config.js`.

No service or account is required.

---

## The visitor counter

The template begins in `demo` mode. This increments only in the current browser
using `localStorage`; it is a design preview, not a real global count.

For a real privacy-conscious count:

1. Create a free GoatCounter site.
2. In GoatCounter settings, enable **Allow adding visitor counts on your website**.
3. Copy the short site code from your GoatCounter address.
   - Example: `https://tim-and-alana.goatcounter.com`
   - Site code: `tim-and-alana`
4. In `assets/js/config.js`, change:

```js
counterMode: "goatcounter",
goatCounterCode: "tim-and-alana",
```

5. Republish the site.

The template will load GoatCounter's tracking script and display the homepage's
unique count. GoatCounter can distinguish visits from raw pageviews and offers
privacy-oriented aggregate analytics.

Note: public counters can be affected by bots and privacy blockers. Treat the
number as a fun web artifact, not an audited metric.

---

## RSVP

Static HTML cannot safely manage guest records by itself. Replace the link in
`rsvp.html` with a Joy RSVP link, Google Form, RSVPify form, or another hosted
service. Do not place private guest information in the repository.

---

## Custom domain later

You can develop and publish first on the free platform URL. Connect a custom
domain only when the site is stable. The exact DNS records depend on the host.

---

## Suggested project order

1. Edit `config.js`.
2. Replace the homepage image.
3. Fill in schedule, travel, and FAQ—the guest-critical pages.
4. Add the real RSVP link.
5. Rewrite the story and registry pages.
6. Test every page on mobile.
7. Configure GoatCounter.
8. Connect the custom domain.
9. Ask one trusted guest to complete the entire RSVP journey.
10. Launch into cyberspace.

---

## Keep the joke usable

The design intentionally looks chaotic, but it still uses:
- semantic HTML
- visible keyboard focus
- mobile layouts
- a skip link
- readable body copy
- reduced dependence on animation for meaning

For extra authenticity, add animated GIFs and MIDI carefully. Avoid autoplaying
audio; browsers often block it, and guests may open the site at work.


See `PROJECT-PLAN.md` for the two-site architecture and build sequence.
