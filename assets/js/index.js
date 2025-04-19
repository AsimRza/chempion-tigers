document.addEventListener("DOMContentLoaded", () => {
  let navbar = document.querySelector("header nav");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      navbar.classList.add("scrolling-navbar");
    } else {
      navbar.classList.remove("scrolling-navbar");
    }
  });
});
