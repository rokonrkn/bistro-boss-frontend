import React from 'react';

const SectionHeading = ({subHeading, mainHeading}) => {
    return (
        <div className="manu-title text-center my-20 space-y-2">
            <p className='text-[#D99904]'>{subHeading}</p>
            <h3 className='text-2xl uppercase'>{mainHeading}</h3>
        </div>
    );
};

export default SectionHeading;