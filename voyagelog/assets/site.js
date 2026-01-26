(() => {
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

  document.querySelectorAll("[data-slider]").forEach((slider) => {
    const track = slider.querySelector("[data-slider-track]");
    const dots = Array.from(slider.querySelectorAll("[data-dot]"));
    const slides = track ? Array.from(track.children) : [];

    if (!track || slides.length === 0) {
      return;
    }

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    const intervalMs = 4500;
    let index = 0;
    let timerId = null;

    const setActive = (nextIndex) => {
      index = (nextIndex + slides.length) % slides.length;
      track.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach((dot, dotIndex) => {
        dot.setAttribute("aria-pressed", String(dotIndex === index));
      });
    };

    const stop = () => {
      if (timerId) {
        window.clearInterval(timerId);
        timerId = null;
      }
    };

    const start = () => {
      if (slides.length < 2 || prefersReduced.matches) {
        return;
      }
      stop();
      timerId = window.setInterval(() => {
        setActive(index + 1);
      }, intervalMs);
    };

    dots.forEach((dot, dotIndex) => {
      dot.addEventListener("click", () => {
        setActive(dotIndex);
        start();
      });
    });

    slider.addEventListener("mouseenter", stop);
    slider.addEventListener("mouseleave", start);
    slider.addEventListener("focusin", stop);
    slider.addEventListener("focusout", start);

    if (typeof prefersReduced.addEventListener === "function") {
      prefersReduced.addEventListener("change", () => {
        if (prefersReduced.matches) {
          stop();
        } else {
          start();
        }
      });
    }

    setActive(0);
    start();
  });
})();
