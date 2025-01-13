import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import NewGameButton from './components/NewGameButton'
import Board from './components/Board';


export const PLAYER_1 = 1;
export const PLAYER_2 = 2;

export const EMPTY = 0;

function App() {

// marcamos el inicio del turno 
  const [turn, setTurn] = useState(PLAYER_1);

// Creamos el tablero
  const [board, setBoard] = useState([
    [EMPTY, EMPTY, EMPTY],
    [EMPTY, EMPTY, EMPTY],
    [EMPTY, EMPTY, EMPTY],
  ])


  const generateTurn = () => Math.floor(Math.random() * 2) + 1;

  useEffect(() => {
    setTurn(generateTurn());
  }, [])

  return (
    <div className='game'>
      <Header turn={turn} />
      <Board board={board}/>
      <NewGameButton />

    </div>
  )
}

export default App
