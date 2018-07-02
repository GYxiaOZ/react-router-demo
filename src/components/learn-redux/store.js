import { createStore, combineReducers } from '../../mini-redux/redux';
import counter from './reducers/counter';
import todo from './reducers/todo';

let reducer = combineReducers({ counter, todo });
let store = createStore(reducer);

export { store };
