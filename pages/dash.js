import React from 'react'
import IndexNavbar from 'components/Navbars/IndexNavbar.js'
import Footer from 'components/Footers/Footer.js'
import SwiperCards from 'components/Swiper/index'
import Form from 'components/Form/Form'
import ToDo from 'components/ToDo/ToDo'
import { Link } from 'react-scroll'

export default function Index() {
    return (
        <>
            <IndexNavbar fixed />
            <section className='header flex w-full h-screen max-h-full'>
                <div className='container mx-auto items-center flex flex-wrap'>
                    <div className='md:w-6/12 px-4'>
                        <h2 className='font-extrabold text-xl md:text-6xl md:pt-48 text-black'>
                            Organize
                        </h2>
                        <p className='text-xl md:text-5xl leading-relaxed text-[#4AC959]'>
                            your daily jobs
                        </p>
                        <p className='pt-8 md:pt-[50px] text-sm md:text-xl font-bold text-black'>
                            The only way tp get things done
                        </p>
                        <div className='w-full mt-[44px]'>
                            <Link
                                href='#'
                                activeClass='active'
                                to='ToDo'
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1200}
                            >
                                <button className='w-full lg:w-4/12 flex justify-center text-white font-bold px-6 py-4 rounded outline-none focus:outline-none bg-[#4AC959] active:bg-[#black] text-md shadow hover:shadow-lg ease-linear transition-all duration-150'>
                                    Go to To-do list
                                </button>
                            </Link>
                        </div>
                        <img
                            className='absolute z-20 top-[17%] md:top-[20%] right-30 bottom-30 left-[65%] md:left-[70%] w-3/12 md:w-3/12'
                            src='img/02.png'
                            alt='Coworking'
                        />
                    </div>
                    <div className='w-full'>
                        <img
                            className='z-20 mx-auto md:w-1/20 -mt-60 md:mt-0'
                            src='img/icon-scroll.png'
                            alt='Arrow'
                        />
                    </div>
                    <img
                        className='absolute z-10 top-20 md:top-0 right-0 w-6/12 md:w-5/12 h-auto'
                        src='/img/bg.svg'
                        alt='LogoCoopers'
                    />
                </div>
            </section>
            <section className="bg-[url('/img/BG2.svg')] bg-cover -mt-96 md:-mt-48 h-[20rem] md:h-[28rem] xl:h-[42rem] ">
                <div className='container mx-auto justify-center items-center text-center'>
                    <div className='relative flex flex-col'>
                        <div className='px-4 py-5 flex-auto items-center'>
                            <h6 className='pt-20 md:pt-32 text-4xl md:text-7xl mb-1 font-bold text-white font-poppins'>
                                To-do List
                            </h6>
                            <img
                                src='img/Path.png'
                                className='mx-auto w-3/12 h-auto'
                                alt='path todo'
                            />
                            <p className='pt-10 w-6/12 text-sm md:text-3xl mx-auto text-white'>
                                Drag and drop to set yout main priorities, check
                                when done and create what's new.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section
                id='ToDo'
                className="bg-[url('/img/CoopersSVG.png')] bg-start bg-no-repeat"
            >
                <ToDo />
            </section>

            <section className='container text-center'>
                <div>
                    <div className='container md:pt-32 text-center'>
                        <div className='relative ml-4  md:w-10/12 h-[50vh] md:px-4 md:mx-auto mt-20 md:mt-48 bg-[#4AC959] rounded-md items-center'>
                            <h1 className='text-white text-start text-xl md:text-5xl font-bold pt-2 md:pt-20 pl-2 md:pl-20'>
                                good things
                            </h1>
                            <div className='absolute w-full'>
                                <SwiperCards className='mySwiper' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='container mx-auto px-4 pb-32 pt-48'>
                    <div className='items-center flex flex-wrap justify-center'>
                        <div className='block p-6 rounded-lg drop-shadow-xl bg-white max-w-md'>
                            <div className='relative text-center'>
                                <img
                                    src='img/brand/tatiana.png'
                                    className='relative rounded-full z-10 w-32 mx-auto h-auto'
                                    alt='Avatar'
                                />
                                <img
                                    src='img/brand/grafismo.png'
                                    className='absolute w-32 left-[15%] top-14 h-auto'
                                    alt='Grafismo'
                                />
                            </div>
                            <div className='container flex items-center gap-x-4 px-2 pb-4'>
                                <img
                                    className='w-10 h-10 text-start'
                                    alt='badge'
                                    src='img/brand/badge.png'
                                />
                                <div>
                                    <h5 className='text-lg text-black font-normal leading-tight'>
                                        GET IN
                                    </h5>
                                    <p className='text-xl text-black font-bold'>
                                        TOUCH
                                    </p>
                                </div>
                            </div>
                            <Form />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
