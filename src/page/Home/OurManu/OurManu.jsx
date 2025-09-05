import React, { useEffect, useState } from 'react';
import SectionHeading from '../../../components/SectionHeading/SectionHeading';
import OurManuDetails from './OurManuDetails';

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
            <div className="md:mx-20 grid md:grid-cols-2 gap-6">
                {
                    popular.map(item => <OurManuDetails
                        key={item._id}
                        item={item}>
                    </OurManuDetails>)
                }
            </div>
            <button className="btn btn-outline border-0 border-b-4 flex mx-auto mt-10">View All Manu</button>
        </div>
    );
};

export default OurManu;