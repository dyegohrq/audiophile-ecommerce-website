const cart = document.querySelector('.cart')
const body = document.querySelector('body')
const cartMenu = document.querySelector('.cart_menu')



{/* <div class="cart_menu">
      <div class="cart_container">
        <div class="header_cart">
          <h6>Cart ( <span class="quantity_cart">0</span> )</h6>
          <a href="">Remove All</a>
        </div>
        <ul class="list_cart">
          <li class="item_cart">
            <div class="img_cart"><img src="assets/product-xx99-mark-two-headphones/mobile/image-product.jpg" alt=""></div>
            <div class="description_cart">
              <span class="name_item">Xx99 mk II</span>
              <small class="price_item">$ 2.999</small>
            </div>
            <div class="quantity_item">
              <a class="less_item">-</a>
              <span class="quality_product" >1</span>
              <a class="more_item">+</a>
            </div>
          </li>
        </ul>
        <div class="footer_cart">
          <span class="total_name">Total</span>
          <span class="total_price">$ 0</span>
        </div>
        <a href="checkout.html" class="btn btn_light btn-cart">Checkout</a>
      </div>
    </div> */}


function genarato_cartMenu() {
    cartMenu.innerHTML = ''

    // Div cart container
    const cartContainer = document.createElement('div')
    cartContainer.setAttribute('class', 'cart_container')
    cartMenu.appendChild(cartContainer)


    // Header cart
    const headerCart = document.createElement('div')
    headerCart.setAttribute('class', 'header_cart')
    cartContainer.appendChild(headerCart)

    headerCart.innerHTML = `
        <h6>Cart ( <span class="quantity_cart">0</span> )</h6>
        <a href="">Remove All</a>
    `

    cartMenu.classList.toggle('active_cart');
    
    if (cartMenu.classList.value === 'cart_menu active_cart') {
        body.style.overflow = 'hidden'
    } else {
        body.style.overflow = 'auto'
    }
}

cart.addEventListener('click', () => {
    genarato_cartMenu()
})