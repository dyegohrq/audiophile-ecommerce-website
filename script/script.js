let nav = document.querySelector(".nav");
let button = document.querySelector(".hamburguer");
let navMenu = document.querySelector(".nav-menu");
let filter = document.querySelector(".filter");

let card = document.getElementById("card");
let cartContainer = document.querySelector(".cart-container");
let cart = document.querySelector(".cart");
let productDetail = document.querySelector('.product-detail')
let cartMain = document.querySelector('.cart-main')
const cardProduct = document.createElement('div')

let anyLess = document.querySelector('.any-less')
let number = document.querySelector('.number')
let more = document.querySelector('.more')

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
  cardProduct.classList.toggle('add-card');



  more.addEventListener('click', () => {

    if (number.value < 10) {
      number.value = parseInt(number.value) + 1;
    }
  })
  
  anyLess.addEventListener('click', () => {
    
    if(number.value > 1){
      number.value = parseInt(number.value) - 1;
    }
  })
});

cartContainer.addEventListener("mousedown", (event) => {
    if (cart.contains(event.target)) {

    } else {
        cartContainer.classList.toggle("active-card");
        cardProduct.classList.toggle('add-card');
    }
});


cardProduct.addEventListener('click', (e) => {
  console.log(e.target)
})

productDetail.addEventListener('click', (event) => {
    event.preventDefault();

    // console.log(event.target)
    let parentButton =  event.target.closest('.add-cart')
    

    if (parentButton) {
      let name = parentButton.getAttribute('data-name');
      let price = parseFloat(parentButton.getAttribute('data-price'));

      addToCard(name,  price, parseInt(number.value));
    }

})

more.addEventListener('click', () => {

  if (number.value < 10) {
    number.value = parseInt(number.value) + 1;
  }
})

anyLess.addEventListener('click', () => {
  
  if(number.value > 1){
    number.value = parseInt(number.value) - 1;
  }
})


function addToCard(name, price, number) {
  let exigistingItem = cartArray.find(item => item.name === name);
  
  if (exigistingItem) {
    exigistingItem.qtd += 1;
  } else {
    cartArray = [{
      name,
      price,
      number,
    }]
  } 

  updateCard()
}

function updateCard() {
  cartMain.innerHTML = '';
  
  cartArray.forEach(item => {
    
    cardProduct.classList.add('card-main-product')
  
    cardProduct.innerHTML = `
      <div class="img-card"></div>
      <div class="card-product-name">
        <div class="name-product">
          ${item.name}
        </div>
        <div class="price">
          ${item.price}
        </div>
      </div>
      <div class="add-to-card">
        <div class="amount amout-card">
          <span class="btn-add any-less">-</span>
          <input type="number" value='${item.number}' size="2" max="10" min="0" class="number"></input>
          <span class="btn-add more">+</span>
        </div>
      </div>
    `

    
    cartMain.appendChild(cardProduct)
  })
}

/*
  <div class="cart-main">
      

        
  </div>
    </div>
    
*/