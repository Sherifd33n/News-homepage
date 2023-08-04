const menu = document.querySelector(".menu");
const navList = document.querySelector("ul");

menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  navList.classList.toggle("active");
});

const home = document.getElementById("home");
const news = document.getElementById("news");
const popular = document.getElementById("popular");
const trending = document.getElementById("trending");
const categories = document.getElementById("categories");

home.addEventListener("click", function () {
  navList.classList.remove("active");
  menu.classList.remove("active");
});

news.addEventListener("click", function () {
  navList.classList.remove("active");
  menu.classList.remove("active");
  console.log("active");
});

popular.addEventListener("click", function () {
  navList.classList.remove("active");
  menu.classList.remove("active");
});

trending.addEventListener("click", function () {
  navList.classList.remove("active");
  menu.classList.remove("active");
});

categories.addEventListener("click", function () {
  navList.classList.remove("active");
  menu.classList.remove("active");
});
