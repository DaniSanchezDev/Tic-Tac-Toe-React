import Cell from '../Cell';
import './Board.css'

//tipo para el tablero
type BoardProps = {
    board: number[][];
    onClickCell: (row: number, column: number) => void;
}

function Board({ board, onClickCell }: BoardProps) {

    return (
        <div className='board'>
            {board.map((row, rowIndex) => 
                row.map((cell, cellIndex) => 
                <Cell cell={cell} onClick={() => onClickCell(rowIndex, cellIndex)} />))}
        </div>
    )
}


export default Board
