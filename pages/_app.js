import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import { SessionProvider } from 'next-auth/react'

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
        const { Component, session, pageProps } = this.props
        const Layout = Component.layout || (({ children }) => <>{children}</>)

        return (
            <SessionProvider session={session}>
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
            </SessionProvider>
        )
    }
}
