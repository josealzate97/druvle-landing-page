(function () {
  const toggle = document.querySelector(".mobile-menu-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const icon = toggle ? toggle.querySelector("i") : null;

  if (toggle) {
    toggle.addEventListener("click", () => {
      const isExpanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isExpanded));
      navMenu && navMenu.classList.toggle("active");

      // Cambiar icono
      if (icon) {
        if (!isExpanded) {
          icon.classList.remove("fa-bars");
          icon.classList.add("fa-xmark");
        } else {
          icon.classList.remove("fa-xmark");
          icon.classList.add("fa-bars");
        }
      }
    });

    // Cerrar menú al hacer click en un link
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        toggle.setAttribute("aria-expanded", "false");
        navMenu && navMenu.classList.remove("active");

        // Volver a mostrar hamburguesa
        if (icon) {
          icon.classList.remove("fa-xmark");
          icon.classList.add("fa-bars");
        }
      });
    });
  }
})();
