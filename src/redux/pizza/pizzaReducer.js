import { ADD_PIZZA } from './pizzaTypes';

const INITIAL_STATE = {
  count: 10
};

const pizzaReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PIZZA:
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
};

export default pizzaReducer;
