const navbarName = document.getElementById('navbar-name');
const navbarNameLetters = document.querySelectorAll('.navbar-name-letter');
let mouseOnName = false;
let nameColors = [
    'var(--color-glow)',
    'var(--color-light)',
    'var(--color-card)',
];
function getRandomInt(min, max) {
    // Random integer between min (inclusive) and max (exclusive)
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
function scheduleNameChange() {
    if (!mouseOnName) return;
    navbarNameLetters.forEach((letter, index) => {
        letter.style.color = nameColors[getRandomInt(0, nameColors.length)];
    });
    setTimeout(scheduleNameChange, 220);
}
navbarName.addEventListener('mouseover', () => {
    if (mouseOnName) return;
    mouseOnName = true;
    scheduleNameChange();
});
navbarName.addEventListener('mouseleave', (event) => {
    mouseOnName = false;
    navbarNameLetters.forEach((letter, index) => {
        letter.style.color = 'var(--color-light)';
    });
});
