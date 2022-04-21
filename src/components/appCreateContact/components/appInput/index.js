import { observerFactory } from 'lemejs'
import template from "./template"
import styles from "./styles"
import { formObserver } from '../../services/formValidator'
import { validatorFactory } from '../../services/inputValidator'
import { debounceTime, eventDrive, phonePipe } from '../../../../helpers'

export const appInput = ({ props }) => {

    const state = observerFactory({ 
        ...props,
    })

    const [inputState, inputValidator ] = validatorFactory(props)

    const hooks = () => ({
        afterOnRender,
        afterOnInit,
        beforeOnInit
    })

    const beforeOnInit = () => {
        eventDrive.on(props.listenEvent, () => {
            state.set({ ...props })
        })
    }

    const afterOnRender = ({ on, queryOnce }) => {
        const inputElement = queryOnce('input')
        on('keyup', inputElement, inputValidator(queryOnce, phonePipe))
        inputFocus(queryOnce)
    }

    const afterOnInit = () => {   
        const wait = 0 
        inputState.on(debounceTime(validate, wait))
    }   

    const inputFocus = (queryOnce) => {
        state.on((data) => {
            const inputElement = queryOnce('input')
            inputElement.focus()
            inputElement.setSelectionRange(-1, -1)            
        })
    }

    const validate = (validation) => {
        const { errorMessage } = props
        const { value, isValid, isPristine  } = validation
        state.set({ ...state.get(), value, isValid, isPristine, errorMessage })
        formObserver.set({[props.name]: {...validation}})
    }    

    return { template, styles, hooks, state }
}

