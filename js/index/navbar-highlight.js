let nav_index = 0;
let screen_mid_height = window.innerHeight / 2;
function setActiveSectionInNavbar() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');

    let found = false;
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= screen_mid_height && rect.bottom >= screen_mid_height) {
            navLinks[nav_index].classList.remove('active');
            nav_index = index;
            navLinks[nav_index].classList.add('active');
            found = true;
        }
    });
    if (!found) {
        navLinks[nav_index].classList.remove('active');
        nav_index = 0;
        navLinks[nav_index].classList.add('active');
    }
}
window.addEventListener('scroll', setActiveSectionInNavbar);
window.addEventListener('load', setActiveSectionInNavbar);
