let nav = document.querySelector(".nav");
let button = document.querySelector(".hamburguer");
let navMenu = document.querySelector(".nav-menu");
let filter = document.querySelector(".filter");

let card = document.getElementById("card");
let cartContainer = document.querySelector(".cart-container");
let cart = document.querySelector(".cart");
let productDetail = document.querySelector(".product-detail");
let cartMain = document.querySelector(".cart-main");
const cardProduct = document.createElement("div");
let cardTotal = document.querySelector(".total-number");
let cardCountry = document.querySelector("#cartQuantity");
let removeAll = document.querySelector(".remove_all");

let anyLess = document.querySelector(".any-less");
let number = document.querySelector(".number");
let more = document.querySelector(".more");

let addProduct = document.querySelector('.add-product');

let cartArray = [];

button.addEventListener("click", (e) => {
  e.preventDefault();

  openMenu();
});

function openMenu() {
  button.classList.toggle("open");
  navMenu.classList.toggle("active");
  filter.classList.toggle("on");
  nav.style.position = "fixed";
}

more.addEventListener("click", () => {
  if (number.value < 10) {
    number.value = parseInt(number.value) + 1;
  }
});

anyLess.addEventListener("click", () => {
  if (number.value > 1) {
    number.value = parseInt(number.value) - 1;
  }
});