// airBreak.c.js

document.addEventListener('keyup', (e) => 
{
    if (e.keyCode == 16 && e.location == 2 && Utils.isGameReady() && Utils.isNotOpenChat())
    {
        airBreak.isShiftPressed = true;
    }
})

document.addEventListener('keyup', (e) => 
{
    if (e.keyCode == 74 && Utils.isGameReady() && Utils.isNotOpenChat())
    {
        airBreak.antiAim = !airBreak.antiAim;
    }
})

AirBreak.process = function (localPlayer)
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

    let physicsComponent = GameObjects.getPhysicsComponent();

    if (!physicsComponent)
    {
        return;
    }

    let camera = GameObjects.getCamera();

    if (!camera)
    {
        return;
    }

    let bodies = world.physicsScene_0.bodies_0.array_hd7ov6$_0;

    if (!bodies)
    {
        return;
    }

    if (airBreak.isShiftPressed)
    {
        airBreak.isShiftPressed = false;

        airBreak.state = !airBreak.state;

        if (airBreak.state)
        {
            airBreak.position.x = physicsComponent.body.state.position.x;
            airBreak.position.y = physicsComponent.body.state.position.y;
            airBreak.position.z = physicsComponent.body.state.position.z;

            airBreak.velocity.x = 0;
            airBreak.velocity.y = 0;
            airBreak.velocity.z = 0;
        }
        else
        {
            physicsComponent.body.state.velocity.x = 0;
            physicsComponent.body.state.velocity.y = 0;
            physicsComponent.body.state.velocity.z = 0;

            physicsComponent.body.state.angularVelocity.x = 0;
            physicsComponent.body.state.angularVelocity.y = 0;
            physicsComponent.body.state.angularVelocity.z = 0;
        
            for (let i = 0; i < bodies.length; i++) 
            {
                bodies.at(i).movable = true;
            }
        }
    }

    if (!airBreak.state)
        return;

    let direction = camera.direction;

    airBreak.velocity.x = 0;
    airBreak.velocity.y = 0;

    if (KeyPressing.isKeyPressed(87 /*key: W*/) && Utils.isNotOpenChat())
    {
        let position = 
        {
            x: airBreak.position.x + airBreak.speed * Math.sin(-direction),
            y: airBreak.position.y + airBreak.speed * Math.cos(-direction),
            z: 0
        };

        if (Utils.isNotKillZone(world, position))
        {
            airBreak.position.x = position.x;
            airBreak.position.y = position.y;

            airBreak.velocity.x += physicsComponent.body.maxSpeedXY * Math.sin(-direction);
            airBreak.velocity.y += physicsComponent.body.maxSpeedXY * Math.cos(-direction);
        }
    }

    if (KeyPressing.isKeyPressed(83 /*key: S*/) && Utils.isNotOpenChat())
    {
        let position = 
        {
            x: airBreak.position.x - airBreak.speed * Math.sin(-direction),
            y: airBreak.position.y - airBreak.speed * Math.cos(-direction),
            z: 0
        };

        if (Utils.isNotKillZone(world, position))
        {
            airBreak.position.x = position.x;
            airBreak.position.y = position.y;

            airBreak.velocity.x -= physicsComponent.body.maxSpeedXY * Math.sin(-direction);
            airBreak.velocity.y -= physicsComponent.body.maxSpeedXY * Math.cos(-direction);
        }
    }

    if (KeyPressing.isKeyPressed(65 /*key: A*/) && Utils.isNotOpenChat())
    {
        let position = 
        {
            x: airBreak.position.x - airBreak.speed * Math.sin(-(direction - Math.PI / 2)),
            y: airBreak.position.y - airBreak.speed * Math.cos(-(direction - Math.PI / 2)),
            z: 0
        };

        if (Utils.isNotKillZone(world, position))
        {
            airBreak.position.x = position.x;
            airBreak.position.y = position.y;

            airBreak.velocity.x -= physicsComponent.body.maxSpeedXY * Math.sin(-(direction - Math.PI / 2));
            airBreak.velocity.y -= physicsComponent.body.maxSpeedXY * Math.cos(-(direction - Math.PI / 2));
        }
    }

    if (KeyPressing.isKeyPressed(68 /*key: D*/) && Utils.isNotOpenChat())
    {
        let position = 
        {
            x: airBreak.position.x + airBreak.speed * Math.sin(-(direction - Math.PI / 2)),
            y: airBreak.position.y + airBreak.speed * Math.cos(-(direction - Math.PI / 2)),
            z: 0
        };

        if (Utils.isNotKillZone(world, position))
        {
            airBreak.position.x = position.x;
            airBreak.position.y = position.y;

            airBreak.velocity.x += physicsComponent.body.maxSpeedXY * Math.sin(-(direction - Math.PI / 2));
            airBreak.velocity.y += physicsComponent.body.maxSpeedXY * Math.cos(-(direction - Math.PI / 2));
        }
    }

    if (KeyPressing.isKeyPressed(81 /*key: Q*/) && Utils.isNotOpenChat())
    {
        airBreak.position.z += airBreak.speed;
    }

    if (KeyPressing.isKeyPressed(69 /*key: E*/) && Utils.isNotOpenChat())
    {
        airBreak.position.z -= airBreak.speed;
    }

    if (KeyPressing.isKeyPressed(37 /*key: LEFT*/) && Utils.isNotOpenChat())
    {
        if (airBreak.speed > 1)
            airBreak.speed -= 1;
    }

    if (KeyPressing.isKeyPressed(39 /*key: RIGHT*/) && Utils.isNotOpenChat())
    {
        airBreak.speed += 1;
    }

    if (Utils.isParkourMode())
    {
        for (let i = 0; i < bodies.length; i++) 
        {
            bodies.at(i).movable = false;
        }

        if (airBreak.antiAim)
        {
            let bounds = world.entities_0.array_hd7ov6$_0.at(0).components_0.array.at(0).bounds;

            physicsComponent.interpolatedPosition.x = Utils.getRandomArbitrary(bounds.minX, bounds.maxX);
            physicsComponent.interpolatedPosition.y = Utils.getRandomArbitrary(bounds.minY, bounds.maxY);
            physicsComponent.interpolatedPosition.z = Utils.getRandomArbitrary(bounds.maxZ + 500, bounds.maxZ + 500);
        }

        physicsComponent.body.state.position.x = airBreak.position.x;
        physicsComponent.body.state.position.y = airBreak.position.y;
    }
    else
    {
        physicsComponent.body.state.velocity.x = airBreak.velocity.x;
        physicsComponent.body.state.velocity.y = airBreak.velocity.y;
    }

    physicsComponent.body.state.position.z = airBreak.position.z;
    physicsComponent.body.state.velocity.z = airBreak.velocity.z;

    physicsComponent.body.state.orientation.w = Math.sin(-(camera.direction - Math.PI) / 2);
    physicsComponent.body.state.orientation.z = Math.cos(-(camera.direction - Math.PI) / 2);
    physicsComponent.body.state.orientation.x = 0;
    physicsComponent.body.state.orientation.y = 0;

    physicsComponent.body.state.angularVelocity.x = 0;
    physicsComponent.body.state.angularVelocity.y = 0;
    physicsComponent.body.state.angularVelocity.z = 0;
}