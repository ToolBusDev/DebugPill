/*
 * dynamic-phrases_zh_cn.js - DebugPill 组件
 * 多样化短语支持，堪称码农伴侣
 * 
 * 仓库地址：https://github.com/ToolBusDev/DebugPill 
 * 版权所有 (c) 2025 ToolBusDev
 * 基于 MIT 许可证发布（详见 LICENSE 文件）
 */

// 码农冲关指南
const motivationalPhrases = [
  { emoji: '🔨', text: 'DOM树再乱，也能递归理清' },
  { emoji: '🚀', text: '闭包没吃透？多写三个立即执行函数就懂了' },
  { emoji: '💪', text: '今天啃下TS泛型，明天重构不慌' },
  { emoji: '🎯', text: '组件化拆分到位，复用率堪比npm包' },
  { emoji: '🌟', text: '从console.log到断点调试，你在进阶' },
  { emoji: '🏆', text: '性能优化掉100ms，也是打败了90%的前端' },
  { emoji: '🌱', text: 'Grid练3天，布局再也不用float' },
  { emoji: '⚡', text: '防抖节流写得溜，用户体验升三阶' },
  { emoji: '🌈', text: '跨域问题解决时，空气都是甜的' },
  { emoji: '🔥', text: '把每个bug变成博客素材，血赚' },
  { emoji: '🧩', text: '状态管理理清了，项目就像拼好的乐高' },
  { emoji: '📈', text: '从复制粘贴到手写源码，这步叫成长' },
  { emoji: '🛠️', text: 'webpack配置能改了？你已不是新手' },
  { emoji: '🧗', text: '啃完MDN文档，bug见你都绕路' },
  { emoji: '🎇', text: '首屏加载进3秒，值得开瓶可乐' },
  { emoji: '🦸', text: '能兼容IE11的，都是真勇士' },
  { emoji: '💡', text: '复用组件少写100行，摸鱼时间+10分钟' },
  { emoji: '🚴', text: '框架更新再快，基础扎实就不怕' },
  { emoji: '🏁', text: '线上无报错的夜晚，睡得特别香' },
  { emoji: '💎', text: '你写的不是代码，是用户看不见的温柔' }
];

// 开发中的小确幸
const positivePhrases = [
  { emoji: '✅', text: '测试用例全绿，今天运气爆棚' },
  { emoji: '☀️', text: '热重载一次生效，像阳光刚好照进窗台' },
  { emoji: '🍃', text: '动画丝滑运行，心情也跟着飘' },
  { emoji: '🤝', text: '接口文档和实际返回一致，感动哭了' },
  { emoji: '🎨', text: 'UI稿还原度200%，我不做美工可惜了' },
  { emoji: '📦', text: 'npm install没报错，今天适合发版' },
  { emoji: '💬', text: 'console干干净净，像刚扫过的房间' },
  { emoji: '🚀', text: '打包体积比上次小了200KB，进步！' },
  { emoji: '👥', text: '同事夸你代码好读，成就感拉满' },
  { emoji: '🌙', text: '深夜改完bug，星星都在给你点赞' },
  { emoji: '📱', text: '响应式在所有设备生效，完美适配' },
  { emoji: '🔄', text: '状态更新符合预期，数据流向超清晰' },
  { emoji: '✨', text: '偶然发现一个优雅的API，像捡到宝' },
  { emoji: '☕', text: '写完一个组件，刚好赶上下午茶' },
  { emoji: '📚', text: '新学的API今天用上了，学以致用' },
  { emoji: '🎉', text: '项目上线零报错，团队聚餐安排上' },
  { emoji: '🌱', text: '注释写得完整，下次看自己代码不骂娘' },
  { emoji: '⚖️', text: '代码提交前lint通过，格式党舒适' },
  { emoji: '🌈', text: '修复的bug被用户夸了，值了' },
  { emoji: '💖', text: '你写的交互，有人觉得很贴心' }
];

