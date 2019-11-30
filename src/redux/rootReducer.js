import { combineReducers } from 'redux';

import clientiReducer from './clienti/clientiReducer';
import indirizziReducer from './indirizzi/indirizziReducer';
import usersReducer from './users/usersReducer';
import pizzaReducer from './pizza/pizzaReducer';

const rootReducer = combineReducers({
  clienti: clientiReducer,
  indirizzi: indirizziReducer,
  users: usersReducer,
  pizza: pizzaReducer
});

export default rootReducer;
