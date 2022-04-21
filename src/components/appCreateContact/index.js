import { observerFactory } from "lemejs"

import template from "./template"
import styles from "./styles"

import { appButton } from './components/appButton'
import { appInput } from './components/appInput'

import { formObserver, isValidForm } from "./services/formValidator"
import { eventDrive } from "../../helpers"
import { store } from "../../store"

export const appCreateContact = () => {  

    const nameValidator = "^([A-Z]{1}[a-z']+\\s)+([A-Z]{1}[a-z']+)$"
    const phoneValidator = "^\\(\\d{2}\\)\\s(\\d{4,5})-(\\d{4})$"
    const emailValidator = "^[a-z+.]+[\\w+.]*@\\w+\\.\\w{2,}(?:\\.\\w{2})?$"
    const regexFormat = "(\\d{2})(\\d{4,5}-)(\\d{4})"

    const state = observerFactory({
        nameValidator,
        phoneValidator,
        emailValidator,
        regexFormat,
        form: { isValid: false }
    })

    const hooks = () => ({
        beforeOnInit
    })

    const children = () => ({ 
        appButton, 
        appInput 
    })

    const beforeOnInit = () => {
        eventDrive.on('create-contact', createContact)
        store.on(() => eventDrive.emit('clear-form-input'))
    }

    const createId = () => {
        const { contacts } = store.get()
        return contacts.length + 1
    }

    const createContact = () => {
        const form = formObserver.get()
        
        if(!isValidForm(form)) return

        const { contacts: oldContacts } = store.get()
        
        const newContact = { 
            id: createId(),
            name: form.name.value, 
            email: form.email.value, 
            phone: form.phone.value 
        }

        const contacts = [ ...oldContacts, newContact ]
        store.set({ ...store.get(), contacts })
        formObserver.set({})

        console.log(store.get())
    }

    return { template, styles, children, state, hooks }
}