import React from "react";
import "./Board.css";
import Cell from "./Cell";

type Props = {};

export default function Board({}: Props) {
    const displayBoard = () => {

        const getValue = (cellIdx: number) => {
            if (cellIdx == 6) return "2";
            if (cellIdx == 9) return "4";
            return "";
        }

        const cells = [];
        for (let i = 0; i < 16; i++) {
            cells.push(<Cell value={getValue(i)}/>);
        }
        return cells;
    };

    return <div className="grid-container">{displayBoard()}</div>;
}
