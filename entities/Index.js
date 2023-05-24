import Matter from "matter-js";
import PlayerCharacter from "../components/playerCharacter/PlayerCharacter";

const restart = () => {
    // Creates an instance of the engine, enableSleeping is set to false to improve performance
    let engine = Matter.Engine.create({ enableSleeping: false });

    // Gets all objects in the world (objects that are contained in the engine)
    let world = engine.world;

    return {
        physics: { engine: engine, world: world },
        playerCharacter: PlayerCharacter(
            world, "red", 
            { x: 50, y: 50 }, 
            { width: 50, height: 50 }
        ),
    }
}

export default restart;