import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiMail, FiLock } from 'react-icons/fi'
import { useAuth } from '../context/AuthContext.jsx'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const success = login(email, password)
    if (success) {
      navigate('/')
    } else {
      setError('Invalid email or password')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white w-full max-w-sm rounded-2xl shadow-md p-8">
        <h1 className="text-2xl font-bold text-center text-primary mb-1">Student Portal</h1>
        <p className="text-center text-gray-400 text-sm mb-6">Login to continue</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex items-center border rounded-lg px-3 py-2 gap-2">
            <FiMail className="text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full outline-none text-sm"
              required
            />
          </div>

          <div className="flex items-center border rounded-lg px-3 py-2 gap-2">
            <FiLock className="text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full outline-none text-sm"
              required
            />
          </div>

          {error && <p className="text-red-500 text-xs">{error}</p>}

          <button
            type="submit"
            className="bg-primary text-white py-2 rounded-lg font-medium hover:bg-primarydark transition"
          >
            Login
          </button>
        </form>

        <div className="mt-6 bg-gray-50 border rounded-lg p-3 text-xs text-gray-500">
          <p className="font-medium mb-1">Demo Credentials</p>
          <p>Email: khushi@stu.com</p>
          <p>Password: 123456</p>
        </div>
      </div>
    </div>
  )
}
