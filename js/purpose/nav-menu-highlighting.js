const slideshow = document.getElementById('slides');
const navMenuItems = document.querySelectorAll('.nav-menu-item');
let currentSlide = 0;
function highlightContent() {
    navMenuItems[currentSlide].classList.remove('highlighted');
    currentSlide = Math.round(slideshow.scrollTop / window.innerHeight);
    navMenuItems[currentSlide].classList.add('highlighted');
}
slideshow.addEventListener('scroll', highlightContent);
window.onload = highlightContent;
