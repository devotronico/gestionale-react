import {
  ADD_CLIENTE,
  EDIT_CLIENTE,
  DELETE_CLIENTE,
  ADD_MULTI_CLIENTI,
  TRUNCATE_CLIENTI
} from './clientiTypes';

export const addCliente = newCliente => {
  return {
    type: ADD_CLIENTE,
    newCliente: newCliente
  };
};

export const editCliente = editedCliente => {
  console.log('editedCliente', editedCliente);
  return {
    type: EDIT_CLIENTE,
    editedCliente: editedCliente
  };
};

export const deleteCliente = id => {
  return {
    type: DELETE_CLIENTE,
    id: id
  };
};

export const addMultiClienti = clienti => {
  return {
    type: ADD_MULTI_CLIENTI,
    clienti: clienti
  };
};
export const truncateClienti = () => {
  return {
    type: TRUNCATE_CLIENTI
  };
};
