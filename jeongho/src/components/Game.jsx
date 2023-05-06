import { useState } from "react";
import Board from "./Board";

const Game = () => {
    // 1차 배열
    // const [sqaures, setSquares] = useState(Array.from(Array(8), (v , i) => {
    //     if (i === 27 || i === 36) return 'white';
    //     else if (i === 28 || i === 35) return 'black';
    //     else return null;
    // }));

    // 2차 배열
    const [sqaures, setSquares] = useState(Array.from(Array(8), (_, row) => Array.from(Array(8), (_, col) => {
        if ((row === 3 && col === 3) || (row === 4 && col === 4)) return 'white';
        else if ((row === 4 && col === 3) || (row === 3 && col === 4)) return 'black';
        else return null;
    })))

    const [isNext, setIsNext] = useState(false);

    const handleClick = (row, col) => {

        if (isValidMove(row, col, isNext, sqaures)){
            setIsNext(!isNext)
            setSquares(prev => {
                const nextSquares = [...prev];
                nextSquares[row][col] = isNext ? 'white' : 'black'
                
                return nextSquares
            })
        }
   
    }

    const getVaildMoves = (player, squares) => {
        squares.map((square, row, self) => {
            return square.map((value, col) => {
                return self[row][col]
            })
        })
    }

    const isValidMove = (row, col, isNext, sqaures) => {
        if (sqaures[row][col] !== null) return;
        // const directions = [
        //     [-1, -1], // 좌상단
        //     [-1, 0],  // 상단
        //     [-1, 1],  // 우상단
        //     [0, -1],  // 좌측
        //     [0, 1],   // 우측
        //     [1, -1],  // 좌하단
        //     [1, 0],   // 하단
        //     [1, 1]    // 우하단
        // ]
    }

    const judgeWinner = () => {

    }

    return (
        <div className="game">
            <div className="text">Next Player : {isNext ? "white" : "black"}</div>
            <Board sqaures={sqaures} handleClick={handleClick} />
        </div>
    )
}

export default Game;