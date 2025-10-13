import React, { useEffect, useState } from 'react';
import SectionHeading from '../../../components/SectionHeading/SectionHeading';
import { useLoaderData } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';

const MangeBooking = () => {
  const bookingsData = useLoaderData();
  const [bookings, setBookings] = useState(bookingsData || []);

  const baseUrl = import.meta.env.VITE_API_BASE_URL;


  const handleActivityUpdate = async (id, currentStatus) => {
    const newStatus = currentStatus === "Pending" ? "Done" : "Pending";

    try {
      const res = await fetch(`${baseUrl}/${id}/activity`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ activity: newStatus }),
      });

      if (!res.ok) throw new Error("Failed to update status");

      const data = await res.json();

      
      setBookings((prev) =>
        prev.map((b) => (b._id === id ? data.booking : b))
      );
      
    } catch (error) {
      console.error("Error updating activity:", error);
    }
  };

  return (
    <div>
      <SectionHeading
        subHeading={"---Manage Booking---"}
        mainHeading={"Manage Booking"}
      />

      <div className="bg-white mt-4 p-4">
        <h2 className="uppercase font-semibold text-2xl">
          Total Items : {bookings?.length}
        </h2>

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
            {bookings?.map((item, index) => (
              <tr key={index} className="bg-white hover:bg-gray-50">
                <td className="p-2">{item.name}</td>
                <td className="p-2">{item.email}</td>
                <td className="p-2">{item.phone}</td>
                <td className="p-2">{item.date}</td>
                <td className="p-2">{item.time}</td>
                <td className="p-2">{item.guest}</td>
                <td
                  className={`p-2 font-semibold ${
                    item.activity === "Done"
                      ? "text-green-600"
                      : "text-[#AE7B2B]"
                  }`}
                >
                  {item.activity}
                </td>
                <td className="p-2">
                  <button
                    onClick={() =>
                      handleActivityUpdate(item._id, item.activity)
                    }
                    className={`p-2 rounded-full transition duration-200 ${
                      item.activity === "Done"
                        ? "bg-green-600 text-white hover:bg-green-700"
                        : "bg-[#80E2B7] text-white hover:bg-[#80E2B7]"
                    }`}
                  >
                    <FaCheck />
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
