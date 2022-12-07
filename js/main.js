var elMenuBtn = document.querySelector(".site-header__burger");
var elCloseBtn = document.querySelector(".close-button");
var elMenuBurger = document.querySelector(".menu-burger");

elMenuBtn.addEventListener("click", function() {
    elMenuBurger.classList.add("menu-burger-active");
})

elCloseBtn.addEventListener("click", function() {
    elMenuBurger.classList.remove("menu-burger-active");
})