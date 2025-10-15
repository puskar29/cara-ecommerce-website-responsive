const bar = document.querySelector('#bar');
const close = document.querySelector('#close');
const nav = document.querySelector('#navbar');

bar.addEventListener('click', () => {
    nav.classList.add('active');
});

close.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent page refresh
    nav.classList.remove('active');
});