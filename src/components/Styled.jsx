/*ESTYLED COMPONENTS REACT*/
import styled, {css, createGlobalStyle} from 'styled-components'





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



//Footer

export const FooterSt = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    background-color: darkslategrey ;
    color: white;
    font-family: arial;
    font-size: 2rem;
`;
export const Redes = styled.div`
    display: inline-block;
    font-size: 30px;
    text-align: center;
    margin-left: 5px;
    margin-right: 5px;
    color: white;
`;

export const Rotate = styled.div`
    width: 60px,
    height: 60px;
    margin: 5px auto;
    display: inline-block;
    fontSize: 30px;
    text-align: center;
    margin-left: 5px;
    margin-right: 5px;
    color: white;
`;


// itemDetail

export const ContenItemD = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

//paginacion

export const ContenPaginacion = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    margin-top: 80px;
`;

//itemDetailContainer

//carroucel

//contactanos

//itemlistContainer

export const ContenCarrucel = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: -80px;
    margin-top: 40px;
`;


//itemlist

export const ContenedorIL = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direccion: row;
    align-items: center;
    justify-content: space-between;
`;

//item

export const ContenItem = styled.div`
    margin-bottom: -2rem;
    margin-top: 12rem;
    width: 16rem;
    margin: 2rem;
`;

//itemCount 

//cartItem

//checkout

//cart

export const ContenVacio = styled.div`
    display: flex;
    flex-direccion: column;
    align-items: center;
    gap: 30px;
    margin-bottom: 100px;
    heigth: 100vh;
`;


export const ContenBotonCart = styled.div`
    display: flex;
    flex-direccion: row;
    gap: 30px;
    justify-content: center;
    margin-bottom: 20px;
    margin-top: 30px;
`;



//favorites

//favItems

//pagError

//validador




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
export const ContenPE = styled.div`

    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    height: 100vh;
    margin-top: 10px;
`;
export const ImagenPE = styled.img`

    width: 50%;
    marginBottom: 15px;
}
`;
export const TituloPE = styled.h1`

    color: rgb(4, 5, 48);
    font-size: 25px;
    font-family: Bebas Neue, cursive;
    padding: 20px;
    margin-block-end: -3rem;
    margin-bottom: 10px;

    ${media} {
        h1{
            font-size: 18px;
        }
    }
}
`;
export const BotonPE = styled.button`

    padding: 15px 35px;
    border-radius: 15px;
    border: none;
    color: rgb(4, 5, 48);
    background: rgb(27, 134, 184);
    font-family: Bebas Neue, cursive;
    font-size: 18px;
    margin-bottom: 30px;

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



