
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


import heroImg1 from '../../../assets/home/01.jpg';
import heroImg2 from '../../../assets/home/02.jpg';
import heroImg3 from '../../../assets/home/03.png';
import heroImg4 from '../../../assets/home/04.jpg';
import heroImg5 from '../../../assets/home/05.png';

const HeroSection = () => {
    return (
        <Carousel>
            <div>
                <img src={heroImg1} />
            </div>
            <div>
                <img src={heroImg2} />
            </div>
            <div>
                <img src={heroImg3} />
            </div>
            <div>
                <img src={heroImg4} />
            </div>
            <div>
                <img src={heroImg5} />
            </div>
        </Carousel>
    );
};

export default HeroSection;