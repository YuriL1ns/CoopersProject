import nextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export default nextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',

            credentials: {
                username: {
                    email: 'teste@teste.com',
                    type: 'email',
                    placeholder: 'Insira seu email'
                },
                senha: { label: 'Password', type: 'password' }
            },
            async authorize(credentials, req) {
                const res = await fetch(
                    process.env.NEXT_PUBLIC_BASE_URL_BACKEND,
                    '/login',
                    {
                        method: 'POST',
                        body: JSON.stringify(credentials),
                        headers: { 'Content-Type': 'application/json' }
                    }
                )
                const user = await res.json()

                if (res.ok && user) {
                    return user
                }

                return null
            }
        })
    ],
    callbacks: {
        async signIn({ credentials }) {
            const isAllowedToSignIn = true
            if (isAllowedToSignIn) {
                return true
            } else {
                return false
            }
        }
    },
    callbacks: {
        async redirect({ url, baseUrl }) {
            if (url.startsWith('/')) return `${baseUrl}${url}`
            else if (new URL(url).origin === baseUrl) return url
            return baseUrl
        }
    },
    callbacks: {
        async jwt({ token, account, user }) {
            if (account) {
                token.accessToken = account.access_token
                token.id = user.id
            }
            return token
        }
    },
    session: {
        jwt: true
    },
    jwt: {
        secret: process.env.NEXT_PUBLIC_BASE_URL_BACKEND
    }
})
