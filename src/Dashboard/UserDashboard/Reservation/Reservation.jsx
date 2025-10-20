import React from 'react';
import SectionHeading from '../../../components/SectionHeading/SectionHeading';
import TableField from './TableField';
import Location from '../../../components/Location/Location';

const Reservation = () => {
    return (
        <div>
            <SectionHeading
                subHeading={"---Reservation---"}
                mainHeading={"Book a Table"}
            ></SectionHeading> 
            <TableField />
            <Location/>
        </div>
    );
};

export default Reservation;