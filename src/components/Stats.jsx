
const Stats = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-16 lg:mt-24 gap-y-10 lg:gap-y-16'>
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
    )
}

export default Stats