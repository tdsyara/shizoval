// removeMines.c.js

RemoveMines.process = function (localPlayer)
{
    if (!localPlayer)
    {
        return;
    }

    let world = GameObjects.getWorld(localPlayer);

    if (!world)
    {
        return;
    }

    let mines = GameObjects.getMines(world);

    if (!mines)
    {
        return;
    }

    var n;
    for (n = mines.minesByUser_0.keys.iterator(); n.hasNext();) 
    {
        var o = n.next();
        mines.removeAllMines_0(o)
    }

}