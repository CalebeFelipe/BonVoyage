const searchBtn = document.querySelector('#search-btn')
const searchBar = document.querySelector('.search-bar-container')
const formBtn = document.querySelector('#login-btn')
const loginForm = document.querySelector('.login-form-container')
const formClose = document.querySelector('#form-close')
const menu = document.querySelector('#menu-bar')
const navbar = document.querySelector('.navbar')

window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})

searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
})

formBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
})

formClose.addEventListener('click', () => {
    loginForm.classList.remove('active');
})