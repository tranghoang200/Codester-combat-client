import './MatchingScreen.css';
import {LobbyClient} from 'boardgame.io/client';
import {useHistory} from 'react-router-dom';

function MatchingScreen() {
  const history = useHistory();

  const createRoom = async () => {
    const lobbyClient = new LobbyClient({server: 'http://localhost:8000'});
    const games = await lobbyClient.listGames();
    console.log(games);
    const {matchID} = await lobbyClient.createMatch(games[0], {
      numPlayers: 2,
    });
    localStorage.setItem('matchID', matchID);
    history.push(`/player/${matchID}`);
  };
  createRoom();

  return (
    <div className="matchingScreen">
      <div className="night">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>
      <div className="matchingText">
        <div>M</div>
        <div>a</div>
        <div>t</div>
        <div>c</div>
        <div>h</div>
        <div>i</div>
        <div>n</div>
        <div>g</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
      </div>
    </div>
  );
}

export default MatchingScreen;
