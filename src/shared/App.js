import React from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configStore';

import { Login, Main } from '../pages';

function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Route path='/' exact component={Login} />
        <Route path='/main' exact component={Main} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;