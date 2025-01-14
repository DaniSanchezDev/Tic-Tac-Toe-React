import './Cell.css'
import EmptyImage from './../../assets/img/blank.png';
import Player1Img from './../../assets/img/x.jpg';
import Player2Img from './../../assets/img/circle.png';
import { EMPTY, PLAYER_1, PLAYER_2 } from '../../App';

type CellProps ={
    cell: number;
    onClick: () => void;
}

function Cell({ cell, onClick }: CellProps) {
    const srcImage = 
    cell === EMPTY ? EmptyImage : 
    cell === PLAYER_1 ? Player1Img : 
    cell === PLAYER_2 ? Player2Img : EmptyImage; 

  return (
    <img src={srcImage} onClick={onClick} alt="" />
  )
}

export default Cell;
