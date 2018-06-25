import { createStore } from '../../redux';
import counter from './reducers/counter';
import todo from './reducers/todo';

console.log(counter, todo);

let combineReducers = reducers => (state, action) => {
  let newState = {};
  for (let key in reducers) {
    newState[key] = reducers[key](state ? state[key] : null, action);
  }
  return newState;
};
let reducer = combineReducers({ counter, todo });
let store = createStore(reducer);

export { store };
