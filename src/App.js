import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import * as ROUTES from './Constant/routes';
import gamePage from './component/GamePage/game';

function App() {
  return (
    <Router>
      <Route path={ROUTES.GAME} component={gamePage} />
    </Router>
  );
}

export default App;
