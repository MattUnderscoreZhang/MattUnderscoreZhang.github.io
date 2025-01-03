const purposeDoes = [
    "discovers patterns in your behavior",
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
    "suggests ways to simplify your life",
    "tracks your achievements and milestones",
    "helps you prepare for challenges",
    "highlights your most productive hours",
    "identifies skills you need to develop",
    "finds gaps in your plans and fixes them",
    "monitors your energy levels throughout the day",
    "offers reminders for important dates and events",
    "provides clarity during chaotic times",
    "aligns your goals and actions",
    "helps you stay consistent with routines",
    "uncovers patterns in your relationships",
    "encourages creative thinking and brainstorming",
    "clarifies your priorities when you're overwhelmed",
    "evaluates risks and opportunities in your plans",
    "tracks the effectiveness of your strategies",
    "reinforces healthy boundaries and habits",
    "analyzes your time management effectiveness",
    "guides you in setting realistic expectations",
    "monitors your progress on long-term goals",
    "tracks patterns in your sleep and rest habits",
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
    "offers suggestions for improving relationships",
    "tracks your commitments and obligations",
    "identifies areas where you need more balance",
    "helps you uncover your personal values",
    "monitors your social connections and support systems",
    "analyzes your time-wasting habits",
    "encourages you to focus on what matters most",
    "highlights recurring themes in your thoughts",
    "suggests experiments to test new approaches",
    "guides you in setting boundaries effectively",
    "helps you simplify decision-making processes",
    "offers prompts for journaling and reflection",
    "tracks feedback from others and your responses",
    "evaluates how your priorities change over time",
    "reveals subconscious patterns in your choices",
    "encourages curiosity and exploration",
    "guides you in resolving inner conflicts",
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
