const hamburgerMenu = document.querySelector(`.hamburger__menu`);
// const isActive = document.querySelector(`.menu__items`).classList.toggle();

function toggleMenu() {
	document.querySelector(`.menu__items`).classList.toggle(`active__menu`);
}

hamburgerMenu.addEventListener('click', toggleMenu);
