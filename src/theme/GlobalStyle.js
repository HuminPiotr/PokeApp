import { createGlobalStyle } from 'styled-components';
import 'typeface-poppins';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after{
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility; 
    }
    
    html{ 
        --red: #FF0000;
        --fadedRed: #FE8181;
        --darkRed: #DC0000;
        --secondRed: #EA4646;
        --gray: #D1D1D1;
    }

    body{
        font-size: 12px;
        font-family: 'Poppins', sans-serif;
        margin: 0;
        padding: 21px;
        background-color: var(--red);
        color: white;
    }
    
    button, input, select{
        font-family: 'Poppins', sans-serif;
        font-size: 12px;
    }

    @media(min-width: 640px){
        body{
            font-size: 16px;
        }
        button, input, select{
        font-size: 16px;
    }
    }
`;

export default GlobalStyle;
