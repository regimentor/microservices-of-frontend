const debounce = (func, ms) => {
  let timer = null;

  return (...args) => {
    function on() {
      func.apply(this, args);
      timer = null;
    }

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(on, ms);
  };
};

export default debounce;
