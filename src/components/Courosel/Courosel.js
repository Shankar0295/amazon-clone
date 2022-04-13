import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './Courosel.css'

const slideImages = [
    'https://m.media-amazon.com/images/I/61hz0IXoMxL._SX1200_.jpg',
    'https://m.media-amazon.com/images/I/41X5ZFh-IVL._SX900_.jpg',
    'https://m.media-amazon.com/images/I/411DMWuoFrL._SX1500_.jpg',
    'https://m.media-amazon.com/images/I/41hWMi8PaqL._SX900_.jpg',
    'https://m.media-amazon.com/images/I/519kOLhmKqL._SX1050_.jpg',
    'https://m.media-amazon.com/images/I/519ksYx4gvL._SX1050_.jpg',

];
const Courosel = () => {
    return (
        <div className="courosel">
            <Slide>
                {slideImages.map((slideImage, index) => (
                    <div className="courosel__slide" key={index}>
                        <div style={{ 'backgroundImage': `url(${slideImage})` }}>
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    )
}

export default Courosel;

