export default (root, props) =>   /*css*/`

    ${root} { 
        display:flex;
        justify-content:flex-start;
        flex-wrap:wrap;
        width:100%;   
        margin-bottom: 1rem;     
    }  

    ${root}:last-of-type {
        margin: 0 0 1rem 0;
    }    

    ${root} .ctx-label {
        display:flex;
        justify-content:flex-start;
        flex-wrap:wrap;
        width:100%;
        position:relative;
        transition: all 0.5s;
    }


    ${root} .ctx-label.gutter {
        margin-top: 1rem
    }

    ${root} .ctx-subtitle {
        display:flex;
        justify-content:flex-start;
        width:100%;  
        padding-bottom: 5px;    
        text-transform: uppercase;
        font-size: 1rem;
        color: #999;
        position:absolute;
        top:calc(50%);
        left:1rem;
        transition: all 0.5s;
        transform: translateY(-50%);
    }

    ${root} .elevation{
        color: #666;
        font-weight:bold;
        font-size: .7rem;
        top: -0.5rem;
        left:0
    }
        
    ${root} .ctx-input {
        display:flex;
        justify-content:flex-start;
        width:100%;  
        padding:0 1rem;
        height:50px;
        border-radius:5px;
        border:0;
        background: #DEE7F5;
        color:#666    
    }

    ${root} .ctx-input.ctx-is-invalid {
        border:1px #E47B7B solid;
        color: #E47B7B;
        background: #FFDBDB
    }

    ${root} .ctx-input.ctx-is-valid {
        border:1px #4B7B78 solid;
        color: #4B7B78;
        background: #D9FCFA
    }

    ${root} .ctx-error-message {
        display:block;
        width:100%;
        padding: .5rem 0 0 0;
        color: #E47B7B;
        font-size: .8rem;
        border-radius: 5px;
        position:absolute;
        bottom: -1rem
    }
`
