const workshopCarousel = document.querySelector(".workshop-list-carousel");
const workshopList = document.querySelector(".workshop-list");
const workshops = document.getElementsByClassName("workshop");
const eclipses = document.getElementsByClassName("eclipses");

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
  slidesPerView: 2,
  grabCursor: true,
  loop: true,
  navigation: {
    nextEl: ".workshop-pagination-button-next",
    prevEl: ".workshop-pagination-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
  },
});
if (window.matchMedia("(max-width:1200px").matches) {
  eclipses.classList.add("active");
}
var swiper2 = new Swiper(".mySwiper", {
  slidesPerView: 4,
  grabCursor: true,
  loop: true,
  navigation: {
    nextEl: ".members-pagination-button-next",
    prevEl: ".members-pagination-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 4,
    },
  },
});

document.addEventListener("mousemove", (e) => {
  console.log(e);
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const anchor = document.querySelector(".google-man-img");
  const rekt = anchor.getBoundingClientRect();
  const anchorX = rekt.left + rekt.width / 2;
  const anchorY = rekt.top + rekt.height / 2;
  const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
  const leftEye = document.querySelector(".google-man-lefteye");
  leftEye.style.transform = `rotate(${angleDeg + 90}deg)`;
  const righEye = document.querySelector(".google-man-righteye");
  righEye.style.transform = `rotate(${angleDeg + 90}deg)`;
});
function angle(cx, cy, ex, ey) {
  const dy = ey - cy;
  const dx = ex - cx;
  const rad = Math.atan2(dy, dx);
  const deg = (rad * 180) / Math.PI;
  return deg;
}
const googleMan = document.querySelector(".google-man");
const googleManImg = document.querySelector(".google-man-img");
googleManImg.addEventListener("mouseover", () => {
  googleMan.style.transform = "translateY(80px)";
  googleMan.style.transition = "0.7s";
});
googleManImg.addEventListener("mouseout", () => {
  googleMan.style.transform = "translateY(0px)";
  googleMan.style.transition = "1s";
});

let list = document.querySelectorAll(".menu-item");
function activeLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
list.forEach((item) => item.addEventListener("click", activeLink));
