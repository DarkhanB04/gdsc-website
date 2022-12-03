const toggle = document.querySelector(".toggle");
const header = document.querySelector("header");
toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    header.classList.toggle("active");
  });