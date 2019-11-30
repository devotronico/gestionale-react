import { ADD_INDIRIZZI } from './indirizziTypes';

const INIT_STATE_INDIRIZZI = [
  {
    id: 0,
    cliente_id: 0,
    principale: 1,
    via: 'Sepe',
    civico: 3,
    cap: 80035,
    comune: 'Nola',
    provincia: 'NA',
    nazione: 'IT'
  },
  {
    id: 1,
    cliente_id: 1,
    principale: 0,
    via: 'Asd',
    civico: 4,
    cap: 11111,
    comune: 'Saviano',
    provincia: 'MI',
    nazione: 'DE'
  },
  {
    id: 2,
    cliente_id: 0,
    principale: 0,
    via: 'xxx',
    civico: 4,
    cap: 2222,
    comune: 'Somma',
    provincia: 'VE',
    nazione: 'US'
  }
];

const indirizziLocalStorage = localStorage.getItem('indirizzi') ? JSON.parse(localStorage.getItem('indirizzi')) : null;
const indirizziState = indirizziLocalStorage ? indirizziLocalStorage : INIT_STATE_INDIRIZZI;
// console.log('indirizziState', indirizziState);

const indirizziReducer = (state = indirizziState, action) => {
  switch (action.type) {
    case ADD_INDIRIZZI:
      const id = state.length;
      action.newIndirizzi = { id, ...action.newIndirizzi };
      console.log(action.newIndirizzi);
      return [...state, action.newIndirizzi];
    default:
      return state;
  }
};

export default indirizziReducer;
