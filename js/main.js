const today = new Date(),
  todayYear = today.getFullYear(),
  year = document.getElementById("year"),
  body = document.querySelector("body"),
  navWrapper = document.querySelector(".nav_wrapper"),
  hamburgerMenu = document.querySelector(".hamburger-menu"),
  search = document.querySelector('a.search'),
  searchForm = document.querySelector('.search_form'),
  hamburgerContainer = document.querySelector(".hamburger-menu_conteiner");

year.innerHTML = todayYear;

const openSearch = (e) => {
  const { target } = e;
  e.preventDefault();
  searchForm.classList.toggle("active");
}

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

// Если мы на главной странице, тогда свайпер будет работать. //
if (window.location.pathname === '/index.html') {
  new Swiper(".swiper-container", {
    loop: true,
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
      600: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 1219px
      1240: {
        slidesPerView: 4,
        spaceBetween: 22,
      },
    },
  });
}

if (window.location.pathname === '/card/index.html') {
  document.querySelectorAll('.title').forEach(item => {
    item.innerHTML = `yep lol`;
    item.style.color = 'red'
  });
}
hamburgerMenu.addEventListener("click", navMenu);
search.addEventListener("click", openSearch);
