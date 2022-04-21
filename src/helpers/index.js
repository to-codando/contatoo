import { pubsubFactory } from "lemejs";

export const eventDrive = pubsubFactory()

export const debounceTime = (fn, milliseconds) => {
  let timer = 0;
  return (data) => {
      clearTimeout(timer);
      timer = setTimeout(fn.bind(null, data), milliseconds);
  }
}

export const phonePipe = (value) => {
  let regex = /(\d{2})(\d{4,5})(\d{4})/
  const replacer = (regex, arg1, arg2, arg3) => `(${arg1}) ${arg2}-${arg3}`
  return value.replace(/\D/g, '').replace(regex, replacer)  
}