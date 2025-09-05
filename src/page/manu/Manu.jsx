import React from 'react';
import { Helmet } from 'react-helmet';
import Cover from '../../sheared/Cover/Cover';
import banner from '../../assets/menu/banner3.jpg'
import ManuCategory from './manuCategory/manuCategory';

const Manu = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Bistro Boss | Manu</title>
            </Helmet>
            <Cover bgImg={banner} title="our manu" describe="Would you like to try a dish?"></Cover>
            <ManuCategory />
        </div>
    );
};

export default Manu;