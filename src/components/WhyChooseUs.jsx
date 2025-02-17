
const WhyChooseUs = () => {
    return (
        <div>
            <div className='flex flex-col gap-2 lg:gap-5 items-start mt-16 lg:mt-24'>
                <div className='bg-[#8efe58] rounded-2xl px-2 text-xs lg:text-sm font-medium font-Roboto py-1'>
                    Why Choose Us
                </div>

                <h2 className='text-2xl lg:text-3xl font-Noto'>Partnering for Your Success</h2>

                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-6 mt-2'>
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
    )
}

export default WhyChooseUs