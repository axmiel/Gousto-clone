export const debounce = (func, timeout = 300) => {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => { func(...args); }, timeout);
    };
}