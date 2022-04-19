export default (root, props) =>   /*css*/`
    ${root} { display:inline }  

    ${root} .ctx-button {
        display: inline;
        padding:1rem;
        text-transform: uppercase;
        border-radius:5px;
        min-width:9rem;
    }

    ${root} .ctx-theme-grey {
        color: #9FAABE;
        background: #D9DFEA;
        border:1px  #D9DFEA solid;
    }
    ${root} .ctx-theme-green {
        color: #328597;
        background: #89E8E2;
        border:1px  #7DD7D1 solid;
    }
`
