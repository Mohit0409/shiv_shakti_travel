(function () {
  "use strict";

  const data = window.TRAVEL_DATA;
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

  function encodeMessage(message) {
    return encodeURIComponent(message.trim().replace(/\s+/g, " "));
  }

  function whatsappUrl(message) {
    return `https://wa.me/${data.business.whatsappNumber}?text=${encodeMessage(message)}`;
  }

  function icon(name) {
    const icons = {
      map:
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18-6 3V6l6-3 6 3 6-3v15l-6 3-6-3Z"/><path d="M9 3v15M15 6v15"/></svg>',
      clock:
        '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
      rupee:
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 5h10M7 9h10M9 5c5.5 0 5.5 8 0 8h-2l7 6"/></svg>',
      check:
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>',
      phone:
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/></svg>',
      whatsapp:
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 11.8a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.3-4.7a8.5 8.5 0 1 1 16.2-4Z"/><path d="M9.3 8.4c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.3.1.5-.1.7l-.4.5c-.1.1-.2.3 0 .5.5.9 1.2 1.6 2.2 2.1.2.1.4.1.5-.1l.7-.8c.2-.2.4-.2.7-.1l1.5.7c.3.1.4.3.4.6-.1.8-.7 1.5-1.5 1.6-1.2.1-2.9-.4-4.7-2.1-1.6-1.5-2.6-3.4-2.5-4.5 0-.3.2-.7.3-.9Z"/></svg>',
      mail:
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v14H4z"/><path d="m4 7 8 6 8-6"/></svg>',
      star:
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z"/></svg>'
    };
    return icons[name] || "";
  }

  function setText(selector, value) {
    $$(selector).forEach((node) => {
      node.textContent = value;
    });
  }

  function setHref(selector, value) {
    $$(selector).forEach((node) => {
      node.href = value;
    });
  }

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
    setHref("[data-whatsapp-link]", whatsappUrl("Hi Shiv Shakti Tours, I want to plan a trip. Please share package details."));
  }

  function packageMessage(pkg) {
    return `Hi Shiv Shakti Tours, I am interested in ${pkg.destination} (${pkg.duration}) starting from ${pkg.price}. Please share details.`;
  }

  function packageCard(pkg) {
    const inclusions = pkg.inclusions
      .map((item) => `<span class="chip">${icon("check")}${item}</span>`)
      .join("");

    return `
      <article class="package-card" id="${pkg.id}" data-type="${pkg.type}" data-destination="${pkg.destination}">
        <a class="package-image-link" href="packages.html#${pkg.id}" aria-label="View ${pkg.destination} package">
          <img src="${pkg.image}" alt="${pkg.destination} travel package" loading="lazy" width="600" height="450">
          <span class="package-type">${pkg.type}</span>
        </a>
        <div class="package-body">
          <h3>${pkg.destination}</h3>
          <p>${pkg.summary}</p>
          <div class="package-meta" aria-label="Package details">
            <span>${icon("clock")}${pkg.duration}</span>
            <span>${icon("rupee")}${pkg.price}</span>
          </div>
          <div class="chip-row" aria-label="Package inclusions">${inclusions}</div>
          <div class="package-actions">
            <button class="btn btn-ghost btn-full" type="button" data-view-details="${pkg.id}">View Details</button>
            <a class="btn btn-primary btn-full" href="${whatsappUrl(packageMessage(pkg))}" target="_blank" rel="noopener">
              ${icon("whatsapp")} Enquire Now
            </a>
          </div>
        </div>
      </article>
    `;
  }

  function renderPackages() {
    const containers = $$("[data-packages]");
    containers.forEach((container) => {
      const mode = container.dataset.packages;
      const packages = mode === "featured" ? data.packages.filter((pkg) => pkg.featured).slice(0, 6) : data.packages;
      container.innerHTML = packages.map(packageCard).join("");
    });
  }

  function initPackageFilters() {
    const grid = $("[data-packages='all']");
    const searchInput = $("[data-package-search]");
    const filterButtons = $$("[data-package-filter]");
    if (!grid || !searchInput || !filterButtons.length) return;

    function applyFilters() {
      const search = searchInput.value.trim().toLowerCase();
      const activeType = $(".filter-btn.active")?.dataset.packageFilter || "All";
      let visibleCount = 0;

      $$(".package-card", grid).forEach((card) => {
        const type = card.dataset.type;
        const destination = card.dataset.destination.toLowerCase();
        const matchesType = activeType === "All" || activeType === type;
        const matchesSearch = !search || destination.includes(search) || type.toLowerCase().includes(search);
        const shouldShow = matchesType && matchesSearch;
        card.hidden = !shouldShow;
        if (shouldShow) visibleCount += 1;
      });

      const emptyState = $("[data-package-empty]");
      if (emptyState) emptyState.hidden = visibleCount !== 0;
    }

    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        filterButtons.forEach((item) => item.classList.remove("active"));
        button.classList.add("active");
        applyFilters();
      });
    });

    searchInput.addEventListener("input", applyFilters);

    setTimeout(() => {
        applyFilters();
    }, 0);
  }

  function renderDestinations() {
    const container = $("[data-destinations]");
    if (!container) return;
    container.innerHTML = data.destinations
      .map(
        (destination) => `
        <article class="destination-card">
          <img src="${destination.image}" alt="${destination.name}" loading="lazy">
          <div>
            <h3>${destination.name}</h3>
            <p>${destination.label}</p>
          </div>
        </article>
      `
      )
      .join("");
  }

  function renderStats() {
    const container = $("[data-stats]");
    if (!container) return;
    container.innerHTML = data.stats
      .map(
        (stat) => `
        <div class="stat">
          <strong>${stat.value}</strong>
          <span>${stat.label}</span>
        </div>
      `
      )
      .join("");
  }

  function initHeroSlider() {
    const slider = $("[data-hero-slider]");
    const routeItems = $$("[data-hero-route-item]");
    const caption = $("[data-hero-caption]");
    const dots = $("[data-hero-dots]");
    const slides = data.heroSlides || [];
    if (!slider || !slides.length) return;

    slider.innerHTML = slides
      .map(
        (slide, index) => `
        <figure class="hero-slide ${index === 0 ? "active" : ""}" data-hero-slide>
          <img src="${slide.image}" alt="" width="1800" height="1100" ${index === 0 ? "" : 'loading="lazy"'}>
        </figure>
      `
      )
      .join("");

    if (dots) {
      dots.innerHTML = slides
        .map(
          (slide, index) => `
          <button class="hero-dot ${index === 0 ? "active" : ""}" type="button" data-hero-dot="${index}" aria-label="Show ${slide.name}"></button>
        `
        )
        .join("");
    }

    const slideNodes = $$("[data-hero-slide]", slider);
    const dotNodes = $$("[data-hero-dot]");
    let index = 0;

    function showSlide(nextIndex) {
      index = (nextIndex + slides.length) % slides.length;
      slideNodes.forEach((slide, slideIndex) => slide.classList.toggle("active", slideIndex === index));
      dotNodes.forEach((dot, dotIndex) => dot.classList.toggle("active", dotIndex === index));

      routeItems.forEach((item) => {
        const isActive = item.textContent.trim() === slides[index].name;
        item.classList.remove("active", "is-animating");
        item.classList.toggle("active", isActive);
        if (isActive) {
          void item.offsetWidth;
          item.classList.add("is-animating");
        }
      });

      if (caption) {
        caption.classList.remove("is-animating");
        caption.textContent = slides[index].label;
        void caption.offsetWidth;
        caption.classList.add("is-animating");
      }
    }

    showSlide(0);

    dotNodes.forEach((dot) => {
      dot.addEventListener("click", () => showSlide(Number(dot.dataset.heroDot)));
    });

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || slides.length < 2) return;
    window.setInterval(() => showSlide(index + 1), 5200);
  }

  function renderServiceAreas() {
    const container = $("[data-service-areas]");
    if (!container) return;
    container.innerHTML = data.business.serviceAreas
      .map((service) => `<li>${icon("check")}${service}</li>`)
      .join("");
  }

  function renderTestimonials() {
    const container = $("[data-testimonials]");
    if (!container) return;
    container.innerHTML = data.testimonials
      .map(
        (testimonial, index) => `
        <article class="testimonial ${index === 0 ? "active" : ""}" data-testimonial-slide>
          <div class="stars" aria-label="5 star rating">${icon("star")}${icon("star")}${icon("star")}${icon("star")}${icon("star")}</div>
          <p>"${testimonial.text}"</p>
          <h3>${testimonial.name}</h3>
          <span>${testimonial.place}</span>
        </article>
      `
      )
      .join("");

    const slides = $$("[data-testimonial-slide]");
    const buttons = $$("[data-testimonial-nav]");
    let index = 0;

    function showSlide(nextIndex) {
      index = (nextIndex + slides.length) % slides.length;
      slides.forEach((slide, slideIndex) => slide.classList.toggle("active", slideIndex === index));
    }

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const direction = button.dataset.testimonialNav === "next" ? 1 : -1;
        showSlide(index + direction);
      });
    });

    if (slides.length > 1) {
      window.setInterval(() => showSlide(index + 1), 7000);
    }
  }

  function renderFaqs() {
    const container = $("[data-faq]");
    if (!container) return;
    container.innerHTML = data.faqs
      .map(
        (faq, index) => `
        <div class="faq-item">
          <button class="faq-question" type="button" aria-expanded="${index === 0 ? "true" : "false"}">
            <span>${faq.question}</span>
            <span class="faq-icon" aria-hidden="true">+</span>
          </button>
          <div class="faq-answer" ${index === 0 ? "" : "hidden"}>
            <p>${faq.answer}</p>
          </div>
        </div>
      `
      )
      .join("");

    $$(".faq-question", container).forEach((button) => {
      button.addEventListener("click", () => {
        const answer = button.nextElementSibling;
        const expanded = button.getAttribute("aria-expanded") === "true";
        button.setAttribute("aria-expanded", String(!expanded));
        answer.hidden = expanded;
      });
    });
  }

  function initNavigation() {
    const menuButton = $("[data-menu-button]");
    const nav = $("[data-site-nav]");
    if (menuButton && nav) {
      menuButton.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("open");
        document.body.classList.toggle("menu-open", isOpen);
        menuButton.setAttribute("aria-expanded", String(isOpen));
      });
    }

    const path = window.location.pathname.split("/").pop() || "index.html";
    $$(".nav-link").forEach((link) => {
      const href = link.getAttribute("href");
      const hrefBase = href.replace(".html", "");
      const pathBase = path.replace(".html", "") || "index";
      link.classList.toggle("active", href === path || hrefBase === pathBase);
      link.addEventListener("click", () => {
        nav?.classList.remove("open");
        document.body.classList.remove("menu-open");
        menuButton?.setAttribute("aria-expanded", "false");
      });
    });
  }


  function initQuickInquiry() {
    const form = $("[data-quick-inquiry]");
    if (!form) return;
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const destination = String(formData.get("destination") || "").trim();
      const type = String(formData.get("type") || "").trim();
      const date = String(formData.get("date") || "").trim();

      if (!destination) {
        const input = $("[name='destination']", form);
        input?.focus();
        return;
      }

      const message = `Hi Shiv Shakti Tours, I need a ${type || "travel"} package for ${destination}. Travel date: ${date || "flexible"}. Please share a quote.`;
      window.open(whatsappUrl(message), "_blank", "noopener");
      form.reset();
    });
  }

  function initRevealAnimations() {
    const elements = $$("[data-reveal]");
    if (!("IntersectionObserver" in window) || !elements.length) {
      elements.forEach((element) => element.classList.add("revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((element) => observer.observe(element));
  }

  function initYear() {
    const year = $("[data-year]");
    if (year) year.textContent = new Date().getFullYear();
  }

  function createModal() {
    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";
    overlay.id = "package-modal";
    overlay.setAttribute("aria-hidden", "true");
    overlay.innerHTML = `
      <div class="modal-content" role="dialog" aria-modal="true" aria-label="Package details">
        <button class="modal-close" type="button" aria-label="Close details">&times;</button>
        <div class="modal-body" id="modal-body"></div>
      </div>
    `;
    document.body.appendChild(overlay);

    overlay.querySelector(".modal-close").addEventListener("click", closeModal);
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeModal();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeModal();
    });
  }

  function openModal(pkgId) {
    const pkg = data.packages.find((p) => p.id === pkgId);
    if (!pkg) return;

    const inclusions = pkg.inclusions
      .map((item) => `<li>${icon("check")}${item}</li>`)
      .join("");
    const exclusions = (pkg.exclusions || [])
      .map((item) => `<li>${item}</li>`)
      .join("");
    const itinerary = (pkg.itinerary || [])
      .map((day) => `<li>${day}</li>`)
      .join("");

    const body = $("#modal-body");
    body.innerHTML = `
      <img class="modal-image" src="${pkg.image}" alt="${pkg.destination}" loading="lazy" width="800" height="450">
      <div class="modal-info">
        <span class="package-type">${pkg.type}</span>
        <h2>${pkg.destination}</h2>
        <p>${pkg.summary}</p>
        <div class="package-meta">
          <span>${icon("clock")}${pkg.duration}</span>
          <span>${icon("rupee")}${pkg.price}</span>
        </div>
        ${pkg.pickupCity ? `<div class="modal-detail"><strong>${icon("map")} Pickup:</strong> ${pkg.pickupCity}</div>` : ""}
        ${pkg.hotelCategory ? `<div class="modal-detail"><strong>Hotel:</strong> ${pkg.hotelCategory}</div>` : ""}
        ${itinerary ? `<div class="modal-section"><h3>Day-wise Itinerary</h3><ol class="modal-list">${itinerary}</ol></div>` : ""}
        <div class="modal-columns">
          <div class="modal-section"><h3>Inclusions</h3><ul class="modal-list inclusions-list">${inclusions}</ul></div>
          ${exclusions ? `<div class="modal-section"><h3>Exclusions</h3><ul class="modal-list exclusions-list">${exclusions}</ul></div>` : ""}
        </div>
        ${pkg.notes ? `<div class="modal-note"><strong>Note:</strong> ${pkg.notes}</div>` : ""}
        <a class="btn btn-primary btn-full" href="${whatsappUrl(packageMessage(pkg))}" target="_blank" rel="noopener">
          ${icon("whatsapp")} Enquire on WhatsApp
        </a>
      </div>
    `;

    const modal = $("#package-modal");
    modal.setAttribute("aria-hidden", "false");
    modal.classList.add("open");
    document.body.classList.add("modal-open");
  }

  function closeModal() {
    const modal = $("#package-modal");
    if (!modal) return;
    modal.setAttribute("aria-hidden", "true");
    modal.classList.remove("open");
    document.body.classList.remove("modal-open");
  }

  function initModalTriggers() {
    document.addEventListener("click", (e) => {
      const trigger = e.target.closest("[data-view-details]");
      if (trigger) {
        e.preventDefault();
        openModal(trigger.dataset.viewDetails);
      }
    });
  }

  function initDarkMode() {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.setAttribute("data-theme", "dark");
    }

    const toggle = document.createElement("button");
    toggle.className = "theme-toggle";
    toggle.type = "button";
    toggle.setAttribute("aria-label", "Toggle dark mode");
    toggle.innerHTML = `<span class="theme-icon-sun">&#9728;</span><span class="theme-icon-moon">&#9790;</span>`;

    const header = $(".header-actions");
    if (header) header.prepend(toggle);

    toggle.addEventListener("click", () => {
      const isDark = document.documentElement.getAttribute("data-theme") === "dark";
      document.documentElement.setAttribute("data-theme", isDark ? "light" : "dark");
      localStorage.setItem("theme", isDark ? "light" : "dark");
    });
  }

  function enhanceInquiryForms() {
    $$("[data-inquiry-form]").forEach((form) => {
      const grid = $(".form-grid", form);
      if (!grid) return;

      const destinationInput = $("[name='destination']", form);
      const submitButton = $("button[type='submit']", form);
      if (!destinationInput || !submitButton) return;

      const pkgOptions = data.packages
        .map((pkg) => `<option value="${pkg.destination}">${pkg.destination} (${pkg.price})</option>`)
        .join("");

      const uid = Math.random().toString(36).slice(2, 8);

      const extraFields = document.createElement("div");
      extraFields.className = "form-grid";
      extraFields.innerHTML = `
        <div class="input-group">
          <label for="pkg-select-${uid}">Or pick a package</label>
          <select id="pkg-select-${uid}" data-package-select>
            <option value="">-- Select package --</option>
            ${pkgOptions}
          </select>
        </div>
        <div class="input-group">
          <label for="budget-${uid}">Budget range</label>
          <select id="budget-${uid}" name="budget">
            <option value="">Not decided</option>
            <option value="Under ₹15,000">Under ₹15,000</option>
            <option value="₹15,000 – ₹25,000">₹15,000 – ₹25,000</option>
            <option value="₹25,000 – ₹40,000">₹25,000 – ₹40,000</option>
            <option value="₹40,000 – ₹60,000">₹40,000 – ₹60,000</option>
            <option value="Above ₹60,000">Above ₹60,000</option>
          </select>
        </div>
        <div class="input-group">
          <label for="pickup-${uid}">Pickup city</label>
          <input id="pickup-${uid}" name="pickupCity" type="text" placeholder="Neemuch, Indore, Delhi...">
        </div>
      `;

      grid.insertBefore(extraFields, submitButton);

      const pkgSelect = $("[data-package-select]", form);
      if (pkgSelect) {
        pkgSelect.addEventListener("change", () => {
          if (pkgSelect.value) destinationInput.value = pkgSelect.value;
        });
      }
    });
  }

  function patchFormSubmit() {
    $$("[data-inquiry-form]").forEach((form) => {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        event.stopImmediatePropagation();
        const status = $("[data-form-status]", form);
        const fd = new FormData(form);
        const name = String(fd.get("name") || "").trim();
        const phone = String(fd.get("phone") || "").trim();
        const destination = String(fd.get("destination") || "").trim();
        const travellers = String(fd.get("travellers") || "").trim();
        const date = String(fd.get("date") || "").trim();
        const notes = String(fd.get("message") || "").trim();
        const budget = String(fd.get("budget") || "").trim();
        const pickupCity = String(fd.get("pickupCity") || "").trim();

        if (!name || !phone || phone.replace(/\D/g, "").length < 10 || !destination) {
          if (status) {
            status.textContent = "Please enter your name, valid phone number and destination.";
            status.className = "form-status error";
          }
          return;
        }

        let message = `Hi Shiv Shakti Tours, my name is ${name}. Phone: ${phone}. I want a quote for ${destination}.`;
        if (travellers) message += ` Travellers: ${travellers}.`;
        if (date) message += ` Travel date: ${date}.`;
        if (budget) message += ` Budget: ${budget}.`;
        if (pickupCity) message += ` Pickup city: ${pickupCity}.`;
        if (notes) message += ` Notes: ${notes}.`;

        if (status) {
          status.textContent = "Thanks! Opening WhatsApp with your inquiry.";
          status.className = "form-status success";
        }
        window.open(whatsappUrl(message), "_blank", "noopener");
        form.reset();
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    hydrateBusinessDetails();
    renderPackages();
    renderDestinations();
    renderStats();
    initHeroSlider();
    renderServiceAreas();
    renderTestimonials();
    renderFaqs();
    initNavigation();
    initPackageFilters();
    enhanceInquiryForms();
    patchFormSubmit();
    initQuickInquiry();
    initRevealAnimations();
    initYear();
    createModal();
    initModalTriggers();
    initDarkMode();
  });
})();
