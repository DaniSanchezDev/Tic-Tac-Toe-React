import Message from "../Message";
import Title from "../Title";
import "./Header.css";

type HeaderProps = {
    turn: number;
    winner: null | number;
};

function Header({ turn, winner }: HeaderProps) {
    return (
        <>
            <Title />
            <Message turn={turn} winner={winner}/>
        </>
    );
}

export default Header;
