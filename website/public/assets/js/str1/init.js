// Color Switcher
var themeToggleBtn = document.getElementById('theme-toggle');

// Change the toggle state based on previous change
if ( localStorage.getItem('str1-color-theme') === 'dark' || (!('str1-color-theme' in localStorage) )) {
  themeToggleBtn.checked = true;
  document.documentElement.classList.add('dark');
} else {
  themeToggleBtn.checked = false;
  document.documentElement.classList.remove('dark');
}

themeToggleBtn.addEventListener('change', function() {

  // if set via local storage previously
  if (localStorage.getItem('str1-color-scheme')) {
    if (localStorage.getItem('str1-color-theme') === 'light') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('str1-color-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('str1-color-theme', 'light');
    }
  // if NOT set via local storage previously
  } else {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('str1-color-theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('str1-color-theme', 'dark');
    }
  }
});

// Social Links Floating
if (document.querySelector('.js-vv-social-links-floating-toggle')) {
  const socialLinksFloatingToggle = document.querySelector('.js-vv-social-links-floating-toggle');

  socialLinksFloatingToggle.onclick = () => {
    socialLinksFloatingToggle.classList.toggle('active');
  };
}

// Streams Filter
if (document.querySelector('.js-vv-streams-filter-toggle')) {
  const streamsFilterToggle = document.querySelector('.js-vv-streams-filter-toggle');

  streamsFilterToggle.onclick = () => {
    streamsFilterToggle.classList.toggle('active');
  };
}


// Login/Register
if ( document.querySelector('.js-vv-modal') ) {
  const modal = document.querySelector('.js-vv-modal');
  const openModals = document.querySelectorAll('.js-vv-modal__open-btn-login-register');

  // show the modal by clicking on the button

  openModals.forEach(element => {
    element.addEventListener('click', () => {
      modal.showModal();
    });
  });
}

// Product Slider
const swiperProductsNav = new Swiper('.js-vv-product-swiper-nav', {
  spaceBetween: 20,
  slidesPerView: 3,
  watchSlidesProgress: true,

  breakpoints: {
    576: {
      slidesPerView: 4,
    },
    768: {
      spaceBetween: 24,
      slidesPerView: 4,
    },
    992: {
      spaceBetween: 36,
      slidesPerView: 4,
    },
  },
});

const swiperProducts = new Swiper('.js-vv-product-swiper', {
  thumbs: {
    swiper: swiperProductsNav
  },
});


// Twitter Slider
const swiperTwitterFeed = new Swiper('.js-vv-twitter-feed-swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 7000,
    disableOnInteraction: true,
  },

  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 3,
    },
    1210: {
      slidesPerView: 3,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.js-vv-twitter-feed-swiper-btn-next',
    prevEl: '.js-vv-twitter-feed-swiper-btn-prev',
  },
});


// Twitter Slider
const swiperGamesTop = new Swiper('.js-vv-games-swiper', {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,

  breakpoints: {
    576: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 5,
    },
    1210: {
      slidesPerView: 6,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.js-vv-games-swiper-btn-next',
    prevEl: '.js-vv-games-swiper-btn-prev',
  },
});



if ( document.querySelector('.js-vv-countdown-container') ) {
  const finaleDate = new Date("May 30, 2023 00:00:00").getTime();

  const timer = () =>{
    const now = new Date().getTime();
    let diff = finaleDate - now;
    let diffInDays = Math.floor(diff / 1000 / 86400);
    let progressBarValue = 100 - diffInDays ? 100 - diffInDays : 10;

    let days = '00';
    let hours = '00';
    let minutes = '00';
    let seconds = '00';

    if (diff > 0) {
      days = Math.floor(diff / (1000*60*60*24));
      hours = Math.floor(diff % (1000*60*60*24) / (1000*60*60));
      minutes = Math.floor(diff % (1000*60*60)/ (1000*60));
      seconds = Math.floor(diff % (1000*60) / 1000);

      // Adding the zeros.
      days <= 9 ? days = `0${days}` : days;
      hours <= 9 ? hours = `0${hours}` : hours;
      minutes <= 9 ? minutes = `0${minutes}` : minutes;
      seconds <= 9 ? seconds = `0${seconds}` : seconds;
    }

    document.querySelector('.js-vv-days').textContent = days;
    document.querySelector('.js-vv-hours').textContent = hours;
    document.querySelector('.js-vv-minutes').textContent = minutes;
    document.querySelector('.js-vv-seconds').textContent = seconds;
    document.querySelector('.js-vv-countdown-progress-bar').style.width = progressBarValue + '%';
  };

  timer();

  // Calling the function every 1000 milliseconds.
  setInterval(timer,1000);
}


// Hero Slider
const swiperHeroSlider = new Swiper('.js-vv-hero-swiper', {
  slidesPerView: 1,
  loop: true,
  speed: 400,

  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },

  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },

  // Pagination
  pagination: {
    el: '.js-vv-hero-swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.js-vv-hero-swiper-btn-next',
    prevEl: '.js-vv-hero-swiper-btn-prev',
  },

  on: {
    slideChange: function() {
      const currentIndex = this.realIndex;
      const currentSlide = this.slides[currentIndex];
      currentSlide.classList.add('vv-slide-played');
    }
  },
});
