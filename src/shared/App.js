import React from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configStore';
import { Login, Main } from '../pages';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Route path='/' exact component={Login}  />
        {/* <PrivateRoute path='/main' exact component={Main} /> */}
        <Route path='/main' exact component={Main} />
        
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;