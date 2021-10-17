import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import * as ROUTES from './Constant/routes';
import gamePage from './component/GamePage/gamePage';
import SelectionScreen from './component/player-selection/SelectionScreen';

function App() {
  return (
    <Router>
      <Route path={ROUTES.GAME} component={gamePage} />
      <Route path={ROUTES.PLAYER_SELECTION} component={SelectionScreen} />
    </Router>
  );
}

export default App;
