import React from 'react';
import './ImageCarousel.css';
import Image from '../Image/Image';

function ImageCarousel() {
    return (
        <ul className='image-carousel'>
            <Image />
            <Image />
            <Image />
            <Image />
        </ul>
    )
}

export default ImageCarousel;