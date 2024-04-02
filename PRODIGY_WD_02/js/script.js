document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuBtn = document.querySelector(".nav__burger--icon");
  const closeMobileMenuBtn = document.getElementById("close-mobile-menu");
  const mobileNav = document.querySelector(".mobile__nav");
  const navLinks = document.querySelector(".mobile__nav ul");

  mobileMenuBtn.addEventListener("click", function () {
    mobileNav.classList.toggle("closed-menu");
    navLinks.classList.toggle("show");
  });

  closeMobileMenuBtn.addEventListener("click", function () {
    mobileNav.classList.add("closed-menu");
    navLinks.classList.remove("show");
  });
});
