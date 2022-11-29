const toggle = document.querySelector(".toggle");
const header = document.querySelector("header");
const workshopCarousel = document.querySelector(".workshop-list-carousel");
const workshopList = document.querySelector(".workshop-list");
const workshops = document.getElementsByClassName("workshop");
toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  header.classList.toggle("active");
});
if (window.matchMedia("(max-width: 768px)").matches) {
  workshopCarousel.classList.add("swiper", "workshopSwiper");
  workshopList.classList.add("swiper-wrapper");
  for (const workshop of workshops) {
    workshop.classList.add("swiper-slide");
  }
  document.querySelector(".nothing-workshop").classList.add("pagination");

  /* the viewport is at least 400 pixels wide */
}

var swiper1 = new Swiper(".workshopSwiper", {
  slidesPerView: 4,
  grabCursor: true,
  loop: true,
  navigation: {
    nextEl: ".workshop-pagination-button-next",
    prevEl: ".workshop-pagination-button-prev",
  },
  breakpoints: {
    0:{
      slidesPerView: 2,
    },
    768:{
      slidesPerView: 4,
    }
  },
});
var swiper1 = new Swiper(".mySwiper", {
  slidesPerView: 4,
  grabCursor: true,
  loop: true,
  navigation: {
    nextEl: ".members-pagination-button-next",
    prevEl: ".members-pagination-button-prev",
  },
  
  breakpoints: {
    0:{
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 4,
    },
  },
});
