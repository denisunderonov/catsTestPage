const burgerButton = document.querySelector('.header-navigation__burger');
const burgerMenu = document.querySelector('.header__links')
const closeBurgerButton = document.querySelector('.header__links--close-burger');
const siteNavigation = document.querySelector('.header-navigation__navigation').innerHTML;
const main = document.querySelector('main');

let Isnavigation = false;

const openBurger = () => {
    burgerMenu.classList.remove('close-burger');
    burgerMenu.classList.add('open-burger');
    main.style.opacity = '50%';
    if (Isnavigation === false) {
        const burgerNavigation = document.querySelector('.header__links--burger-navigation')
        burgerNavigation.insertAdjacentHTML('afterbegin', siteNavigation);
        Isnavigation = true;
    }
}

const closeBurger = () => {
    burgerMenu.classList.remove('open-burger');
    burgerMenu.classList.add('close-burger');
    main.style.opacity = '100%';
}

burgerButton.addEventListener('click', openBurger, { once: false });
closeBurgerButton.addEventListener('click', closeBurger, { once: false })