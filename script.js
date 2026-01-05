// Smooth scrolling for navbar links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Resume button click
const resumeBtn = document.querySelector(".hero button");
resumeBtn.addEventListener("click", () => {
  window.open("assets/resume.pdf", "_blank");
});

document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;

  document.documentElement.style.setProperty("--mx", `${x}%`);
  document.documentElement.style.setProperty("--my", `${y}%`);
});

const particleContainer = document.querySelector(".particles");

for (let i = 0; i < 35; i++) {
  const dot = document.createElement("span");

  dot.style.left = Math.random() * 100 + "vw";
  dot.style.animationDelay = Math.random() * 20 + "s";
  dot.style.animationDuration = 15 + Math.random() * 20 + "s";

  particleContainer.appendChild(dot);
}

