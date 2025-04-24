document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector("header nav");

  const menuBtn = document.querySelector(".nav-menu-btn");

  const mobileMenu = document.querySelector(".mobile-menu");

  const mobileMenuCloseBtn = document.querySelector(".mobile-menu-close");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      navbar.classList.add("scrolling-navbar");
    } else {
      navbar.classList.remove("scrolling-navbar");
    }
  });

  menuBtn.addEventListener("click", function () {
    mobileMenu.classList.add("show");
  });

  mobileMenuCloseBtn.addEventListener("click", function () {
    mobileMenu.classList.remove("show");
  });
});
