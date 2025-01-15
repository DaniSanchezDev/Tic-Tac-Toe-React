import { DRAW, PLAYER_1, PLAYER_2 } from '../../App';
import './Message.css';

type MessageProps = {
  turn: number;
  winner: null|number;
}

function Message({ turn, winner } : MessageProps) {
  let message;

  if(winner === PLAYER_1){
    message = 'The winner is Player 1';
  } else if(winner === PLAYER_2){
    message = 'The winner is Player 2';
  } else if(winner === DRAW){
    message = 'The game was a draw';
  } else if(turn === PLAYER_1){
    message = 'Player 1 (X)';
  } else {
    message = 'Player 2 (O)';
  }

  return (

    <h2>{message}</h2>
  )
}

export default Message
