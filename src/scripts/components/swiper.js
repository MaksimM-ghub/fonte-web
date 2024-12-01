const gallary = new Swiper(".gallary", {
  //! Основные настройки
  direction: "horizontal", // 'vertical', 'horizontal'
  speed: 800,
  slidesPerView: 1, // кол-во активных слайдов

  autoplay: {
    delay: 3000,
  },

  //! Кнопки вперед и назад
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    // dynamicBullets: true, // Динамические буллеты
  },
});

const partnersSwiper = new Swiper(".partners__swiper", {
  //! Основные настройки
  direction: "horizontal", // 'vertical', 'horizontal'
  loop: true, // true - круговой слайдер, false - слайдер с конечными положениями
  speed: 800,
  spaceBetween: 50, // расстояние между слайдами
  slidesPerView: 3, // кол-во активных слайдов
  centeredSlides: true,

  autoplay: {
    delay: 3000,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },

    415: {
      slidesPerView: 2,
    },

    576: {
      slidesPerView: 3,
    },
  },
});

const blogSwiper = new Swiper(".blog__swiper", {
  //! Основные настройки
  direction: "horizontal", // 'vertical', 'horizontal'
  loop: true, // true - круговой слайдер, false - слайдер с конечными положениями
  speed: 800,
  autoplay: {
    delay: 2000,
  },
  spaceBetween: 20, // расстояние между слайдами
  slidesPerView: 1, // кол-во активных слайдов
  slidesPerGroup: 1, // кол-во пролистываемых слайдов

  //! Кнопки вперед и назад
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    // dynamicBullets: true, // Динамические буллеты
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },

  //! Адаптив слайдера
  breakpoints: {
    576: {
      slidesPerView: 1,
      centeredSlides: true, // Центрация активного слайда
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 50,
      centeredSlides: false, // Центрация отключена для больших разрешений
    },

    920: {
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: false, // Центрация отключена для больших разрешений
    },
  },
});

