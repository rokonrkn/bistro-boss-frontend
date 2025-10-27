import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MyBooking = () => {
    const data = useLoaderData();
    console.log(data);
    const userData = JSON.parse(localStorage.getItem('authUser'));
    const email = userData?.email;

    console.log('Email:', email);

    return (
        <div>
            this is my booking page  gfdgsdfgsdf
        </div>
    );
};

export default MyBooking;