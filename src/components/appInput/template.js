export default ({ state, props }) => {
    console.log(state)
    return /*html*/ `
    <label class="ctx-label">
        <span class="ctx-subtitle">
            ${props.subtitle}
        </span>
        <input type="text" class="ctx-input" value="${state.value}">
    </label>
`}
