const navList = document.getElementById('nav-list');
const burguer = document.getElementById('burguer');
const icon = document.getElementById('icon');

burguer.addEventListener('click', (e) => {
    e.preventDefault();

    if (navList.style.display == 'block') {
        navList.style.display = 'none'
    } else {
        navList.style.display = 'block'
    }
});