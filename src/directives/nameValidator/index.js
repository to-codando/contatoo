import { observerFactory } from "lemejs"

export const nameValidator = (componentProps) => {

	const state = observerFactory({
		value: '',
		isValid: null,
		isPristine: true
	})

	const validate = (regex, value) => regex.test(value)
    
	const validateName = (value) => {
		const regexValiation = new RegExp(componentProps.regexValidation)
		return validate(regexValiation, value)
	}
	
	const setInputValue = (value) => {
		const isValid = validateName(value)
		const isPristine =  false
	
		state.set({
			...state.get(),
			value,
			isValid,
			isPristine
		})
	
		const { value: newValue } = state.get()
		return newValue
	}
	
	const setSubtitleStyle = (inputElement) => {
		const { value } = state.get()
	
		if (value) {
			inputElement.previousElementSibling.classList.add("elevation")
			inputElement.parentElement.classList.add("gutter")
			return
		}
	
		inputElement.previousElementSibling.classList.remove("elevation")
		inputElement.parentElement.classList.remove("gutter")
	}
		
	const validateHandler = (queryOnce, pipe) => () => {
		const selector = 'input'
		const inputElement = queryOnce(selector)
		let value = inputElement.value

		if(componentProps.regexFormat) {
			value = (pipe && typeof pipe === 'function') 
			? pipe(inputElement.value) 
			: inputElement.value
		}

		setInputValue(value)
		setSubtitleStyle(inputElement)
	}
	
	return [state, validateHandler]
	
}

