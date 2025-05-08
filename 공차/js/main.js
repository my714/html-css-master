let subMenu = document.querySelectorAll(".submenu");
//let sub = document.querySelectorAll(".lnb>ul>li");
let gnb = document.querySelectorAll(".menu>ul>li");
//let ht = document.querySelector(".lnb").offsetHeight;
//console.log("ht : " + ht);
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
// sub.forEach(function (item, keys) {
//   item.addEventListener("mouseenter", function () {
//     subMenu.style.height = ht + "px";
//     gnb[keys].querySelector("a").classList.add("on", "active");
//   });
//   item.addEventListener("mouseleave", function () {
//     subMenu.style.height = 0 + "px";
//     gnb[keys].querySelector("a").classList.remove("on", "active");
//   });
//});

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
