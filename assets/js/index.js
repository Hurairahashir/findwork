var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  autoplay: {
    delay: 5000, // Delay between transitions in milliseconds (5 seconds in this example)
    disableOnInteraction: false, // Set to false to prevent autoplay from stopping when user interacts with the swiper
  },

  // If you need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    // nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if you need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  breakpoints: {
    990: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
    },
  },
});
