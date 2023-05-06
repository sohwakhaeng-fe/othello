import Stone from "./Stone";

const Square = ({ square, handleClick, row, col }) => {
    return (
        <div className="sqaure" onClick={() => handleClick(row, col)}>
            <Stone square={square}/>
        </div>
    )
}

export default Square;