const phrases = [
    "I want to be more effective.",
    "I feel lost.",
    "What's the point of all of this?",
    "I'm afraid.",
    "How do I reach my goals?",
    "What do I do next?",
    "I'm not sure what I want.",
    "I have so many worries.",
    "Is this all there is?",
    "What am I missing?",
    "I’m running out of time.",
    "How do I find meaning?",
    "Why am I so tired?",
    "I need to be held accountable.",
    "What am I doing wrong?",
    "I need more direction.",
    "I feel disconnected.",
    "What do I really want?",
    "I feel like giving up.",
    "Is it too late for me?",
    "There's so many things I want to do.",
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
    "I want to control my life direction.",
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
    "Why can’t I move past this?",
    "I’m scared of change.",
    "How do I find purpose?",
    "What if I’m not capable?",
    "I feel like I’m losing control.",
    "I don’t know what I want anymore.",
    "Why do I feel so disconnected from others?",
    "I don’t know where to go next.",
    "What am I running from?",
    "I can’t stop feeling anxious.",
    "How do I find peace?",
    "I’m afraid to fail.",
    "What does happiness look like?",
    "I’m not sure who I am.",
    "I feel stuck in a loop.",
    "What’s wrong with me?",
    "Why am I always second-guessing myself?",
    "How do I stop feeling overwhelmed?",
    "I don’t know how to move forward.",
    "What do I really need?",
    "Why am I always doubting myself?",
    "I feel like I’ve lost my spark.",
    "How do I find clarity?",
    "Why does life feel like it’s slipping away?",
    "I need something to change.",
    "I feel like I’m running out of time.",
    "What if I’m not good enough?",
    "How do I stop feeling stuck?",
    "Why do I keep pushing people away?",
    "What do I want out of life?",
    "How do I stop procrastinating?",
    "Why do I keep avoiding things?",
    "I feel like I’m not making any progress.",
    "What is the point of all of this?",
    "I need to take control of my life.",
    "How do I stay focused?",
    "I feel lost in the chaos.",
    "I don’t know how to get out of this rut.",
    "What do I need to let go of?",
    "I’m scared I won’t reach my potential.",
    "How do I take the first step?",
    "Why do I feel so empty?",
    "I keep making the same mistakes.",
    "How do I find my direction?",
    "I don’t feel like I belong.",
    "I need to stop comparing myself.",
    "Why is everything so difficult?",
    "I can’t shake this feeling of doubt.",
    "I feel like I’m not enough.",
    "How do I stop feeling lost?",
    "What is my purpose?",
    "I don’t know what I’m doing.",
    "Why does everything feel like a struggle?",
    "I feel disconnected from myself.",
    "How do I stay motivated?",
    "I can’t find the motivation I need.",
    "I’m afraid I’ll never be happy.",
    "How do I get past my fears?",
    "I feel like I’m missing something important.",
    "Why can’t I be happy with what I have?",
    "What do I really need in my life?",
    "I feel like I’m drifting away from my goals.",
    "How do I break free from this cycle?",
    "I feel like I’m just going through the motions.",
    "Why am I so indecisive?",
    "I keep wondering what I’m doing wrong.",
    "How do I learn to trust myself?",
    "Why do I feel like I’m running in circles?",
    "I can’t seem to get out of my head.",
    "How do I change my mindset?",
    "What’s stopping me from being my true self?",
    "I need a fresh perspective.",
    "I feel like I’ve lost my way.",
    "How do I stay grounded?",
    "What will make me happy?",
    "I can’t stop worrying.",
    "Why do I keep making excuses?",
    "I feel like I’ve failed myself.",
    "How do I get rid of this constant pressure?",
    "I don’t feel like I’m making a difference.",
    "What’s the next step?",
    "I keep wondering if I’m on the right path.",
    "I want to live up to my potential.",
    "Why does everything feel so overwhelming?",
    "I can’t find peace in my thoughts.",
    "How do I stop feeling stuck in my own head?",
    "What do I need to do to move forward?",
    "I feel like I’m wasting my life.",
    "I need to focus on what really matters.",
    "How do I stop being afraid of change?",
    "Why do I keep sabotaging myself?",
    "I need to believe in myself more.",
    "How do I find inner peace?",
    "Why do I feel like I’m always running late?",
    "I feel like I’m not in control.",
    "I keep worrying about what others think.",
    "I don’t know how to get started.",
    "How do I stop being afraid of failure?",
    "I feel like I’m never enough.",
    "How do I make meaningful changes in my life?"
];;

