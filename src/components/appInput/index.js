import { observerFactory } from 'lemejs'
import template from "./template"
import styles from "./styles"

export const appInput = () => {  

    const state = observerFactory({ value: ''})

    const hooks = () => ({
        afterOnInit
    })

    const afterOnInit = ({ on, queryOnce }) => {
        const inputElement = queryOnce('input')

        on('keyup', inputElement, () => {
            const value = inputElement.value

            if(value) {
                inputElement.previousElementSibling.classList.add('elevation')
                inputElement.parentElement.classList.add('gutter')
                return
            }
            
            inputElement.previousElementSibling.classList.remove('elevation')
            inputElement.parentElement.classList.remove('gutter')
        })
        

    }



    return { template, styles, hooks, state }
}