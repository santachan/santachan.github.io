document.addEventListener("DOMContentLoaded", () => {
  const target = document.querySelector("#typed");

  if (!target) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion || typeof window.Typed !== "function") {
    target.textContent = "Hello, I'm an Engineer";
    return;
  }

  new window.Typed("#typed", {
    strings: ["Hello, I'm an Engineer", "Hello, I'm a Researcher"],
    typeSpeed: 90,
    backSpeed: 50,
    loop: true,
    backDelay: 700,
  });
});
