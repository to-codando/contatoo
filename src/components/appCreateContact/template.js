export default ({ state, props }) => /*html*/ `
    <h1>Cadastro de contatos</h1>

    <form class="ctx-form">
        <app-input 
            data-value=""
            data-is-pristine="true"
            data-is-valid="false"
            data-subtitle="Nome completo" 
            data-error-message="Informe o nome e o sobrenome."
            data-regex-validation="${state?.nameValidator}"
        ></app-input>

        <app-input data-subtitle="E-mail"
            data-value=""
            data-is-pristine="true"
            data-is-valid="false"
            data-subtitle="E-mail" 
            data-error-message="Informe um e-mail válido."   
            data-regex-validation="${state?.emailValidator}"     
        ></app-input>

        <app-input
            data-value=""
            data-is-pristine="true"
            data-is-valid="false"
            data-subtitle="Telefone" 
            data-error-message="Formato de telefone inválido"  
            data-regex-validation="${state?.phoneValidator}"
            data-regex-format="${state?.regexFormat}"      
        ></app-input>
        
        <app-button data-title="Salvar" data-theme="green"></app-button>
    </form>
`
