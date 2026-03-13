/**
 * custom.js — Visual Upgrade Layer
 * Handles: dark mode toggle, page progress bar, counter animation,
 *          publication tag filtering, and publication hover preview.
 */

(function () {
  "use strict";

  /* -------------------------------------------------------------------------
     1. Dark Mode Toggle
     --------------------------------------------------------------------- */

  var THEME_KEY = "zz-theme";
  var themeToggle = null;

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);
    updateToggleIcon(theme);
  }

  function updateToggleIcon(theme) {
    if (!themeToggle) return;
    var icon = themeToggle.querySelector(".toggle-icon");
    var label = themeToggle.querySelector(".toggle-label");
    if (theme === "dark") {
      if (icon) icon.className = "toggle-icon fas fa-sun";
      if (label) label.textContent = "Light";
    } else {
      if (icon) icon.className = "toggle-icon fas fa-moon";
      if (label) label.textContent = "Dark";
    }
  }

  function initDarkMode() {
    themeToggle = document.getElementById("theme-toggle");
    if (!themeToggle) return;

    var saved = localStorage.getItem(THEME_KEY);
    var preferred = (saved ||
      (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark" : "light"));

    applyTheme(preferred);

    themeToggle.addEventListener("click", function () {
      var current = document.documentElement.getAttribute("data-theme");
      applyTheme(current === "dark" ? "light" : "dark");
    });
  }

  /* -------------------------------------------------------------------------
     2. Page-load Progress Bar
     --------------------------------------------------------------------- */

  var progressBar = null;
  var progressTimer = null;

  function createProgressBar() {
    progressBar = document.createElement("div");
    progressBar.id = "page-progress";
    document.body.appendChild(progressBar);
  }

  function startProgress() {
    if (!progressBar) return;
    progressBar.classList.remove("complete");
    progressBar.style.opacity = "1";
    progressBar.style.width = "0%";
    var pct = 0;
    progressTimer = setInterval(function () {
      if (pct < 80) {
        pct += Math.random() * 12;
        if (pct > 80) pct = 80;
        progressBar.style.width = pct + "%";
      }
    }, 200);
  }

  function completeProgress() {
    if (!progressBar) return;
    clearInterval(progressTimer);
    progressBar.style.width = "100%";
    progressBar.style.opacity = "1";
    setTimeout(function () {
      progressBar.classList.add("complete");
      setTimeout(function () {
        progressBar.style.width = "0%";
        progressBar.classList.remove("complete");
      }, 400);
    }, 200);
  }

  function initProgressBar() {
    createProgressBar();

    // Trigger on internal link clicks
    document.addEventListener("click", function (e) {
      var target = e.target.closest("a");
      if (!target) return;
      var href = target.getAttribute("href");
      if (!href) return;
      // Only trigger for same-origin navigation (not anchors, not external)
      if (href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("javascript:")) return;
      if (target.hostname && target.hostname !== window.location.hostname) return;
      startProgress();
    });

    window.addEventListener("pageshow", completeProgress);
    window.addEventListener("load", completeProgress);
  }

  /* -------------------------------------------------------------------------
     3. Animated Counters (IntersectionObserver)
     --------------------------------------------------------------------- */

  function animateCounter(el, target, duration) {
    var start = null;
    var startVal = 0;

    function step(timestamp) {
      if (!start) start = timestamp;
      var progress = Math.min((timestamp - start) / duration, 1);
      // Ease-out cubic
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = Math.floor(eased * (target - startVal) + startVal);
      el.textContent = current;
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target;
      }
    }
    requestAnimationFrame(step);
  }

  function initCounters() {
    var statItems = document.querySelectorAll(".stat-item[data-target]");
    if (!statItems.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !entry.target.dataset.counted) {
          entry.target.dataset.counted = "1";
          var numberEl = entry.target.querySelector(".stat-number");
          if (!numberEl) return;
          var target = parseInt(entry.target.dataset.target, 10);
          animateCounter(numberEl, target, 1400);
        }
      });
    }, { threshold: 0.3 });

    statItems.forEach(function (item) {
      observer.observe(item);
    });
  }

  /* -------------------------------------------------------------------------
     4. Publication Tag Filtering
     --------------------------------------------------------------------- */

  function initPubTagFilter() {
    var filterContainer = document.querySelector(".pub-filter-tags");
    if (!filterContainer) return;

    filterContainer.addEventListener("click", function (e) {
      var btn = e.target.closest(".tag-btn");
      if (!btn) return;

      // Update active button
      filterContainer.querySelectorAll(".tag-btn").forEach(function (b) {
        b.classList.remove("active");
      });
      btn.classList.add("active");

      var tag = btn.dataset.tag;
      var entries = document.querySelectorAll(".pub-entry");

      entries.forEach(function (entry) {
        if (tag === "all") {
          entry.classList.remove("pub-hidden");
        } else {
          var tags = (entry.dataset.tags || "").split(" ");
          if (tags.indexOf(tag) !== -1) {
            entry.classList.remove("pub-hidden");
          } else {
            entry.classList.add("pub-hidden");
          }
        }
      });

      // Show/hide year headings based on visible entries
      var yearHeadings = document.querySelectorAll(".pub-year-heading");
      yearHeadings.forEach(function (heading) {
        var year = heading.dataset.year;
        var visibleInYear = document.querySelectorAll(
          '.pub-entry[data-year="' + year + '"]:not(.pub-hidden)'
        );
        heading.style.display = visibleInYear.length ? "" : "none";
      });
    });
  }

  /* -------------------------------------------------------------------------
     5. Publication Hover Preview Tooltip
     --------------------------------------------------------------------- */

  var tooltip = null;

  function createTooltip() {
    tooltip = document.createElement("div");
    tooltip.className = "pub-preview-tooltip";
    tooltip.innerHTML =
      '<img class="pub-preview__img" src="" alt="">' +
      '<div class="pub-preview__body">' +
        '<div class="pub-preview__label">TL;DR</div>' +
        '<p class="pub-preview__summary"></p>' +
      '</div>';
    document.body.appendChild(tooltip);
  }

  function positionTooltip(x, y) {
    if (!tooltip) return;
    var tw = tooltip.offsetWidth;
    var th = tooltip.offsetHeight;
    var vw = window.innerWidth;
    var vh = window.innerHeight;

    var left = x + 16;
    var top  = y - 20;

    if (left + tw > vw - 16) left = x - tw - 16;
    if (top + th > vh - 16)  top  = vh - th - 16;
    if (top < 8) top = 8;

    tooltip.style.left = left + "px";
    tooltip.style.top  = top  + "px";
  }

  function initPubHoverPreview() {
    var entries = document.querySelectorAll(".pub-entry[data-summary]");
    if (!entries.length) return;

    createTooltip();

    entries.forEach(function (entry) {
      entry.addEventListener("mouseenter", function (e) {
        var summary = entry.dataset.summary || "";
        var img     = entry.dataset.img     || "https://via.placeholder.com/280x130?text=Key+Result";

        tooltip.querySelector(".pub-preview__img").src = img;
        tooltip.querySelector(".pub-preview__summary").textContent = summary;
        tooltip.classList.add("visible");
        positionTooltip(e.clientX, e.clientY);
      });

      entry.addEventListener("mousemove", function (e) {
        positionTooltip(e.clientX, e.clientY);
      });

      entry.addEventListener("mouseleave", function () {
        tooltip.classList.remove("visible");
      });
    });
  }

  /* -------------------------------------------------------------------------
     Boot
     --------------------------------------------------------------------- */

  function init() {
    initDarkMode();
    initProgressBar();
    initCounters();
    initPubTagFilter();
    initPubHoverPreview();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();
