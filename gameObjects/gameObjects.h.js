// gameObjects.h.js

class GameObjects
{
    // World
    getWorld                = null; // args: void
    getGameActions          = null; // args: void
    getMines                = null; // args: void

    // Tank
    getLocalPlayer          = null; // args: void
    getPhysicsComponent     = null; // args: void
    getHealthComponent      = null; // args: void
    getCamera               = null; // args: void

    // Weapon
    getStrikerComponent     = null; // args: void
}

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
}