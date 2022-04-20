import React from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configStore';
import { Login, Main } from '../pages';
import PrivateRoute from './PrivateRoute';
import TestSocket from '../websocket/TestSocket';
import SearchUser from '../pages/SearchUser';
import Chatroom from '../components/Chatroom'

function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Route path='/' exact component={Login}  />
        {/* <PrivateRoute path='/main' exact component={Main} /> */}
        <Route path='/main' exact component={Main} />
        <Route path='/chat' exact component={TestSocket} />
        <Route path='/discover' exact component={SearchUser} />
        <Route path='/chatroom' exact component={Chatroom} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;