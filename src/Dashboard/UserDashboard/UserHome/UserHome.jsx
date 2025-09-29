import React from 'react';
import * as FaIcons from "react-icons/fa";

const UserHome = () => {

    const cartItem = [
        {
            id: 1,
            title: 'Laptop',
            icon: "icon",
            number: 12000,
            bg_color1: 'BB34F5',
            bg_color2: 'FCDBFF'
        },
        {
            id: 2,
            title: 'Mobile',
            icon: "icon",
            number: 12000,
            bg_color1: 'D3A256',
            bg_color2: 'FDE8C0'
        },
        {
            id: 3, // 👈 duplicate ID fixed
            title: 'Tablet',
            icon: "icon",
            number: 12000,
            bg_color1: 'FE4880',
            bg_color2: 'FECDE9'
        }
    ]

    return (
        <header>
            <div className="title">
                <h1 className="text-2xl uppercase">hi welcome back!</h1>
                <div className="cart-item grid md:grid-cols-3 gap-4 mt-4">
                    {
                        cartItem.map(item => (
                            <div
                                className="cart-item p-6 rounded-lg text-white font-bold"
                                key={item.id}
                                style={{
                                    backgroundImage: `linear-gradient(45deg, #${item.bg_color1}, #${item.bg_color2})`
                                }}
                            >
                                <div className="text-center">
                                    <div className="icon"></div>
                                    <div className="data">
                                        <p className='text-2xl'>{item.number}</p>
                                        <h3>{item.title}</h3>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </header>
    );
};

export default UserHome;
