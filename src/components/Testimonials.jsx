import TestimonialImage1 from '../assets/Testimonials/testemonial-1.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { motion } from 'motion/react'

const Testimonials = () => {
    return (
        <div>
            <div className='mt-16 lg:mt-24 flex flex-col gap-4 relative'>
                <div className='lg:hidden'>
                    <img className='rounded-tr-[6rem] rounded-bl-[6rem]' src={TestimonialImage1} alt="" />
                </div>

                <motion.div
                    initial={{ x: 20 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 1, repeatType: "reverse", repeat: Infinity }}
                    className='absolute lg:flex top-0 right-0 duration-300 transition-all hidden'>
                    <div className='h-32 w-32 rounded-full bg-yellow-500 bg-opacity-20'></div>
                    <div className='h-32 w-32 rounded-tl-full bg-purple-600 bg-opacity-20 duration-300 transition-all'></div>
                </motion.div>

                <div className='flex flex-col items-start gap-3'>
                    <div className='bg-[#FEE079] rounded-2xl px-2 text-xs lg:text-sm font-medium font-Roboto py-1'>
                        Testimonials
                    </div>
                    <div className="hidden lg:block">
                        <h2 className='text-2xl lg:text-3xl font-Noto'>What Our Customers Say</h2>
                    </div>

                    <div className='btn-bg-primary rounded-2xl px-2 text-xs lg:text-sm font-medium font-Roboto py-1 lg:mt-4'>
                        <i class="ri-chat-quote-line text-white text-2xl"></i>
                    </div>

                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        spaceBetween={30}
                        slidesPerView={1}
                        className="rounded-lg w-full"
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <div className="bg-transparent pb-6 mb-8 lg:mb-4 rounded-md flex flex-col gap-2">
                                <h3 className="text-lg font-bold text-center text-gray-900">Excellent Service</h3>
                                <p className="text-sm text-gray-800 text-center">
                                    "This platform completely transformed the way I work. Their support team is amazing, and the features are user-friendly!"
                                </p>
                                <div className="flex flex-col items-center">
                                    <p className="font-medium text-black">Alice Johnson</p>
                                    <p className="text-yellow-500">Project Manager</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="bg-transparent pb-6 rounded-md flex flex-col gap-4">
                                <h3 className="text-lg font-bold text-center text-gray-900">Incredible Experience</h3>
                                <p className="text-sm text-gray-800 text-center">
                                    "I’ve never experienced such a seamless integration process before. Kudos to the team for their hard work!"
                                </p>
                                <div className="flex flex-col items-center">
                                    <p className="font-medium text-black">Mark Thompson</p>
                                    <p className="text-yellow-500">Software Engineer</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="bg-transparent pb-6 rounded-md flex flex-col gap-4">
                                <h3 className="text-lg font-bold text-center text-gray-900">Highly Recommend</h3>
                                <p className="text-sm text-gray-800 text-center">
                                    "The team was professional, efficient, and extremely knowledgeable. I couldn’t be happier with the results."
                                </p>
                                <div className="flex flex-col items-center">
                                    <p className="font-medium text-black">Sophia Lee</p>
                                    <p className="text-yellow-500">Designer</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="bg-transparent pb-6 rounded-md flex flex-col gap-4">
                                <h3 className="text-lg font-bold text-center text-gray-900">Great Support</h3>
                                <p className="text-sm text-gray-800 text-center">
                                    "Whenever I faced a problem, the customer support team was always there to guide me step-by-step."
                                </p>
                                <div className="flex flex-col items-center">
                                    <p className="font-medium text-black">David Martinez</p>
                                    <p className="text-yellow-500">Freelancer</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="bg-transparent pb-6 rounded-md flex flex-col gap-4">
                                <h3 className="text-lg font-bold text-center text-gray-900">Fantastic Results</h3>
                                <p className="text-sm text-gray-800 text-center">
                                    "The results exceeded my expectations. I highly recommend this to anyone looking for reliable solutions."
                                </p>
                                <div className="flex flex-col items-center">
                                    <p className="font-medium text-black">Emma Wilson</p>
                                    <p className="text-yellow-500">Entrepreneur</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>


                </div>
            </div>
        </div>
    )
}

export default Testimonials