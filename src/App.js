import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import * as ROUTES from './Constant/routes';
import LobbyPage from './component/LobbyPage/lobby';
import gamePage from './component/GamePage/gamePage';
import SelectionScreen from './component/player-selection/SelectionScreen';
import MatchingScreen from './component/matching/MatchingScreen';
<<<<<<< HEAD
import ResultScreen from './component/game-result/ResultScreen';
=======
import GameResult from './component/GameResultPage/gameResult';
>>>>>>> b892ce93e0783a0ced0722750cf6c56c3ad92331

function App() {
  return (
    <Router>
      <Route exact path={ROUTES.START} component={LobbyPage} />
      <Route path={ROUTES.GAME} component={gamePage} />
      <Route path={ROUTES.PLAYER_SELECTION} component={SelectionScreen} />
      <Route path={ROUTES.MATCHING_SCREEN} component={MatchingScreen} />
<<<<<<< HEAD
      <Route path={ROUTES.RESULT_SCREEN} component={ResultScreen} />
=======
      <Route path={ROUTES.VICTORY} component={GameResult} />
      
>>>>>>> b892ce93e0783a0ced0722750cf6c56c3ad92331
    </Router>
  );
}

export default App;
