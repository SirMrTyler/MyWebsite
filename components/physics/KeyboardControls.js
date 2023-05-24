// This component is used to control the player's movement using WASD.
import { Keyboard } from 'react-native';

const KeyboardControls = (entities, { dispatch }) => {
    const { playerCharacter } = entities;

    const handleKeyDown = (e) => {
        const {key} = e;
        switch (key) {
            case "w":
                playerCharacter.controls.moveUp = true;
                break;
            case "a":
                playerCharacter.controls.moveLeft = true;
                break;
            case "s":
                playerCharacter.controls.moveDown = true;
                break;
            case "d":
                playerCharacter.controls.moveRight = true;
                break;
            default:
                break;
        }
    };

    const handleKeyUp = (e) => {
        const {key} = e;
        switch (key) {
            case "w":
                playerCharacter.controls.moveUp = false;
                break;
            case "a":
                playerCharacter.controls.moveLeft = false;
                break;
            case "s":
                playerCharacter.controls.moveDown = false;
                break;
            case "d":
                playerCharacter.controls.moveRight = false;
                break;
            default:
                break;
        }
    };
    Keyboard.addListener("keydown", handleKeyDown);
    Keyboard.addListener("keyup", handleKeyUp);

    return entities;
}

export default KeyboardControls;