import {ButtonGroup, Button} from 'react-bootstrap';
import './lobby.css';
import {LobbyClient} from 'boardgame.io/client';
import {useHistory} from 'react-router-dom';

const LobbyPage = () => {
  const history = useHistory();

  const playHandler = async () => {
    const lobbyClient = new LobbyClient({server: 'http://localhost:8000'});
    const games = await lobbyClient.listGames();
    console.log(games);
    const {matchID} = await lobbyClient.createMatch(games[0], {
      numPlayers: 2,
    });
    history.push(`/matching/${matchID}`);
  };

  return (
    <div className="lobby-container">
      <h1 style={{fontSize: '6rem'}}>CODESTER COMBAT</h1>
      <ButtonGroup bsPrefix="btn-group button-group-lobby">
        <Button bsPrefix="btn button-lobby mt-5" onClick={playHandler}>
          Play
        </Button>
        <Button bsPrefix="btn button-lobby mt-5">Leaderboard</Button>
      </ButtonGroup>
    </div>
  );
};

export default LobbyPage;
