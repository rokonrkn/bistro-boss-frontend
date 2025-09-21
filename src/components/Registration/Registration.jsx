import React, { useState } from 'react';
import loginImg from '../../assets/others/authentication2.png'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const Login = () => {

    return (
        <div className="md:mx-40 h-screen flex items-center">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-center bg-[#F3F3F3] shadow-md  px-16 py-16 '>

                <div className="rightForm">
                    <h2 className='text-3xl font-semibold text-center mb-5'>Sign Up</h2>
                    <form className="space-y-4">
                        {/* name */}
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full  bg-white"
                                required
                            />
                        </div>
                        {/* Email */}
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full  bg-white"
                                required
                            />
                        </div>

                        {/* Password */}
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Your Password"
                                className="input input-bordered w-full  bg-white"
                                required
                            />
                        </div>

                        {/* Submit */}
                        <button type="submit" className="btn bg-[#D1A054]  w-full ">
                            Login
                        </button>

                        <Link to="/login" className="text-sm text-center hover:text-yellow-500 link link-hover block">
                            Already have an account? Please Login
                        </Link>
                    </form>
                </div>
                <div className="leftImg">
                    <motion.img
                        src={loginImg}
                        alt="Login"
                        animate={{ y: [0, -20, 0] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                </div>


            </div>
        </div>
    );
};

export default Login;