const today = new Date(),
  todayYear = today.getFullYear(),
  year = document.getElementById("year"),
  body = document.querySelector("body"),
  navWrapper = document.querySelector(".nav_wrapper"),
  hamburgerMenu = document.querySelector(".hamburger-menu"),
  hamburgerContainer = document.querySelector(".hamburger-menu_conteiner");

year.innerHTML = todayYear;

const navMenu = (e) => {
  const { target } = e;
  if (target.closest(".active")) {
    hamburgerContainer.classList.remove("active");
    navWrapper.classList.remove("active");
    body.style.overflow = "";
  } else {
    hamburgerContainer.classList.toggle("active");
    body.style.overflow = "hidden";
    navWrapper.classList.toggle("active");
    // body.setAttribute.remove('overflow', 'hidden')
  }
};

new Swiper(".swiper-container", {
  // loop: true,
  loopFillGroupWithBlank: true,
  // centeredSlides: true, 
  slidesPerView: "auto",
  slidesPerGroup: 1,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 1219px
    1219: {
      slidesPerView: 4,
      spaceBetween: 22,
    },
  },
});

hamburgerMenu.addEventListener("click", navMenu);