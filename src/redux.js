// 创建仓库
const createStore = reducer => {
  let state;
  // 监听函数数组
  let listeners = [];
  // 获取最新状态
  let getState = () => state;
  // 发送
  let dispatch = (action = { type: 'INIT_REDUX_ROOT' }) => {
    state = reducer(state, action);
    listeners.forEach(item => item());
  };
  // 订阅仓库内状态变化，变化后会调用监听函数
  let subscribe = listener => {
    // 订阅方法执行后会返回一个取消订阅的函数，调用它可以取消订阅
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(item => listener !== item);
    };
  };
  dispatch();
  return {
    getState, // 获取最新状态
    subscribe, // 订阅变化
    dispatch // 发布消息
  };
};

const combineReducers = reducers => (state = {}, action) => {
  let newState = {};

  for (let key in reducers) {
    newState[key] = reducers[key](state[key], action);
  }
  return newState;
};

export { createStore, combineReducers };
