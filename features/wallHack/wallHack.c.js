// wallHack.c.js

colorEnemy = 10027085;
colorTarget = 6750054;

function drawEsp(player, color)
{
    let weaponSkin = player.at(7).weaponSkin_3qscef$_0.root_s4vp75$_0;
    let weaponChildren = weaponSkin.children_ich852$_0.array;

    let hullSkin = player.at(7).weaponSkin_3qscef$_0.hullSkinComponent_p2c7jk$_0.hull_tmiccz$_0;
    let hullChildren = hullSkin.children_ich852$_0.array;

    weaponSkin.outlined = true;
    weaponSkin.outlineBold = false;
    weaponSkin.outlineColor = color;

    hullSkin.outlined = true;
    hullSkin.outlineBold = false;
    hullSkin.outlineColor = color;

    for (let i = 0; i < weaponChildren.length; i++)
    {
        weaponChildren.at(i).outlined = true;
        weaponChildren.at(i).outlineBold = false;
        weaponChildren.at(i).outlineColor = color;
    }

    for (let i = 0; i < hullChildren.length; i++)
    {
        hullChildren.at(i).outlined = true;
        hullChildren.at(i).outlineBold = false;
        hullChildren.at(i).outlineColor = color;
    }
}

WallHack.process = function (localPlayer)
{
    if (!localPlayer)
    {
        Utils.errorLog("WallHack.process: localPlayer == null");
        return;
    }

    let world = GameObjects.getWorld(localPlayer);

    if (!world)
    {
        Utils.errorLog("WallHack.process: world == null");
        return;
    }

    let bodies = world.physicsScene_0.bodies_0.array_hd7ov6$_0;

    for (let i = 0; i < bodies.length; i++)
    {
        if ((localPlayer.at(0).team.name != bodies.at(i).data.components_0.array.at(0).team.name) ||
        localPlayer.at(0).team.name == "NONE")
        {
            let color = colorEnemy;

            if (bodies.at(i).data.components_0.array.at(4).userId == targetId)
            {
                color = colorTarget;
            }

            drawEsp(bodies.at(i).data.components_0.array, color);
        }
    }
}