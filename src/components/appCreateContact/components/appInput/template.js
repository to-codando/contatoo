

export default ({ state, html }) => { 

    const isValid =  JSON.parse(state.isValid)
    const isPristine =  JSON.parse(state.isPristine)
    const value = state.value

    const showErrorMessage = () => {
        if(state.isValid) return ''

        return html`
            <small class="ctx-error-message">${state?.errorMessage}</small>
        `
    }    

    const getInputCssClass = () => {
        if(isValid && isPristine && value) return 'ctx-is-valid'
        if(isValid && !isPristine && value) return 'ctx-is-valid'
        if(isValid && isPristine && !value) return ''

        if(!isValid && !isPristine && !value) return 'ctx-is-invalid'
        if(!isValid && isPristine && value) return 'ctx-is-invalid'
        if(!isValid && !isPristine && value) return 'ctx-is-invalid'
        
        return ''
    }

    const getSpanCssClass = () => {
        return state.value ? 'elevation' : ''
    }

    return  html`
        <label class="ctx-label ${state.value ? 'gutter' : ''}">
            <span class="ctx-subtitle ${getSpanCssClass()}">
                ${state.subtitle}
            </span>
        
            <input 
                type="text" 
                class="ctx-input ${getInputCssClass()}" 
                value="${state?.value}"
            >
            
            ${showErrorMessage()}
        </label>
`}
