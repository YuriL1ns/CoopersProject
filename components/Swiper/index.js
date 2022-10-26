import React, { Component } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

const indicatorStyles = {
    background: 'transparent',
    width: 6,
    height: 10,
    display: 'inline-block',
    marginBottom: '[-2rem]'
}

export default class NextJsCarousel extends Component {
    render() {
        return (
            <div className='absolute w-full top-[60px] drop-shadow-2xl pl-10 md:pl-[20%] mx-auto'>
                <Carousel
                    className='bg-transparent'
                    style={indicatorStyles}
                    showArrows={false}
                    showThumbs={false}
                    arrowStyles={false}
                    showStatus={false}
                    slidesPerView={3}
                >
                    <div className='container flex gap-x-52 md:gap-x-6 bg-transparent w-full '>
                        <div className='flex relative justify-center shadow-xl'>
                            <div className='rounded-lg bg-white max-w-sm'>
                                <a
                                    href='#!'
                                    data-mdb-ripple='true'
                                    data-mdb-ripple-color='light'
                                >
                                    <div className='absolute w-10 right-3 top-[17%] md:top-[45%]'>
                                        <img
                                            src='img/minilogo.png'
                                            alt='bitmap'
                                        />
                                    </div>
                                    <img
                                        className='rounded-t-lg'
                                        src='img/brand/bitmap.png'
                                        alt='bitmap'
                                    />
                                </a>

                                <div className='p-6 text-start'>
                                    <div className=' text-xs inline-block py-1 px-2 font-bold bg-[white] text-[#9499B3] rounded-full border-2'>
                                        function
                                    </div>
                                    <div className=''>
                                        <h5 className='text-[#312F4F] text-sm font-medium mb-2'>
                                            Organize your daily job enhance yout
                                            life performance
                                        </h5>
                                    </div>
                                    <button
                                        type='button'
                                        className=' inline-block text-[#4AC959] font-medium text-xs text-start leading-tight content-end'
                                    >
                                        read more
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='flex relative justify-center shadow-xl'>
                            <div className='rounded-lg shadow-lg bg-white max-w-sm'>
                                <a
                                    href='#!'
                                    data-mdb-ripple='true'
                                    data-mdb-ripple-color='light'
                                >
                                    <div className='absolute w-10 right-3 top-[17%] md:top-[45%]'>
                                        <img
                                            src='img/minilogo.png'
                                            alt='bitmap'
                                        />
                                    </div>
                                    <img
                                        className='rounded-t-lg'
                                        src='img/brand/bitmap1.png'
                                        alt='bitmap'
                                    />
                                </a>
                                <div className='p-6 text-start'>
                                    <div className=' text-xs inline-block py-1 px-2  font-bold bg-[white] text-[#9499B3] rounded-full border-2'>
                                        function
                                    </div>
                                    <div className=''>
                                        <h5 className='text-[#312F4F] text-sm font-medium mb-2'>
                                            Mark one activity as done makes your
                                            brain understands the power of
                                            doing.
                                        </h5>
                                    </div>
                                    <button
                                        type='button'
                                        className='inline-block text-[#4AC959] font-medium text-xs text-start leading-tight content-end'
                                    >
                                        read more
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='justify-center shadow-xl'>
                            <div className='rounded-lg bg-white max-w-sm'>
                                <a
                                    href='#!'
                                    data-mdb-ripple='true'
                                    data-mdb-ripple-color='light'
                                >
                                    <div className='absolute w-10 right-3 top-[17%] md:top-[45%]'>
                                        <img
                                            src='img/minilogo.png'
                                            alt='bitmap'
                                        />
                                    </div>
                                    <img
                                        className='rounded-t-lg'
                                        src='img/brand/bitmap2.png'
                                        alt='bitmap'
                                    />
                                </a>
                                <div className='p-6 text-start'>
                                    <div className=' text-xs inline-block py-1 px-2  font-bold bg-[white] text-[#9499B3] rounded-full border-2'>
                                        function
                                    </div>
                                    <div className=''>
                                        <h5 className='text-[#312F4F] text-sm font-medium mb-2'>
                                            Careful with missunderstanding the
                                            diference between a list of things
                                            and a list of desires.
                                        </h5>
                                    </div>
                                    <button
                                        type='button'
                                        className=' inline-block  text-[#4AC959] font-medium text-xs text-start leading-tight'
                                    >
                                        leia mais
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='hidden md:visible container md:flex gap-x-52 md:gap-x-6 bg-transparent w-full '>
                        <div className='flex relative justify-center shadow-xl'>
                            <div className='rounded-lg bg-white max-w-sm'>
                                <a
                                    href='#!'
                                    data-mdb-ripple='true'
                                    data-mdb-ripple-color='light'
                                >
                                    <div className='absolute w-10 right-3 top-[17%] md:top-[45%]'>
                                        <img
                                            src='img/minilogo.png'
                                            alt='bitmap'
                                        />
                                    </div>
                                    <img
                                        className='rounded-t-lg'
                                        src='img/brand/bitmap.png'
                                        alt='bitmap'
                                    />
                                </a>

                                <div className='p-6 text-start'>
                                    <div className=' text-xs inline-block py-1 px-2 font-bold bg-[white] text-[#9499B3] rounded-full border-2'>
                                        function
                                    </div>
                                    <div className=''>
                                        <h5 className='text-[#312F4F] text-sm font-medium mb-2'>
                                            Organize your daily job enhance yout
                                            life performance
                                        </h5>
                                    </div>
                                    <button
                                        type='button'
                                        className=' inline-block text-[#4AC959] font-medium text-xs text-start leading-tight content-end'
                                    >
                                        read more
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='flex relative justify-center shadow-xl'>
                            <div className='rounded-lg shadow-lg bg-white max-w-sm'>
                                <a
                                    href='#!'
                                    data-mdb-ripple='true'
                                    data-mdb-ripple-color='light'
                                >
                                    <div className='absolute w-10 right-3 top-[17%] md:top-[45%]'>
                                        <img
                                            src='img/minilogo.png'
                                            alt='bitmap'
                                        />
                                    </div>
                                    <img
                                        className='rounded-t-lg'
                                        src='img/brand/bitmap1.png'
                                        alt='bitmap'
                                    />
                                </a>
                                <div className='p-6 text-start'>
                                    <div className=' text-xs inline-block py-1 px-2  font-bold bg-[white] text-[#9499B3] rounded-full border-2'>
                                        function
                                    </div>
                                    <div className=''>
                                        <h5 className='text-[#312F4F] text-sm font-medium mb-2'>
                                            Mark one activity as done makes your
                                            brain understands the power of
                                            doing.
                                        </h5>
                                    </div>
                                    <button
                                        type='button'
                                        className='inline-block text-[#4AC959] font-medium text-xs text-start leading-tight content-end'
                                    >
                                        read more
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='justify-center shadow-xl'>
                            <div className='rounded-lg bg-white max-w-sm'>
                                <a
                                    href='#!'
                                    data-mdb-ripple='true'
                                    data-mdb-ripple-color='light'
                                >
                                    <div className='absolute w-10 right-[100px] top-[17%] md:top-[45%]'>
                                        <img
                                            src='img/minilogo.png'
                                            alt='bitmap'
                                        />
                                    </div>
                                    <img
                                        className='rounded-t-lg'
                                        src='img/brand/bitmap2.png'
                                        alt='bitmap'
                                    />
                                </a>
                                <div className='p-6 text-start'>
                                    <div className=' text-xs inline-block py-1 px-2  font-bold bg-[white] text-[#9499B3] rounded-full border-2'>
                                        function
                                    </div>
                                    <div className=''>
                                        <h5 className='text-[#312F4F] text-sm font-medium mb-2'>
                                            Careful with missunderstanding the
                                            diference between a list of things
                                            and a list of desires.
                                        </h5>
                                    </div>
                                    <button
                                        type='button'
                                        className=' inline-block  text-[#4AC959] font-medium text-xs text-start leading-tight'
                                    >
                                        leia mais
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='hidden md:visible md:flex container gap-x-52 md:gap-x-6 bg-transparent w-full '>
                        <div className='flex relative justify-center shadow-xl'>
                            <div className='rounded-lg bg-white max-w-sm'>
                                <a
                                    href='#!'
                                    data-mdb-ripple='true'
                                    data-mdb-ripple-color='light'
                                >
                                    <div className='absolute w-10 right-3 top-[17%] md:top-[45%]'>
                                        <img
                                            src='img/minilogo.png'
                                            alt='bitmap'
                                        />
                                    </div>
                                    <img
                                        className='rounded-t-lg'
                                        src='img/brand/bitmap.png'
                                        alt='bitmap'
                                    />
                                </a>

                                <div className='p-6 text-start'>
                                    <div className=' text-xs inline-block py-1 px-2 font-bold bg-[white] text-[#9499B3] rounded-full border-2'>
                                        function
                                    </div>
                                    <div className=''>
                                        <h5 className='text-[#312F4F] text-sm font-medium mb-2'>
                                            Organize your daily job enhance yout
                                            life performance
                                        </h5>
                                    </div>
                                    <button
                                        type='button'
                                        className=' inline-block text-[#4AC959] font-medium text-xs text-start leading-tight content-end'
                                    >
                                        read more
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='flex relative justify-center shadow-xl'>
                            <div className='rounded-lg shadow-lg bg-white max-w-sm'>
                                <a
                                    href='#!'
                                    data-mdb-ripple='true'
                                    data-mdb-ripple-color='light'
                                >
                                    <div className='absolute w-10 right-3 top-[17%] md:top-[45%]'>
                                        <img
                                            src='img/minilogo.png'
                                            alt='bitmap'
                                        />
                                    </div>
                                    <img
                                        className='rounded-t-lg'
                                        src='img/brand/bitmap1.png'
                                        alt='bitmap'
                                    />
                                </a>
                                <div className='p-6 text-start'>
                                    <div className=' text-xs inline-block py-1 px-2  font-bold bg-[white] text-[#9499B3] rounded-full border-2'>
                                        function
                                    </div>
                                    <div className=''>
                                        <h5 className='text-[#312F4F] text-sm font-medium mb-2'>
                                            Mark one activity as done makes your
                                            brain understands the power of
                                            doing.
                                        </h5>
                                    </div>
                                    <button
                                        type='button'
                                        className='inline-block text-[#4AC959] font-medium text-xs text-start leading-tight content-end'
                                    >
                                        read more
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='justify-center shadow-xl'>
                            <div className='rounded-lg bg-white max-w-sm'>
                                <a
                                    href='#!'
                                    data-mdb-ripple='true'
                                    data-mdb-ripple-color='light'
                                >
                                    <div className='absolute w-10 right-3 top-[17%] md:top-[45%]'>
                                        <img
                                            src='img/minilogo.png'
                                            alt='bitmap'
                                        />
                                    </div>
                                    <img
                                        className='rounded-t-lg'
                                        src='img/brand/bitmap2.png'
                                        alt='bitmap'
                                    />
                                </a>
                                <div className='p-6 text-start'>
                                    <div className=' text-xs inline-block py-1 px-2  font-bold bg-[white] text-[#9499B3] rounded-full border-2'>
                                        function
                                    </div>
                                    <div className=''>
                                        <h5 className='text-[#312F4F] text-sm font-medium mb-2'>
                                            Careful with missunderstanding the
                                            diference between a list of things
                                            and a list of desires.
                                        </h5>
                                    </div>
                                    <button
                                        type='button'
                                        className=' inline-block  text-[#4AC959] font-medium text-xs text-start leading-tight'
                                    >
                                        leia mais
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
        )
    }
}
