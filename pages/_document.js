import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang='PT-BR'>
                <Head>
                    <meta charSet='utf-8' />
                    <meta
                        name='description'
                        content='Coopers Project - A ToDo List project with Drag and Drop based in Next.js'
                    />
                    <meta name='author' content='Dev. Yuri Lins' />
                    <meta name='theme-color' content='#000000' />
                    <link rel='shortcut icon' href='/img/brand/favicon.png' />
                    <link
                        rel='coopers-icon'
                        sizes='76x76'
                        href='/img/brand/favicon.png'
                    />
                    <link
                        rel='preconnect'
                        href='https://fonts.googleapis.com'
                    />
                    <link
                        rel='preconnect'
                        href='https://fonts.gstatic.com'
                        crossOrigin='true'
                    />
                    <link
                        href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap'
                        rel='stylesheet'
                    />
                    <link rel='stylesheet' href='style/index.css'></link>
                    <script src='https://cdn.tailwindcss.com'></script>
                </Head>
                <body className='antialiased'>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
