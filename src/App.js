import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import * as ROUTES from './Constant/routes';
import LobbyPage from './component/LobbyPage/lobby';
import gamePage from './component/GamePage/gamePage';
import SelectionScreen from './component/player-selection/SelectionScreen';
import MatchingScreen from './component/matching/MatchingScreen';

function App() {
  return (
    <Router>
      <Route exact path={ROUTES.START} component={LobbyPage} />
      <Route path={ROUTES.GAME} component={gamePage} />
      <Route path={ROUTES.PLAYER_SELECTION} component={SelectionScreen} />
      <Route path={ROUTES.MATCHING_SCREEN} component={MatchingScreen} />
    </Router>
  );
}

export default App;
