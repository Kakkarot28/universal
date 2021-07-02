let getOpen = document.querySelector(".open");
let getClose = document.querySelector(".close");
let navItems = document.querySelector(".mobile_nav_bottom");
getOpen.addEventListener("click", function() {
  navItems.style.transform = `translateY(0)`;
  getOpen.style.display = `none`;
  getClose.style.display = `block`;
});
getClose.addEventListener("click", function() {
  navItems.style.transform = `translateY(-200%)`;
  getOpen.style.display = `block`;
  getClose.style.display = `none`;
});
