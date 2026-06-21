import { useNavigate } from 'react-router-dom'
import { FiLogOut } from 'react-icons/fi'
import { useAuth } from '../context/AuthContext.jsx'

export default function Navbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <header className="flex items-center justify-between bg-white border-b px-5 py-3">
      <div>
        <p className="text-sm text-gray-400">Welcome back,</p>
        <h1 className="text-lg font-semibold text-gray-800">{user?.name}</h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-right hidden sm:block">
          <p className="text-sm font-medium text-gray-700">{user?.roll}</p>
          <p className="text-xs text-gray-400">{user?.semester}</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
          {user?.name?.charAt(0)}
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-sm text-red-500 hover:text-red-600 font-medium"
        >
          <FiLogOut />
          <span className="hidden sm:inline">Logout</span>
        </button>
      </div>
    </header>
  )
}
