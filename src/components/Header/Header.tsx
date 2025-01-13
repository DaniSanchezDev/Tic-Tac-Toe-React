import Message from "../Message";
import Title from "../Title";
import "./Header.css";

type HeaderProps = {
    turn: number;
};

function Header({ turn }: HeaderProps) {
    return (
        <>
            <Title />
            <Message turn={turn}/>
        </>
    );
}

export default Header;
