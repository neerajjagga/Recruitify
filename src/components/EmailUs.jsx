import GetInTouchImage from '../assets/getInTouch.jpg';

const EmailUs = () => {
    return (
        <div>
            <div className='mt-16 lg:mt-24 flex flex-col xl:flex-row gap-2 w-full'>
                <div className='w-full'>
                    <img className='rounded-2xl w-full' src={GetInTouchImage} alt="Get In Touch" />
                </div>

                <div className='flex flex-col items-start gap-2 bg-[#fafafa] container py-4 rounded-2xl relative overflow-hidden'>
                    <h3 className='text-sm font-medium lg:text-xl font-Noto z-10'>Unlock your potential with RecruitiFy. We bring the best minds together.</h3>
                    <p className='text-xs lg:text-sm text-slate-700 font-Noto'>Subscribe for updates, news, events,and communityresources.</p>
                    <input type="email" placeholder='Email' className='border border-[#018180] py-1 px-2 rounded-md w-full focus:outline-[#018180]' />
                    <p className='text-[#018180] text-xs font-medium'>No spam, just valuable insights to help you stay connected</p>

                    <div className='group mt-1 lg:mt-4'>
                        <div className='btn-bg-primary text-white font-medium py-1 px-1 pl-2 rounded-full flex gap-1 items-center cursor-pointer group-hover:bg-white duration-300 transition-all group-hover:text-[#018180] border border-[#018180]'>
                            <span className="text-xs lg:text-sm">Get In Touch</span>
                            <i className="ri-arrow-right-up-long-line py-1 px-2 bg-white text-[#018180] rounded-full text-sm lg:text-lg group-hover:bg-[#018180] duration-300 transition-all group-hover:text-white group-hover:rotate-45"></i>
                        </div>
                    </div>

                    <div className='absolute -top-10 -right-12 group-hover:-right-6 duration-300 transition-all'>
                        <div className='h-32 w-32 rounded-full bg-yellow-500 bg-opacity-35'></div>
                        <div className='h-32 w-32 rounded-full bg-purple-600 bg-opacity-35 absolute -bottom-8 group-hover:-bottom-4 duration-300 transition-all'></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default EmailUs