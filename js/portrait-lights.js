let glows = [
    [[0, 0], "5px var(--color-light)"],
    <!--[[0, 0], "10px var(--color-light)"],-->
    [[0, 0], "20px var(--color-glow)"],
    <!--[[0, 0], "30px var(--color-glow)"],-->
    [[0, 0], "40px var(--color-card)"],
    <!--[[0, 0], "50px var(--color-card)"],-->
];
function glowDrift() {
    const circleImage = document.getElementById('circle-image');
    glows.forEach((glow, index) => {
        const x = 0.2 * glow[0][0] + 20 * index * (Math.random() * 2 - 1);
        const y = 0.2 * glow[0][1] + 20 * index * (Math.random() * 2 - 1);
        glows[index][0] = [x, y];
    });
    let boxShadows = '';
    for (let i = 0; i < glows.length; i++) {
        boxShadows += glows[i][0][0] + 'px ';
        boxShadows += glows[i][0][1] + 'px ';
        boxShadows += glows[i][1] + ', ';
    }
    boxShadows = boxShadows.slice(0, -2);
    circleImage.style.boxShadow = boxShadows;
    setTimeout(glowDrift, 2000);
}
function addTransition() {
    const circleImage = document.getElementById('circle-image');
    circleImage.style.transition = 'box-shadow 2s ease-in-out';
}
window.addEventListener('load', glowDrift);
window.addEventListener('load', addTransition);
