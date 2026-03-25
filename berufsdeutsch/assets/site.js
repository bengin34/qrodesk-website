(() => {
  const SITE_CONFIG = {
    supportEmail: "support@qrodesk.com",
    pricing: {
      freePrice: "$0",
      freeNote: "1 profession, limited preview content.",
      proPrice: "Pricing soon",
      proNote: "All professions, full content, more practice.",
      launchNote: "Launch pricing will be confirmed before the public release.",
    },
  };

  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (header && toggle) {
    toggle.addEventListener("click", () => {
      const isOpen = header.getAttribute("data-open") === "true";
      header.setAttribute("data-open", String(!isOpen));
      toggle.setAttribute("aria-expanded", String(!isOpen));
    });
  }

  if (header && navLinks) {
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        header.setAttribute("data-open", "false");
        if (toggle) {
          toggle.setAttribute("aria-expanded", "false");
        }
      });
    });
  }

  document.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = new Date().getFullYear();
  });

  document.querySelectorAll("[data-support-email]").forEach((node) => {
    node.textContent = SITE_CONFIG.supportEmail;
    if (node.tagName === "A") {
      node.href = `mailto:${SITE_CONFIG.supportEmail}`;
    }
  });

  const contentMap = {
    "free-price": SITE_CONFIG.pricing.freePrice,
    "free-note": SITE_CONFIG.pricing.freeNote,
    "pro-price": SITE_CONFIG.pricing.proPrice,
    "pro-note": SITE_CONFIG.pricing.proNote,
  };

  document.querySelectorAll("[data-content]").forEach((node) => {
    const key = node.getAttribute("data-content");
    if (key && contentMap[key]) {
      node.textContent = contentMap[key];
    }
  });

  document.querySelectorAll("[data-pricing-note]").forEach((node) => {
    node.textContent = SITE_CONFIG.pricing.launchNote;
  });

  document.querySelectorAll("[data-mail-subject]").forEach((node) => {
    if (node.tagName !== "A") return;
    const subject = node.getAttribute("data-mail-subject");
    if (!subject) return;
    node.href = `mailto:${SITE_CONFIG.supportEmail}?subject=${encodeURIComponent(subject)}`;
  });
})();
