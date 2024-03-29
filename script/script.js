let nav = document.querySelector('.nav')
let button = document.querySelector('.hamburguer')
let navMenu = document.querySelector('.nav-menu')

button.addEventListener('click', (e) => {
    e.preventDefault();

    openMenu()
})

function openMenu() {
    button.classList.toggle('open')
    navMenu.classList.toggle('active')
}