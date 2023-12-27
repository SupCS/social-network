global.setImmediate = (callback, ...args) => {
  return setTimeout(callback, 0, ...args);
};