// 码农的日常
const humorousPhrases = [
  { emoji: '🤡', text: '居中三小时，最后用了margin:0 auto' },
  { emoji: '💣', text: '改一行代码，测试报了10个新bug' },
  { emoji: '🧟', text: 'IE11：我还能再战5年！' },
  { emoji: '🔄', text: 'npm audit fix后，项目直接跑不起来了' },
  { emoji: '🕵️', text: '找了半天bug，发现是少写个分号' },
  { emoji: '🎭', text: '白天：这需求很简单 晚上：我在干嘛' },
  { emoji: '📉', text: '性能优化：从3秒到2.9秒，也算优化了' },
  { emoji: '🤷', text: '用户说按钮点不动？哦，被div挡住了' },
  { emoji: '🚨', text: 'console.log调试法，前端最后的倔强' },
  { emoji: '🏴‍☠️', text: '祖传代码不敢动，只能在旁边加注释' },
  { emoji: '🎮', text: '调试像打游戏，复活点是上次提交' },
  { emoji: '🍜', text: '改bug到凌晨，泡面比女朋友还暖' },
  { emoji: '🪞', text: '对着屏幕：这代码谁写的？哦是我上周' },
  { emoji: '🎢', text: '需求变更比过山车还刺激，胃有点受不了' },
  { emoji: '🧩', text: '组件复用？我复制粘贴也挺快的' },
  { emoji: '📜', text: '注释：此处有坑 三个月后：坑在哪？' },
  { emoji: '💥', text: '以为是逻辑错，结果是拼写错误（悲）' },
  { emoji: '🌪️', text: 'webpack配置：我看懂了 第二天：我是谁' },
  { emoji: '👻', text: '线上偶现bug，本地死活复现不了' },
  { emoji: '🎤', text: '产品：这个很简单 我：你行你上（小声）' }
];

// 开发中的小放松
const casualPhrases = [
  { emoji: '☕', text: '编译ing，先喝口咖啡等会儿' },
  { emoji: '🐱', text: '代码跑着，摸会儿鱼不过分吧' },
  { emoji: '🎵', text: '耳机里放着lofi，循环写CSS' },
  { emoji: '🍪', text: '改完这个组件，奖励自己块饼干' },
  { emoji: '🌿', text: '深呼吸，这个bug没那么难' },
  { emoji: '🚶', text: '卡壳了？去走廊走两圈灵感就来' },
  { emoji: '🌮', text: '午餐吃 tacos，代码也会变美味' },
  { emoji: '😴', text: '午休15分钟，下午debug效率翻倍' },
  { emoji: '🌅', text: '夕阳照屏幕上，代码都温柔了' },
  { emoji: '🎮', text: '把找bug当解谜游戏，就不烦了' },
  { emoji: '📱', text: '摸鱼看眼手机，回来就有思路了' },
  { emoji: '🍉', text: '夏天配西瓜，调试也不觉得热了' },
  { emoji: '🛋️', text: '累了就瘫会儿，电脑不会跑' },
  { emoji: '🎧', text: '切首快歌，打包速度都变快了' },
  { emoji: '🧸', text: '桌上的玩偶说：休息一下吧' },
  { emoji: '🌌', text: '深夜debug，星星是最佳陪伴' },
  { emoji: '🍵', text: '泡杯茶，代码和心情都慢慢捋' },
  { emoji: '📖', text: '卡壳时翻文档，假装在学习' },
  { emoji: '🎨', text: '调个好看的按钮颜色，心情up' },
  { emoji: '🐶', text: '想不出思路？看看同事的狗勾照片' }
];

// 开发真相罢了
const cynicalPhrases = [
  { emoji: '🕳️', text: '你修复的bug，会在三个月后以新形式出现' },
  { emoji: '📉', text: '优化了性能，产品说要加个更耗性能的功能' },
  { emoji: '💔', text: '写得再优雅的代码，迟早被新人重构' },
  { emoji: '🌧️', text: '需求文档越改越厚，你的头发越来越薄' },
  { emoji: '⚰️', text: '上线前测试全过，线上必现一个新bug' },
  { emoji: '🔄', text: '你以为的最终版，只是第18版' },
  { emoji: '🧟', text: '祖传代码里的注释，比鬼故事还吓人' },
  { emoji: '🌪️', text: '刚理清状态流，产品说要改交互逻辑' },
  { emoji: '🚫', text: '花三天封装的组件，只用了一次' },
  { emoji: '💸', text: '加班改的bug，用户根本没发现' },
  { emoji: '🪞', text: '你讨厌的代码风格，迟早会被迫接受' },
  { emoji: '📜', text: '文档写得再全，没人看等于白写' },
  { emoji: '🎭', text: '评审时说的“简单改改”，实则重写' },
  { emoji: '🦲', text: '调试到凌晨，发现是后端接口错了' },
  { emoji: '💣', text: '你越怕哪个浏览器出问题，它偏出问题' },
  { emoji: '⏳', text: '计划两周做完，实际要四周，这很正常' },
  { emoji: '🚴', text: '框架更新速度，比你学的速度快三倍' },
  { emoji: '🥀', text: '你精心设计的交互，用户根本不用' },
  { emoji: '🩸', text: '线上bug越修越多，像打不完的怪' },
  { emoji: '🏴‍☠️', text: '重构计划永远停留在“下次一定”' }
];

/* ---------- POOL ---------- */
var allPhrases = []
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
