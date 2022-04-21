import { observerFactory } from 'lemejs'
import template from "./template"
import styles from "./styles"
import { appInputObserver } from '../../services/inputValidator'
import { debounceTime } from '../../../../helpers/debounce'
import { validatorFactory } from '../../services/inputValidator'
import { phonePipe } from '../../../../pipes'

export const appInput = ({ props }) => {

    const state = observerFactory({ 
        ...props,
    })

    const [inputState, inputValidator ] = validatorFactory(props)

    const hooks = () => ({
        afterOnRender,
        afterOnInit
    })

    const inputFocus = (queryOnce) => {
        state.on((data) => {
            const inputElement = queryOnce('input')
            inputElement.focus()
            inputElement.setSelectionRange(-1, -1)            
        })
    }

    const afterOnRender = ({ on, queryOnce }) => {
        const inputElement = queryOnce('input')
        on('keyup', inputElement, inputValidator(queryOnce, phonePipe))
        inputFocus(queryOnce)
    }

    const afterOnInit = () => {    
        inputState.on(debounceTime(validate, 1000))
    }   

    const validate = (validation) => {
        const { errorMessage } = props
        const { value, isValid, isPristine  } = validation
        state.set({ ...state.get(), value, isValid, isPristine, errorMessage })
        appInputObserver.set({[props.name]: {...validation}})
    }    

    return { template, styles, hooks, state }
}

