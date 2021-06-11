import {createGlobalStyle} from 'styled-components'
import PrimaryFont from './utils/fonts/Hind-Light.woff'
const GlobalStyle = createGlobalStyle`
.ContainerText{
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 10px;
    font-family:cursive;
    font-size: 20px;
}

.ContainerText p{
    font-family:'Hind';
}

.ContainerImage{
    display: flex;
    width: 20%;
    margin-right: 10px;
    justify-content: center;
    
}

@font-face{
    font-family: 'Hind';
    src: local ('Hind'), url (${PrimaryFont}) Format('woff');
`;

export default GlobalStyle
