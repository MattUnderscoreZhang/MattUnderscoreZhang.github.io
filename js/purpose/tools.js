const tools = [
    {
        name: "Suggested Schedule",
        description: "Daily to-do lists tailored to deadlines, events, and your ideal work-life balance.",
    },
    {
        name: "Experiment Tracker",
        description: "Measure and track experimental life changes to see how they impact you.",
    },
    {
        name: "Idea Feedback",
        description: "Get feedback on ideas based on feasibility, current skills, past performance, expected outcomes, and alignment with long-term plans.",
    },
    {
        name: "Side Quest Generator",
        description: "Generate small randomized daily quests based on what you'd like or what you need to experience. Inject some serendipity into your life.",
    },
    {
        name: "Task Speedrun Timer",
        description: "Break up long boring tasks into subitems and complete them using a real-life speedrun timer. Compare to your previous times, or compete with your friends.",
    },
    {
        name: "Monte Carlo Graph",
        description: "See a graph of which actions you take are likely to lead to other actions. Identify change in probabilities over time.",
    },
    {
        name: "Life RPG",
        description: "Completing tasks in real life moves your character along in a generated game. Collect keepsakes from completed projects that you can store in your house, or visit other people's houses to see their collections.",
    },
    {
        name: "Mood Stabilizer",
        description: "Use during times of high emotional instability. Adjust your emotions where they need to go by changing the valence, locus, or intensity.",
    },
    {
        name: "Natural Reminders",
        description: "Set alerts with natural-language reminders like 'the next time I go to the library' or 'Tuesday, if I haven’t talked to Jim by then'.",
    },
    {
        name: "News Sifter",
        description: "Monitors news on a given list of topics, and sends an update to your feed on a schedule. Can be configured to send real-time alerts on more important news.",
    },
    {
        name: "Burnout Meter",
        description: "Monitors your mood and thoughts to gauge current level of stress, and alert to possible burnout.",
    },
    {
        name: "Mindfulness Bell",
        description: "Rings at set intervals to remind you of the passage of time.",
    },
    {
        name: "Randomized Queues",
        description: "Put ideas, tasks, or other items in randomized queues, and dispense items on request. Can set weights for items either manually, or with natural language prompts.",
    },
    {
        name: "Long Term Plan",
        description: "A long chat that deeply evaluates your plans, your desired end states, and your values. Puts together a plan with goals and subgoals. Sends alerts if current actions do not align with the long-term plan.",
    },
    {
        name: "Morning Affirmations",
        description: "Generates daily affirmations based on your current life and challenges. Can be played via text-to-voice.",
    },
    {
        name: "Motivation Ramp",
        description: "Used when you have absolutely zero motivation. Ramps you into a task with small wins, like 'walk to the computer', 'turn the computer on', 'open your file', etc.",
    },
    {
        name: "Habit Breaker",
        description: "Breaks addictive habits with this tool based on the DEADS system. Discover and avoid behavioral triggers, or get alerts with distractions and replacement activities.",
    },
    {
        name: "Mood Booster",
        description: "Determines whether low mood is caused by common factors like hunger, not enough water, not enough sleep, overthinking, not enough exercise, etc. and recommends a remedy.",
    },
    {
        name: "Calorie Tracker",
        description: "Take a picture of your food to add estimated nutritional information to your logs.",
    },
    {
        name: "Mental Fatigue Measurements",
        description: "Launch a set of small interactive tasks and get a numeric measure of your current mental function. Compare to past results and plot performance against various factors.",
    },
    {
        name: "Smart Alerts",
        description: "Get automated alerts throughout the day for things like drinking water, taking medicine, or taking a break from screentime.",
    },
    {
        name: "Streak Tracker",
        description: "Check off and visualize streaks for items in your daily routine.",
    },
    {
        name: "Wake and Sleep Tracker",
        description: "Records when you wake up and go to sleep. Integrates with iPhone and Android. Can set alerts to track energy and focus levels throughout the day.",
    },
    {
        name: "Routine Setter",
        description: "Plan out a good routine based on your goals and desired time balance. Track which parts of your routine you have trouble following.",
    },
    {
        name: "Dream Journal",
        description: "A soft alarm clock which automatically starts an audio recording. Provides transcription and summary of your dream. A second louder alarm goes off some time later to make sure you don't fall back asleep.",
    },
    {
        name: "Report Card",
        description: "Grades you each week on your progress towards various goals and habits.",
    },
    {
        name: "Life in Weeks",
        description: "A memento mori visualization of how long you have left to live, where each dot is a week of your life.",
    },
    {
        name: "Morning Lessons",
        description: "Takes a book, website, or document that you'd like to learn from, and breaks its content into small daily alerts to be sent at specified times.",
    },
    {
        name: "Project Pacer",
        description: "Set a desired rate of progress on a project, and check if you're going too fast or too slow. Identifies chokepoints and alternate actions if you're falling too far behind.",
    },
    {
        name: "Time Waste Tracker",
        description: "Tracks and visualizes how long you spend on time wasting activities. Guides you to an optimal balance. Integrates with iPhone and Android time trackers.",
    },
    {
        name: "Mind Dump",
        description: "Write unorganized notes and thoughts here. They'll get timestamped and tagged, and you'll be able to summarize or search through them later.",
    },
    {
        name: "Time Capsule",
        description: "Write letters and notes to be sent to yourself at a future date.",
    },
    {
        name: "Life in Review",
        description: "Get daily snapshots of what you were doing at this time last year, two years ago, etc. Can be set to any frequency.",
    },
    {
        name: "Therapist",
        description: "Chat about recent life events, using techniques from cognitive behavioral therapy, stoicism, and other schools of thought.",
    },
    {
        name: "Pareto Analysis",
        description: "Get a breakdown of which tasks are contributing most to your goals, and which are not. Can be set to any time period.",
    }, ]

