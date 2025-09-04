import React from 'react';

const OurManuDetails = ({ item }) => {
    const { _id, name, recipe, image, price } = item;
    return (
        <div className="">
            <div className="flex gap-6">
                <img style={{ borderRadius: '0 200px 200px 200px' }} width={100} src={image} alt="" />
                <div className="manu-content text-[#737373]">
                    <h3 className="text-xl uppercase">{name}-----------</h3>
                    <p>{recipe}</p>
                </div>
                <p className="text-yellow-600">${price}</p>
            </div>
        </div>
    );
};

export default OurManuDetails;