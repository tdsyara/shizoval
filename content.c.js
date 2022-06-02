// content.c.js

// Data
let init = false;

CheatMenu.init();

function reset()
{
    init = false;
    airBreak.state = false;

    document.getElementById("infoWindow").style.display = "";
    document.getElementById("gameStates").style.display = "none";

    gameObjects = 
    {
        localPlayer: null,
        world: null,
        gameActions: null,
        mines: null,
        physicsComponent: null,
        healthComponent: null,
        camera: null,
        strikerComponent: null
    };

    utilsObjects = 
    {
        rootElement: null,
        rootObject: null
    };
}

// Main event (call after initialization)
function mainEvent()
{
    try
    {
        if (!init && Utils.isGameReady())
        {
            init = true;
    
            // init code
            document.getElementById("infoWindow").style.display = "none";
            document.getElementById("gameStates").style.display = "";

            let localPlayer = GameObjects.getLocalPlayer();
                
            Striker.init(localPlayer);

            localPlayer.at(0).entity.unpossess = function () 
            {
                this.isPossessed = !1;
                reset();
            }
        }
        else if (init && !Utils.isGameReady())
        {
            reset();
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
        reset();
    }

    requestAnimationFrame(mainEvent);
}

requestAnimationFrame(mainEvent);

console.clear();
console.log("[SHIZOVAL] The cheat has been loaded");