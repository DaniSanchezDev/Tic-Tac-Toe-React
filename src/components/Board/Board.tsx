import Cell from '../Cell';
import './Board.css'

//tipo para el tablero
type BoardProps = {
    board: number[][];
}

function Board({ board }: BoardProps) {
    return (
        board.map(row => row.map(cell => <Cell cell={cell} />)

        )
    )
}


export default Board
