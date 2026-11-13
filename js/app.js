(function () {
  "use strict";

  const data = window.TRAVEL_DATA;
  const $ = (sel, scope = document) => scope.querySelector(sel);
  const $$ = (sel, scope = document) => Array.from(scope.querySelectorAll(sel));

  /* ── Utilities ─────────────────────────────────────── */
  function encodeMsg(msg) { return encodeURIComponent(msg.trim().replace(/\s+/g, " ")); }
  function waUrl(msg) { return `https://wa.me/${data.business.whatsappNumber}?text=${encodeMsg(msg)}`; }

  function icon(name) {
    const icons = {
      map: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18-6 3V6l6-3 6 3 6-3v15l-6 3-6-3Z"/><path d="M9 3v15M15 6v15"/></svg>',
      clock: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
      rupee: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 5h10M7 9h10M9 5c5.5 0 5.5 8 0 8h-2l7 6"/></svg>',
      check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>',
      phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/></svg>',
      whatsapp: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 11.8a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.3-4.7a8.5 8.5 0 1 1 16.2-4Z"/><path d="M9.3 8.4c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.3.1.5-.1.7l-.4.5c-.1.1-.2.3 0 .5.5.9 1.2 1.6 2.2 2.1.2.1.4.1.5-.1l.7-.8c.2-.2.4-.2.7-.1l1.5.7c.3.1.4.3.4.6-.1.8-.7 1.5-1.5 1.6-1.2.1-2.9-.4-4.7-2.1-1.6-1.5-2.6-3.4-2.5-4.5 0-.3.2-.7.3-.9Z"/></svg>',
      mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v14H4z"/><path d="m4 7 8 6 8-6"/></svg>',
      star: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" fill="currentColor"/></svg>'
    };
    return icons[name] || "";
  }

  function setText(sel, val) { $$(sel).forEach(n => n.textContent = val); }
  function setHref(sel, val) { $$(sel).forEach(n => n.href = val); }

  /* ── Business Hydration ─────────────────────────────── */
  function hydrateBusinessDetails() {
    const b = data.business;
    document.title = document.title.replace("Shiv Shakti Tours", b.name);
    setText("[data-business-name]", b.name);
    setText("[data-business-phone]", b.phoneDisplay);
    setText("[data-business-email]", b.email);
    setText("[data-business-address]", b.address);
    setHref("[data-phone-link]", `tel:${b.phoneHref}`);
    setHref("[data-email-link]", `mailto:${b.email}`);
    setHref("[data-instagram-link]", b.instagram);
    setHref("[data-facebook-link]", b.facebook);
    setHref("[data-google-reviews-link]", b.googleMapsUrl);
    setHref("[data-whatsapp-link]", waUrl("Hello Shiv Shakti Travels, I want to plan a trip. Please share package details."));
  }

  /* ── Package Cards ─────────────────────────────────── */
  function pkgMsg(pkg) {
    return `Hello Shiv Shakti Travels, I am interested in your ${pkg.destination} package (${pkg.duration}), listed at ${pkg.price}. Please share your best available quote, hotel options, inclusions and travel dates.`;
  }
  function packageCard(pkg) {
    const inclusions = pkg.inclusions.map(i => `<span class="chip">${icon("check")}${i}</span>`).join("");
    return `
      <article class="package-card" id="${pkg.id}" data-type="${pkg.type}" data-destination="${pkg.destination}">
        <a class="package-image-link" href="packages.html#${pkg.id}" aria-label="View ${pkg.destination} package">
          <img src="${pkg.image}" alt="${pkg.destination} travel package" loading="lazy" width="600" height="450">
          <span class="package-type">${pkg.type}</span>
        </a>
        <div class="package-body">
          <h3>${pkg.destination}</h3>
          <p>${pkg.summary}</p>
          <div class="package-meta">
            <span>${icon("clock")}${pkg.duration}</span>
            <span>${pkg.price}</span>
          </div>
          <div class="chip-row">${inclusions}</div>
          <div class="package-actions">
            <button class="btn btn-ghost btn-full" type="button" data-view-details="${pkg.id}">View Details</button>
            <a class="btn btn-primary btn-full" href="${waUrl(pkgMsg(pkg))}" target="_blank" rel="noopener">${icon("whatsapp")} Get Best Quote</a>
          </div>
        </div>
      </article>`;
  }

  function renderPackages() {
    $$("[data-packages]").forEach(container => {
      const mode = container.dataset.packages;
      const pkgs = mode === "featured" ? data.packages.filter(p => p.featured).slice(0, 6) : data.packages;
      container.innerHTML = pkgs.map(packageCard).join("");
    });
  }

  /* ── Package Filters ─────────────────────────────────── */
  function initPackageFilters() {
    const grid = $("[data-packages='all']");
    const searchInput = $("[data-package-search]");
    const filterButtons = $$("[data-package-filter]");
    if (!grid || !searchInput || !filterButtons.length) return;

    function applyFilters() {
      const search = searchInput.value.trim().toLowerCase();
      const activeType = $(".filter-btn.active")?.dataset.packageFilter || "All";
      let visible = 0;
      $$(".package-card", grid).forEach(card => {
        const type = card.dataset.type;
        const dest = card.dataset.destination.toLowerCase();
        const match = (activeType === "All" || activeType === type) &&
          (!search || dest.includes(search) || type.toLowerCase().includes(search));
        card.hidden = !match;
        if (match) visible++;
      });
      const empty = $("[data-package-empty]");
      if (empty) empty.hidden = visible !== 0;
    }

    filterButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        applyFilters();
      });
    });
    searchInput.addEventListener("input", applyFilters);
    setTimeout(applyFilters, 0);
  }

  /* ── Destinations ────────────────────────────────────── */
  function renderDestinations() {
    const c = $("[data-destinations]");
    if (!c) return;
    c.innerHTML = data.destinations.map(d => `
      <article class="destination-card">
        <img src="${d.image}" alt="${d.name}" loading="lazy">
        <div class="destination-overlay">
          <h3>${d.name}</h3>
          <p>${d.label}</p>
        </div>
      </article>`).join("");
  }

  /* ── Stats ───────────────────────────────────────────── */
  function renderStats() {
    $$("[data-stats]").forEach(c => {
      c.innerHTML = data.stats.map(s => `
        <div class="stat-item">
          <div class="stat-value" data-count="${s.value}">${s.value}</div>
          <div class="stat-label">${s.label}</div>
        </div>`).join("");
    });
  }

  /* ── Hero Slider ─────────────────────────────────────── */
  function initHeroSlider() {
    const sliderEl = $("[data-hero-slider]");
    const captionEl = $("[data-hero-caption]");
    const dotsEl = $("[data-hero-dots]");
    if (!sliderEl) return;

    const slides = data.heroSlides;
    let current = 0;
    let timer = null;

    // Build slides
    sliderEl.innerHTML = slides.map((s, i) => `
      <div class="hero-slide ${i === 0 ? "active" : ""}" style="background-image:url('${s.image}')"></div>
    `).join("") + '<div class="hero-overlay"></div>';

    // Build dots
    if (dotsEl) {
      dotsEl.innerHTML = slides.map((_, i) => `
        <button class="hero-dot ${i === 0 ? "active" : ""}" type="button" data-dot="${i}" aria-label="Go to slide ${i + 1}"></button>
      `).join("");
      dotsEl.addEventListener("click", e => {
        const dot = e.target.closest("[data-dot]");
        if (dot) goTo(parseInt(dot.dataset.dot));
      });
    }

    function goTo(idx) {
      const slideEls = $$(".hero-slide", sliderEl);
      const dotEls = $$(".hero-dot", dotsEl);
      slideEls[current]?.classList.remove("active");
      dotEls[current]?.classList.remove("active");
      current = (idx + slides.length) % slides.length;
      slideEls[current]?.classList.add("active");
      dotEls[current]?.classList.add("active");
      if (captionEl) captionEl.textContent = slides[current].label;
      clearTimeout(timer);
      timer = setTimeout(() => goTo(current + 1), 4500);
    }

    timer = setTimeout(() => goTo(1), 4500);
  }

  /* ── Testimonials ────────────────────────────────────── */
  let testimIdx = 0;
  function renderTestimonials() {
    const stage = $("[data-testimonials]");
    if (!stage) return;
    stage.innerHTML = data.testimonials.map((t, i) => `
      <div class="testimonial-card ${i === 0 ? "active" : ""}">
        <div class="testimonial-stars">${icon("star")}${icon("star")}${icon("star")}${icon("star")}${icon("star")}</div>
        <p class="testimonial-text">"${t.text}"</p>
        <div class="testimonial-name">${t.name}</div>
        <div class="testimonial-place">${t.place}</div>
      </div>`).join("");

    $$("[data-testimonial-nav]").forEach(btn => {
      btn.addEventListener("click", () => {
        const cards = $$(".testimonial-card", stage);
        cards[testimIdx]?.classList.remove("active");
        const dir = btn.dataset.testimonialNav === "next" ? 1 : -1;
        testimIdx = (testimIdx + dir + cards.length) % cards.length;
        cards[testimIdx]?.classList.add("active");
      });
    });

    // Auto-rotate
    setInterval(() => {
      const cards = $$(".testimonial-card", stage);
      if (!cards.length) return;
      cards[testimIdx]?.classList.remove("active");
      testimIdx = (testimIdx + 1) % cards.length;
      cards[testimIdx]?.classList.add("active");
    }, 5000);
  }

  /* ── FAQ ─────────────────────────────────────────────── */
  function renderFaqs() {
    const c = $("[data-faq]");
    if (!c) return;
    const allFaqs = [
      ...data.faqs,
      {question: "Do you offer group discounts?", answer: "Yes! Groups of 10+ travellers get special rates on most packages. Contact us on WhatsApp with your group size and destination for a custom quote."},
      {question: "How can I track my booking status?", answer: "Once you confirm a booking, our team shares a confirmation on WhatsApp with all details including hotel names, transport, and contact numbers for your trip."},
      {question: "Do you arrange Visa for international tours?", answer: "Yes, we provide visa assistance for Thailand, Nepal, Singapore, Malaysia and other destinations popular with Indian travellers."}
    ];
    c.innerHTML = allFaqs.map((f, i) => `
      <div class="faq-item">
        <button class="faq-question" type="button" aria-expanded="false" aria-controls="faq-ans-${i}">
          ${f.question}
          <span class="faq-icon" aria-hidden="true">▾</span>
        </button>
        <div class="faq-answer" id="faq-ans-${i}" role="region">
          <p>${f.answer}</p>
        </div>
      </div>`).join("");

    c.addEventListener("click", e => {
      const btn = e.target.closest(".faq-question");
      if (!btn) return;
      const expanded = btn.getAttribute("aria-expanded") === "true";
      $$(".faq-question").forEach(b => {
        b.setAttribute("aria-expanded", "false");
        b.nextElementSibling?.classList.remove("open");
      });
      if (!expanded) {
        btn.setAttribute("aria-expanded", "true");
        btn.nextElementSibling?.classList.add("open");
      }
    });
  }

  /* ── Service Areas ───────────────────────────────────── */
  function renderServiceAreas() {
    $$("[data-service-areas]").forEach(c => {
      c.innerHTML = `<div class="service-list">` +
        data.business.serviceAreas.map(s => `<span class="service-tag">${s}</span>`).join("") +
        `</div>`;
    });
  }

  /* ── Navigation ─────────────────────────────────────── */
  function initNavigation() {
    const menuBtn = $("[data-menu-button]");
    const nav = $("[data-site-nav]");
    const header = $("[data-header]");

    menuBtn?.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(open));
      document.body.classList.toggle("menu-open", open);
    });

    document.addEventListener("click", e => {
      if (nav?.classList.contains("open") && !nav.contains(e.target) && !menuBtn.contains(e.target)) {
        nav.classList.remove("open");
        menuBtn?.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-open");
      }
    });

    // Sticky header scroll effect
    window.addEventListener("scroll", () => {
      header?.classList.toggle("scrolled", window.scrollY > 60);
    }, { passive: true });

    // Active nav link
    const path = location.pathname.split("/").pop() || "index.html";
    $$(".nav-link").forEach(a => {
      const href = a.getAttribute("href");
      a.classList.toggle("active", href === path || (path === "" && href === "index.html"));
    });
  }

  /* ── Inquiry Forms ───────────────────────────────────── */
  function enhanceInquiryForms() {
    $$("[data-inquiry-form]").forEach(form => {
      const grid = $(".form-grid", form);
      const destInput = $("[name='destination']", form);
      const submitBtn = $("button[type='submit']", form);
      if (!grid || !destInput || !submitBtn) return;

      const uid = Math.random().toString(36).slice(2, 8);
      const pkgOpts = data.packages.map(p => `<option value="${p.destination}">${p.destination} (${p.price})</option>`).join("");

      const extra = document.createElement("div");
      extra.className = "form-grid";
      extra.innerHTML = `
        <div class="input-group">
          <label for="pkg-sel-${uid}">Or select a package</label>
          <select id="pkg-sel-${uid}" data-package-select>
            <option value="">-- Select package --</option>${pkgOpts}
          </select>
        </div>
        <div class="input-group">
          <label for="budget-${uid}">Budget range</label>
          <select id="budget-${uid}" name="budget">
            <option value="">Not decided</option>
            <option>Under ₹15,000</option><option>₹15,000 – ₹25,000</option>
            <option>₹25,000 – ₹40,000</option><option>₹40,000 – ₹60,000</option>
            <option>Above ₹60,000</option>
          </select>
        </div>
        <div class="input-group">
          <label for="pickup-${uid}">Pickup city</label>
          <input id="pickup-${uid}" name="pickupCity" type="text" placeholder="Neemuch, Indore, Delhi...">
        </div>`;
      grid.insertBefore(extra, submitBtn);

      const pkgSel = $("[data-package-select]", form);
      pkgSel?.addEventListener("change", () => { if (pkgSel.value) destInput.value = pkgSel.value; });
    });
  }

  function patchFormSubmit() {
    $$("[data-inquiry-form]").forEach(form => {
      form.addEventListener("submit", e => {
        e.preventDefault();
        e.stopImmediatePropagation();
        const status = $("[data-form-status]", form);
        const fd = new FormData(form);
        const name = (fd.get("name") || "").toString().trim();
        const phone = (fd.get("phone") || "").toString().trim();
        const dest = (fd.get("destination") || "").toString().trim();
        const travellers = (fd.get("travellers") || "").toString().trim();
        const date = (fd.get("date") || "").toString().trim();
        const budget = (fd.get("budget") || "").toString().trim();
        const pickup = (fd.get("pickupCity") || "").toString().trim();

        if (!name || !phone || phone.replace(/\D/g, "").length < 10 || !dest) {
          if (status) { status.textContent = "Please enter your name, valid phone and destination."; status.className = "form-status error"; }
          return;
        }

        let msg = `Hello Shiv Shakti Travels, my name is ${name}. Phone: ${phone}. I want a quote for ${dest}.`;
        if (travellers) msg += ` Travellers: ${travellers}.`;
        if (date) msg += ` Date: ${date}.`;
        if (budget) msg += ` Budget: ${budget}.`;
        if (pickup) msg += ` Pickup: ${pickup}.`;

        if (status) { status.textContent = "Opening WhatsApp with your inquiry…"; status.className = "form-status success"; }
        window.open(waUrl(msg), "_blank", "noopener");
        setTimeout(() => form.reset(), 1500);
      });
    });
  }

  /* ── Quick Inquiry ─────────────────────────────────── */
  function initQuickInquiry() {
    const form = $("[data-quick-inquiry]");
    if (!form) return;
    form.addEventListener("submit", e => {
      e.preventDefault();
      const fd = new FormData(form);
      const dest = (fd.get("destination") || "").toString().trim();
      const type = (fd.get("type") || "Holiday").toString();
      const date = (fd.get("date") || "").toString();
      const trav = (fd.get("travellers") || "").toString().trim();
      if (!dest) return;
      let msg = `Hello Shiv Shakti Travels! I'm looking for a ${type} package to ${dest}.`;
      if (trav) msg += ` ${trav} travellers.`;
      if (date) msg += ` Travel date: ${date}.`;
      msg += " Please suggest options.";
      window.open(waUrl(msg), "_blank", "noopener");
    });
  }

  /* ── Modal ──────────────────────────────────────────── */
  function ensureCloseButton() {
    if (document.getElementById("modal-close-btn")) return;
    const closeBtn = document.createElement("button");
    closeBtn.id = "modal-close-btn";
    closeBtn.className = "modal-close";
    closeBtn.type = "button";
    closeBtn.setAttribute("aria-label", "Close");
    closeBtn.innerHTML = "×";
    closeBtn.style.display = "none";
    closeBtn.addEventListener("click", closeModal);
    document.body.appendChild(closeBtn);
  }

  function createModal() {
    ensureCloseButton();
    if ($('#package-modal')) {
      // Modal already exists in HTML - just wire up backdrop click and keyboard
      const overlay = $('#package-modal');
      overlay.addEventListener("click", e => { if (e.target === overlay) closeModal(); });
      document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });
      return;
    }
    const overlay = document.createElement("div");
    overlay.id = "package-modal";
    overlay.className = "modal-overlay";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-hidden", "true");
    overlay.innerHTML = `<div class="modal-content"><div id="modal-body"></div></div>`;
    document.body.appendChild(overlay);

    // Close button appended directly to body so it is NEVER inside the scrollable overlay
    const closeBtn = document.createElement("button");
    closeBtn.id = "modal-close-btn";
    closeBtn.className = "modal-close";
    closeBtn.type = "button";
    closeBtn.setAttribute("aria-label", "Close");
    closeBtn.innerHTML = "×";
    closeBtn.style.display = "none";
    closeBtn.addEventListener("click", closeModal);
    document.body.appendChild(closeBtn);

    overlay.addEventListener("click", e => { if (e.target === overlay) closeModal(); });
    document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });
  }

  function openModal(pkgId) {
    const pkg = data.packages.find(p => p.id === pkgId);
    if (!pkg) return;
    const inclusions = pkg.inclusions.map(i => `<li>${icon("check")}${i}</li>`).join("");
    const exclusions = (pkg.exclusions || []).map(i => `<li>${i}</li>`).join("");
    const itinerary = (pkg.itinerary || []).map((d, i) => `<li>${d}</li>`).join("");

    const body = $("#modal-body");
    body.innerHTML = `
      <img class="modal-image" src="${pkg.image}" alt="${pkg.destination}" loading="lazy">
      <div class="modal-info">
        <span class="package-type">${pkg.type}</span>
        <h2>${pkg.destination}</h2>
        <p>${pkg.summary}</p>
        <div class="package-meta">
          <span>${icon("clock")}${pkg.duration}</span>
          <span>${pkg.price}</span>
        </div>
        ${pkg.pickupCity ? `<div class="modal-detail"><strong>${icon("map")} Pickup:</strong> ${pkg.pickupCity}</div>` : ""}
        ${pkg.hotelCategory ? `<div class="modal-detail"><strong>🏨 Hotel:</strong> ${pkg.hotelCategory}</div>` : ""}
        ${itinerary ? `<div class="modal-section"><h3>Day-wise Itinerary</h3><ol class="modal-list">${itinerary}</ol></div>` : ""}
        <div class="modal-columns">
          <div class="modal-section"><h3>✅ Inclusions</h3><ul class="modal-list inclusions-list">${inclusions}</ul></div>
          ${exclusions ? `<div class="modal-section"><h3>❌ Exclusions</h3><ul class="modal-list exclusions-list">${exclusions}</ul></div>` : ""}
        </div>
        ${pkg.notes ? `<div class="modal-note">📝 <strong>Note:</strong> ${pkg.notes}</div>` : ""}
        <a class="btn btn-primary btn-full" href="${waUrl(pkgMsg(pkg))}" target="_blank" rel="noopener" style="margin-top:1rem">
          ${icon("whatsapp")} Get Best Quote on WhatsApp
        </a>
      </div>`;

    const modal = $("#package-modal");
    modal.setAttribute("aria-hidden", "false");
    modal.classList.add("open");
    document.body.classList.add("modal-open");
    const btn = document.getElementById("modal-close-btn");
    if (btn) btn.style.display = "flex";
  }

  function closeModal() {
    const modal = $("#package-modal");
    if (!modal) return;
    modal.setAttribute("aria-hidden", "true");
    modal.classList.remove("open");
    document.body.classList.remove("modal-open");
    const btn = document.getElementById("modal-close-btn");
    if (btn) btn.style.display = "none";
  }

  function initModalTriggers() {
    document.addEventListener("click", e => {
      const trigger = e.target.closest("[data-view-details]");
      if (trigger) { e.preventDefault(); openModal(trigger.dataset.viewDetails); }
    });
  }

  /* ── Dark Mode ──────────────────────────────────────── */
  function initDarkMode() {
    return; // Fixed navy/saffron/white identity.

    const saved = localStorage.getItem("theme");
    if (saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.setAttribute("data-theme", "dark");
    }
    const toggle = document.createElement("button");
    toggle.className = "theme-toggle";
    toggle.type = "button";
    toggle.setAttribute("aria-label", "Toggle dark mode");
    toggle.innerHTML = `<span class="theme-icon-sun">☀</span><span class="theme-icon-moon">☾</span>`;
    $(".header-actions")?.prepend(toggle);
    toggle.addEventListener("click", () => {
      const isDark = document.documentElement.getAttribute("data-theme") === "dark";
      document.documentElement.setAttribute("data-theme", isDark ? "light" : "dark");
      localStorage.setItem("theme", isDark ? "light" : "dark");
    });
  }

  /* ── Season Guide ─────────────────────────────────── */
  function initSeasonGuide() {
    const month = new Date().getMonth();
    const guides = {
      winter: { months: [11, 0, 1], icon: "❄️", title: "Winter Escapes (Dec–Feb)", text: "Perfect for Goa beaches, Kerala backwaters, Rajasthan forts, and South India temple tours. Avoid high-altitude destinations." },
      spring: { months: [2, 3, 4], icon: "🌸", title: "Spring — Best for North India & Hills (Mar–May)", text: "Ideal for Kashmir (tulip season), Himachal, Sikkim, Meghalaya, and Northeast India. Book early for April-May peak season." },
      summer: { months: [5, 6, 7], icon: "☀️", title: "Summer — Hills & Monsoon Special (Jun–Aug)", text: "Head to Manali, Spiti, Leh-Ladakh, or enjoy lush Meghalaya and Kerala monsoon packages. Char Dham season open." },
      autumn: { months: [8, 9, 10], icon: "🍂", title: "Autumn — Best Overall Travel Season (Sep–Nov)", text: "Best time for Char Dham yatra, Kedarnath, Nepal, Andaman, Rajasthan. Near-perfect weather across most of India." }
    };
    const season = Object.values(guides).find(g => g.months.includes(month)) || guides.autumn;
    const icon = document.getElementById("season-icon");
    const title = document.getElementById("season-title");
    const text = document.getElementById("season-text");
    if (icon) icon.textContent = season.icon;
    if (title) title.textContent = season.title;
    if (text) text.textContent = season.text;
  }

  /* ── Reveal Animations ───────────────────────────────── */
  // Keep a reference so dynamically rendered sections can be registered after the fact
  let _revealObs = null;
  function initRevealAnimations() {
    _revealObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("revealed");
          _revealObs.unobserve(e.target);
        }
      });
    // threshold:0 + rootMargin means trigger as soon as 1px enters viewport — reliable on mobile
    }, { threshold: 0, rootMargin: "0px 0px -40px 0px" });
    $$("[data-reveal]").forEach(el => _revealObs.observe(el));
  }

  function observeReveal(el) {
    if (_revealObs) _revealObs.observe(el);
    else el.classList.add("revealed"); // fallback
  }

  /* ── Year ───────────────────────────────────────────── */
  function initYear() { $$("[data-year]").forEach(el => el.textContent = new Date().getFullYear()); }

  /* ── Back to Top ─────────────────────────────────────── */
  function initBackToTop() {
    const btn = document.getElementById("back-top");
    if (!btn) return;
    window.addEventListener("scroll", () => {
      btn.classList.toggle("visible", window.scrollY > 400);
    }, { passive: true });
  }

  /* ── Hash-based Package Open ─────────────────────────── */
  function checkHash() {
    if (location.hash) {
      const id = location.hash.slice(1);
      setTimeout(() => openModal(id), 300);
    }
  }

  /* ── Init ───────────────────────────────────────────── */
  document.addEventListener("DOMContentLoaded", () => {
    // 1. Hydrate business info and static elements first
    hydrateBusinessDetails();
    initYear();
    initNavigation();
    initDarkMode();

    // 2. Render all dynamic content into the DOM
    renderPackages();
    renderDestinations();
    renderStats();
    renderServiceAreas();
    renderTestimonials();
    renderFaqs();
    initSeasonGuide();

    // 3. NOW start the reveal observer — DOM is fully populated
    initRevealAnimations();

    // 4. Wire up interactions
    initHeroSlider();
    initPackageFilters();
    enhanceInquiryForms();
    patchFormSubmit();
    initQuickInquiry();
    createModal();
    initModalTriggers();
    initBackToTop();
    checkHash();
  });

  /* ── Global helpers for inline HTML ─────────────────── */
  window.plannerNext = function(fromStep) {
    const panels = $$(".planner-panel");
    const stepBtns = $$(".planner-step-btn");
    panels.forEach(p => p.classList.remove("active"));
    stepBtns.forEach(b => b.classList.remove("active"));
    const next = fromStep + 1;
    const nextPanel = $(`[data-panel="${next}"]`);
    const nextBtn = $(`[data-step="${next}"]`);
    if (nextPanel) { nextPanel.classList.add("active"); nextBtn?.classList.add("active"); }
    if (next === 3) updatePlannerSummary();
  };

  window.updateBudgetDisplay = function(val) {
    const el = document.getElementById("budget-display");
    if (el) el.textContent = "₹" + parseInt(val).toLocaleString("en-IN");
    updatePlannerSummary();
  };

  function updatePlannerSummary() {
    const summary = document.getElementById("planner-summary");
    if (!summary) return;
    const dest = (document.getElementById("plan-dest")?.value || "").trim();
    const type = document.getElementById("plan-type")?.value || "";
    const date = document.getElementById("plan-date")?.value || "";
    const nights = document.getElementById("plan-nights")?.value || "";
    const adults = document.getElementById("plan-adults")?.value || "2";
    const children = document.getElementById("plan-children")?.value || "0";
    const budget = document.getElementById("plan-budget")?.value || "20000";
    const hotel = document.getElementById("plan-hotel")?.value || "";

    summary.innerHTML = `
      <h4>📋 Your Trip Summary</h4>
      <div class="planner-row"><span>Destination</span><span>${dest || "Not set"}</span></div>
      <div class="planner-row"><span>Type</span><span>${type || "—"}</span></div>
      <div class="planner-row"><span>Duration</span><span>${nights}</span></div>
      <div class="planner-row"><span>Departure</span><span>${date || "—"}</span></div>
      <div class="planner-row"><span>Travellers</span><span>${adults} adults${children > 0 ? `, ${children} children` : ""}</span></div>
      <div class="planner-row"><span>Budget/person</span><span>₹${parseInt(budget).toLocaleString("en-IN")}</span></div>
      <div class="planner-row"><span>Hotel</span><span>${hotel}</span></div>`;

    const submitBtn = document.getElementById("planner-submit");
    if (submitBtn) {
      submitBtn.onclick = () => {
        let msg = `Hello Shiv Shakti Travels! Here is my trip plan:\nDestination: ${dest || "Not specified"}\nType: ${type}\nDuration: ${nights}\nDeparture: ${date || "Flexible"}\nAdults: ${adults}, Children: ${children}\nBudget per person: ₹${parseInt(budget).toLocaleString("en-IN")}\nHotel preference: ${hotel}.\nPlease suggest suitable packages.`;
        window.open(waUrl(msg), "_blank", "noopener");
      };
    }
  }

  window.subscribeOffer = function() {
    const phone = document.getElementById("offer-phone")?.value?.trim();
    if (!phone || phone.replace(/\D/g, "").length < 10) {
      alert("Please enter a valid WhatsApp number.");
      return;
    }
    const msg = `Hello Shiv Shakti Travels! I'd like to receive travel deals and offers. My WhatsApp: ${phone}`;
    window.open(waUrl(msg), "_blank", "noopener");
  };

})();
