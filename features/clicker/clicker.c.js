// clicker.c.js

Clicker.process = function (localPlayer)
{
    if (!localPlayer)
    {
        Utils.errorLog("Clicker.process: localPlayer == null");
        return;
    }

    let world = GameObjects.getWorld(localPlayer);

    if (!world)
    {
        Utils.errorLog("Clicker.process: world == null");
        return;
    }

    let gameActions = GameObjects.getGameActions(world);

    if (!gameActions)
    {
        Utils.errorLog("Clicker.process: gameActions == null");
        return;
    }
    
    let healthComponent = localPlayer.at(1);

    if (!healthComponent)
    {
        Utils.errorLog("Clicker.process: healthComponent == null");
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
}