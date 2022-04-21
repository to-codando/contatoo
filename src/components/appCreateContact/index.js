import template from "./template"
import styles from "./styles"

import { appButton } from '../appButton'
import { appInput } from '../appInput'
import { observerFactory } from "lemejs"

export const appCreateContact = () => {  

    const nameValidator = "^([A-Z]{1}[a-z']+\\s)+([A-Z]{1}[a-z']+)$"
    const phoneValidator = "^\\(\\d{2}\\)\\s(\\d{4,5})-(\\d{4})$"
    const emailValidator = "^[a-z+.]+[\\w+.]*@\\w+\\.\\w{2,}(?:\\.\\w{2})?$"
    const regexFormat = "(\\d{2})(\\d{4,5}-)(\\d{4})"

    const state = observerFactory({
        nameValidator,
        phoneValidator,
        emailValidator,
        regexFormat
    })

    const children = () => ({ 
        appButton, 
        appInput 
    })

    return { template, styles, children, state }
}