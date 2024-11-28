'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { AuthState, User, demoUsers } from '@/lib/auth'

interface AuthContextType extends AuthState {
  login: (email: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
  })

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setAuthState({
        user: JSON.parse(storedUser),
        isAuthenticated: true,
      })
    }
  }, [])

  const login = async (email: string): Promise<boolean> => {
    const user = demoUsers.find((u) => u.email === email)
    if (user) {
      setAuthState({ user, isAuthenticated: true })
      localStorage.setItem('user', JSON.stringify(user))
      return true
    }
    return false
  }

  const logout = () => {
    setAuthState({ user: null, isAuthenticated: false })
    localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}