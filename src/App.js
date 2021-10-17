import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import * as ROUTES from './routes';
import gamePage from './component/game';
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