const scrollSpeed = 50;
const scrollAngle = -30 * Math.PI / 180;
const rowSizeRatio = 0.95;
const nRows = 80;
const gap = 20;

const primaryColor = getComputedStyle(document.body).getPropertyValue('--color-primary').trim();
const regex = /oklch\((\d+(\.\d+)?)%\s+(\d+(\.\d+)?)\s+(\d+(\.\d+)?)/;
const match = primaryColor.match(regex);
const colorL = parseInt(match[1]);
const colorC = match[3];
const colorH = match[5];

let textRows = [];
const bodyFont = getComputedStyle(document.body).getPropertyValue('font-family').trim();

const canvas = document.getElementById("scrolling-canvas");
const ctx = canvas.getContext("2d");
function setupCanvas() {
    const canvasRect = canvas.getBoundingClientRect();
    canvas.width = canvasRect.width;
    canvas.height = canvasRect.height;
}
setupCanvas();
window.addEventListener("resize", setupCanvas);

function getRandomPhrase(x) {
    const phrase = phrases[Math.floor(Math.random() * phrases.length)];
    return {
        content: phrase,
        x: x,
        color: `oklch(${colorL - Math.random() * 20}% ${colorC} ${colorH})`,
    };
}

function populateText() {
    textRows = [];
    const totalSizeUnits = (1 - rowSizeRatio ** nRows) / (1 - rowSizeRatio);
    let rowSize = (canvas.height - canvas.width * Math.tan(scrollAngle)) / totalSizeUnits;
    let offsetY = 0;

    for (let i = 0; i < nRows; i++) {
        const texts = [];
        const firstPhrase = phrases[Math.floor(Math.random() * phrases.length)];
        const fontSize = rowSize * 0.8;
        ctx.font = `${fontSize}px ${bodyFont}`;
        const offsetX = -Math.random() * ctx.measureText(firstPhrase).width;
        let totalX = offsetX;
        while (totalX < canvas.width) {
            const randomPhrase = getRandomPhrase(totalX);
            texts.push(randomPhrase);
            const widthMeasure = ctx.measureText(randomPhrase.content).width;
            totalX += widthMeasure + gap;
        }
        textRows.push({
            fontSize: fontSize,
            texts: texts,
            y: offsetY,
        });
        offsetY += rowSize;
        rowSize *= rowSizeRatio;
    }
}
populateText();
window.addEventListener("resize", populateText);

function drawRotatedTexts(texts, y) {
    const xOffset = Math.tan(scrollAngle) * y;
    texts.forEach(text => {
        ctx.fillStyle = text.color;
        ctx.fillText(text.content, text.x + xOffset, y);
    });
}

function drawFrame(timestamp) {
    ctx.clearRect(-canvas.width, 0, 2 * canvas.width, 2 * canvas.height);

    const dT = (timestamp - (drawFrame.lastTimestamp || timestamp)) / 1000;
    drawFrame.lastTimestamp = timestamp;
    const dX = scrollSpeed * dT;

    ctx.save();
    ctx.rotate(scrollAngle);
    textRows.forEach(row => {
        ctx.font = `${row.fontSize}px ${bodyFont}`;
        row.texts.forEach(text => {
            text.x -= dX;
        });
        row.texts = row.texts.filter(text => text.x + ctx.measureText(text.content).width > 0);
        const lastText = row.texts[row.texts.length - 1];
        const rowWidth = lastText.x + ctx.measureText(lastText.content).width + gap;
        if (rowWidth < (canvas.width + row.fontSize) / Math.cos(scrollAngle))
            row.texts.push(getRandomPhrase(rowWidth));
        drawRotatedTexts(row.texts, row.y);
    });
    ctx.restore();

    requestAnimationFrame(drawFrame);
}
requestAnimationFrame(drawFrame);
document.addEventListener("visibilitychange", function() {
    if (document.hidden) {
        drawFrame.lastTimestamp = undefined;
    }
});
