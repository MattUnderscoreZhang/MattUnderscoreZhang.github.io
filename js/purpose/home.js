const phrases = [
    "I feel lost.",
    "What's the point of all of this?",
    "I'm afraid.",
    "How do I reach my goals?",
    "What do I do next?",
    "I'm not sure what I want.",
    "I have so many worries.",
    "Is this all there is?",
    "What am I missing?",
    "Why do I feel stuck?",
    "I’m running out of time.",
    "How do I find meaning?",
    "Why am I so tired?",
    "What am I doing wrong?",
    "I need more direction.",
    "I feel disconnected.",
    "What do I really want?",
    "I feel like giving up.",
    "Is it too late for me?",
    "I can’t seem to focus.",
    "I feel like I’m wasting my life.",
    "How do I get out of this rut?",
    "I need clarity.",
    "Why am I so afraid?",
    "I keep doubting myself.",
    "I don’t know where to start.",
    "What’s holding me back?",
    "Why can’t I make progress?",
    "I feel so overwhelmed.",
    "I need a plan.",
    "I feel so alone.",
    "I can’t make decisions.",
    "What if I fail?",
    "I wish I had more confidence.",
    "I don’t know who I am anymore.",
    "I feel lost in the noise.",
    "What am I passionate about?",
    "Why does everything feel pointless?",
    "How do I make a change?",
    "I’m stuck in the past.",
    "I can’t let go.",
    "I keep making the same mistakes.",
    "Why does life feel so hard?",
    "I don’t feel like myself.",
    "I feel disconnected from my goals.",
    "I don’t know what motivates me.",
    "Why can’t I commit?",
    "I keep putting things off.",
    "How do I simplify my life?",
    "Why am I always second-guessing myself?",
    "I feel like an imposter.",
    "I can’t find balance.",
    "Why do I feel so anxious?",
    "I don’t know how to move forward.",
    "What does success mean to me?",
    "I’m afraid to take risks.",
    "How do I stay motivated?",
    "I feel like I’m falling behind.",
    "I need more discipline.",
    "Why does nothing feel exciting?",
    "How do I trust myself?",
    "I feel invisible.",
    "I can’t seem to finish anything.",
    "Why can’t I relax?",
    "What if I’m not good enough?",
    "I’m tired of pretending.",
    "I feel like I don’t belong.",
    "I keep chasing the wrong things.",
    "How do I find balance?",
    "I feel like I’m drowning.",
    "I can’t let go of regret.",
    "What am I afraid of?",
    "How do I stop comparing myself?",
    "Why do I feel stuck in my head?",
    "What inspires me?",
    "I need a fresh start.",
    "How do I stop overthinking?",
    "I want to be free.",
    "Why do I feel so disconnected?",
    "How do I break bad habits?",
    "What makes me happy?",
    "How do I set better goals?",
    "I feel like I’m drifting.",
    "How do I trust the process?",
    "What if I make the wrong choice?",
    "I feel like I’m running out of time.",
    "Why does life feel so repetitive?",
    "I need more courage.",
    "I keep doubting my decisions.",
    "How do I get unstuck?",
    "What excites me?",
    "I feel like something’s missing.",
    "What should I focus on?",
    "How do I stop procrastinating?",
    "Why can’t I stay consistent?",
    "I want to do something meaningful.",
    "What do I stand for?",
    "Why am I so restless?",
    "I need to feel alive again.",
    "How do I keep going?",
    "Why do I keep avoiding things?",
    "I need to believe in myself.",
    "What will make me proud of my life?",
];

function createScrollingTextbar(left, top, fontsize) {
    const scrollingTextbar = document.createElement("div");
    scrollingTextbar.classList.add("scrolling-textbar");
    scrollingTextbar.style.fontSize = `${fontsize}px`;
    scrollingTextbar.style.top = `${top}px`;
    scrollingTextbar.style.left = `${left}px`;
    const homeContent = document.getElementById("home-content");
    homeContent.appendChild(scrollingTextbar);
    return scrollingTextbar;
}

function createScrollingText(scrollingTextbar, displacement, speed, delay) {
    const scrollingText = document.createElement("div");
    scrollingText.classList.add("scrolling-text");
    randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    scrollingText.textContent = randomPhrase;
    scrollingTextbar.appendChild(scrollingText);

    // text starts off-screen and scrolls off-screen in the other direction
    // measure text size after it's attached to the DOM
    if (displacement === null)
        displacement = -scrollingText.clientWidth;
    scrollingText.style.left = `${displacement}px`;
    const duration = (scrollingTextbar.clientWidth - displacement) / speed;
    scrollingText.style.transition = `left ${duration}s linear`;
    scrollingText.style.left = "100%";

    // when this finishes appearing, create a new text element
    let createTimeout = null;
    if (displacement < 0) {
        const appearanceTime = -displacement / speed;
        createTimeout = setTimeout(() => {
            createScrollingText(scrollingTextbar, null, speed, delay);
        }, (appearanceTime + delay) * 1000);
    }

    // when this finishes, delete the element
    scrollingText.addEventListener("transitionend", () => {
        scrollingText.remove();
    });

    return [scrollingText, createTimeout];
}

function fillWithScrollingText(scrollingTextbar, speed, gap, delay) {
    let displacement = -Math.random() * scrollingTextbar.clientWidth;
    while (displacement < scrollingTextbar.clientWidth) {
        const [scrollingText, createTimeout] = createScrollingText(scrollingTextbar, displacement, speed, delay);
        displacement += scrollingText.clientWidth + gap;
        if (displacement < 0) {
            scrollingText.remove();
            clearTimeout(createTimeout);
        }
    }
}

const speed = 100;
const gap = 50;
const delay = gap / speed;
let offset = 0;
for (let size = 80; size >= 5; size *= 0.95) {
    const textbar = createScrollingTextbar(-gap, offset, Math.floor(size));
    fillWithScrollingText(textbar, speed, gap, delay);
    offset += size * 2;
}
