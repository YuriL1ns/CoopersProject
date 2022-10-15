import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import { AuthProvider } from '../components/context/AuthContext'

import '@fortawesome/fontawesome-free/css/all.min.css'
import 'styles/tailwind.css'

export default class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps }
    }
    render() {
        const { Component, pageProps } = this.props
        const Layout = Component.layout || (({ children }) => <>{children}</>)

        return (
            <AuthProvider>
                <Head>
                    <meta
                        name='viewport'
                        content='width=device-width, initial-scale=1, shrink-to-fit=no'
                    />
                    <title>Coopers Project</title>
                </Head>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </AuthProvider>
        )
    }
}
