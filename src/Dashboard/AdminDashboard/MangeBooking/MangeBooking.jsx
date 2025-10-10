import React, { useEffect } from 'react';
import SectionHeading from '../../../components/SectionHeading/SectionHeading';
import { useLoaderData } from 'react-router-dom';
import { i } from 'framer-motion/client';
import { FaCheck } from 'react-icons/fa';

const MangeBooking = () => {

    const bookingsData = useLoaderData();
    console.log(bookingsData);

    return (
        <div>
            <SectionHeading
                subHeading={"---Manage Booking---"}
                mainHeading={"Manage Booking"}
            ></SectionHeading>

            <div className="bg-white mt-4 p-4">
                <h2 className='uppercase font-semibold text-2xl '>Total Items : {bookingsData?.length}</h2>

                <table className="w-full mt-4 ">
                    <thead>
                        <tr className="bg-[#D1A054] text-white">
                            <th className="p-2 text-left rounded-tl-lg">Name</th>
                            <th className="p-2 text-left">Email</th>
                            <th className="p-2 text-left">Phone</th>
                            <th className="p-2 text-left">Date</th>
                            <th className="p-2 text-left">Time</th>
                            <th className="p-2 text-left">Guest</th>
                            <th className="p-2 text-left">Activity</th>
                            <th className="p-2 text-left rounded-tr-lg">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookingsData?.map((item, index) => (
                            <tr
                                key={index}
                                className="bg-white hover:bg-gray-50"
                            >
                                <td className="p-2">{item.name}</td>
                                <td className="p-2">{item.email}</td>
                                <td className="p-2">{item.phone}</td>
                                <td className="p-2">{item.date}</td>
                                <td className="p-2">{item.time}</td>
                                <td className="p-2">{item.guest}</td>
                                <td
                                    className={`p-2 ${item.activity === "Done" ? "text-green-600" : "text-[#AE7B2B]"}`}>
                                    {item.activity}
                                </td>
                                <td className="p-2">
                                    <button
                                        className={`p-2 rounded-full ${item.activity === "Done" ? "bg-green-600 text-green-400" : "bg-[#AE7B2B] text-[#d6b57f]"}`}>
                                        <i><FaCheck /></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default MangeBooking;