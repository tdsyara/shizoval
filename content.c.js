// content.c.js

// Data
let init = false;

CheatMenu.init();

// Main event (call after initialization)
(() =>
{
    console.clear();
    console.log("[SHIZOVAL] The cheat has been loaded");

    setInterval(() =>
    {
        try
        {
            if (!init && Utils.isGameReady())
            {
                init = true;
    
                console.log("[SHIZOVAL] Battle is loaded");

                // init code
                document.getElementById("infoWindow").style.display = "none";
                document.getElementById("gameStates").style.display = "";

                let localPlayer = GameObjects.getLocalPlayer();
                
                Striker.init(localPlayer);
            }
            else if (init && !Utils.isGameReady())
            {
                init = false;
    
                console.log("[SHIZOVAL] Battle is unloaded");

                // cleanup code
                airBreak.state = false;

                document.getElementById("infoWindow").style.display = "";
                document.getElementById("gameStates").style.display = "none";
            }
    
            if (init)
            {
                let localPlayer = GameObjects.getLocalPlayer();

                // process functions
                AirBreak.process(localPlayer);
                Clicker.process(localPlayer);
                Striker.process(localPlayer);
                RemoveMines.process(localPlayer);
                WallHack.process(localPlayer);

                CheatMenu.setStates();
            }
        }   
        catch (e)
        {
            Utils.errorLog(e);
        }
    });

})();