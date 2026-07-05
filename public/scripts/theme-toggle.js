(function () {
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-toggle-icon");

  if (!themeToggle) return;

  const applyTheme = (theme) => {
    const root = document.documentElement;
    root.dataset.theme = theme;

    const isDark = theme === "dark";
    themeToggle.setAttribute("aria-pressed", String(isDark));

    if (themeIcon) {
      themeIcon.classList.toggle("fa-sun", isDark === true);
      themeIcon.classList.toggle("fa-moon", isDark === false);

      // (Si está en dark: mostrar sol; si está en light: mostrar luna)
      if (isDark) {
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
      } else {
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
      }
    }
  };

  const storedTheme = localStorage.getItem("theme");

  const prefersDark = window.matchMedia
    ? window.matchMedia("(prefers-color-scheme: dark)").matches
    : false;

  const initialTheme = storedTheme ? storedTheme : prefersDark ? "dark" : "light";
  applyTheme(initialTheme);

  themeToggle.addEventListener("click", () => {
    const current = document.documentElement.dataset.theme || "light";
    const next = current === "dark" ? "light" : "dark";
    localStorage.setItem("theme", next);
    applyTheme(next);
  });
})();
