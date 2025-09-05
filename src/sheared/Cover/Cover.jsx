import React from 'react';

const Cover = ({bgImg, title, describe}) => {
    return (
        <div  style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center'  }} className='md:py-44 px-44'>
            <div className='text-center text-white py-16 bg-black bg-opacity-50  '>
                <h3 className='text-5xl uppercase'>{title}</h3>
                <p className='mt-4'>{describe}</p>
            </div>
        </div>
    );
};

export default Cover;