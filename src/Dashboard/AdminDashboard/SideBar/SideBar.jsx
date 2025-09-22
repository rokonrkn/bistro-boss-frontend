import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const SideBar = () => {

    const {loginUser} = useContext(AuthContext)
    console.log(loginUser?.role)

    const dashboardItems = [
        { id: 1, name: 'Admin Home', link: '',roles: ['admin'] },
        { id: 2, name: 'Add Item', link: 'add-item', roles: ['admin'] },
        { id: 3, name: 'Manage Items', link: 'manage-items' ,roles: ['admin'] },
        { id: 4, name: 'Manage Booking', link: 'manage-booking', roles: ['admin'] },
        { id: 5, name: 'All Users', link: 'all-users', roles: ['admin'] },
        { id: 6, name: 'User Home', link: '', roles: ['user'] },
        { id: 7, name: 'Reservation', link: 'reservation', roles: ['user'] },
        { id: 8, name: 'Payment History', link: 'payment-histoty', roles: ['user'] },
        { id: 9, name: 'My Cart', link: 'my-cart', roles: ['user'] },
        { id: 10, name: 'Add Review', link: 'add-review', roles: ['user'] },
        { id: 11, name: 'My Booking', link: 'my-booking', roles: ['user'] },
    ];

    const roleBasedItemShorted = dashboardItems.filter( item => 
        item?.roles.includes(loginUser?.role)
    )

    return (
        <aside className="w-64 h-screen bg-[#D1A054] text-white flex flex-col p-5">
            <h2 className="text-2xl font-bold mb-8 text-center">Dashboard</h2>
            <nav className="flex flex-col gap-3">
                {roleBasedItemShorted.map(item => (
                    <NavLink
                        key={item.id}
                        to={item.link}
                        className={({ isActive }) =>
                            `px-4 py-2 rounded-lg transition-colors duration-200 ${isActive ? 'bg-yellow-500 text-black font-semibold' : 'hover:bg-gray-700'
                            }`
                        }
                    >
                        {item.name}
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
};

export default SideBar;
