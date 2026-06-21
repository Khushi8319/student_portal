import { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

const studentData = {
  name: 'Khushi Rajbhar',
  email: 'khushi@stu.com',
  password: '123456',
  roll: 'CS21B045',
  course: 'B.Tech Computer Science',
  semester: '5th Semester',
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('studentUser')
    return saved ? JSON.parse(saved) : null
  })

  const login = (email, password) => {
    if (email === studentData.email && password === studentData.password) {
      const loggedUser = {
        name: studentData.name,
        email: studentData.email,
        roll: studentData.roll,
        course: studentData.course,
        semester: studentData.semester,
      }
      setUser(loggedUser)
      localStorage.setItem('studentUser', JSON.stringify(loggedUser))
      return true
    }
    return false
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('studentUser')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
