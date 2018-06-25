import { ADD, MINUS } from '../action-types';

let counter = (state = { number: 0 }, action) => {
  switch (action.type) {
    case ADD:
      return { number: state.number + action.amount };
    case MINUS:
      return { number: state.number - action.amount };
    default:
      return state;
  }
};

export default counter;
