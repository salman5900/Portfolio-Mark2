// Hamburger menu toggle
const hamburgerBtn = document.getElementById("hamburgerBtn");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

function toggleMenu() {
  const isOpen = sideMenu.classList.toggle("open");
  overlay.classList.toggle("active", isOpen);
  hamburgerBtn.setAttribute("aria-expanded", isOpen);
  sideMenu.setAttribute("aria-hidden", !isOpen);
}

hamburgerBtn.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);
