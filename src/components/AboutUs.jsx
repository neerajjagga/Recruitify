import AboutImage from '../assets/about-1.jpg';

const AboutUs = () => {
    return (
        <div>
            <div className='flex flex-col items-start mt-16 lg:mt-24 gap-5 xl:flex-row'>
                <img className='rounded-2xl xl:w-1/2' src={AboutImage} alt="About Image" />

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
    )
}

export default AboutUs