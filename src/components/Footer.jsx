import Logo from '../assets/main-logo.png'

const Footer = () => {
    return (
        <footer>
            <div className='mt-16 lg:mt-24 flex flex-col gap-6 xl:flex-row bg-[#fafafa] rounded-2xl container py-4 lg:justify-between lg:py-6 xl:pr-32'>

                <div className='flex flex-col gap-6 xl:gap-12 xl:w-[40%]'>
                    <p className='text-[0.810rem] lg:text-[0.9rem] font-medium text-slate-500'>Ultrices lorem et dictum iaculis. Feugiat scelerisque diam ut viverra sed feugiat sed. Pretium adipiscing congue consequat et velit. Sem lectus parturient arcu ornare lorem viverra dignissim.</p>

                    <img className='w-full lg:w-60' src={Logo} alt="Recruitify Logo" />
                </div>

                <div className='flex flex-col gap-6 mt-4 lg:justify-between lg:px-16 xl:px-0'>

                    <div className='flex flex-col lg:flex-row gap-2 font-Noto text-slate-600 text-[0.830rem] lg:text-[0.9rem] lg:justify-between'>
                        <div className=' flex items-center gap-2 lg:w-1/3'>
                            <i class="ri-map-pin-line text-3xl text-[#018180]"></i>
                            <span>Main boulevard 1/515Leicester</span>
                        </div>

                        <div className='flex items-center gap-2 lg:w-1/3'>
                            <i class="ri-map-pin-line text-3xl text-[#018180]"></i>
                            <span>Left Canal 6/545 Leicester</span>
                        </div>
                    </div>

                    <div className='flex justify-between pr-10'>
                        <div>
                            <ul className='flex flex-col text-slate-500 text-[0.830rem] lg:text-[0.9rem] font-medium gap-1'>
                                <li>Services</li>
                                <li>About Us
                                </li>
                                <li>Contact Us
                                </li>
                                <li>Blog</li>
                            </ul>
                        </div>

                        <div>
                            <ul className='flex flex-col text-slate-500 text-[0.830rem] lg:text-[0.9rem] font-medium gap-1'>
                                <li>Instagram</li>
                                <li>LinkedIn</li>
                                <li>Facebook
                                </li>
                                <li>X (Twitter)</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer