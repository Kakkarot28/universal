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

function popUp() {
  const popEl = document.createElement("a");
  popEl.setAttribute("href", "contactus.html");

  popEl.innerHTML = `    <div class="pop_up">
<ion-icon name="chatbubble-ellipses-sharp" id="pop_msg"></ion-icon>
</div>`;

  document.body.appendChild(popEl);
}

popUp();
