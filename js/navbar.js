const navbarButton = document.getElementById('navbar-hamburger-button');
const navbarClickBlocker = document.getElementById('navbar-click-blocker');
function closeMenu() {
    navbarButton.checked = false;
}
window.addEventListener('resize', closeMenu);
navbarClickBlocker.addEventListener('click', closeMenu);
