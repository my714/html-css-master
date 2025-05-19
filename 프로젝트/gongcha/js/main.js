let subMenu = document.querySelectorAll(".submenu");
let gnb = document.querySelectorAll(".menu>ul>li");
gnb.forEach(function (item, keys) {
  item.addEventListener("mouseenter", function () {
    subMenu.forEach(function (v, k) {
      v.style.height = "300px";
    });
    document.querySelector(".bg").style.height = "320px";
    this.querySelector("a .eng").style.display = "none";
    this.querySelector("a .ko").style.display = "block";
  });
  item.addEventListener("mouseleave", function () {
    subMenu.forEach(function (v, k) {
      v.style.height = "0px";
    });
    document.querySelector(".bg").style.height = "0px";
    this.querySelector("a .eng").style.display = "block";
    this.querySelector("a .ko").style.display = "none";
  });
});

var swiper = new Swiper(".mySwiper", {
  effect: "fade",
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

//바텀 클릭
document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".recipe_list li a");
  const contents = document.querySelectorAll(".img_box .down");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", function (e) {
      e.preventDefault();

      tabs.forEach((t) => t.classList.remove("active"));
      contents.forEach((c) => (c.style.display = "none"));

      tab.classList.add("active");
      contents[index].style.display = "flex";
    });
  });

  tabs[0].classList.add("active");
  contents.forEach((c, i) => {
    c.style.display = i === 0 ? "flex" : "none";
  });
});
