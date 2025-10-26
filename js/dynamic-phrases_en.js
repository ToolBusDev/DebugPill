/*
 * dynamic-phrases_en.js - Part of DebugPill
 * Diverse phrases that more than earn the title "developer's sidekick".
 * 
 * Repository: https://github.com/ToolBusDev/DebugPill 
 * Copyright (c) 2025 ToolBusDev
 * Licensed under the MIT License (see LICENSE file for details)
 */

// Frontend survival guide
const motivationalPhrases = [
    { emoji: '🔨', text: 'No DOM is too messy for recursion' },
    { emoji: '🚀', text: 'Write three IIFEs—closures will click' },
    { emoji: '💪', text: 'Master generics today, refactor fearlessly tomorrow' },
    { emoji: '🎯', text: 'Smart component splits = npm-level reuse' },
    { emoji: '🌟', text: 'From console.log to breakpoints—you are leveling up' },
    { emoji: '🏆', text: 'Shave 100 ms off load time and you beat 90% of devs' },
    { emoji: '🌱', text: 'Three days of CSS Grid and floats are history' },
    { emoji: '⚡', text: 'Debounced & throttled—UX score tripled' },
    { emoji: '🌈', text: 'Solve CORS and the air smells sweeter' },
    { emoji: '🔥', text: 'Turn every bug into a blog post—instant win' },
    { emoji: '🧩', text: 'Clear state = project as satisfying as finished Lego' },
    { emoji: '📈', text: 'From copy-paste to source author—that is growth' },
    { emoji: '🛠️', text: 'Tweak webpack and you are no longer a rookie' },
    { emoji: '🧗', text: 'Finish MDN docs—bugs will fear you' },
    { emoji: '🎇', text: 'First paint under 3s—time for a cola' },
    { emoji: '🦸', text: 'Anyone who still supports IE11 is a true warrior' },
    { emoji: '💡', text: 'Reusable chunks = 100 lines saved = 10 extra chill mins' },
    { emoji: '🚴', text: 'Frameworks change, fundamentals stay—pedal steady' },
    { emoji: '🏁', text: 'Zero prod errors tonight—best sleep ever' },
    { emoji: '💎', text: 'You write invisible kindness for users—keep going' }
];

// Small wins in dev life
const positivePhrases = [
    { emoji: '✅', text: 'All tests green—today is lucky' },
    { emoji: '☀️', text: 'Hot reload works on first try—sun through the window' },
    { emoji: '🍃', text: 'CSS animations smooth—mood floats too' },
    { emoji: '🤝', text: 'API docs match responses—almost cried' },
    { emoji: '🎨', text: '99% UI fidelity—designer said "not bad"' },
    { emoji: '📦', text: 'npm install zero errors—today is ship day' },
    { emoji: '💬', text: 'Console clean—like a swept room' },
    { emoji: '🚀', text: 'Bundle 200KB smaller—progress!' },
    { emoji: '👥', text: 'Colleague calls your code readable—pride unlocked' },
    { emoji: '🌙', text: 'Midnight bug fixed—stars are clapping' },
    { emoji: '📱', text: 'Responsive everywhere—perfect fit' },
    { emoji: '🔄', text: 'State updates crystal clear—data flows like water' },
    { emoji: '✨', text: 'Found an elegant API—treasure spotted' },
    { emoji: '☕', text: 'Component done before afternoon tea—lucky' },
    { emoji: '📚', text: 'Used a new API you just learned—knowledge in action' },
    { emoji: '🎉', text: 'Zero errors post-launch—team dinner incoming' },
    { emoji: '🌱', text: 'Comments complete—future you will not curse' },
    { emoji: '⚖️', text: 'Lint passed pre-commit—format nerds rejoice' },
    { emoji: '🌈', text: 'Users praised the bug fix—worth it' },
    { emoji: '💖', text: 'Someone found your micro-interaction thoughtful' }
];

// Daily dev self-roast
const humorousPhrases = [
    { emoji: '🤡', text: 'Centered div in 3h, ended up with margin:0 auto' },
    { emoji: '💣', text: 'Changed one line—10 new bugs say hi' },
    { emoji: '🧟', text: 'IE11: "I can survive 5 more years!" Me: Please no' },
    { emoji: '🔄', text: 'Ran npm audit fix—project refuses to start' },
    { emoji: '🕵️', text: 'Hunted bug for hours—missed semicolon wins' },
    { emoji: '🎭', text: 'Morning: "Easy feature" Night: "What am I"' },
    { emoji: '📉', text: 'Optimized 3s→2.9s. Close enough' },
    { emoji: '🤷', text: 'User: "Button dead" Me: overlapping div strikes again' },
    { emoji: '🚨', text: 'console.log is the frontend’s last stand' },
    { emoji: '🏴‍☠️', text: 'Scared of legacy? Add comments nearby and run' },
    { emoji: '🎮', text: 'Debug = game—respawn at last commit' },
    { emoji: '🍜', text: 'Debug till midnight—ramen warmer than partner' },
    { emoji: '🪞', text: '"Who wrote this?" git blame: past me—oops' },
    { emoji: '🎢', text: 'Requirements faster than coaster—stomach hurts' },
    { emoji: '🧩', text: 'Component reuse? Copy-paste works too' },
    { emoji: '📜', text: 'Comment: "Here be dragons" Later: "Where dragons?"' },
    { emoji: '💥', text: 'Thought it was logic—typo wins (sad)' },
    { emoji: '🌪️', text: 'Webpack config: "I get it" Tomorrow: "Who am I"' },
    { emoji: '👻', text: 'Prod bug exists, local ghosts in machine' },
    { emoji: '🎤', text: 'PM: "It’s simple" Me: *mumbles* "You do it"' }
];

