import React from 'react'

export default function Footer() {
    return (
        <>
            <footer className='relative bg-black pt-8 pb-6'>
                <div
                    className='bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20'
                    style={{ transform: 'translateZ(0)' }}
                >
                    <svg
                        className='absolute bottom-0 overflow-hidden'
                        xmlns='http://www.w3.org/2000/svg'
                        preserveAspectRatio='none'
                        version='1.1'
                        viewBox='0 0 2560 100'
                        x='0'
                        y='0'
                    >
                        <polygon
                            className='text-black fill-current'
                            points='2560 0 2560 100 0 100'
                        ></polygon>
                    </svg>
                </div>
                <div className='container mx-auto px-4'>
                    <div className='flex flex-wrap text-center lg:text-left'>
                        <div className='w-full px-4 text-center text-white'>
                            <h4 className='text-3xl font-semibold pb-4'>
                                Need help?
                            </h4>
                            <h5 className='text-3xl mt-0 font-semibold'>
                                coopers@coopers.pro
                            </h5>
                            <div className='flex flex-wrap items-center md:justify-between justify-center'>
                                <div className='w-full md:w-4/12 px-4 mx-auto text-center'>
                                    <div className='text-sm text-white font-semibold py-1'>
                                        © {new Date().getFullYear()} Coopers.{' '}
                                        <a href='/' className='text-white'>
                                            All rights reserved
                                        </a>
                                        .
                                    </div>
                                </div>
                                <div className='w-full'>
                                    <img
                                        src='img/brand/BGfooter.png'
                                        className='w-6/12 mx-auto'
                                        alt='Grafismo'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
