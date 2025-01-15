import './NewGameButton.css'

type NewGameProps ={
  onClick: () => void;
};

function NewGameButton({onClick}: NewGameProps) {
  return (
    <div>
        <button type='button' onClick={onClick}>New game</button>
    </div>
  )
}

export default NewGameButton
