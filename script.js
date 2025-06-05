// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Floating Portrait Animation
const portrait = document.querySelector('.floating-portrait');
window.addEventListener('scroll', () => {
  const offset = window.scrollY * 0.05;
  portrait.style.transform = `translateY(${offset}px)`;
});

// Dynamic Year in Footer
document.getElementById("year").textContent = new Date().getFullYear();

// Back to Top Button Logic
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
