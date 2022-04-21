export default ({ state, props }) => /*html*/ `
    <h1>Cadastro de contatos</h1>

    <form class="ctx-form">
        <app-input 
            data-name="name"
            data-value=""
            data-is-pristine="true"
            data-is-valid="false"
            data-subtitle="Nome completo" 
            data-error-message="Informe o nome e o sobrenome."
            data-regex-validation="${state?.nameValidator}"
            data-listen-event="clear-form-input"
        ></app-input>

        <app-input data-subtitle="E-mail"
            data-name="email"
            data-value=""
            data-is-pristine="true"
            data-is-valid="false"
            data-subtitle="E-mail" 
            data-error-message="Informe um e-mail válido."   
            data-regex-validation="${state?.emailValidator}"   
            data-listen-event="clear-form-input"  
        ></app-input>

        <app-input
            data-name="phone"
            data-value=""
            data-is-pristine="true"
            data-is-valid="false"
            data-subtitle="Telefone" 
            data-error-message="Formato de telefone inválido"  
            data-regex-validation="${state?.phoneValidator}"
            data-regex-format="${state?.regexFormat}"  
            data-listen-event="clear-form-input"    
        ></app-input>
        
        <app-button 
            data-title="Salvar" 
            data-theme="green" 
            data-disabled="true"
            data-emit-event="create-contact"
        ></app-button>
    </form>
`
