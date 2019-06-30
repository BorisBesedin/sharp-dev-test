let mainNav = document.querySelector(".main-nav"),
  header = document.querySelector(".page-header"),
	navToggle = document.querySelector(".main-nav__toggle"),
	searchField = document.querySelector(".page-main__search"),
	searchBtn = document.querySelector(".main-nav__search-btn");

//работа меню на мобильной версии
mainNav.classList.remove("main-nav--nojs");
navToggle.addEventListener("click", function() {
  if (mainNav.classList.contains("main-nav--closed")) {
    mainNav.classList.remove("main-nav--closed");
    mainNav.classList.add("main-nav--opened");
  } else {
    mainNav.classList.add("main-nav--closed");
    mainNav.classList.remove('main-nav--opened');
  }
});

//поиск на мобильной версии
searchBtn.addEventListener("click", function() {
	searchField.classList.toggle("page-main__search--opened");
});

//фиксация меню при прокрутке
window.onscroll = function() {
  var headerTop = header.getBoundingClientRect();
  if (headerTop.top < -105) {
    mainNav.classList.add("main-nav--fixed");
  } else {
    mainNav.classList.remove("main-nav--fixed");
  }
};

var tooglePos = navToggle.getBoundingClientRect();
    