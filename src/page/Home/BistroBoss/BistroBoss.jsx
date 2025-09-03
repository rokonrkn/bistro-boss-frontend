import React from 'react';
import bgImg from '../../../assets/home/chef-service.jpg'

const BistroBoss = () => {
    return (
        <div style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className="text-white p-20 my-20">
            <div className="bistro-content bg-white text-black py-16 px-20 text-center">
                <h3 className='text-4xl mb-4 uppercase'>Bistro Boss</h3>
                <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
        </div>
    );
};

export default BistroBoss;