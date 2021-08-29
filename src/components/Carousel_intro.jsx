import React from 'react'
import {Carousel} from 'react-bootstrap'
import tomate from '../assets/images/tomates_carousel.png'
import sanguche from '../assets/images/sanguche_carousel.png'
import ensalada from '../assets/images/ensalada_carousel.png'

const Carousel_intro = () => {
    return (
        <Carousel className="container mt-3 w-50">
            <Carousel.Item className="carousel slide" data-ride="carousel">
                <img className="d-block w-100" src={tomate} alt="First slide" />
            </Carousel.Item>

            <Carousel.Item className="carousel slide" data-ride="carousel">
                <img className="d-block w-100" src={ensalada} alt="Second slide" />
            </Carousel.Item>

            <Carousel.Item className="carousel slide" data-ride="carousel">
                <img className="d-block w-100" src={sanguche} alt="Third slide" />
            </Carousel.Item>
            
        </Carousel>
    )
}

export default Carousel_intro
