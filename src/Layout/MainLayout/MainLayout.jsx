import React from 'react';
import Navbar from '../../sheared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../sheared/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;