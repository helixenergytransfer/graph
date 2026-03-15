// Smooth scroll for in-page navigation
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href");
    if (!targetId || targetId === "#") return;
    const target = document.querySelector(targetId);
    if (!target) return;

    e.preventDefault();
    window.scrollTo({
      top: target.offsetTop - 70,
      behavior: "smooth",
    });
  });
});

// Calculation tab switching
const tabButtons = document.querySelectorAll(".calc-tab");
const panels = document.querySelectorAll(".calc-panel");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetId = btn.getAttribute("data-target");

    tabButtons.forEach((b) => b.classList.remove("active"));
    panels.forEach((p) => p.classList.remove("active"));

    btn.classList.add("active");
    const panel = document.getElementById(targetId);
    if (panel) panel.classList.add("active");
  });
});

// Footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}