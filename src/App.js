import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import * as ROUTES from './routes';
import gamePage from './component/game';

function App() {
  return (
    <Router>
      <Route path={ROUTES.GAME} component={gamePage} />
    </Router>
  );
}

export default App;
