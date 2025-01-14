import Cell from '../Cell';
import './Board.css'

//tipo para el tablero
type BoardProps = {
    board: number[][];
    onClickCell: (row: number, column: number) => void;
}

function Board({ board }: BoardProps) {

    return (
        <div className='board'>
            {board.map(row => row.map(cell => <Cell cell={cell} />))}
        </div>
    )
}


export default Board