// Micro-breaks while coding
const casualPhrases = [
    { emoji: '☕', text: 'Compiling... might as well sip coffee' },
    { emoji: '🐱', text: 'Code running—tiny slack won’t hurt' },
    { emoji: '🎵', text: 'Lo-fi on loop, CSS in sync' },
    { emoji: '🍪', text: 'Fix this, earn a cookie' },
    { emoji: '🌿', text: 'Breathe—this bug isn’t scary' },
    { emoji: '🚶', text: 'Stuck? Hallway walk—ideas will hit' },
    { emoji: '🌮', text: 'Tacos for lunch = tastier code' },
    { emoji: '😴', text: '15-min nap = double debug speed' },
    { emoji: '🌅', text: 'Sunlight on screen—code feels softer' },
    { emoji: '🎮', text: 'Treat hunt like puzzle—less annoying' },
    { emoji: '📱', text: 'Quick phone check—ideas come back' },
    { emoji: '🍉', text: 'Watermelon in summer—debug feels cooler' },
    { emoji: '🛋️', text: 'Tired? Slump a bit—laptop won’t flee' },
    { emoji: '🎧', text: 'Upbeat songs—bundle feels faster' },
    { emoji: '🧸', text: 'Desk plushie says: "Take a break"' },
    { emoji: '🌌', text: 'Midnight debug—stars keep company' },
    { emoji: '🍵', text: 'Brew tea—code and mood untangle' },
    { emoji: '📖', text: 'Stuck? Read docs—call it study' },
    { emoji: '🎨', text: 'Tweak button color—mood instantly better' },
    { emoji: '🐶', text: 'No ideas? View coworker’s dog pics' }
];

// Hard truths of the job
const cynicalPhrases = [
    { emoji: '🕳️', text: 'The bug you fixed will return in 3 months, rebranded' },
    { emoji: '📉', text: 'You optimize? PM adds a heavier feature' },
    { emoji: '💔', text: 'Your elegant code? A junior will refactor it soon' },
    { emoji: '🌧️', text: 'Docs thicken—your hair thins' },
    { emoji: '⚰️', text: 'All tests green pre-launch? Prod spawns a new bug' },
    { emoji: '🔄', text: 'Your "final" version is just v18' },
    { emoji: '🧟', text: 'Legacy comments? Horror stories in ASCII' },
    { emoji: '🌪️', text: 'You grasp state flow? PM rewrites interactions' },
    { emoji: '🚫', text: '3 days on a component—used once' },
    { emoji: '💸', text: 'Overtime bug fix—users never notice' },
    { emoji: '🪞', text: 'Hate that style? You’ll learn to live with it' },
    { emoji: '📜', text: 'Novel-length docs? No one will read them' },
    { emoji: '🎭', text: 'Review: "Small changes" Reality: full rewrite' },
    { emoji: '🦲', text: 'Debug till dawn—backend API issue' },
    { emoji: '💣', text: 'Browser you fear most? It breaks first' },
    { emoji: '⏳', text: '2-week estimate? Real time: 4 weeks' },
    { emoji: '🚴', text: 'Frameworks update faster than you can learn' },
    { emoji: '🥀', text: 'Perfect interactions? Users won’t use them' },
    { emoji: '🩸', text: 'Production bugs multiply—endless monsters' },
    { emoji: '🏴‍☠️', text: 'Refactor plans? Always "next time"' }
];


/* ---------- POOL ---------- */
const allPhrases = []
    .concat(motivationalPhrases.map(p => ({ ...p, type: 'motivational' })))
    .concat(positivePhrases.map(p => ({ ...p, type: 'positive' })))
    .concat(humorousPhrases.map(p => ({ ...p, type: 'humorous' })))
    .concat(casualPhrases.map(p => ({ ...p, type: 'casual' })))
    .concat(cynicalPhrases.map(p => ({ ...p, type: 'cynical' })));

/* ---------- Random Phrase ---------- */
function randomMetaPhrase() {
    const randomIndex = Math.floor(Math.random() * allPhrases.length);
    return allPhrases[randomIndex];
};

/* ---------- Inject into Debug Badge ---------- */
document.addEventListener('DOMContentLoaded', () => {
    const badge = document.getElementById('debug-badge');
    if (!badge) return;

    const { emoji, text } = randomMetaPhrase();
    const iconElement = badge.querySelector('.icon');
    if (iconElement) iconElement.textContent = emoji;

    const textElement = badge.querySelector('.sub-text');
    if (textElement) textElement.textContent = text;

});
