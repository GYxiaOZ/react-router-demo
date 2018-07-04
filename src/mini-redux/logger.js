let logger = store => next => action => {
  console.log('logger1 before', store.getState());
  next(action);
  console.log('logger1 after', store.getState());
};

let logger2 = store => next => action => {
  console.log('logger2 before', store.getState());
  next(action);
  console.log('logger2 after', store.getState());
};

export { logger, logger2 };
