import { ADD_TODO, DELETE_TODO } from '../action-types';

let todo = (state = { lists: [] }, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { lists: [...state.lists, action.text] };
    case DELETE_TODO:
      let lists = [...state.lists];
      lists.splice(action.index, 1);
      return { lists };
    default:
      return state;
  }
};
export default todo;
