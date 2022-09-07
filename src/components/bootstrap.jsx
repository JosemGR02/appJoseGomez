
//REACT BOOSTRAP







TARGETAS







ANIMACIONES
import { fadeIn } from 'react-animations'


Una colección de animaciones que se pueden usar con cualquier biblioteca de estilos en línea que admita el uso de objetos para definir animaciones de fotogramas clave, como Radium o Aphrodite. React-animations implementa todas las animaciones de animate.css .

Echa un vistazo a la demostración interactiva .

Uso
Puede importar cada animación directamente desde el paquete principal

import { fadeIn } from 'react-animations'
o puede importar una animación específica directamente

import fadeIn from 'react-animations/lib/fade-in'
Uso con radio
import React from 'react';
import { bounce } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
    bounce: {
        animation: 'x 1s',
        animationName: Radium.keyframes(bounce, 'bounce')
    }
}

class Test extends React.Component {
    render() {
        <StyleRoot>
            <div className="test" style={styles.bounce}>
            </div>
        </StyleRoot>
    }
}

STYLED COMPONENT

import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';

const bounceAnimation = keyframes`${bounce}`;

const BouncyDiv = styled.div`
    animation: 1s ${bounceAnimation};
`;





