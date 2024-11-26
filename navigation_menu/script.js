const register = document.querySelector('#register');
const menu = document.querySelector('#menu-section');

register.addEventListener("click", ()=> {
    menu.classList.toggle('register-menu');
});