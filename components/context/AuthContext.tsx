import { createContext, useEffect, useState } from 'react'
import { setCookie, parseCookies } from 'nookies'
import Router from 'next/router'
import { getAPIClient } from '../../services/apicoopers'

type AuthContextType = {
    isAuthenticated: boolean
    signIn: (data) => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)

    const isAuthenticated = !!user

    useEffect(() => {
        const { 'nextauth.token': token } = parseCookies()
    })

    async function signIn(email, senha) {
        const { token } = await getAPIClient.post('')

        setCookie(undefined, 'nextauth.token', token, {
            maxAge: 3600 // 1h
        })

        getAPIClient.defaults.headers['Authorization'] = `Bearer ${token}`

        setUser(user)

        Router.push('/dash')
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}
