const swiper = new Swiper(".swiper", {
  speed: 1000,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});

const burger = document.querySelector(".burger");
const menus = document.querySelector(".menus");
burger.addEventListener("click", function () {
  if (menus.classList.contains("move")) {
    menus.classList.remove("move");
    burger.classList.add("bi-list");
    burger.classList.remove("bi-arrow-left");
  } else {
    menus.classList.add("move");
    burger.classList.remove("bi-list");
    burger.classList.add("bi-arrow-left");
  }
});
