const starHtml = '<span class="star">★</span>';
const nStars = 50;
const starsContainer = document.getElementById('contact-left');
for (let i = 0; i < nStars; i++) {
    starsContainer.innerHTML += starHtml;
}
const stars = document.querySelectorAll('.star');
const minStarSize = 4;
const maxStarSize = 8;
const padding = 8;
starsContainerWidth = document.getElementById('contact-left').offsetWidth;
starsContainerHeight = document.getElementById('contact-left').offsetHeight;
stars.forEach((star, index) => {
    star.style.opacity = Math.random() * 2 - 1;
    star.style.fontSize = Math.random() * (maxStarSize - minStarSize) + minStarSize + 'px';
    star.style.left = Math.random() * (starsContainerWidth - maxStarSize - 2 * padding) + padding + maxStarSize / 2 + 'px';
    star.style.top = Math.random() * (starsContainerHeight - maxStarSize - 2 * padding) + padding + maxStarSize / 2 + 'px';
})
function twinkle() {
    stars.forEach((star, index) => {
        star.style.opacity = Math.random() * 2 - 1;
        star.style.fontSize = Math.random() * (maxStarSize - minStarSize) + minStarSize + 'px';
        star.style.left = star.style.left - star.style.fontSize / 2 + 'px';
        star.style.top = star.style.top - star.style.fontSize / 2 + 'px';
    });
    setTimeout(twinkle, 5000);
}
function shootStar() {
    const startX = Math.random() * starsContainerWidth;
    const startY = Math.random() * starsContainerHeight;
    const endX = Math.random() * starsContainerWidth;
    const endY = Math.random() * starsContainerHeight;
    const deltaX = endX - startX;
    const deltaY = endY - startY;
    const length = Math.sqrt(deltaX ** 2 + deltaY ** 2);
    const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

    const starsContainer = document.getElementById('contact-left');
    const line = document.createElement('div');
    line.style.left = startX + 'px';
    line.style.top = startY + 'px';
    line.style.position = 'absolute';
    line.style.width = '0';
    line.style.height = '2px';
    line.style.borderRadius = '3px';
    line.style.backgroundColor = 'var(--color-light)';
    line.style.boxShadow = '0 0 5px var(--color-light), 0 0 10px var(--color-light), 0 0 20px var(--color-glow), 0 0 30px var(--color-glow)';
    line.style.transformOrigin = '0 50%'; // Set rotation origin to the start
    line.style.transform = `rotate(${angle}deg)`;
    line.style.transition = 'all 1s ease';
    starsContainer.appendChild(line);
    setTimeout(() => {
        line.style.width = length + 'px';
    }, 100);
    setTimeout(() => {
        line.style.left = endX + 'px';
        line.style.top = endY + 'px';
        line.style.width = '0';
    }, 300);

    setTimeout(
        () => {
            line.remove();
            shootStar();
        },
        Math.random() * 9000 + 1000
    );
}
window.addEventListener('load', twinkle);
window.addEventListener('load', () => {
    setTimeout(shootStar, 5000);
});
