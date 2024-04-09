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

let imgCard = document.querySelector('.img-card')

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

class Bd {
  constructor(){
    let id = localStorage.getItem('id')

    if (id === null) {
      localStorage.setItem('id', 0)
    }
  }

  getProximoId(){
    let proximoId = localStorage.getItem('id')

    return parseInt(proximoId) + 1
  }

  addItem(d) {
    let id = this.getProximoId();
    localStorage.setItem('id', id)
    localStorage.setItem(id , JSON.stringify(d))
  }

  recuperarProduto(){
    let productArray = Array();
    let id = localStorage.getItem('id');

    for(let i = 1; i <= id; i++){
      let produtoObj = JSON.parse(localStorage.getItem(i));

      if (produtoObj === null) {
        continue
      }
      productArray.push(produtoObj)
    }

    return productArray
  }
}

let bd  = new Bd();


productDetail.addEventListener('click', (e) => {
  // e.preventDefault();

  let parentButton = e.target.closest('.add-cart')

  if (parentButton) {
    let name = parentButton.getAttribute('data-name')
    let price = parseFloat(parentButton.getAttribute('data-price'))

    let getItem = new GetItem(name, price, parseInt(number.value))

    bd.addItem(getItem)
    
  }
})

class GetItem {
  constructor(name, price, number) {
    this.name = name,
    this.price = price,
    this.number = number
  }
}

function carregarProduto() {
  let productArray = Array()
  
  productArray = bd.recuperarProduto()

  updateCard(productArray)
}

function updateCard(productArray) {
  cartMain.innerHTML = "";
  let total = 0;

  productArray.forEach(item => {
    switch (item.name) {
      case 'XX59':
        imgCard.style.backgroundImage = 'url(../assets/product-xx59-headphones/mobile/image-product.jpg)'
        break;
    }
  });
 
};