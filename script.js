'use script';

const burgerMenu = document.querySelector('.burger-menu');
const closeBtn = document.querySelector('.close-btn');
const clapMenu = document.querySelector('.clap-menu');

console.log(burgerMenu);
console.log(closeBtn);
console.log(clapMenu);

burgerMenu.addEventListener('click', () => {
    console.log('eee');
    clapMenu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    clapMenu.classList.remove('active');
});
