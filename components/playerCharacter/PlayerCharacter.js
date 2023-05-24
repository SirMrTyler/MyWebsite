import React from "react";
import { View } from "react-native";
import Matter from "matter-js";

const PlayerCharacter = props => {
    const bodyWidth = props.body.bounds.max.x - props.body.bounds.min.x;
    const bodyHeight = props.body.bounds.max.y - props.body.bounds.min.y;

    // By dividing by 2, we get the center of the body
    const bodyX = props.body.position.x - bodyWidth / 2;
    const bodyY = props.body.position.y - bodyHeight / 2;

    const bodyColor = props.color;

    return (
        <View style={{
            borderWidth: 1,
            borderColor: bodyColor,
            borderStyle: "solid",
            position: "absolute",
            left: bodyX,
            top: bodyY,
            width: bodyWidth,
            height: bodyHeight,
        }}/>
    )
}

export default (world, color, pos, size) => {
    const initialCharacter = Matter.Bodies.rectangle(
        pos.x,
        pos.y,
        size.width,
        size.height,
        {label: "Player"}
    );
    Matter.World.add(world, initialCharacter);

    return {
        body: initialCharacter,
        color,
        pos,
        size,
        renderer: <PlayerCharacter />,
        controls: {
            speed: 10,
            moveLeft: false,
            moveRight: false,
            moveUp: false,
            moveDown: false,
        }
    };
}