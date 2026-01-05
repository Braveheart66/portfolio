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
