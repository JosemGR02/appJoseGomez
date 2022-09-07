import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import shortPromo from '../assets/imgProd/shortPromo.jpg'
import busoPromo from '../assets/imgProd/busoPromo.jpg'
import remeraPromo from '../assets/imgProd/remeraPromo.webp'
import pantalonPromo from '../assets/imgProd/pantalonPromo.webp'



export function Carrucel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} style={{display: 'flex', width: '400px'}}>
            <Carousel.Item style={{ textAlign: 'center'}}>
                <img src={shortPromo}  alt="Second slide" style={{width: '250px', height: '300px'}}/>
            </Carousel.Item>

            <Carousel.Item style={{ textAlign: 'center'}}>
                <img src={busoPromo} alt="Second slide" style={{width: '250px', height: '300px'}}/>
            </Carousel.Item>

            <Carousel.Item style={{ textAlign: 'center'}}>
                <img src={remeraPromo} alt="Second slide" style={{width: '250px', height: '300px'}}/>
            </Carousel.Item>

            <Carousel.Item style={{ textAlign: 'center'}}>
                <img src={pantalonPromo} alt="Second slide" style={{width: '250px', height: '300px'}}/>
            </Carousel.Item>
        </Carousel>
    );
}

export default Carrucel;

/*
<Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
                 */