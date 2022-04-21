import { observerFactory } from "lemejs"

export const formObserver = observerFactory({})

export 	const isValidForm = (form) => {
  const formNameIsValid = form.name ? form.name.isValid : false
  const formEmailIsValid = form.email ? form.email.isValid : false
  const formPhoneIsValid = form.phone ? form.phone.isValid : false
      
  return formNameIsValid && formEmailIsValid && formPhoneIsValid
}