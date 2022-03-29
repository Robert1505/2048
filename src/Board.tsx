import React, { useEffect, useState } from "react";
import "./Board.css";
import Cell from "./Cell";

type Props = {};

//const cellIdx = Math.floor(Math.random() * 16);

export default function Board({}: Props) {
    const [board, setBoard] = useState([
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
    ]);

    useEffect(() => {
        let array = [...board];
        const insertRandomCell = () => {
            let cellIdx = 0;
            do {
                cellIdx = Math.floor(Math.random() * 16);
            } while (array[cellIdx] !== "");
            const randomNumber = Math.floor(Math.random() * 10);
            if (randomNumber >= 5) array[cellIdx] = "4";
            else array[cellIdx] = "2";

        }
        insertRandomCell();
        insertRandomCell();
        setBoard(array);
    }, []);

    const displayBoard = () => {
        const cells = [];
        for (let i = 0; i < 16; i++) {
            cells.push(<Cell value={board[i]} />);
        }
        return cells;
    };

    return <div className="grid-container">{displayBoard()}</div>;
}
