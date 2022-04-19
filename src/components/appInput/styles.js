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
        color: #666;
        position:absolute;
        top:50%;
        left:1rem;
        transition: all 0.5s;
        transform: translateY(-50%);
    }

    ${root} .elevation{
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
`
