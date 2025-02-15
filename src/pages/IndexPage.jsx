import HeroImage1 from '../assets/hero-image.png'
import HeroImageBlock1 from '../assets/hero-image-block-1.png';
import HeroImageBlock2 from '../assets/hero-image-block-2.png';
import CompanyLogo1 from '../assets/CompanyLogos/logo-1.png';
import CompanyLogo2 from '../assets/CompanyLogos/logo-2.png';
import CompanyLogo3 from '../assets/CompanyLogos/logo-3.png';
import CompanyLogo4 from '../assets/CompanyLogos/logo-4.png';
import CompanyLogo5 from '../assets/CompanyLogos/logo-5.png';

import IndeedImage from '../assets/CompanyLogos/indeed.png';
import JobHuntImage from '../assets/CompanyLogos/job-hunt.png';
import SpecialEventsImage from '../assets/CompanyLogos/special-events.png';
import StarImage from '../assets/CompanyLogos/star.png';

import ServiceImage1 from '../assets/Services/service-1.jpg'
import ServiceImage2 from '../assets/Services/service-2.jpg'
import ServiceImage3 from '../assets/Services/service-3.jpg'

import TestimonialImage1 from '../assets/Testimonials/testemonial-1.png'

import AboutImage from '../assets/about-1.jpg';
import { motion } from 'motion/react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Quote } from 'lucide';

