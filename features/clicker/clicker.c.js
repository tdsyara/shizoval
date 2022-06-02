// clicker.c.js

let autoMining = false

document.addEventListener('keyup', (e) => 
{
    if (e.keyCode == 53 && Utils.isGameReady() && Utils.isNotOpenChat())
    {
        autoMining = !autoMining;
    }
})

Clicker.process = function (localPlayer)
{
    if (!localPlayer)
    {
        return;
    }

    let world = GameObjects.getWorld();

    if (!world)
    {
        return;
    }

    let gameActions = GameObjects.getGameActions();

    if (!gameActions)
    {
        return;
    }
    
    let healthComponent = GameObjects.getHealthComponent();

    if (!healthComponent)
    {
        return;
    }

    if (Utils.isParkourMode() && !healthComponent.isFullHealth() && healthComponent.alive)
    {
        gameActions.at(5).at(1).wasPressed = true;
        gameActions.at(5).at(1).wasReleased = true;
        gameActions.at(9).at(1).wasPressed = true;
        gameActions.at(9).at(1).wasReleased = true;
    
        world.frameStartTime_0 += 5000000;
    
        world.inputManager.input.processActions_0();
    
        world.frameStartTime_0 -= 5000000;
    }

    gameActions.at(6).at(1).wasPressed = true;
    gameActions.at(6).at(1).wasReleased = true;

    gameActions.at(7).at(1).wasPressed = true;
    gameActions.at(7).at(1).wasReleased = true;

    gameActions.at(8).at(1).wasPressed = true;
    gameActions.at(8).at(1).wasReleased = true;

    if (autoMining)
    {
        gameActions.at(9).at(1).wasPressed = true;
        gameActions.at(9).at(1).wasReleased = true;
    }
}