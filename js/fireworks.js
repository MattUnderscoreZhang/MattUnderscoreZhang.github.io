const fireworksContainer = document.getElementById('contact-left');
const fireworksContainerWidth = fireworksContainer.offsetWidth;
const fireworksContainerHeight = fireworksContainer.offsetHeight;
const fireworkSymbols = {
    0: '♥',
    1: '✿',
    2: '♪',
    3: '☀',
    4: '☺',
    5: '☘',
    6: '⛆',
    7: '❄',
    8: '☂',
    9: '☾',
    10: '☮',
    11: '♫',
};
const nFireworkParticles = 20;
const maxParticleVelocity = 100;
const gravity = 5;
const fireworkGlow = 'oklch(67% 0.3 hue)';
class Particle {
    constructor(particle, x, y, vX, vY, colorGlow, colorLight, symbol, isFirework) {
        this.particle = particle;
        this.x = x;
        this.y = y;
        this.vX = vX;
        this.vY = vY;
        this.colorGlow = colorGlow;
        this.colorLight = colorLight;
        this.symbol = symbol;
        this.isFirework = isFirework;
    }
}
let particles = [];
function shootFirework() {
    const firework = document.createElement('span');
    firework.classList.add('firework');
    const startX = Math.random() * fireworksContainerWidth;
    const startY = fireworksContainerHeight;
    const fireworkColor = Math.random() * 360;
    const fireworkColorGlow = fireworkGlow.replace('hue', fireworkColor);
    const fireworkColorLight = fireworkColorGlow.replace('67', '95').replace('0.3', '0.06');
    const fireworkSymbol = fireworkSymbols[Math.floor((fireworkColor + 15) / 30)];
    firework.textContent = fireworkSymbol;
    const fireworkStyle = {
        left: startX + 'px',
        top: startY + 'px',
        color: fireworkColorLight,
        textShadow: `0 0 2px ${fireworkColorLight}, 0 0 4px ${fireworkColorLight}, 0 0 6px ${fireworkColorGlow}, 0 0 8px ${fireworkColorGlow}`,
    }
    Object.assign(firework.style, fireworkStyle);
    fireworksContainer.appendChild(firework);
    const maxYVelocity = Math.sqrt(2 * gravity * fireworksContainerHeight);
    const maxTime = maxYVelocity / gravity;
    const yVelocity = (Math.random() * 0.5 + 0.5) * maxYVelocity;
    let xVelocity = (Math.random() * 0.2 - 0.1) * yVelocity;
    let endX = startX + xVelocity * maxTime;
    if (endX < 0 || endX > fireworksContainerWidth) {
        xVelocity = -xVelocity;
    }
    particles.push(new Particle(firework, startX, startY, xVelocity, yVelocity, fireworkColorGlow, fireworkColorLight, fireworkSymbol, true));
}
function explodeFirework(x0, y0, xVelocity, fireworkColorGlow, fireworkColorLight, fireworkSymbol) {
    for (let i = 0; i < nFireworkParticles; i++) {
        const particle = document.createElement('span');
        particle.classList.add('firework-particle');
        particle.textContent = fireworkSymbol;
        const isInverted = Math.random() > 0.8;
        const particleStyle = {
            left: x0 + 'px',
            top: y0 + 'px',
            color: isInverted ? fireworkColorGlow : fireworkColorLight,
            textShadow: isInverted
                ? `0 0 2px ${fireworkColorGlow}`
                : `0 0 2px ${fireworkColorLight}`,
            fontSize: Math.random() * 30 + 10 + 'px',
        }
        Object.assign(particle.style, particleStyle);
        const angle = Math.random() * 2 * Math.PI;
        const velocity = Math.random() * maxParticleVelocity;
        const vX0 = xVelocity + velocity * Math.cos(angle);
        const vY0 = velocity * Math.sin(angle);
        fireworksContainer.appendChild(particle);
        particles.push(new Particle(particle, x0, y0, vX0, vY0, fireworkColorGlow, fireworkColorLight, fireworkSymbol, false));
    }
}
let lastTime = performance.now();
function propagateParticles() {
    const currentTime = performance.now();
    const deltaT = (currentTime - lastTime) / 100;
    lastTime = currentTime;
    particles.forEach((particle, index) => {
        particle.x += particle.vX * deltaT;
        particle.y -= particle.vY * deltaT;
        particle.particle.style.left = particle.x + 'px';
        particle.particle.style.top = particle.y + 'px';
        particle.vY -= gravity * deltaT;
        if (particle.isFirework && particle.vY < 5) {
            explodeFirework(particle.x, particle.y, particle.vX, particle.colorGlow, particle.colorLight, particle.symbol);
            particle.particle.remove();
            particles.splice(index, 1);
        } else if (particle.y > fireworksContainerHeight + 50) {
            particle.particle.remove();
            particles.splice(index, 1);
        }
    });
    requestAnimationFrame(propagateParticles);
}
requestAnimationFrame(propagateParticles);
function setFireworks(nFireworks, delay) {
    let counter = 0;
    const intervalShooting = setInterval(
        () => {
            if (document.visibilityState !== 'visible') return;
            shootFirework();
            counter++;
            if (counter === nFireworks) {
                clearInterval(intervalShooting);
                setTimeout(() => {
                    particles.forEach((particle, index) => {
                        particle.particle.remove();
                    });
                }, 10000);
            }
        },
        delay,
    );
}
