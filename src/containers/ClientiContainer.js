import React from 'react';
import '../style/clienti/Clienti.css';
import { Route, useRouteMatch } from 'react-router-dom';

import Mode from '../components/clienti/Mode';
import ClienteAddConnect from '../components/clienti/ClienteAddConnect';
import ClienteListConnect from '../components/clienti/ClienteListConnect';
import ClienteDetailsConnect from '../components/clienti/ClienteDetailsConnect';
import ClienteEditConnect from '../components/clienti/ClienteEditConnect';
import ClienteDeleteConnect from '../components/clienti/ClienteDeleteConnect';
import ClienteFaker from '../components/clienti/ClienteFaker';

const ClientiContainer = props => {
  let match = useRouteMatch();
  return (
    <div className="content clienti">
      <Mode />
      <Route path="/clienti(/add)?" exact component={ClienteAddConnect} />
      <Route path="/clienti/list" exact component={ClienteListConnect} />
      <Route path={`${match.path}/list/:id`}>
        <ClienteDetailsConnect />
      </Route>
      <Route path="/clienti/edit" component={ClienteEditConnect} />
      <Route path="/clienti/delete" component={ClienteDeleteConnect} />
      <Route path="/clienti/faker" exact component={ClienteFaker} />
    </div>
  );
};

export default ClientiContainer;
