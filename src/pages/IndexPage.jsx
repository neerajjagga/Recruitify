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

import { motion, AnimatePresence } from 'motion/react'

import Stats from '../components/Stats';
import WhyChooseUs from '../components/WhyChooseUs';
import OurProcess from '../components/OurProcess';
import OurServices from '../components/OurServices';
import Testimonials from '../components/Testimonials';
import EmailUs from '../components/EmailUs';
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';
import { useEffect, useState } from 'react';

const IndexPage = () => {
    const [showScrollUpButton, setShowScrollUpButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollUpButton(true);
            } else {
                setShowScrollUpButton(false);
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    
    return (
        <div>
            <main>
                <div className="container pt-12 lg:pt-24 pb-10 overflow-hidden">
                    <div className='flex flex-col lg:flex-row gap-4 relative'>
                        {/* left image */}
                        <div className="hidden xl:block">
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
                            <div className='hidden xl:block'>
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
                    <AboutUs />

                    {/* Stats */}
                    <Stats />

                    {/* why choose us */}
                    <WhyChooseUs />

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
                    <OurProcess />

                    {/* our services */}
                    <OurServices />

                    {/* testimonials */}
                    <Testimonials />

                    {/* email us */}
                    <EmailUs />

                    {/* footer */}

                    <AnimatePresence>
                        {showScrollUpButton && (
                            <motion.div
                                key="scrollToTop"
                                initial={{ y: 40, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ opacity: 0, y: 40 }}
                                transition={{ duration: 0.6 }}
                                className="fixed bottom-5 right-5 z-50"
                            >
                                <div
                                    onClick={scrollToTop}
                                    className="text-white btn-bg-primary p-2 px-3 rounded-full shadow-lg cursor-pointer text-2xl hover:scale-105 duration-300 transition-all"
                                    role="button"
                                    aria-label="Scroll to top"
                                >
                                    <i class="ri-corner-right-up-line"></i>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <Footer />
                </div>
            </main>
        </div>
    )
}

export default IndexPage