// gameObjects.c.js

GameObjects.getWorld = function (localPlayer)
{
    if (!localPlayer)
        return null;

    return localPlayer.at(0).world;
}

GameObjects.getGameActions = function (world)
{
    if (!world)
        return null;

    return Array.from(world.inputManager.input.gameActions_0.map);
}

GameObjects.getMines = function (world)
{
    if (!world)
        return null;

    return world.entities_0.array_hd7ov6$_0.at(0).components_0.array.at(15);
}

GameObjects.getLocalPlayer = function ()
{
    let rootObject = Utils.getRootObject();

    if (!rootObject)
        return null;
    
    let subs = rootObject.store.subscribers.array_hd7ov6$_0;

    if (!subs)
        return null;
    
    for (let i = 0; i < subs.length; i++)
    {
        if (subs.at(i).hasOwnProperty("tank") && subs.at(i).tank.tag == "LocalTank")
            return subs.at(i).tank.components_0.array;
    }
    
    return null;
}

GameObjects.getPhysicsComponent = function (localPlayer)
{
    if (!localPlayer)
        return null;

    for (let i = 0; i < localPlayer.length; i++)
    {
        if (localPlayer.at(i).hasOwnProperty("tankPhysicsComponent_tczrao$_0"))
            return localPlayer.at(i).tankPhysicsComponent_tczrao$_0;
    }

    return null;
}

// ПЕРЕДЕЛАТЬ
GameObjects.getHealthComponent = function (localPlayer)
{
    if (!localPlayer)
        return null;

        for (let i = 0; i < localPlayer.length; i++)
        {
            if (localPlayer.at(i).hasOwnProperty("health_15qhv9$_0"))
                return localPlayer.at(i);
        }
    
        return null;
}

GameObjects.getCamera = function (localPlayer)
{
    if (!localPlayer)
        return null;

    for (let i = 0; i < localPlayer.length; i++)
    {
        if (localPlayer.at(i).hasOwnProperty("followCamera_w8ai3w$_0"))
            return localPlayer.at(i).followCamera_0.currState_0;
    }

    return null; 
}

GameObjects.getStrikerComponent = function (localPlayer)
{
    if (!localPlayer)
        return null;

    for (let i = 0; i < localPlayer.length; i++)
    {
        if (localPlayer.at(i).hasOwnProperty("strikerWeapon_jjsiik$_0"))
            return localPlayer.at(i).strikerWeapon_jjsiik$_0;
    }

    return null;
}