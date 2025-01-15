import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import NewGameButton from './components/NewGameButton'
import Board from './components/Board';


export const PLAYER_1 = 1;
export const PLAYER_2 = 2;

export const EMPTY = 0;
export const DRAW = 0;

function App() {

// marcamos el inicio del turno 
  const [turn, setTurn] = useState(PLAYER_1);

// creamos constante para el ganador
  const [winner, setWinner] = useState<null | number>(null);

// Creamos el tablero
  const [board, setBoard] = useState([
    [EMPTY, EMPTY, EMPTY],
    [EMPTY, EMPTY, EMPTY],
    [EMPTY, EMPTY, EMPTY],
  ]);



  const generateTurn = () => Math.floor(Math.random() * 2) + 1;

  const changeTurn = () =>{
    if(turn === PLAYER_1){
      setTurn(PLAYER_2);
    } else {
      setTurn(PLAYER_1);
    }
  }

  const clickCell = (row: number, column: number) => {
    if(board[row][column] !== EMPTY || winner !== null){
      return;
    }
      // Creamos nuevo tablero y lo rellenamos con todo lo que contenia la row antigua
      const newBoard = board.map(row => [...row]);
      newBoard[row][column] = turn;
      // Seteamos el board con el nuevo tablero
      setBoard(newBoard);
      changeTurn();
    
  }

  const newGame = () => {
    setTurn(generateTurn());
    setWinner(null);
    setBoard([
      [EMPTY, EMPTY, EMPTY],
      [EMPTY, EMPTY, EMPTY],
      [EMPTY, EMPTY, EMPTY],
    ]);
  }

  useEffect(() => {
    setTurn(generateTurn());
  }, [])

  return (
    <div className='game'>
      <Header turn={turn} winner={winner}/>
      <Board board={board} onClickCell={clickCell}/>
      <NewGameButton onClick={newGame}/>

    </div>
  )
}

export default App
