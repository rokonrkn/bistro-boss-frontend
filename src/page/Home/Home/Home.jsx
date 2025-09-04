import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import OnlineManu from '../OnlineManu/OnlineManu';
import BistroBoss from '../BistroBoss/BistroBoss';
import OurManu from '../OurManu/OurManu';

const Home = () => {
    return (
        <div>
           <HeroSection />
           <OnlineManu />
           <BistroBoss />
           <OurManu />
        </div>
    );
};

export default Home;