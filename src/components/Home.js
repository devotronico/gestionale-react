import React, { useContext, useEffect } from 'react';
import '../style/Home.css';
import { AuthContext } from '../auth/AuthContext';
import Auth from '../auth/auth';

const Home = props => {
  // console.log(props);
  const { auth, setAuth } = useContext(AuthContext);

  useEffect(() => {
    setAuth(Auth.get());
  }, []);

  // console.log(auth);
  return (
    <div className="home">
      <h1>Home</h1>
      <p>{auth ? 'utente connesso' : 'utente NON connesso'}</p>
    </div>
  );
};

export default Home;
