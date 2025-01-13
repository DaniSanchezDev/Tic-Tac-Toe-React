import { PLAYER_1 } from '../../App';
import './Message.css';

type MessageProps = {
  turn: number;
}

function Message({ turn } : MessageProps) {
  return (
    turn === PLAYER_1 ? <h2>Player 1 (X)</h2> : <h2>Player 2 (O)</h2>
  )
}

export default Message
