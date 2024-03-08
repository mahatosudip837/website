const openMenu = document.querySelector('.menu');
const closeMenu = document.querySelector('.close');
const navbar = document.querySelector('nav ul');

openMenu.addEventListener('click',()=>{
    navbar.classList.add('active');
})
closeMenu.addEventListener('click',()=>{
    navbar.classList.remove('active');
})
