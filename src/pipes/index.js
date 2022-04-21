export const phonePipe = (value) => {
  let regex = /(\d{2})(\d{4,5})(\d{4})/
  const replacer = (regex, arg1, arg2, arg3) => `(${arg1}) ${arg2}-${arg3}`
  return value.replace(regex, replacer)  
}