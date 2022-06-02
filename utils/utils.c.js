// utils.c.js

Utils.getRootElement = function ()
{
    if (utilsObjects.rootElement)
    {
        return utilsObjects.rootElement;
    }

    return utilsObjects.rootElement = document.getElementById("root")._reactRootContainer;
}

Utils.getRootObject = function ()
{
    if (utilsObjects.rootObject)
    {
        return utilsObjects.rootObject;
    }

    if (!this.getRootElement().hasOwnProperty("_internalRoot"))
    {
        return null;
    }

    return utilsObjects.rootObject = this.getRootElement()._internalRoot.current.memoizedState.
        element.type.prototype;
}

Utils.getRenderElement = function ()
{
    return document.getElementsByClassName("sc-bwzfXH hjlOfi").item(0);
}

Utils.getRandomArbitrary = function (min, max)
{
    return Math.random() * (max - min) + min;
}

Utils.isNotOpenChat = function ()
{
    return (document.getElementsByClassName("sc-bwzfXH iokmvL").item(0) == null);
}

Utils.isParkourMode = function ()
{
    let rootObject = this.getRootObject();

    if (!rootObject)
        return false;

    return rootObject.store.state.battleStatistics.isParkourMode;
}

Utils.isNotKillZone = function (world, position)
{
    if (!this.isParkourMode())
    {
        return true;
    }

    if (!world)
        return false;

    let bounds = world.entities_0.array_hd7ov6$_0.at(0).components_0.array.at(0).bounds;

    if (!bounds)
        return false;

    if (position.x != 0 && (position.x >= bounds.maxX || position.x <= bounds.minX))
        return false;
     
    if (position.y != 0 && (position.y >= bounds.maxY || position.y <= bounds.minY))
        return false;

    return true;

    if (position.z != 0 && (position.z >= bounds.maxZ || position.z <= bounds.minZ))
        return false;

    return true;
}

Utils.isGameReady = function ()
{
    let renderElement = this.getRenderElement();

    if (!renderElement)
        return false;

    let rootObject = this.getRootObject();

    if (!rootObject)
        return false;

    return rootObject.store.state.battleStatistics.battleLoaded;
}

Utils.errorLog = function (text)
{
    console.log("[SHIZOVAL] " + text);
}