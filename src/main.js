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

// timeline console
document.addEventListener("DOMContentLoaded", function () {
  const lines = [
    "> Booting terminal...",
    "> Started coding in 2023 🧠",
    "> 2024: Freelance projects & experiments 💼",
    "> 2025: Full-stack dev with AI integrations 🤖",
  ];

  const output = document.getElementById("console-output");
  let i = 0;
  let j = 0;
  let currentLine = "";

  function typeLine() {
    if (i < lines.length) {
      if (j < lines[i].length) {
        currentLine += lines[i][j++];
        output.innerHTML = currentLine + '<span class="blinker">|</span>';
        setTimeout(typeLine, 35);
      } else {
        currentLine += "\n";
        output.innerHTML = currentLine;
        i++;
        j = 0;
        setTimeout(typeLine, 250);
      }
    } else {
      output.innerHTML = currentLine + '<span class="blinker">|</span>';
    }
  }

  typeLine();
});

// Parallax tilt effect based on mouse position
const card = document.getElementById("terminal-card");
const wrapper = document.getElementById("terminal-wrapper");

wrapper.addEventListener("mousemove", (e) => {
  const rect = wrapper.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = -((y - centerY) / centerY) * 8;
  const rotateY = ((x - centerX) / centerX) * 8;

  const distance = Math.sqrt(
    Math.pow((x - centerX) / centerX, 2) + Math.pow((y - centerY) / centerY, 2)
  );

  const isNearCorner =
    (x < 80 && y < 80) || // top-left
    (x > rect.width - 80 && y < 80) || // top-right
    (x < 80 && y > rect.height - 80) || // bottom-left
    (x > rect.width - 80 && y > rect.height - 80); // bottom-right

  if (isNearCorner) {
    // Sweet parallax effect in corners
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  } else {
    // Inward sink in center areas
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${
      1 - distance * 0.02
    })`;
  }
});

wrapper.addEventListener("mouseleave", () => {
  card.style.transform =
    "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
});
