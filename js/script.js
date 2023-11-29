"use strict";
const hamburgerMenu = document.querySelector(".hamburger-menu");
const menu = document.querySelector(".menu");

const toggleMenu = () => {
  menu.classList.toggle("activeMenu");
};
hamburgerMenu.addEventListener("click", toggleMenu);
document
  .querySelector(".hamburger-menu")
  .addEventListener("click", function () {
    this.classList.toggle("open");
  });

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    500: {
      slidesPerView: 2,
      spaceBetween: 12,
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 12,
    },

    1000: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});

var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 2,
  spaceBetween: 8,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    500: {
      slidesPerView: 3,
      spaceBetween: 16,
    },

    768: {
      slidesPerView: 4,
      spaceBetween: 24,
    },

    1000: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
    1440: {
      slidesPerView: 7,
      spaceBetween: 24,
    },
  },
});
