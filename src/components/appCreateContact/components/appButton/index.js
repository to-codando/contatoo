import { observerFactory } from "lemejs"
import { appInputObserver } from "../../services/inputValidator"

import template from "./template"
import styles from "./styles"

export const appButton = () => {
	const state = observerFactory({
		disabled: true,
	})

	const hooks = () => ({
		beforeOnInit,
	})

	const beforeOnInit = () => {
		appInputObserver.on((form) => {
			const disabled = !isValidForm(form)
			state.set({ disabled })
		})
	}

	const isValidForm = (form) => {
        const formNameIsValid = form.name ? form.name.isValid : false
		const formEmailIsValid = form.email ? form.email.isValid : false
		const formPhoneIsValid = form.phone ? form.phone.isValid : false
        
		return formNameIsValid && formEmailIsValid && formPhoneIsValid
	}

	return { template, styles, hooks, state }
}
