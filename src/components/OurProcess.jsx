
const OurProcess = () => {
    return (
        <div>
            <div className='flex flex-col gap-2 lg:gap-5 items-start mt-16 lg:mt-24'>
                <div className='bg-[#6cf4fc] rounded-2xl px-2 text-xs lg:text-sm font-medium font-Roboto py-1'>
                    Our Process
                </div>

                <h2 className='text-2xl lg:text-3xl font-Noto'>How it Works?</h2>

                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-6 mt-2'>
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
    )
}

export default OurProcess