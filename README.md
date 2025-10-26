# DebugPill

A lightweight, zero-dependency web debugging badge.  
One look at the floating capsule and you'll never push debug mode to prod again.

## Backstory  
After that one time I shipped a debug build to production, every deploy has felt like a heist.  

I wanted something dead simple—no plugins, no frameworks, no config files.  
Copy, paste, done.  

When in doubt, ask AI. That's how DebugPill was born.

## What it is  
- Debug on → a tiny capsule badge floats on the page, impossible to miss.  
- Prod on → set your framework flag and the badge simply never loads.  

Pure HTML + CSS, ~1 kB. Drop it in, sleep better.
If you don't mind a slight increase in size, feel free to enable the JS dynamic phrase library and experience the little surprise with each refresh.

## Quick start  
Use your framework's debug flag to decide whether to render it.  
Blade example:

```blade
{{-- app.blade.php --}}
@if (config('app.debug'))
    <link rel="stylesheet" href="/css/debug-pill-high-contrast.css">
    <div id="debug-badge">
        <span class="icon">🧙</span>
        <span class="main-text">Debug Mode</span>
        <span class="separator">|</span>
        <span class="sub-text">Keep going!</span>
    </div>
    <!-- <script src="/js/dynamic-phrases_en.js"></script> -->
@endif
```

## Screenshot  
![DebugPill (Default Static Version)](https://github.com/ToolBusDev/DebugPill/blob/main/img/debugpill-default-static.png)  
*Badge docked at the bottom-center while debugging (default static phrase: "Keep going!")*  

![DebugPill (Dynamic Phrases Version)](https://github.com/ToolBusDev/DebugPill/blob/main/img/debugpill-highcontrast-metaverse-en.png)  
*DebugPill with JS dynamic phrase library enabled—showing a random phrase and icon on refresh*


## License
MIT © ToolBusDev – take it, it's free.
