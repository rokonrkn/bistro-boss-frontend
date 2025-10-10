import React from 'react';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TableField = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const onSubmit = async (data) => {
    console.log("Form Data:", data);

    try {
      const response = await fetch(`${baseUrl}/bookings`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      console.log("Server response:", result);
      reset();
      toast.success(result.message);


    } catch (error) {
      console.error("Error uploading item:", error);
      toast.error(error.message);

    }

  };

  // Common input styles
  const inputClass = "w-full p-2 border border-gray-400 rounded bg-transparent text-gray-500 placeholder-gray-400 outline-none focus:ring-1 focus:ring-gray-400";

  return (
    <div className='md:mx-20 mt-10'>.
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid md:grid-cols-3 gap-4">
          {/* Date */}
          <div className="flex flex-col mb-4">
            <label htmlFor="date">Date*</label>
            <input
              type="date"
              id="date"
              className={inputClass}
              {...register("date", { required: "Date is required" })}
            />
            {errors.date && <p className="text-red-500 text-sm">{errors.date.message}</p>}
          </div>

          {/* Time */}
          <div className="flex flex-col mb-4">
            <label htmlFor="time">Time*</label>
            <input
              type="time"
              id="time"
              className={inputClass}
              {...register("time", { required: "Time is required" })}
            />
            {errors.time && <p className="text-red-500 text-sm">{errors.time.message}</p>}
          </div>

          {/* Guest */}
          <div className="flex flex-col mb-4">
            <label htmlFor="guest">Guest*</label>
            <select
              id="guest"
              className={inputClass}
              {...register("guest", { required: "Please select a guest" })}
            >
              <option value="">Select Guest</option>
              <option value="1">1 Person</option>
              <option value="2">2 People</option>
              <option value="3">3 People</option>
              <option value="4">4 People</option>
              <option value="5">5 People</option>
            </select>
            {errors.guest && <p className="text-red-500 text-sm">{errors.guest.message}</p>}
          </div>

          {/* Name */}
          <div className="flex flex-col mb-4">
            <label htmlFor="name">Name*</label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className={inputClass}
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          {/* Phone */}
          <div className="flex flex-col mb-4">
            <label htmlFor="phone">Phone*</label>
            <input
              type="tel"
              id="phone"
              placeholder="Phone Number"
              className={inputClass}
              {...register("phone", { required: "Phone number is required" })}
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
          </div>

          {/* Email */}
          <div className="flex flex-col mb-4">
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className={inputClass}
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
              })}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 bg-yellow-700 text-white px-6 py-2 rounded hover:bg-yellow-800"
        >
          Book A Table
        </button>
      </form>
    </div>
  );
};

export default TableField;
