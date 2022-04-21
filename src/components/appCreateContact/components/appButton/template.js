export default ({ state, props }) => {
    
    const themeClass = (state.disabled && props.theme) 
        ? 'ctx-theme-grey'
        : `ctx-theme-${props.theme}` 

    return /*html*/ `
    <button 
        class="ctx-button ${themeClass}" 
        ${state.disabled ? 'disabled="true"' : ''}
    >
        ${props.title}
    </button>
`
}
