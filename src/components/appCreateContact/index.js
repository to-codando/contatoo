import template from "./template"
import styles from "./styles"

import { appButton } from '../appButton'
import { appInput } from '../appInput'

export const appCreateContact = () => {  

    const children = () => ({ 
        appButton, 
        appInput 
    })

    return { template, styles, children }
}