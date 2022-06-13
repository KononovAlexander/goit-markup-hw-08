(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const iconMenu = document.querySelector(".icon-menu");
  const iconMenuClose = document.querySelector(".icon-menu-close");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
    iconMenu.classList.toggle("is-open");
    iconMenuClose.classList.toggle("is-open");
  });
})();