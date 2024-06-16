import React from "react";
import Slider from 'react-slick';
import mylogo from '../assets/imageForEntry49-mCZ.webp';
import Koko from '../assets/pexels-olly-1050244.jpg'
import NewImage from '../assets/sell-online-620x380.webp';
import shoes from '../assets/pexels-solliefoto-298863.jpg'
import "./Slider.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
    const setting = {
        dots: true,
        Infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,

    }



    return (

        <Slider {...setting} className="Slider ">

            <div className="slide">
                <img src={Koko} alt="My Logo" id="slider-ig" className='slider-ig' />
            </div>
            <div className="slide">
                <img src={shoes} alt="New Image" id="slider-ig" className='slider-ig' />
            </div>
            <div className="slide">
                <img src={NewImage} alt="New Image" id="slider-ig" className='slider-ig' />
            </div>
        </Slider>
    )
}

export default ImageSlider;