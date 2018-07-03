let promise = store => next => action => {
  if (action.then && typeof action.then === 'function') {
    return action.then(data => next(data));
  } else {
    return next(action);
  }
};

export default promise;
