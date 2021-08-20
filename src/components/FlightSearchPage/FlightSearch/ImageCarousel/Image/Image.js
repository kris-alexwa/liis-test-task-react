import React from 'react';
import './Image.css';

function Image(props) {
    return (
        <li className='image-carousel__element'><img className='image-carousel__image' src={props.image} alt='Картинка Нью-Йорк' /></li>
    )
}

export default Image;