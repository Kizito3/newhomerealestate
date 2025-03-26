let swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const sidebar = document.querySelector(".sidebar");
const menuIcon = document.querySelector(".menu__icon");
const closeBtn = document.querySelector(".sidebar i");

menuIcon.addEventListener("click", () => {
  sidebar.classList.add("navigate");
  console.log("clicked");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("navigate");
});
