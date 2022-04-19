export default ({ state, props }) => /*html*/ `
    <h1>Cadastro de contatos</h1>

    <form class="ctx-form">
        <app-input data-subtitle="Nome" data-validator="name"></app-input>
        <app-input data-subtitle="E-mail"></app-input>
        <app-input data-subtitle="Telefone"></app-input>
        <app-button data-title="Salvar" data-theme="green"></app-button>
    </form>
`