const toolsContent = document.getElementById("tools-content");
const toolsScrollRight = document.getElementById("tools-scroll-right");
const toolsScrollLeft = document.getElementById("tools-scroll-left");

const toolScrollSpeed = 50;  // pixels per second
const toolScrollGap = 20;  // pixels
let toolWidth = undefined;  // calculated on creation of first tool
let toolScrollTime = undefined;  // calculated on creation of first tool

const randomToolOrder = Array.from({ length: tools.length }, (_, i) => i);
randomToolOrder.sort(() => Math.random() - 0.5);
function createRandomTool() {
    const toolDiv = document.createElement('div');
    toolDiv.classList.add('tool');
    const toolIndex = randomToolOrder.shift();
    randomToolOrder.push(toolIndex);
    const tool = tools[toolIndex];
    toolDiv.innerHTML = `<h1>${tool.name}</h1><p>${tool.description}</p>`;
    return toolDiv;
}

let toolAnimationInterval = undefined;
function createTools() {
    const toolRight = createRandomTool();
    toolsScrollRight.prepend(toolRight);

    const toolLeft = createRandomTool();
    toolsScrollLeft.append(toolLeft);

    if (!toolWidth) {  // first tool created
        toolWidth = toolRight.offsetWidth;
        const toolsContentWidth = toolsContent.offsetWidth;
        const scrollWidth = toolsContentWidth + toolWidth + 2 * toolScrollGap;
        toolScrollTime = scrollWidth / toolScrollSpeed + "s";
        createToolAnimationKeyframes(scrollWidth);
    }

    toolRight.style.left = `-${toolWidth + toolScrollGap}px`;
    toolLeft.style.right = `-${toolWidth + toolScrollGap}px`;

    toolRight.style.animation = `scroll-right ${toolScrollTime} linear`;
    toolRight.addEventListener('animationend', toolRight.remove);
    toolLeft.style.animation = `scroll-left ${toolScrollTime} linear`;
    toolLeft.addEventListener('animationend', toolLeft.remove);

    return [toolRight, toolLeft];
}

function createToolAnimationKeyframes(scrollWidth) {
    const styleId = 'tool-keyframes';
    let style = document.getElementById(styleId);
    if (style) document.head.removeChild(style);
    style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
        @keyframes scroll-right {
            from {
                transform: translateX(0);
            }
            to {
                transform: translateX(${scrollWidth}px);
            }
        }
        @keyframes scroll-left {
            from {
                transform: translateX(0);
            }
            to {
                transform: translateX(-${scrollWidth}px);
            }
        }
    `;
    document.head.appendChild(style);
}

function populateToolsScroll() {
    let [toolRight, toolLeft] = createTools();
    const toolsContentWidth = toolsContent.offsetWidth;
    const nTools = Math.ceil(toolsContentWidth / (toolWidth + toolScrollGap));
    for (let i = 0; i < nTools; i++) {
        [toolRight, toolLeft] = createTools();
        toolRight.style.left = i * (toolWidth + toolScrollGap) + "px";
        toolLeft.style.right = i * (toolWidth + toolScrollGap) + "px";
    }
    const newToolInterval = (toolWidth + toolScrollGap) / toolScrollSpeed * 1000;
    toolAnimationInterval = setInterval(createTools, newToolInterval);
}
populateToolsScroll();

function resetToolScroll() {
    clearInterval(toolAnimationInterval);
    if (!document.hidden) {
        const children = Array.from(toolsScrollRight.childNodes).concat(Array.from(toolsScrollLeft.childNodes));
        children.forEach(child => child.remove());
        toolWidth = undefined;
        toolScrollTime = undefined;
        populateToolsScroll();
    }
}
document.addEventListener('visibilitychange', resetToolScroll);
window.addEventListener('resize', resetToolScroll);
