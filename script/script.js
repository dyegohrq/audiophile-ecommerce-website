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

let cartArray = [];
let productArray = [];

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

card.addEventListener("click", () => {
  cartContainer.classList.toggle("active-card");
  cardProduct.classList.toggle("add-card");
});

cartContainer.addEventListener("mousedown", (event) => {
  if (cart.contains(event.target)) {
  } else {
    cartContainer.classList.toggle("active-card");
    cardProduct.classList.toggle("add-card");
  }
});

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

productDetail.addEventListener("click", (event) => {
  event.preventDefault();

  // console.log(event.target)
  let parentButton = event.target.closest(".add-cart");

  if (parentButton) {
    let name = parentButton.getAttribute("data-name");
    let price = parseFloat(parentButton.getAttribute("data-price"));

    addToCard(name, price, parseInt(number.value));
    addItem(name, price, parseInt(number.value));
  }
});

function addItem(name, price, number) {
  cartArray = [
    {
      name,
      price,
      number,
    },
  ];


  if (localStorage.nameI) {
    productArray = JSON.parse(localStorage.getItem("name"));
  }


  let novoItem = cartArray;
  productArray.push(novoItem);
  localStorage.nameI = JSON.stringify(productArray);

  console.log(productArray.length);
}

function addToCard(name, price, number) {
  let exigistingItem = cartArray.find((item) => item.name === name);

  if (exigistingItem) {
    exigistingItem.number += 1;
  } else {
    cartArray = [
      {
        name,
        price,
        number,
      },
    ];
  }

  updateCard();
}

function updateCard() {
  cartMain.innerHTML = "";
  let total = 0;

  cartArray.forEach((item) => {
    cardProduct.classList.add("card-main-product");
    if (item.price > 999) {
      item.price.toFixed(3);
    }

    cardProduct.innerHTML = `
      <div class="img-card"></div>
      <div class="card-product-name">
        <div class="name-product">
          ${item.name}
        </div>
        <div class="price">
          $ ${item.price}
        </div>
      </div>
      <div class="add-to-card">
        <div class="amount amout-card">
          <span class="btn-add any-less">-</span>
          <input type="number" value='${item.number}' class="number"></input>
          <span class="btn-add more">+</span>
        </div>
      </div>
    `;

    total += item.price * item.number;

    if (total > 999) {
      total.toFixed(3);
    }
    cartMain.appendChild(cardProduct);
  });

  cardTotal.textContent = "$ " + total;
  cardCountry.innerText = cartArray.length;
}

removeAll.addEventListener("click", (e) => {
  if (cardProduct.remove()) {
    window.location.reload(true);
  }
});
