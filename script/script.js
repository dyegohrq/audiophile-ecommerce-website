let nav = document.querySelector(".nav");
let button = document.querySelector(".hamburguer");
let navMenu = document.querySelector(".nav-menu");
let filter = document.querySelector(".filter");

let card = document.getElementById("card");
let cartContainer = document.querySelector(".cart-container");
let cart = document.querySelector(".cart");
let productDetail = document.querySelector('.product-detail')

let cartArray = []

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
});

cartContainer.addEventListener("mousedown", (event) => {
    if (cart.contains(event.target)) {

    } else {
        cartContainer.classList.toggle("active-card");
    }
});

productDetail.addEventListener('click', (event) => {
    event.preventDefault();

    // console.log(event.target)
    let parentButton =  event.target.closest('.add-cart')
    

    if (parentButton) {
      let name = parentButton.getAttribute('data-name');
      let price = parseFloat(parentButton.getAttribute('data-price'));

      addToCard(name,  price);
    }

})


function addToCard(name, price) {
  let exigistingItem = cartArray.find(item => item.name === name);
  
  if (exigistingItem) {
    exigistingItem.qtd += 1;
  } else {
    cartArray = [{
      name,
      price,
      qtd: 1,
    }]
  } 

  updateCard()
}

function updateCard() {
  
}