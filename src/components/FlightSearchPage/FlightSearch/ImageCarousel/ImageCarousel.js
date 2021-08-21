import React, { useEffect } from 'react';
import './ImageCarousel.css';
import Image from './Image/Image';
import { useSelector } from 'react-redux';
import { store } from '../../../../redux/store'
import { actions } from '../../../../redux/actions'

function ImageCarousel() {
    useEffect(() => store.dispatch(actions.loadImages), [])
    const images = useSelector(store => store?.carouselImages) ?? []

    const scrollRef = React.useRef()
    const preventDefault = e => e.preventDefault()

    function handleScroll(event) {
        scrollRef.current.scrollTo({
            left: scrollRef.current.scrollLeft + event.deltaY,
            behavior: 'auto'
        })
    }

    useEffect(() => {
        scrollRef.current.addEventListener('wheel', preventDefault)
    }, [], () => {
        scrollRef.current.removeEventListener('wheel', preventDefault)
    })

    return (
        <ul className='image-carousel' onWheel={handleScroll} ref={scrollRef}>
            {images.map(image => <Image key={image} image={image} />)}
        </ul>
    )
}

export default ImageCarousel;