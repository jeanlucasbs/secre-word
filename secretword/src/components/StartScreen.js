import "./StartScreen.css";

const StartScreen = ({startGame}) => {
    return(
        <div className="start">
            <h1>Secret Word</h1>
            <p>Clique no botão abaixo para começar o jogo</p>
            <button onClick={startGame}>COMEÇAR O JOGO</button>
        </div>
    );
};

export default StartScreen;