import React from 'react';
import SectionHeading from '../../../components/SectionHeading/SectionHeading';
import TableField from './TableField';

const Reservation = () => {
    return (
        <div>
            <SectionHeading
                subHeading={"---Reservation---"}
                mainHeading={"Book a Table"}
            ></SectionHeading> 
            <TableField />
        </div>
    );
};

export default Reservation;