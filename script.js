const botaoMenu = document.querySelector('.menu')
const menu = document.querySelector('.menu_lateral')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu_lateral-ativo')
});