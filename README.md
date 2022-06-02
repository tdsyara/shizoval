# shizoval
Free open-source game cheat for Tanki Online.

## Features
*   **AirBreak** - air walk
*   **Clicker** - auto use FAK/supplies/mines
*   **FPS Up** - removal of all mines
*   **Striker Hack** - one hit kill/infinite aiming/no laser
*   **WallHack** - render glow effect on entities

## Getting started

*   **1.** Install **Tampermonkey** - [here](https://www.tampermonkey.net/)
*   **2.** Create a new script
*   **3.** Paste this code
```js
// ==UserScript==
// @name         shizoval
// @version      0.2
// @description  Free open-source game cheat for Tanki Online.
// @author       sheezzmee
// @match        https://*.tankionline.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tankionline.com

// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require      https://raw.githubusercontent.com/brunoinds/isKeyPressed/main/isKeyPressed.min.js

// @require      https://raw.githubusercontent.com/sheezzmee/shizoval/main/utils/utils.h.js
// @require      https://raw.githubusercontent.com/sheezzmee/shizoval/main/utils/utils.c.js

// @require      https://raw.githubusercontent.com/sheezzmee/shizoval/main/gameObjects/gameObjects.h.js
// @require      https://raw.githubusercontent.com/sheezzmee/shizoval/main/gameObjects/gameObjects.c.js

// @require      https://raw.githubusercontent.com/sheezzmee/shizoval/main/features/airBreak/airBreak.h.js
// @require      https://raw.githubusercontent.com/sheezzmee/shizoval/main/features/airBreak/airBreak.c.js

// @require      https://raw.githubusercontent.com/sheezzmee/shizoval/main/features/clicker/clicker.h.js
// @require      https://raw.githubusercontent.com/sheezzmee/shizoval/main/features/clicker/clicker.c.js

// @require      https://raw.githubusercontent.com/sheezzmee/shizoval/main/features/removeMines/removeMines.h.js
// @require      https://raw.githubusercontent.com/sheezzmee/shizoval/main/features/removeMines/removeMines.c.js

// @require      https://raw.githubusercontent.com/sheezzmee/shizoval/main/features/striker/striker.h.js
// @require      https://raw.githubusercontent.com/sheezzmee/shizoval/main/features/striker/striker.c.js

// @require      https://raw.githubusercontent.com/sheezzmee/shizoval/main/features/wallHack/wallHack.h.js
// @require      https://raw.githubusercontent.com/sheezzmee/shizoval/main/features/wallHack/wallHack.c.js

// @require      https://raw.githubusercontent.com/sheezzmee/shizoval/main/GUI/cheatMenu.r.js
// @require      https://raw.githubusercontent.com/sheezzmee/shizoval/main/GUI/cheatMenu.h.js
// @require      https://raw.githubusercontent.com/sheezzmee/shizoval/main/GUI/cheatMenu.c.js

// @require      https://raw.githubusercontent.com/sheezzmee/shizoval/main/content.c.js
// ==/UserScript==
```

## Binds
* `R. Shift` - toggle AirBreak
* `LEFT` - decrease AirBreak speed
* `RIGHT` - increase AirBreak speed
* `Q` - up position for AirBreak
* `E`- down position for AirBreak
* `J` - toggle Anti-Aim
* `R` - explode the missiles (if the missiles are stuck and nothing happens)
* `INSERT` - toggle visible cheat menu