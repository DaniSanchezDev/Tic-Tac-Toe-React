import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import NewGameButton from './components/NewGameButton'


export const PLAYER_1 = 1;
export const PLAYER_2 = 2;


function App() {

  const [turn, setTurn] = useState<number>();

  const generateTurn = () => Math.floor(Math.random()* 2) + 1;

  useEffect(() => {
    setTurn(generateTurn());
  }, [])

  return (
    <div className='game'>
      <Header turn={turn}/>
      <NewGameButton />

    </div>
  )
}

export default App
