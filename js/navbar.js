const navbarButton = document.getElementById('navbar-hamburger-button');
function closeMenu() {
    navbarButton.checked = false;
}
window.addEventListener('resize', closeMenu);
