import React, { useState, useCallback } from 'react'
import Head from 'next/head'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { apiCoopersProject } from '../services/apicoopers'
import { getCsrfToken } from 'next-auth/react'
import ToastMessage from 'components/Toast'
import { useSession } from 'next-auth/react'

export async function getServerSideProps(context) {
    return {
        props: {
            csrfToken: await getCsrfToken(context)
        }
    }
}

export default function SingUp({ csrfToken }) {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const notify = useCallback((type, message) => {
        ToastMessage({ type, message })
    }, [])

    async function handleSubmit(event) {
        event.preventDefault()
        router.push('/dash')

        const user = {
            email: email,
            senha: senha
        }

        try {
            await fetch(process.env.NEXT_PUBLIC_BASE_URL_BACKEND, '/login', {
                method: 'POST',
                body: JSON.stringify(user),
                headers: { 'Content-Type': 'application/json' }
            })
            setEmail('')
            setSenha('')
        } catch (error) {
            notify('error', 'ocorreu um erro no seu login!')
        }
    }

    return (
        <>
            <div className='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
                <Head>
                    <title>Login - To-Do List</title>
                </Head>

                <div className='max-w-sm w-full space-y-8'>
                    <div>
                        <img
                            className='mx-auto h-12 w-auto'
                            src='img/logo.png'
                            alt='Workflow'
                        />
                    </div>
                    <form
                        className='mt-8 space-y-6'
                        method='post'
                        action='/api/auth/callback/credentials'
                        onSubmit={handleSubmit}
                    >
                        <input
                            type='hidden'
                            name='csrfToken'
                            defaultValue={csrfToken}
                        />
                        <input type='hidden' name='action' value='login' />
                        <input
                            type='hidden'
                            name='token'
                            value={process.env.NEXT_PUBLIC_BASE_URL_BACKEND}
                        />

                        <div className='rounded-md shadow-sm -space-y-px'>
                            <div>
                                <label
                                    htmlFor='email-address'
                                    className='sr-only'
                                >
                                    Email address
                                </label>
                                <input
                                    id='email-address'
                                    name='email'
                                    type='email'
                                    autoComplete='email'
                                    required
                                    className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-[#4AC959] focus:border-[#4AC959] focus:z-10 sm:text-sm'
                                    placeholder='Insira seu E-mail'
                                />
                            </div>
                            <div>
                                <label htmlFor='password' className='sr-only'>
                                    Password
                                </label>
                                <input
                                    id='password'
                                    name='password'
                                    type='password'
                                    autoComplete='current-password'
                                    required
                                    className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-[#4AC959] focus:border-[#4AC959] focus:z-10 sm:text-sm'
                                    placeholder='Senha'
                                />
                            </div>
                        </div>

                        <div className='flex items-center justify-between'>
                            <div className='flex items-center'>
                                <input
                                    id='remember_me'
                                    name='remember_me'
                                    type='checkbox'
                                    className='h-4 w-4 text-[#4AC959] focus:ring-[#4AC959] border-gray-300 rounded'
                                />
                                <label
                                    htmlFor='remember_me'
                                    className='ml-2 block text-sm text-[#4AC959]'
                                >
                                    Lembrar-me
                                </label>
                            </div>

                            <div className='text-sm'>
                                <a
                                    href='/'
                                    className='font-medium text-[#4AC959] hover:text-black'
                                >
                                    Esqueceu sua senha?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button
                                type='submit'
                                className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#4AC959] hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4AC959]'
                            >
                                <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 24 24'
                                        fill='currentColor'
                                        className='w-6 h-6'
                                    >
                                        <path
                                            fillRule='evenodd'
                                            d='M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z'
                                            clipRule='evenodd'
                                        />
                                    </svg>
                                </span>
                                Entrar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
