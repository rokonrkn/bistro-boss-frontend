import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import OnlineManu from '../OnlineManu/OnlineManu';
import BistroBoss from '../BistroBoss/BistroBoss';
import OurManu from '../OurManu/OurManu';
import Number from '../../../components/SectionHeading/Number/Number';
import CheckInManu from '../CheckInManu/CheckInManu';
import Reviews from '../reviews/reviews';

const Home = () => {
    return (
        <div>
           <HeroSection />
           <OnlineManu />
           <BistroBoss />
           <OurManu />
           <Number />
           <CheckInManu />
           <Reviews />
        </div>
    );
};

export default Home;