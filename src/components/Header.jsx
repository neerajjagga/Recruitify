import { useState } from 'react';
import Logo from '../assets/main-logo.png'

const Header = () => {
    const [isHamburgerActive, setIsHamburgerActive] = useState(false);

    const toggleHamburgerMenu = () => {
        setIsHamburgerActive(!isHamburgerActive);
    };

    return (
        <header>
            <div className='container lg:pt-4 pt-3 font-Roboto'>
                <div className='container flex items-center justify-between bg-white py-2 rounded-full'>
                    <div className='w-40'>
                        <img className='' src={Logo} alt="Logo" />
                    </div>
                    <i onClick={toggleHamburgerMenu} class="ri-menu-4-line text-3xl lg:hidden"></i>

                    <div className='hidden lg:block text-lg'>
                        <div>
                            <ul className='flex gap-6 font-Roboto'>
                                <li className='hover:text-[#018180] duration-300 transition-all cursor-pointer'>
                                    Home
                                </li>
                                <li className='hover:text-[#018180] duration-300 transition-all cursor-pointer'>
                                    About Us
                                </li>
                                <li className='hover:text-[#018180] duration-300 transition-all cursor-pointer'>
                                    Services
                                </li>
                                <li className='hover:text-[#018180] duration-300 transition-all cursor-pointer'>
                                    Jobs
                                </li>
                                <li className='hover:text-[#018180] duration-300 transition-all cursor-pointer'>
                                    Blog
                                </li>
                                <li className='hover:text-[#018180] duration-300 transition-all cursor-pointer'>
                                    Contact Us
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='hidden lg:block group'>
                        <div className='btn-bg-primary text-white font-medium py-1 px-1 pl-2 rounded-full flex gap-1 items-center cursor-pointer group-hover:bg-white duration-300 transition-all group-hover:text-[#018180] border border-[#018180]'>
                            <span>Get In Touch</span>
                            <i className="ri-arrow-right-up-long-line py-1 px-2 bg-white text-[#018180] rounded-full text-lg group-hover:bg-[#018180] duration-300 transition-all group-hover:text-white group-hover:rotate-45"></i>
                        </div>
                    </div>

                </div>
            </div>

            <div className={`bg-black min-h-[100vh] overflow-y-hidden z-50 w-full absolute top-0 bg-opacity-40 ${isHamburgerActive ? 'left-0' : '-left-[100%]'
                } transition-all duration-500 ${!isHamburgerActive ? "delay-500" : "delay-0"} lg:hidden`}>
                <div className={`absolute bg-[#fafafa] w-[75%] h-full ${isHamburgerActive ? 'left-0' : '-left-[100%]'
                    } transition-all duration-500 ${isHamburgerActive ? "delay-500" : "delay-0"}`}>
                    <div className='relative flex flex-col gap-12 container py-8'>

                        <div className='w-32'>
                            <img src={Logo} alt="Logo" />
                        </div>

                        <div className='flex flex-col gap-8'>
                            <div>
                                <ul className='flex flex-col gap-4 text-xl font-Roboto'>
                                    <li>Home</li>
                                    <li>About Us</li>
                                    <li>
                                        <div className='flex justify-between'>
                                            <span>
                                                Services
                                            </span>
                                            <i class="ri-arrow-right-s-line btn-bg-primary text-white px-1 font-bold"></i>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='flex justify-between'>
                                            <span>
                                                Jobs
                                            </span>
                                            <i class="ri-arrow-right-s-line btn-bg-primary text-white px-1 font-bold"></i>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='flex justify-between'>
                                            <span>
                                                Blog
                                            </span>
                                            <i class="ri-arrow-right-s-line btn-bg-primary text-white px-1 font-bold"></i>
                                        </div>
                                    </li>
                                    <li>Contact Us</li>
                                </ul>
                            </div>

                            <div>
                                <div className='flex flex-col gap-3'>

                                    <div className='flex gap-2 items-center'>
                                        <i class="ri-mail-fill text-white btn-bg-primary rounded-full p-1 px-2"></i>
                                        <span className='font-medium text-[0.9rem]'>example@company.com</span>
                                    </div>

                                    <div className='flex gap-2 items-center'>
                                        <i class="ri-phone-fill text-white btn-bg-primary rounded-full p-1 px-2"></i>
                                        <span className='font-medium text-[0.9rem]'>+ 123 (4567) -890</span>
                                    </div>

                                    <div className='flex gap-4 text-lg'>
                                        <a href='#'>
                                            <i class="ri-twitter-x-line"></i>
                                        </a>
                                        <a href="#">
                                            <i class="ri-facebook-fill"></i>
                                        </a>
                                        <a href="#">
                                            <i class="ri-instagram-line"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='absolute right-3 top-4 text-2xl'>
                            <i onClick={toggleHamburgerMenu} class="ri-close-line"></i>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header