import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../imgs/carousel-1.JPG'
import image2 from '../imgs/carousel-2.JPG'
import image3 from '../imgs/carousel-3.JPG'
import image4 from '../imgs/carousel-4.JPG'
// <Carousel.Caption>
//   <h3>First slide label</h3>
//   <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
// </Carousel.Caption>
const HomeCarousel = () => {
  return (
    <Carousel className="mx-auto home-carousel">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image4}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default HomeCarousel
