import React from 'react';
import bgImg from '../../../assets/home/featured.jpg';
import SectionHeading from '../../../components/SectionHeading/SectionHeading';

const CheckInManu = () => {
    return (
        <div style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='md:mx-20 my-20 text-white py-1 bg-fixed'>
            <SectionHeading subHeading={"---Check it out---"} mainHeading={"From Our Manu"}></SectionHeading>
            <div className="grid md:grid-cols-2 gap-6 px-20 py-10">
                <img src={bgImg} alt="" />
                <div className="flex flex-col justify-center">
                    <p>March 20, 2023</p>
                    <h4>where can i get some?</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim odit repellendus, fuga reiciendis consectetur illo architecto accusamus iure aspernatur? Sit quam et sint laborum quos! Natus minima tempore molestias officiis.</p>
                    <button className="btn btn-outline border-0 border-b-4 flex mx-auto mt-10">read more</button>
                </div>
            </div>
        </div>
    );
};

export default CheckInManu;