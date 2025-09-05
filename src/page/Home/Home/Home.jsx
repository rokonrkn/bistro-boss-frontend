import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import OnlineManu from '../OnlineManu/OnlineManu';
import BistroBoss from '../BistroBoss/BistroBoss';
import OurManu from '../OurManu/OurManu';
import Number from '../../../components/SectionHeading/Number/Number';
import CheckInManu from '../CheckInManu/CheckInManu';
import Reviews from '../reviews/reviews';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
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