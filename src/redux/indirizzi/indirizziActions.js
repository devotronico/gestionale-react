import { ADD_INDIRIZZI } from './indirizziTypes';

export const addIndirizzo = newIndirizzi => {
  console.log('indirizzo action');
  return {
    type: ADD_INDIRIZZI,
    newIndirizzi: newIndirizzi
  };
};
