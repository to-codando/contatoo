export const debounceTime = (fn, milliseconds) => {
  let timer = 0;
  return (data) => {
      clearTimeout(timer);
      timer = setTimeout(fn.bind(null, data), milliseconds);
  }
}