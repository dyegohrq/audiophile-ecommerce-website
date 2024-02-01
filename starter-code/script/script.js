const navList = document.getElementById('nav-list');
const burguer = document.getElementById('burguer');
const icon = document.getElementById('icon');

function toggleMenu() {
    document.getElementById('nav-list');

    navList.classList.toggle('active-list');
    // Toggle - adicione caso não tenha, e remova caso já tenha
}

burguer.addEventListener('click', toggleMenu )