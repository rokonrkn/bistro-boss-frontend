import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import manuImg1 from '../../../assets/home/slide1.jpg';
import manuImg2 from '../../../assets/home/slide2.jpg';
import manuImg3 from '../../../assets/home/slide3.jpg';
import manuImg4 from '../../../assets/home/slide4.jpg';
import manuImg5 from '../../../assets/home/slide5.jpg';
import SectionHeading from '../../../components/SectionHeading/SectionHeading';

const OnlineManu = () => {
    return (
        <div>
            <SectionHeading
                subHeading={"---From 11:00am to 10:00pm---"}
                mainHeading={"Order Online"}
            />

            <div className="">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="relative">
                            <img src={manuImg1} alt="" className="" />
                            <h3 className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-2xl text-white uppercase text-center">
                                salat
                            </h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative">
                            <img src={manuImg2} alt="" className="" />
                            <h3 className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-2xl text-white uppercase text-center">
                                pizzas
                            </h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative">
                            <img src={manuImg3} alt="" className="" />
                            <h3 className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-2xl text-white uppercase text-center">
                                soup
                            </h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative">
                            <img src={manuImg4} alt="" className="" />
                            <h3 className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-2xl text-white uppercase text-center">
                                desserts
                            </h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative">
                            <img src={manuImg5} alt="" className="" />
                            <h3 className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-2xl text-white uppercase text-center">
                                salat
                            </h3>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default OnlineManu;