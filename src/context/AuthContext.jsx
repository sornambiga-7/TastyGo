import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

const USERS_KEY = 'tastygo_users'
const SESSION_KEY = 'tastygo_session'

function loadUsers() {
  try {
    const raw = localStorage.getItem(USERS_KEY)
    const parsed = raw ? JSON.parse(raw) : []
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function loadSession() {
  try {
    const raw = localStorage.getItem(SESSION_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(loadSession)

  const signup = ({ fullName, email, phone, password }) => {
    const users = loadUsers()
    const emailExists = users.some((u) => u.email.toLowerCase() === email.toLowerCase())
    if (emailExists) {
      return { success: false, message: 'An account with this email already exists.' }
    }
    const newUser = { fullName, email, phone, password }
    users.push(newUser)
    localStorage.setItem(USERS_KEY, JSON.stringify(users))

    const session = { fullName, email, phone }
    localStorage.setItem(SESSION_KEY, JSON.stringify(session))
    setUser(session)
    return { success: true }
  }

  const login = ({ email, password }) => {
    const users = loadUsers()
    const found = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    )
    if (!found) {
      return { success: false, message: 'Invalid email or password.' }
    }
    const session = { fullName: found.fullName, email: found.email, phone: found.phone }
    localStorage.setItem(SESSION_KEY, JSON.stringify(session))
    setUser(session)
    return { success: true }
  }

  const logout = () => {
    localStorage.removeItem(SESSION_KEY)
    setUser(null)
  }

  const value = {
    user,
    isAuthenticated: !!user,
    login,
    signup,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within an AuthProvider')
  return context
}
