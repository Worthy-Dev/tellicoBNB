import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Merriweather', serif;
        overflow-x: hidden;
        background: #e7ebe1;
        color: #595b57;

    };

    a{
        color: #595b57;
        &:active{
            color: #595b57;
        } 
        cursor: pointer;
    }

    button{
        cursor: pointer;
        font-size: 1.1rem;
        padding: 1rem 2rem;
        transition: all 0.5s ease;
        font-family: 'Oswald', sans-serif;
        background: #627d57;
        color: #ffffff;
        &:hover{
            color: #bccebc;
            background: #ffffff;
        }
    }

    h2{
        font-size: 3rem;
    }
`

export default GlobalStyle;