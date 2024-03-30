let nav = document.querySelector('.nav')
let button = document.querySelector('.hamburguer')
let navMenu = document.querySelector('.nav-menu')
let filter = document.querySelector('.filter')

button.addEventListener('click', (e) => {
    e.preventDefault();

    openMenu()
})

function openMenu() {
    button.classList.toggle('open')
    navMenu.classList.toggle('active')
    filter.classList.toggle('on')
}