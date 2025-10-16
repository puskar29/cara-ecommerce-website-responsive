const bar = document.querySelector('#bar');
const close = document.querySelector('#close');
const nav = document.querySelector('#navbar');

bar.addEventListener('click', () => {
    nav.classList.add('active');
});

close.addEventListener('click', (e) => {
    // prevent default not needed for button, but keep e just in case
    if (e && e.preventDefault) e.preventDefault();
    nav.classList.remove('active');
});

