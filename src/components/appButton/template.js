export default ({ state, props }) => /*html*/ `
    <button class="ctx-button ctx-theme-${props.theme ? props.theme : 'grey'}">${props.title}</button>
`
