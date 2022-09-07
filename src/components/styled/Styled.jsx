/*ESTYLED COMPONENTS REACT*/
import styled, {css, createGlobalStyle} from 'styled-components';





//ESTILOS GLOBALES

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: mediumaquamarine;
    }
`;



//ESTILOS LOCALES

export const FooterSt = styled.footer`
    width: 100%;
    height: 100px;
    display: flex;
    justifyContent: center;
    backgroundColor: black;
    color: white;
    fontFamily: arial;
`;
export const Redes = styled.div`
    display: inlineBlock;
    fontSize: 30px;
    textAlign: center;
    marginLeft: 5px;
    marginRight: 5px';
    color: white;
`;
export const Rotate = styled.div`
    width: 60px,
    height: 60px;
    margin: 5px auto;
    display: inlineBlock;
    fontSize: 30px;
    textAlign: center;
    marginLeft: 5px;
    marginRight: 5px;
    color: white;
`;


/*
export const NotFound = styled.body`

    display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 1rem;
`;

*/


















// pagNotFound 404

const maxWidth = 630;

const media = `@media (max-width: ${maxWidth}px)`;

export const NotFound = styled.body`

    background-color:#ebecea;
    height: 100vh;
`;
export const contenedor = styled.div`

    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    height: 100vh;
`;
export const imagen = styled.img`

    width: 50%;
}
`;
export const titulo = styled.h1`

    color:rgb(4, 5, 48);
    font-size: 25px;
    font-family: 'Bebas Neue', cursive;
    padding: 20px;
    margin-block-end: -3rem;

    ${media} {
        h1{
            font-size: 18px;
        }
    }
}
`;
export const boton = styled.button`

    padding: 15px 35px;
    border-radius: 15px;
    border: none;
    color:rgb(4, 5, 48);
    background: rgb(27, 134, 184);
    font-family: 'Bebas Neue', cursive;
    font-size: 18px;

    ${media} {
        button{
            font-size: 12px;
        }
    }
}
`;












const desktopStartWidth = 996;

const mobile = `@media (max-width: ${desktopStartWidth}px)`;
const desktop = `@media (min-width: ${desktopStartWidth}px)`;


export const Cuadrado = styled.div`
    width: 70px;
    heigth: 70px;
    background-color: black;

    ${mobile} {
        width: 50%;
    }
    ${desktop} {
        width: 100%;
    }

    &:hover{
        background-color: red;
    }
`;
export const Rectangulo = styled(Cuadrado)`
    width: 150px;
`;

export const Component = styled.div`
    background-color: ${({isRigth}) => isRigth ? 'blue' : 'green'};
`

export const Input = styled.input.attrs(props => ({
    type: "password",
    maxLength: props.maxLength || 5, 
}))`
color: black;
`;

const BigText = css`
    font-size: 3rem;
`;

export const RedText = styled.p`
    background-color: red;
    ${BigText};
`;

export const BlueText = styled.p`
    background: blue;
    ${BigText};
`;


/*style={{ width: '18rem', margin: '5rem' }}*/



