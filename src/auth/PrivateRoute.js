import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from './AuthContext';

/**
 * Questo è un componente HOC per gestire i reindirizzamenti in base a
 * se l'utente è autenticato e a quali privilegi possiede
 * Vengono gestiti tre scenari:
 * 1. Se l'utente è autenticato e ha i privilegi giusti(role) può accedere alla sezione richiesta
 * 2. Se l'utente non è autenticato viene indirizzato alla sezione Signin
 * 3. Se l'utente è autenticato ma non ha privilegi viene indirizzato alla sezione Home
 *
 * auth: oggetto ottenuto dalla localstorage.
 * es: {id: 1, name: "Bro", email: "bro@mail.it", password: "123", role: "user", isAuthenticated: true}
 * auth è ottenuto dal componente `AuthContext` e viene passato a questo componente tramite l'hook useContext
 *
 * roles: è un array che contiene la tipologia di utenti che possono accedere alla sezione richiesta
 * es: ['admin', 'user'] se nell'oggetto auth alla prop role non c'è uno dei valori presenti nell'array roles
 * allora non è possibile accedere alla sezione richiesta e si viene indirizzati in una sezione diversa
 *
 * children: è il componente di destinazione se l'utente è autenticato e ha i privilegi
 */
function PrivateRoute({ children, ...rest }) {
  const { auth } = useContext(AuthContext);
  const { roles } = rest;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth && roles.includes(auth.role) ? (
          children
        ) : (
          <Redirect
            to={
              !auth
                ? {
                    pathname: '/auth/signin',
                    state: { from: location }
                  }
                : {
                    pathname: '/',
                    state: { from: location }
                  }
            }
          />
        )
      }
    />
  );
}

export default PrivateRoute;
