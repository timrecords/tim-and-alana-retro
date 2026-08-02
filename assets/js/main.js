
(function () {
  const c = window.WEDDING_CONFIG;

  document.querySelectorAll("[data-couple]").forEach(el => el.textContent = c.couple);
  document.querySelectorAll("[data-short-couple]").forEach(el => el.textContent = c.shortCouple);
  document.querySelectorAll("[data-date-display]").forEach(el => el.textContent = c.weddingDateDisplay);
  document.querySelectorAll("[data-city]").forEach(el => el.textContent = c.city);
  document.querySelectorAll("[data-email]").forEach(el => {
    el.textContent = c.email;
    if (el.tagName === "A") el.href = "mailto:" + c.email;
  });


  document.querySelectorAll("[data-joy-site]").forEach(el => el.href = c.joySiteUrl);
  document.querySelectorAll("[data-joy-rsvp]").forEach(el => el.href = c.joyRsvpUrl);
  document.querySelectorAll("[data-joy-registry]").forEach(el => el.href = c.joyRegistryUrl);

  const current = location.pathname.split("/").pop() || "index.html";
  const nav = document.querySelector("[data-nav]");
  if (nav) {
    nav.innerHTML = c.navigation.map(([label, href]) =>
      `<a href="${href}" ${current === href ? 'aria-current="page"' : ''}>${label}</a>`
    ).join("");
  }

  function updateCountdown() {
    const target = new Date(c.weddingDate).getTime();
    const now = Date.now();
    let distance = target - now;

    const status = document.querySelector("[data-countdown-status]");
    if (distance <= 0) {
      if (status) status.textContent = "THE BIG DAY IS HERE!";
      distance = 0;
    }

    const values = {
      days: Math.floor(distance / 86400000),
      hours: Math.floor((distance % 86400000) / 3600000),
      minutes: Math.floor((distance % 3600000) / 60000),
      seconds: Math.floor((distance % 60000) / 1000)
    };

    Object.entries(values).forEach(([key, value]) => {
      const el = document.querySelector(`[data-${key}]`);
      if (el) el.textContent = String(value).padStart(2, "0");
    });
  }
  updateCountdown();
  setInterval(updateCountdown, 1000);

  function demoCounter() {
    const key = "retro-wedding-demo-visits";
    const next = Number(localStorage.getItem(key) || c.counterStartingNumber) + 1;
    localStorage.setItem(key, next);
    return next;
  }

  async function updateCounter() {
    const display = document.querySelector("[data-visitor-count]");
    if (!display) return;

    if (c.counterMode === "demo") {
      display.textContent = String(demoCounter()).padStart(6, "0");
      display.title = "Demo counter: stored only in this browser";
      return;
    }

    if (c.counterMode === "goatcounter" && c.goatCounterCode !== "YOUR-SITE-CODE") {
      try {
        const url = `https://${c.goatCounterCode}.goatcounter.com/counter/%2F.json`;
        const response = await fetch(url);
        if (!response.ok) throw new Error("Counter request failed");
        const data = await response.json();
        display.textContent = String(data.count_unique ?? data.count ?? 0).padStart(6, "0");
      } catch (err) {
        display.textContent = "ERROR!";
        console.warn(err);
      }
    }
  }
  updateCounter();

  // Track visits with GoatCounter only after it is configured.
  if (c.counterMode === "goatcounter" && c.goatCounterCode !== "YOUR-SITE-CODE") {
    const script = document.createElement("script");
    script.async = true;
    script.dataset.goatcounter = `https://${c.goatCounterCode}.goatcounter.com/count`;
    script.src = "https://gc.zgo.at/count.js";
    document.head.appendChild(script);
  }

  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();
})();

  const storyLightbox =
    document.getElementById("story-lightbox");

  const storyLightboxImage =
    document.getElementById("story-lightbox-image");

  const storyLightboxCaption =
    document.getElementById("story-lightbox-caption");

  const storyLightboxClose =
    document.getElementById("story-lightbox-close");

  const storyThumbnails =
    document.querySelectorAll(".story-thumbnail");

  let lastFocusedThumbnail = null;

  function openStoryLightbox(thumbnail) {
    const thumbnailImage =
      thumbnail.querySelector("img");

    lastFocusedThumbnail = thumbnail;

    storyLightboxImage.src =
      thumbnail.dataset.fullImage || thumbnailImage.src;

    storyLightboxImage.alt =
      thumbnailImage.alt;

    storyLightboxCaption.textContent =
      thumbnail.dataset.caption || "";

    storyLightbox.hidden = false;

    document.body.style.overflow = "hidden";

    storyLightboxClose.focus();
  }

  function closeStoryLightbox() {
    storyLightbox.hidden = true;

    storyLightboxImage.src = "";
    storyLightboxImage.alt = "";

    document.body.style.overflow = "";

    if (lastFocusedThumbnail) {
      lastFocusedThumbnail.focus();
    }
  }

  storyThumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
      openStoryLightbox(thumbnail);
    });
  });

  storyLightboxClose.addEventListener(
    "click",
    closeStoryLightbox
  );

  storyLightbox.addEventListener("click", (event) => {
    if (event.target === storyLightbox) {
      closeStoryLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      !storyLightbox.hidden
    ) {
      closeStoryLightbox();
    }
  });
</script>