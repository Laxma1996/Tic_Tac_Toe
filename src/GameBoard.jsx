import React, { useState } from 'react';
import Tile from './Tile';
import { Html } from '@react-three/drei';

export default function GameBoard() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xTurn, setXTurn] = useState(true);
    const [winner, setWinner] = useState(null);

    const handleClick = (index) => {
        if (board[index] || winner) return;

        const newBoard = [...board];
        newBoard[index] = xTurn ? "X" : "O";
        setBoard(newBoard);

        const win = checkWinner(newBoard);
        if (win) {
            setWinner(win);
        } else {
            setXTurn(!xTurn);
        }
    };

    return (
        <group>
            {board.map((value, index) => {
                const x = (index % 3) - 1;
                const z = Math.floor(index / 3) - 1;
                return (
                    <Tile
                        key={index}
                        position={[x * 2.2, 0, z * 2.2]}
                        value={value}
                        onClick={() => handleClick(index)}
                    />
                );
            })}

            {winner && (
                <Html position={[0, 3, 0]}>
                    <div style={{
                        background: "white",
                        padding: "16px",
                        borderRadius: "10px",
                        boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
                        textAlign: "center"
                    }}>
                        <h2 style={{ margin: "0 0 10px" }}>🎉 Winner: {winner}</h2>
                        <button
                            style={{
                                padding: "8px 16px",
                                fontSize: "16px",
                                borderRadius: "5px",
                                cursor: "pointer",
                                background: "#007bff",
                                color: "white",
                                border: "none"
                            }}
                            onClick={() => {
                                setBoard(Array(9).fill(null));
                                setWinner(null);
                                setXTurn(true);
                            }}
                        >
                            Restart Game
                        </button>
                    </div>
                </Html>
            )}
        </group>
    );
}

const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
];

const checkWinner = (board) => {
    for (let [a, b, c] of winningCombos) {
        if (board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    return null;
};