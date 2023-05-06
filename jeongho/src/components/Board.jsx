import Square from "./Square";

const Board = ({ sqaures, handleClick }) => {
    return (
        <div className="board">
            {/* {sqaures.map((square, index) => <Square key={index} square={square} handleClick={handleClick} index={index}/>)} */}
            {sqaures.map((square, row) => { return square.map((v, col) => <Square key={col} square={v} handleClick={handleClick} row={row} col={col}/> )})}
        </div>
    )
}

export default Board;