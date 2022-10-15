import React from 'react'
import Link from 'next/link'

export default function Navbar(props) {
    const [navbarOpen, setNavbarOpen] = React.useState('')

    return (
        <>
            <nav className='top-0 fixed z-50 w-full px-2 py-3 navbar-expand-lg bg-white bg-opacity-[20%] shadow justify-center'>
                <div className='container px-4 flex mx-auto'>
                    <img className='w-6' src='/img/bg.svg' alt='LogoCoopers' />
                    <div className='w-full relative flex flex-wrap justify-between lg:w-auto lg:static lg:block lg:justify-start'>
                        <Link href='/dash'>
                            <a
                                className='text-black text-3xl p-2 font-bold leading-relaxed inline-block py-2 whitespace-nowrap'
                                href='/dash'
                            >
                                coopers
                            </a>
                        </Link>
                        <button
                            className='items-center text-center justify-center cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none text-black'
                            id='dropdownMenuButton2'
                            data-bs-toggle='dropdown'
                            aria-expanded='false'
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <i className='fas fa-bars text-black'></i>
                        </button>
                    </div>
                    <div
                        className={
                            'lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none' +
                            (navbarOpen ? ' block' : ' hidden')
                        }
                        id='example-navbar-warning'
                    >
                        <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
                            <li className='flex items-center'>
                                <Link href='/login'>
                                    <button
                                        className='bg-black text-white hover:bg-[#4AC959] text-xs font-bold px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150'
                                        id='dropdownMenuButton2'
                                    >
                                        Logout
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
