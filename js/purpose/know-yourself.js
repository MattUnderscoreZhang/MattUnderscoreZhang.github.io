const purposeDoes = [
    "discovers patterns in your behavior",
    "is a control panel for your life",
    "uncovers your hidden fears and dissatisfactions",
    "analyzes your strengths and weaknesses",
    "suggests paths forward",
    "tracks your progress over time",
    "helps you set and achieve meaningful goals",
    "identifies obstacles blocking your growth",
    "encourages self-reflection and awareness",
    "creates actionable plans for improvement",
    "reveals habits you might not notice",
    "offers insights into your decision-making patterns",
    "connects your actions to your values",
    "monitors your emotional and mental health trends",
    "helps you prioritize tasks effectively",
    "fosters gratitude and positivity",
    "maps out your ambitions and aspirations",
    "balances your work-life priorities",
    "teaches you how to overcome procrastination",
    "guides you through life transitions",
    "finds patterns in your moods and emotions",
    "keeps you accountable to your commitments",
    "alerts you to recurring negative patterns",
    "helps you discover your passions",
    "tracks your productivity and focus levels",
    "motivates you to take small, consistent actions",
    "guides you in breaking bad habits",
    "analyzes the impact of your daily routines",
    "recommends new habits to try",
    "visualizes your growth with charts and graphs",
    "organizes your thoughts and ideas",
    "generates insights from your journal entries",
    "compares your priorities to your time usage",
    "helps you avoid burnout",
    "evaluates the alignment between your goals and actions",
    "suggests ways to simplify your life",
    "tracks your achievements and milestones",
    "helps you prepare for challenges",
    "shows how small actions lead to big results",
    "highlights your most productive hours",
    "identifies skills you need to develop",
    "finds gaps in your plans and fixes them",
    "monitors your energy levels throughout the day",
    "reveals hidden strengths you can rely on",
    "offers reminders for important dates and events",
    "provides clarity during chaotic times",
    "aligns your activities with your purpose",
    "helps you stay consistent with routines",
    "uncovers patterns in your relationships",
    "encourages creative thinking and brainstorming",
    "clarifies your priorities when you're overwhelmed",
    "evaluates risks and opportunities in your plans",
    "tracks the effectiveness of your strategies",
    "helps you adapt to changing circumstances",
    "reinforces healthy boundaries and habits",
    "analyzes your time management effectiveness",
    "guides you in setting realistic expectations",
    "monitors your progress on long-term goals",
    "tracks patterns in your sleep and rest habits",
    "helps you reconnect with your values",
    "reveals underlying motivations driving your behavior",
    "suggests ways to reframe negative thoughts",
    "encourages reflection on past experiences",
    "visualizes your ideal future",
    "creates step-by-step plans for big projects",
    "tracks your emotional responses to situations",
    "reveals connections between your habits and moods",
    "identifies areas where you're stuck",
    "helps you celebrate small wins",
    "reminds you why your goals matter",
    "pushes you to step outside your comfort zone",
    "uncovers thought patterns that limit you",
    "gives feedback on your progress",
    "tracks patterns in your spending habits",
    "helps you measure what matters most",
    "provides space for brainstorming and freewriting",
    "helps you practice mindfulness",
    "guides you in letting go of unhelpful habits",
    "monitors your emotional growth over time",
    "offers suggestions for improving relationships",
    "tracks your commitments and obligations",
    "identifies areas where you need more balance",
    "helps you uncover your personal values",
    "shows how your actions align with your goals",
    "monitors your social connections and support systems",
    "analyzes your time-wasting habits",
    "encourages you to focus on what matters most",
    "highlights recurring themes in your thoughts",
    "suggests experiments to test new approaches",
    "guides you in setting boundaries effectively",
    "analyzes your patterns of optimism and pessimism",
    "helps you simplify decision-making processes",
    "offers prompts for journaling and reflection",
    "tracks feedback from others and your responses",
    "evaluates how your priorities change over time",
    "reveals subconscious patterns in your choices",
    "encourages curiosity and exploration",
    "guides you in resolving inner conflicts",
    "supports you in finding clarity during uncertainty",
    "helps you plan for short- and long-term success",
    "keeps your focus on the bigger picture",
    "helps you design a life that feels meaningful",
]

let lastTen = [];
function setRandomPurpose() {
    const purposeFunction = document.getElementById("purpose-function");
    let randomPurpose = Math.floor(Math.random() * purposeDoes.length);
    while (lastTen.includes(randomPurpose)) {
        randomPurpose = Math.floor(Math.random() * purposeDoes.length);
    }
    lastTen.push(randomPurpose);
    if (lastTen.length > 10) {
        lastTen.shift();
    }
    purposeFunction.style.opacity = 0;
    setTimeout(() => {
        purposeFunction.textContent = purposeDoes[randomPurpose];
        purposeFunction.style.opacity = 1;
        setTimeout(setRandomPurpose, 3000);
    }, 1000);
}
setRandomPurpose();

const phoneScreen = document.getElementById("phone-screen");
function changePhoneScreen(time) {
    const currentPhoneContent = document.querySelector(".phone-screen-content");
    currentPhoneContent.style.opacity = "0";
    const newPhoneContent = document.createElement("div");
    newPhoneContent.classList.add("phone-screen-content");
    newPhoneContent.style.transition = "opacity 0.3s";
    phoneScreen.appendChild(newPhoneContent);
    requestAnimationFrame(() => {
        newPhoneContent.style.opacity = "0";
        requestAnimationFrame(() => {
            newPhoneContent.style.opacity = "1";
        });
    });
    setTimeout(() => {
        currentPhoneContent.remove();
    }, time);
    return newPhoneContent;
}
const computerScreen = document.getElementById("computer-screen");
function changeComputerScreen(time) {
    const currentComputerContent = document.querySelector(".computer-screen-content");
    currentComputerContent.style.opacity = "0";
    const newComputerContent = document.createElement("div");
    newComputerContent.classList.add("computer-screen-content");
    newComputerContent.style.transition = "opacity 0.3s";
    computerScreen.appendChild(newComputerContent);
    requestAnimationFrame(() => {
        newComputerContent.style.opacity = "0";
        requestAnimationFrame(() => {
            newComputerContent.style.opacity = "1";
        });
    });
    setTimeout(() => {
        currentComputerContent.remove();
    }, time);
    return newComputerContent;
}
function loadContent(phoneContent, computerContent, index) {
    fetch(`/html/purpose/screens/${index}.html`)
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, "text/html");
            phoneContent.innerHTML = doc.getElementById("phone-content").innerHTML;
            computerContent.innerHTML = doc.getElementById("computer-content").innerHTML;
        })
        .catch(error => console.error("Error loading content:", error));
}
const nScreens = 2;
function changeScreens(index, time) {
    newPhoneContent = changePhoneScreen(time);
    newComputerContent = changeComputerScreen(time);
    loadContent(newPhoneContent, newComputerContent, index);
    setTimeout(() => {
        changeScreens((index + 1) % nScreens, time);
    }, time);
}
changeScreens(0, 1000);
