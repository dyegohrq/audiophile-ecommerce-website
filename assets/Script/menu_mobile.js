const btn = document.querySelector('.menu')
const menuMobile = document.getElementById('menu_mobile')
const headerContainer = document.querySelector('.header_container')

btn.addEventListener('click', (e) => {
    e.preventDefault();

    menuMobile.classList.toggle('active');
    
    

    if (menuMobile.classList.value === 'menu_mobile active') {
        headerContainer.style.position = 'fixed'
    } else {
        headerContainer.style.position = 'static'
    }
})