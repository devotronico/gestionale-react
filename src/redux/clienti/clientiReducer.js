import { ADD_CLIENTE, EDIT_CLIENTE, DELETE_CLIENTE, ADD_MULTI_CLIENTI, TRUNCATE_CLIENTI } from './clientiTypes';
import { v4 } from 'uuid';

const CLIENTI_INITIAL_STATE = [
  { id: v4(), nome: 'Ryu', email: 'ryu@mail.it', password: '123456' },
  { id: v4(), nome: 'Ken', email: 'ken@mail.it', password: '123456' },
  { id: v4(), nome: 'Chu', email: 'chu@mail.it', password: '123456' },
  { id: v4(), nome: 'Sim', email: 'sim@mail.it', password: '123456' },
  { id: v4(), nome: 'Dan', email: 'dan@mail.it', password: '123456' },
  { id: v4(), nome: 'Dic', email: 'dic@mail.it', password: '123456' },
  { id: v4(), nome: 'Sag', email: 'sag@mail.it', password: '123456' },
  { id: v4(), nome: 'Veg', email: 'veg@mail.it', password: '123456' },
  { id: v4(), nome: 'Rog', email: 'rog@mail.it', password: '123456' },
  { id: v4(), nome: 'Aku', email: 'aku@mail.it', password: '123456' },
  { id: v4(), nome: 'Hon', email: 'hon@mail.it', password: '123456' },
  { id: v4(), nome: 'Lee', email: 'lee@mail.it', password: '123456' },
  { id: v4(), nome: 'Cam', email: 'cam@mail.it', password: '123456' },
  { id: v4(), nome: 'Jay', email: 'jay@mail.it', password: '123456' },
  { id: v4(), nome: 'Zan', email: 'zan@mail.it', password: '123456' }
];

const clientiLocalStorage = localStorage.getItem('clienti') ? JSON.parse(localStorage.getItem('clienti')) : null;
const clientiState = clientiLocalStorage ? clientiLocalStorage : CLIENTI_INITIAL_STATE;

const clientiReducer = (state = clientiState, action) => {
  switch (action.type) {
    case ADD_CLIENTE:
      console.log(action.newCliente);
      // const id = state.length;
      const id = v4();
      action.newCliente = { id, ...action.newCliente };
      console.log(action.newCliente);
      return [...state, action.newCliente];

    case EDIT_CLIENTE:
      console.log('action.editedCliente.id', action.editedCliente.id);
      return state.map(cliente => {
        if (cliente.id === action.editedCliente.id) {
          return action.editedCliente;
        }
        return cliente;
      });

    case DELETE_CLIENTE:
      console.log('action.id', action.id);
      return state.filter(cliente => cliente.id !== action.id);

    case ADD_MULTI_CLIENTI:
      return [...state, ...action.clienti];
    case TRUNCATE_CLIENTI:
      return [];
    default:
      return state;
  }
};
export default clientiReducer;
