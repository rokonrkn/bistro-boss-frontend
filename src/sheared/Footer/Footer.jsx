import React from 'react';

const Footer = () => {
    return (
        <div className="mt-20">
            <div className='grid grid-cols-2'>
                <div className="footer-left bg-[#1F2937]">
                    <div className="left-content flex flex-col text-white p-10 items-center md:mx-20">
                        <h3 className="text-2xl mb-4">Contact Us</h3>
                        <p>123 Main Street, Anytown, USA</p>
                        <p>Email: 1DhMf@example.com</p>
                        <p>Phone: (123) 456-7890</p>
                    </div>
                </div>
                <div className="footer-right bg-[#111827]">
                    <div className="left-content flex flex-col text-white p-10 items-center md:mx-20">
                        <h3 className="text-2xl mb-4">Contact Us</h3>
                        <p>123 Main Street, Anytown, USA</p>
                        <p>Email: 1DhMf@example.com</p>
                        <p>Phone: (123) 456-7890</p>
                    </div>
                </div>
            </div>
            <footer className="footer footer-center p-4 bg-[#151515] text-white">Copyright © CulinaryCloud. All rights reserved.</footer>
        </div>
    );
};

export default Footer;