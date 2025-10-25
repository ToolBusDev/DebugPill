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

Pure HTML + CSS, < 1 kB. Drop it in, sleep better.

## Quick start  
Use your framework's debug flag to decide whether to render it.  
Blade example:

```blade
@if (config('app.debug'))
    <link rel="stylesheet" href="/css/debug-badge.css">   {{-- I like my CSS separate --}}
    <div id="debug-badge">
        <span class="icon">🧙</span>
        <span class="main-text">Debug Mode</span>
        <span class="separator">|</span>
        <span class="sub-text">Keep going!</span>
    </div>
@endif


## Screenshot  
![DebugPill in action](https://github.com/ToolBusDev/DebugPill/blob/main/img/screenshot.png)
*Badge docked at the bottom-center while debugging*


## License
MIT © ToolBusDev – take it, it's free.
