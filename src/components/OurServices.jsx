import ServiceImage1 from '../assets/Services/service-1.jpg'
import ServiceImage2 from '../assets/Services/service-2.jpg'
import ServiceImage3 from '../assets/Services/service-3.jpg'

const OurServices = () => {
    return (
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

                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-6 mt-2'>

                    <div className='flex flex-col items-start gap-2 bg-[#fafafa] container py-4 rounded-2xl relative overflow-hidden duration-300 transition-all group border-b-2 border-yellow-500 border-r-2'>
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


                    <div className='flex flex-col items-start gap-2 bg-[#fafafa] container py-4 rounded-2xl relative overflow-hidden duration-300 transition-all group border-b-2 border-teal-500 border-r-2'>
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


                    <div className='flex flex-col items-start gap-2 bg-[#fafafa] container py-4 rounded-2xl relative overflow-hidden duration-300 transition-all group border-b-2 border-pink-500 border-r-2'>
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
    )
}

export default OurServices