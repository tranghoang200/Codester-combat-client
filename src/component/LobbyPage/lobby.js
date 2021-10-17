import {ButtonGroup, Button} from 'react-bootstrap';
import './lobby.css';
import {useHistory} from 'react-router-dom';

const LobbyPage = () => {
  const history = useHistory();

  return (
    <div className="lobby-container">
      <h1 style={{fontSize: '6rem'}}>CODESTER COMBAT</h1>
      <ButtonGroup bsPrefix="btn-group button-group-lobby">
        <Button
          bsPrefix="btn button-lobby mt-5"
          onClick={() => history.push(`/matching`)}
        >
          Play
        </Button>
        <Button bsPrefix="btn button-lobby mt-5">Leaderboard</Button>
      </ButtonGroup>
    </div>
  );
};

export default LobbyPage;
