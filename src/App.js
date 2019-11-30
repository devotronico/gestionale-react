import React from 'react';
import './style/App.css';

import { Provider } from 'react-redux'; // redux
import store from './redux/store';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// importa componente context
import { AuthProvider } from './auth/AuthContext';

// proteggere le rotte
import PrivateRoute from './auth/PrivateRoute';

// componenti
import Header from './components/Header';
import Home from './components/Home';
import SendEmail from './components/email/SendEmail';
import ClientiContainer from './containers/ClientiContainer';
import IndirizziContainer from './containers/IndirizziContainer';
import PizzaContainer from './containers/PizzaContainer';
import UsersContainer from './containers/UsersContainer';
import NoMatch from './components/NoMatch';

store.subscribe(() => {
  console.log('<SUBSCRIBE>');
  const state = store.getState();
  // AUTH
  const usersCurrentState = JSON.stringify(state.users);
  // console.log('users Current State', usersCurrentState);
  localStorage.setItem('users', usersCurrentState);
  // USERS
  const clientiCurrentState = JSON.stringify(state.clienti);
  // console.log('clienti Current State', clientiCurrentState);
  localStorage.setItem('clienti', clientiCurrentState);
  // indirizzi
  const indirizziCurrentState = JSON.stringify(state.indirizzi);
  localStorage.setItem('indirizzi', indirizziCurrentState);
  console.log('</SUBSCRIBE>');
});

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <div className="App">
          <Router>
            <Header />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/email" exact component={SendEmail} />
              <PrivateRoute path="/clienti" roles={['developer']}>
                <ClientiContainer />
              </PrivateRoute>
              <PrivateRoute path="/indirizzi" roles={['developer', 'admin']}>
                <IndirizziContainer />
              </PrivateRoute>
              <PrivateRoute
                path="/pizza"
                roles={['developer', 'admin', 'user']}
              >
                <PizzaContainer />
              </PrivateRoute>
              <Route path="/auth" component={UsersContainer} />
              <Route path="*">
                <NoMatch />
              </Route>
            </Switch>
          </Router>
        </div>
      </AuthProvider>
    </Provider>
  );
}

export default App;
