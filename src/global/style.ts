import { createGlobalStyle } from 'styled-components'
import icone from '../assets/icon-fundo.png'
export default createGlobalStyle `

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

body {
    background-color: #044f6e;
    background-image: url(${icone});
    background-size: 50vh;
    background-position-x: right;
    background-position-y: 35vh;
    background-repeat: no-repeat;
    font-family: 'Roboto', sans-serif;

    @media(max-width: 574px) {
        background-size: 30vh;
        background-position-x: 220px;
        background-position-y: 431px;
        background-repeat: no-repeat;
    }
}
`;