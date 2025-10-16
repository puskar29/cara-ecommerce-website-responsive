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

//Slider
var mainImg = document.querySelector("#mainImg");
var smallImg = document.querySelectorAll(".small-img");

smallImg[0].onclick = function(){
    mainImg.src = smallImg[0].src;
}

smallImg[1].onclick = function(){
    mainImg.src = smallImg[1].src;
}

smallImg[2].onclick = function(){
    mainImg.src = smallImg[2].src;
}

smallImg[3].onclick = function(){
    mainImg.src = smallImg[3].src;
}