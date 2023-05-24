import Matter from "matter-js";

const PlayerMovement = (entities, { time }) => {
    let engine = entities.physics.engine;
    // We use time.delta to get the difference in time between 
    // position last frame and position this frame
    Matter.Engine.update(engine, time.delta);

    // Access the playerCharacter entity
    const playerCharacter = entities.playerCharacter;

    // Update player's velocity based on controls playerCharacter property
    const velocity = playerCharacter.body.velocity;
    const speed = playerCharacter.controls.speed;

    if (playerCharacter.controls.moveLeft) {
        Matter.Body.setVelocity(playerCharacter.body, { 
            x: -speed, y: velocity.y 
        });
    }
    if (playerCharacter.controls.moveRight) {
        Matter.Body.setVelocity(playerCharacter.body, {
            x: speed,
            y: velocity.y
        });
    }
    if (playerCharacter.controls.moveUp) {
        Matter.Body.setVelocity(playerCharacter.body, { 
            x: velocity.x, 
            y: -speed 
        });
    }
    if (playerCharacter.controls.moveDown) {
        Matter.Body.setVelocity(playerCharacter.body, { 
            x: velocity.x, 
            y: speed 
        });
    }
    return entities;
};

export default PlayerMovement;