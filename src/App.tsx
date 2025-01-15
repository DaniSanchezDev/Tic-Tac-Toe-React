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
      // Comprobamos si hay ganador
      checkWinner(newBoard);
      // Cambiamos turno
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

  const checkValues = (values: number[]) => {
    if(values.every(value => value === PLAYER_1)) {
      setWinner(PLAYER_1)
    } else if (values.every(value => value === PLAYER_2)) {
      setWinner(PLAYER_2);
    }

  }

  function checkWinner(board: number[][]){
    if(winner !== null || board.every(row => row.every(cell => cell !== EMPTY))){
      setWinner(DRAW);
      return
    } 
    //Filas
    board.forEach(row => checkValues(row));

    //Columnas
    for (let index = 0; index < board.length; index++) {
      checkValues([board[0][index], board[1][index], board[2][index]]);
      
    }
    
    //Diagonales
    checkValues([board[0][0], board[1][1], board[2][2]]);
    checkValues([board[0][2], board[1][1], board[2][0]]);
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
