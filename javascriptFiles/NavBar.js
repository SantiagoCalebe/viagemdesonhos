const navbar = document.querySelector('.navbar');

document.addEventListener('mousemove', (e) => {
    if (e.clientY < 50) {
        navbar.classList.add('show');
    } else {
        navbar.classList.remove('show');
    }
});
