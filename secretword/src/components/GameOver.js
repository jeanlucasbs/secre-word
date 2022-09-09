import './GameOver.css';

const GameOver = ({retry, score}) => {
    return(
        <div>
            <h1>Fim de Jogo!</h1>
            <h2>Sua pontução foi: {score}</h2>
            <button onClick={retry}>Reiniciar</button>
        </div>
    );
};

export default GameOver;