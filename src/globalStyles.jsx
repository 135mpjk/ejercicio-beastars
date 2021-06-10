import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
.ContainerText{
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 10px;
    font-family:cursive;
    font-size: 20px;
}

.ContainerImage{
    display: flex;
    width: 20%;
    margin-right: 10px;
    justify-content: center;
    
}
`;

export default GlobalStyle
