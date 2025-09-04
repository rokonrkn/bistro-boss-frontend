import React, { useEffect, useState } from 'react';
import SectionHeading from '../../../components/SectionHeading/SectionHeading';

const OurManu = () => {

    const [popular, setPopular] = useState([]);
    console.log(popular);

    useEffect(() => {
        fetch('ourManu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular');
                setPopular(popularItems);
            })
    }, [])

    return (
        <div>
           <SectionHeading subHeading={"---Check it out---"} mainHeading={"from Our Manu"}></SectionHeading>
           <div className="">
                
           </div>
        </div>
    );
};

export default OurManu;