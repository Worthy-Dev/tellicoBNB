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
        background: #daded4;
        color: #3C403D;
    };

    button{
        cursor: pointer;
        font-size: 1.1rem;
        padding: 1rem 2rem;
        transition: all 0.5s ease;
        font-family: 'Oswald', sans-serif;
        background: #39603D;
        color: #ffffff;
        &:hover{
            color: #39603D;
            background: #ffffff;
        }
    }

    h2{
        font-size: 3rem;
    }
    
`
export default GlobalStyle;