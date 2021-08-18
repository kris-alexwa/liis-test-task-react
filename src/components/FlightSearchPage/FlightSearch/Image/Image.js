import React from 'react';
import './Image.css';
import NewYorkImage1 from '../../../../images/NewYork1.jpg'

function Image() {
    return (
        <li className='image-carousel__element'><img className='image-carousel__image' src={NewYorkImage1} alt='Картинка Нью-Йорк' /></li>
    )
}

export default Image;