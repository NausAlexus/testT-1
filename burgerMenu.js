const burgerMenu = document.getElementById('burgerMenu');
const navList = document.getElementById('navList');
const navLinks = document.querySelectorAll('.nav-link'); // Select all nav links

// Открыть и закрыть меню при клике на бургер
burgerMenu.addEventListener('click', (event) => {
    navList.classList.toggle('show');
    burgerMenu.classList.toggle('active');
    event.stopPropagation(); // Остановить всплытие, чтобы предотвратить закрытие сразу после открытия
});

// Закрыть меню при клике вне его
document.addEventListener('click', (event) => {
    if (navList.classList.contains('show') && !navList.contains(event.target) && !burgerMenu.contains(event.target)) {
        navList.classList.remove('show');
        burgerMenu.classList.remove('active');
    }
});

// Закрыть меню при клике на навигационные ссылки
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('show');
        burgerMenu.classList.remove('active');
    });
});