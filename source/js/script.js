let mainNav = document.querySelector(".main-nav"),
	navToggle = document.querySelector(".main-nav__toggle"),
	searchField = document.querySelector(".page-main__search"),
	searchBtn = document.querySelector(".main-nav__search-btn");

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

searchBtn.addEventListener("click", function() {
	searchField.classList.toggle("page-main__search--opened");
});