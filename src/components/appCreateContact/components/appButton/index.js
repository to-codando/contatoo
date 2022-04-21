import { observerFactory } from "lemejs"
import { formObserver, isValidForm } from "../../services/formValidator"

import template from "./template"
import styles from "./styles"
import { eventDrive } from "../../../../helpers"

export const appButton = ({ props }) => {
	const state = observerFactory({
		disabled: true,
	})

	const hooks = () => ({
		beforeOnInit,
		afterOnRender
	})

	const beforeOnInit = () => {
		formObserver.on((form) => {
			const disabled = !isValidForm(form)
			state.set({ disabled })
		})
	}

	const afterOnRender = ({ on, queryOnce }) => {

		const button = queryOnce('button')

		on('click', button, () => eventDrive.emit(props.emitEvent))

	}

	return { template, styles, hooks, state }
}
