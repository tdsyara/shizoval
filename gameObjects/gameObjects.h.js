// gameObjects.h.js

class GameObjects
{
    // World
    getWorld                = null; // args: 1 - localPlayer
    getGameActions          = null; // args: 1 - world
    getMines                = null; // args: 1 - world

    // Tank
    getLocalPlayer          = null; // args: void
    getPhysicsComponent     = null; // args: 1 - localPlayer
    getHealthComponent      = null; // args: 1 - localPlayer
    getCamera               = null; // args: 1 - localPlayer

    // Weapon
    getStrikerComponent     = null; // args: 1 - localPlayer
}