import React, { useEffect, useState } from 'react';
import SectionHeading from '../../../components/SectionHeading/SectionHeading';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { FaQuoteLeft } from 'react-icons/fa';


const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);

    return (
        <div className="md:mx-20">
            <SectionHeading subHeading="---What Our Clients Say---" mainHeading="TESTIMONIALS" />

            <div className="">
                <Swiper
                    pagination={{
                        type: 'progressbar',
                    }}
                    navigation={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="mySwiper"
                >
                    {reviews.map((review) => (
                        <SwiperSlide key={review._id} className="mb-10">
                            <div className="rating flex justify-center mt-4">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <input
                                        key={star}
                                        type="radio"
                                        name={`rating-${review._id}`}
                                        className="mask mask-star-2 bg-[#CD9003]"
                                        aria-label={`${star} star`}
                                        checked={review.rating === star}
                                        readOnly
                                    />
                                ))}

                            </div>
                            <div className="flex flex-col items-center text-center mt-10 px-16">
                                <i className='text-6xl'><FaQuoteLeft /></i>
                                <p className="py-4 px-16">{review.details}</p>
                                <h3 className="text-2xl text-orange-400 font-semibold">{review.name}</h3>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Reviews;