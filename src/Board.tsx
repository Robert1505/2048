import React from "react";
import "./Board.css";

type Props = {};

export default function Board({}: Props) {
    const displayBoard = () => {
        const cells = [];
        for (let i = 0; i < 16; i++) {
            cells.push(<div className="grid-item"></div>);
        }
        return cells;
    };

    return <div className="grid-container">{displayBoard()}</div>;
}
