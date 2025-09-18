import React from 'react';
import logo from '../../assets/others/bistro_logo.png'
import shopIcon from '../../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png'
import { NavLink } from "react-router-dom";


const Navbar = () => {

    const manuItem = [
        { id: 1, name: 'Home', link: '/' },
        { id: 2, name: 'Contact Us', link: '/contact' },
        { id: 3, name: 'Dashboard', link: '/services' },
        { id: 4, name: 'Our Manu', link: '/manu' },
        { id: 5, name: 'Our Shop', link: '/ourShop', icon: shopIcon },
        { id: 6, name: 'Login', link: '/login' }
    ]


    return (
        <div className="navbar fixed bg-black bg-opacity-30  z-10">
            <div className="navbar-start mx-5">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <img className='w-48' src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex items-center">
                    {manuItem.map(item => (
                        <li key={item.id} className="uppercase font-semibold">
                            <NavLink
                                to={item.link}
                                className={({ isActive }) =>
                                    `flex items-center gap-2 ${isActive ? "text-yellow-500" : "text-white hover:text-yellow-500"
                                    }`
                                }
                            >
                                <span className=''>{item.name}</span>
                                {item.icon && <img className="w-8" src={item.icon} alt={item.name} />}
                            </NavLink>
                        </li>
                    ))}
                </ul>

            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;