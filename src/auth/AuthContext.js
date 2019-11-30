import React, { createContext, useState, useMemo } from 'react';

import Auth from './auth';
const isAuthenticated = Auth.get();
const AuthContext = createContext(isAuthenticated);

// console.log('isAuthenticated', isAuthenticated);

const AuthProvider = props => {
  const [auth, setAuth] = useState(isAuthenticated);

  const value = useMemo(() => ({ auth, setAuth }), [auth, setAuth]);

  return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>;
};

export { AuthProvider, AuthContext };
