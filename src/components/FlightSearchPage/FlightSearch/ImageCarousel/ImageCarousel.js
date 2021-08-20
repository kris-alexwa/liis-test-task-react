import React from 'react';
import './ImageCarousel.css';
import Image from './Image/Image';
import NewYorkImage1 from '../../../../images/NewYork1.jpg';
import NewYorkImage2 from '../../../../images/NewYork2.jpg';
import NewYorkImage3 from '../../../../images/NewYork3.jpg';
import NewYorkImage4 from '../../../../images/NewYork4.jpg';
import NewYorkImage5 from '../../../../images/NewYork5.jpg';
import NewYorkImage6 from '../../../../images/NewYork6.jpg';
import NewYorkImage7 from '../../../../images/NewYork7.jpg'

function ImageCarousel() {
    const images = [NewYorkImage1, NewYorkImage2, NewYorkImage3, NewYorkImage4, NewYorkImage5, NewYorkImage6, NewYorkImage7]

    const scrollRef = React.useRef()
    const preventDefault = e => e.preventDefault()

    function handleScroll(event) {
        scrollRef.current.scrollTo({
            left: scrollRef.current.scrollLeft + event.deltaY,
            behavior: 'auto'
        })
    }

    React.useEffect(() => {
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