const IndexPage = () => {

    return (
        <div>
            <main>
                <div className="container pt-12 lg:pt-24 pb-10 overflow-hidden">
                    <div className='flex flex-col lg:flex-row gap-4 relative'>
                        {/* left image */}
                        <div className="hidden lg:block">
                            <div>
                                <img src={HeroImageBlock1} alt="Hero Image" />
                            </div>
                        </div>

                        {/* main heading */}
                        <div className="flex flex-col items-center gap-5 lg:gap-8">
                            <h1 className="font-Noto text-4xl text-center font-semibold lg:text-5xl">
                                Best Solution To
                                <br />
                                GetGood Employees
                            </h1>
                            <p className="text-xs lg:text-lg font-Roboto text-slate-600 text-center px-1">Social creatures, living in prides led by a dominant male. They rely on teamwork during hunts, showcasing their exceptional hunting skills.</p>
                            <div className='group'>
                                <div className='btn-bg-primary text-white font-medium py-1 px-1 pl-2 rounded-full flex gap-1 items-center cursor-pointer group-hover:bg-white duration-300 transition-all group-hover:text-[#018180] border border-[#018180]'>
                                    <span className="text-sm">Find Work</span>
                                    <i className="ri-arrow-right-up-long-line py-1 px-2 bg-white text-[#018180] rounded-full text-lg group-hover:bg-[#018180] duration-300 transition-all group-hover:text-white group-hover:rotate-45"></i>
                                </div>
                            </div>
                        </div>

                        {/* image */}
                        <div className="">
                            <div className='lg:hidden'>
                                <img src={HeroImage1} alt="Hero Image" />
                            </div>
                            <div className='hidden lg:block'>
                                <img src={HeroImageBlock2} alt="Hero Image" />
                            </div>
                        </div>

                        {/* tags */}
                        <motion.div
                            animate={{ x: [3, 20, 0, 10, 7, 0], y: [20, 0, 10, 5, 0, 0], rotate: -20 }}
                            transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
                            className='absolute -bottom-5 flex items-center lg:hidden'>
                            <div className='bg-purple-700 text-white font-semibold px-2 py-1 rounded-full text-sm'>
                                #hiring process
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ x: [0, 20, 0, -40], y: [-30, 0, 40, 0], rotate: 20 }}
                            transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
                            className='absolute top-1/2 right-0 bottom-14 flex items-center lg:hidden'>
                            <div className='bg-blue-700 text-white font-semibold px-2 py-1 rounded-full text-sm'>
                                #best process
                            </div>
                        </motion.div>
                    </div>

                    {/* hashtags for large and upper screen */}
                    <div className='relative hidden lg:block'>
                        <motion.div
                            animate={{ x: [5, -10, 15, -5, 10, 0], y: [-10, 5, -15, 10, -5, 0], rotate: [0, -15, 10, -10, 5, 0] }}
                            transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
                            className='absolute -bottom-40 top-0 left-1/2 flex items-center'>
                            <div className='bg-orange-500 text-white font-semibold px-2 py-1 rounded-full text-xs'>
                                #hiring process
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ x: [-5, 15, -10, 20, -15, 0], y: [10, -5, 15, -10, 5, 0], rotate: [15, -10, 5, -15, 10, 0] }}
                            transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
                            className='absolute left-1/2 flex items-center'>
                            <div className='bg-yellow-700 text-white font-semibold px-2 py-1 rounded-full text-xs'>
                                #best process
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ x: [20, -15, 10, -20, 5, 0], y: [15, 5, -10, 20, -5, 0], rotate: [-10, 5, 15, -5, 10, 0] }}
                            transition={{ duration: 14, repeat: Infinity, repeatType: "mirror" }}
                            className='absolute left-2/3 flex items-center'>
                            <div className='bg-emerald-500 text-white font-semibold px-2 py-1 rounded-full text-xs'>
                                #hr solutions
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ x: [-20, 10, -15, 5, 20, 0], y: [-15, 10, -5, 15, -10, 0], rotate: [5, -10, 15, -20, 10, 0] }}
                            transition={{ duration: 16, repeat: Infinity, repeatType: "mirror" }}
                            className='absolute right-60 flex items-center'>
                            <div className='bg-gray-700 text-white font-semibold px-2 py-1 rounded-full text-xs'>
                                #job opening
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ x: [10, -20, 5, 15, -10, 0], y: [-5, 20, -15, 10, 5, 0], rotate: [-15, 10, 5, -5, 15, 0] }}
                            transition={{ duration: 18, repeat: Infinity, repeatType: "mirror" }}
                            className='absolute -top-5 right-1/2 flex items-center'>
                            <div className='bg-purple-700 text-white font-semibold px-2 py-1 rounded-full text-xs'>
                                #human resource
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ x: [15, -5, 20, -10, 5, 0], y: [20, -15, 10, -5, 15, 0], rotate: [10, -15, 5, -10, 20, 0] }}
                            transition={{ duration: 20, repeat: Infinity, repeatType: "mirror" }}
                            className='absolute left-44 flex items-center'>
                            <div className='bg-lime-600 text-white font-semibold px-2 py-1 rounded-full text-xs'>
                                #best solutions
                            </div>
                        </motion.div>
                    </div>

                    {/* brands marquee */}
                    <div className='lg:mt-32 mt-16 bg-white py-4 lg:py-8 px-5 rounded-2xl overflow-hidden'>
                        <motion.div
                            animate={{ x: ["0%", "-100%"] }}
                            transition={{
                                duration: 12,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className='flex gap-10 bg-white'>
                            <img className='w-44' src={CompanyLogo1} alt="Culture Amo Logo" />
                            <img className='w-44' src={CompanyLogo2} alt="Culture Amo Logo" />
                            <img className='w-44' src={CompanyLogo3} alt="Culture Amo Logo" />
                            <img className='w-44' src={CompanyLogo4} alt="Culture Amo Logo" />
                            <img className='w-44' src={CompanyLogo5} alt="Culture Amo Logo" />
                        </motion.div>
                    </div>


                    {/* About Us */}
                    <div>
                        <div className='flex flex-col items-start mt-16 lg:mt-24 gap-5 lg:flex-row'>
                            <img className='rounded-2xl lg:w-1/2' src={AboutImage} alt="About Image" />

                            <div className='flex flex-col gap-5 items-start lg:gap-4'>
                                <div className='bg-[#e2acff] rounded-2xl px-2 text-xs lg:text-sm font-medium font-Roboto py-1'>
                                    About Us
                                </div>

                                <div className='flex flex-col gap-3'>
                                    <h2 className='text-2xl lg:text-3xl font-Noto'>The Leading HR Agency</h2>

                                    <p className='text-xs lg:text-sm text-slate-700 font-Roboto '>Voluptas reprehenderit at eius odio delectus sit. Omnis possimus dignissimos et minus. Sint voluptatum sed molestiae. Inventore dolores non. Odit repudiandae facere ipsam excepturi labore nobis cum enim.</p>

                                    <ul className='text-xs lg:text-sm font-Roboto flex flex-col gap-1'>
                                        <li className='flex gap-2 items-start'>
                                            <i class="ri-check-line btn-bg-primary text-white rounded-full p-[0.1rem] text-[0.9rem] lg:text-lg lg:px-1"></i>
                                            <span className='text-slate-700'>Consequatur saepe ea repellendus fugit accusamus.</span>
                                        </li>
                                        <li className='flex gap-2 items-start'>
                                            <i class="ri-check-line btn-bg-primary text-white rounded-full p-[0.1rem] text-[0.9rem] lg:text-lg lg:px-1"></i>
                                            <span className='text-slate-700'>Nam odio at aliquid qui voluptatem nam molestiae.</span>
                                        </li>
                                        <li className='flex gap-2 items-start'>
                                            <i class="ri-check-line btn-bg-primary text-white rounded-full p-[0.1rem] text-[0.9rem] lg:text-lg lg:px-1"></i>
                                            <span className='text-slate-700'>Odit excepturi et expedita non.</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className='group'>
                                    <div className='btn-bg-primary text-white font-medium py-1 px-1 pl-2 rounded-full flex gap-1 items-center cursor-pointer group-hover:bg-white duration-300 transition-all group-hover:text-[#018180] border border-[#018180]'>
                                        <span className="text-xs lg:text-sm">Find Work</span>
                                        <i className="ri-arrow-right-up-long-line py-1 px-2 bg-white text-[#018180] rounded-full text-sm lg:text-lg group-hover:bg-[#018180] duration-300 transition-all group-hover:text-white group-hover:rotate-45"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats */}
                    <div>
                        <div className='flex flex-col justify-center lg:flex-row lg:justify-between gap-6 mt-16 lg:mt-24'>
                            <div className='flex flex-col items-center'>
                                <span className='text-primary text-2xl lg:text-5xl font-bold font-Noto'>12K</span>
                                <span className='text-xl lg:text-2xl font-medium font-Noto'>Freelance Workers</span>
                            </div>

                            <div className='flex flex-col items-center'>
                                <span className='text-primary text-2xl lg:text-5xl font-bold font-Noto'>95%
                                </span>
                                <span className='text-xl lg:text-2xl font-medium font-Noto'>Job Success Rate
                                </span>
                            </div>

                            <div className='flex flex-col items-center'>
                                <span className='text-primary text-2xl lg:text-5xl font-bold font-Noto'>10k+
                                </span>
                                <span className='text-xl lg:text-2xl font-medium font-Noto'>Job Filled
                                </span>
                            </div>

                            <div className='flex flex-col items-center'>
                                <span className='text-primary text-2xl lg:text-5xl font-bold font-Noto'>550
                                </span>
                                <span className='text-xl lg:text-2xl font-medium font-Noto'>Satisfied Business
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* why choose us */}
                    <div>
                        <div className='flex flex-col gap-2 lg:gap-5 items-start mt-16 lg:mt-24'>
                            <div className='bg-[#8efe58] rounded-2xl px-2 text-xs lg:text-sm font-medium font-Roboto py-1'>
                                Why Choose Us
                            </div>

                            <h2 className='text-2xl lg:text-3xl font-Noto'>Partnering for Your Success</h2>

                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-6 mt-2'>
                                <div className='flex flex-col items-start gap-2 bg-[#fafafa] container py-4 rounded-2xl relative overflow-hidden group'>
                                    <i class="ri-vip-line text-white btn-bg-primary px-2 rounded-full py-1 text-2xl"></i>
                                    <h3 className='text-2xl font-Noto'>Retain Clients</h3>
                                    <p className='text-xs lg:text-sm text-slate-700 font-Noto'>Non egestas tristique mauris vulputate eget commodo in mi. Elementum diam quam sit enim ac proin ut eros quis. Aliquet quis at ornare et dolor potenti.</p>
                                    <button className='flex items-center gap-1'>
                                        <span className='text-sm'>Learn More</span>
                                        <i class="ri-arrow-right-long-fill text-xl"></i>
                                    </button>

                                    <div className='absolute -top-10 -right-12 group-hover:-right-6 duration-300 transition-all'>
                                        <div className='h-32 w-32 rounded-full bg-yellow-500 bg-opacity-35'></div>
                                        <div className='h-32 w-32 rounded-full bg-purple-600 bg-opacity-35 absolute -bottom-8 group-hover:-bottom-4 duration-300 transition-all'></div>
                                    </div>
                                </div>


                                <div className='flex flex-col items-start gap-2 bg-[#fafafa] container py-4 rounded-2xl relative overflow-hidden group'>
                                    <i class="ri-shield-flash-line text-white btn-bg-primary px-2 rounded-full py-1 text-2xl"></i>
                                    <h3 className='text-2xl font-Noto'>Stay Complaint</h3>
                                    <p className='text-xs lg:text-sm text-slate-700 font-Noto'>Non egestas tristique mauris vulputate eget commodo in mi. Elementum diam quam sit enim ac proin ut eros quis. Aliquet quis at ornare et dolor potenti.</p>
                                    <button className='flex items-center gap-1'>
                                        <span className='text-sm'>Learn More</span>
                                        <i class="ri-arrow-right-long-fill text-xl"></i>
                                    </button>

                                    <div className='absolute -top-10 -right-12 group-hover:-right-6 duration-300 transition-all'>
                                        <div className='h-32 w-32 rounded-full bg-orange-500 bg-opacity-35'></div>
                                        <div className='h-32 w-32 rounded-full bg-teal-500 bg-opacity-35 absolute -bottom-8 group-hover:bottom-4 duration-300 transition-all'></div>
                                    </div>
                                </div>


                                <div className='flex flex-col items-start gap-2 bg-[#fafafa] container py-4 rounded-2xl relative overflow-hidden group'>
                                    <i class="ri-bar-chart-grouped-line text-white btn-bg-primary px-2 rounded-full py-1 text-2xl"></i>
                                    <h3 className='text-2xl font-Noto'>Improve Employee</h3>
                                    <p className='text-xs lg:text-sm text-slate-700 font-Noto'>Non egestas tristique mauris vulputate eget commodo in mi. Elementum diam quam sit enim ac proin ut eros quis. Aliquet quis at ornare et dolor potenti.</p>
                                    <button className='flex items-center gap-1'>
                                        <span className='text-sm'>Learn More</span>
                                        <i class="ri-arrow-right-long-fill text-xl"></i>
                                    </button>

                                    <div className='absolute -top-10 -right-12 group-hover:-right-6 duration-300 transition-all'>
                                        <div className='h-32 w-32 rounded-full bg-slate-500 bg-opacity-35'></div>
                                        <div className='h-32 w-32 rounded-full bg-pink-500 bg-opacity-35 absolute -bottom-8 group-hover:bottom-6 duration-300 transition-all'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mt-16 relative overflow-hidden'>
                        <div className='absolute inset-0 h-20 btn-bg-primary overflow-hidden'>
                        </div>
                        <div className='h-20 bg-[#fafafa] -rotate-2'>
                            <motion.div
                                animate={{ x: ["0%", "-100%"] }}
                                transition={{
                                    duration: 14,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className='flex gap-20 bg-[#fafafa] h-full items-center'>
                                <img className='w-28' src={IndeedImage} alt="Culture Amo Logo" />
                                <img className='w-16' src={StarImage} alt="Culture Amo Logo" />
                                <img className='w-28' src={JobHuntImage} alt="Culture Amo Logo" />
                                <img className='w-16' src={StarImage} alt="Culture Amo Logo" />
                                <img className='w-28' src={SpecialEventsImage} alt="Culture Amo Logo" />
                                <img className='w-16' src={StarImage} alt="Culture Amo Logo" />
                            </motion.div>
                        </div>

                    </div>

                    {/* our process */}
                    <div>
                        <div className='flex flex-col gap-2 lg:gap-5 items-start mt-16 lg:mt-24'>
                            <div className='bg-[#6cf4fc] rounded-2xl px-2 text-xs lg:text-sm font-medium font-Roboto py-1'>
                                Our Process
                            </div>

                            <h2 className='text-2xl lg:text-3xl font-Noto'>How it Works?</h2>

                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-6 mt-2'>
                                <div className='flex flex-col items-start gap-2 bg-[#fafafa] container py-4 rounded-2xl relative overflow-hidden group'>
                                    <div className='btn-bg-primary p-2 px-4 text-white text-xl rounded-full'>
                                        1
                                    </div>
                                    <h3 className='text-2xl font-Noto'>View jobs in minutes
                                    </h3>
                                    <p className='text-xs lg:text-sm text-slate-700 font-Noto'>Non egestas tristique mauris vulputate eget commodo in mi. Elementum diam quam ornare et dolor potenti.</p>
                                </div>


                                <div className='flex flex-col items-start gap-2 bg-[#fafafa] container py-4 rounded-2xl relative overflow-hidden group'>
                                    <div className='btn-bg-primary p-2 px-4 text-white text-xl rounded-full'>
                                        2
                                    </div>
                                    <h3 className='text-2xl font-Noto'>View jobs in minutes
                                    </h3>
                                    <p className='text-xs lg:text-sm text-slate-700 font-Noto'>Non egestas tristique mauris vulputate eget commodo in mi. Elementum diam quam ornare et dolor potenti.</p>
                                </div>


                                <div className='flex flex-col items-start gap-2 bg-[#fafafa] container py-4 rounded-2xl relative overflow-hidden group'>
                                    <div className='btn-bg-primary p-2 px-4 text-white text-xl rounded-full'>
                                        3
                                    </div>
                                    <h3 className='text-2xl font-Noto'>View jobs in minutes
                                    </h3>
                                    <p className='text-xs lg:text-sm text-slate-700 font-Noto'>Non egestas tristique mauris vulputate eget commodo in mi. Elementum diam quam ornare et dolor potenti.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* our services */}
                    <div>
                        <div className='flex flex-col gap-2 lg:gap-5 items-center mt-16 lg:mt-24'>
                            <div className='bg-[#6cf4fc] rounded-2xl px-2 text-xs lg:text-sm font-medium font-Roboto py-1'>
                                Our Services
                            </div>

                            <h2 className='text-2xl lg:text-3xl font-Noto text-center'>Building Your Dream Team</h2>

                            <div className='group'>
                                <div className='btn-bg-primary text-white font-medium py-1 px-1 pl-2 rounded-full flex gap-1 items-center cursor-pointer group-hover:bg-white duration-300 transition-all group-hover:text-[#018180] border border-[#018180]'>
                                    <span className="text-xs lg:text-sm">See All Services</span>
                                    <i className="ri-arrow-right-up-long-line py-1 px-2 bg-white text-[#018180] rounded-full text-sm lg:text-lg group-hover:bg-[#018180] duration-300 transition-all group-hover:text-white group-hover:rotate-45"></i>
                                </div>
                            </div>

                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-6 mt-2'>

                                <div className='flex flex-col items-start gap-2 bg-[#fafafa] container py-4 rounded-2xl relative overflow-hidden duration-300 transition-all hover:p-5 group border-b-2 border-yellow-500 border-r-2'>
                                    <h3 className='text-2xl font-Noto'>Recruitment Solutions
                                    </h3>
                                    <p className='text-xs lg:text-sm text-slate-500 font-Noto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo accusamus reprehenderit amet?</p>
                                    <button className='flex items-center gap-1'>
                                        <span className='text-sm'>Learn More</span>
                                        <i class="ri-arrow-right-long-fill text-xl"></i>
                                    </button>
                                    <img className='rounded-2xl z-10 group-hover:scale-105 duration-300 transition-all' src={ServiceImage1} alt="" />

                                    <div className='absolute flex  bottom-0 duration-300 transition-all'>
                                        <div className='h-72 w-44 rounded-tl-full bg-yellow-500 bg-opacity-20'></div>
                                        <div className='h-24 w-24 rounded-tl-full bg-purple-600 bg-opacity-20 duration-300 transition-all'></div>
                                    </div>
                                </div>


                                <div className='flex flex-col items-start gap-2 bg-[#fafafa] container py-4 rounded-2xl relative overflow-hidden duration-300 transition-all hover:p-5 group border-b-2 border-teal-500 border-r-2'>
                                    <h3 className='text-2xl font-Noto'>HR Consulting
                                    </h3>
                                    <p className='text-xs lg:text-sm text-slate-500 font-Noto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo accusamus reprehenderit amet?</p>
                                    <button className='flex items-center gap-1'>
                                        <span className='text-sm'>Learn More</span>
                                        <i class="ri-arrow-right-long-fill text-xl"></i>
                                    </button>
                                    <img className='rounded-2xl z-10 group-hover:scale-105 duration-300 transition-all' src={ServiceImage2} alt="" />

                                    <div className='absolute flex  bottom-0 duration-300 transition-all'>
                                        <div className='h-72 w-44 rounded-tr-full bg-teal-500 bg-opacity-20'></div>
                                        <div className='h-24 w-24 rounded-full bg-pink-600 bg-opacity-20 duration-300 transition-all'></div>
                                    </div>
                                </div>


                                <div className='flex flex-col items-start gap-2 bg-[#fafafa] container py-4 rounded-2xl relative overflow-hidden duration-300 transition-all hover:p-5 group border-b-2 border-pink-500 border-r-2'>
                                    <h3 className='text-2xl font-Noto'>Personal Outsourcing
                                    </h3>
                                    <p className='text-xs lg:text-sm text-slate-500 font-Noto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo accusamus reprehenderit amet?</p>
                                    <button className='flex items-center gap-1'>
                                        <span className='text-sm'>Learn More</span>
                                        <i class="ri-arrow-right-long-fill text-xl"></i>
                                    </button>
                                    <img className='rounded-2xl z-10 group-hover:scale-105 duration-300 transition-all' src={ServiceImage3} alt="" />

                                    <div className='absolute flex  bottom-0 duration-300 transition-all'>
                                        <div className='h-72 w-44 rounded-t-full bg-slate-500 bg-opacity-20'></div>
                                        <div className='h-24 w-24 rounded-tr-full bg-orange-600 bg-opacity-20 duration-300 transition-all'></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* testimonials */}
                    <div>
                        <div className='mt-16 lg:mt-24 flex flex-col gap-4'>
                            <div className='lg:hidden'>
                                <img className='rounded-tr-[6rem] rounded-bl-[6rem]' src={TestimonialImage1} alt="" />
                            </div>
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
                </div>
            </main>
        </div>
    )
}

export default IndexPage