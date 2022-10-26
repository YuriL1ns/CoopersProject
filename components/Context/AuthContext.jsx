import React, { createContext, useEffect, useState } from 'react'
import { setCookie, parseCookies } from 'nookies'
import Router from 'next/router'
import { apiCoopersProject, getAPIClient } from '../../services/apicoopers'


export const AuthContext = createContext()

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const isAuthenticated = !!user

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token) {
            apiCoopersProject.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
            setUser()
        }

        setLoading(false)
    }, [])

    async function signIn(email, senha) {
        const { token } = await getAPIClient.post('')

        setCookie(undefined, 'nextauth.token', token, {
            maxAge: 3600 // 1h
        })

        getAPIClient.defaults.headers['Authorization'] = `Bearer ${token}`

        setUser(user)

        Router.push('/dash')
    }

    function handleLogOut() {
        setUser()
        localStorage.removeItem('token')
        apiCoopersProject.defaults.headers['Authorization'] = undefined
        Router.push('/index')
    }

    return (
        <AuthContext.Provider value={{ loading, isAuthenticated, signIn,  handleLogOut }}>
            {children}
        </AuthContext.Provider>
    )
}
