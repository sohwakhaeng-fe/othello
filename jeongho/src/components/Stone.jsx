const Stone = ({ square }) => {
    return (
        <div className="stone" style={{ backgroundColor : square ? (square === 'black' ? "black" : "white") : ""}}></div>
    )
}

export default Stone;