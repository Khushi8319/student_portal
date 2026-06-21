import { NavLink } from 'react-router-dom'
import { MdSpaceDashboard, MdEventAvailable, MdAssignment, MdNotifications, MdMenuBook } from 'react-icons/md'

const links = [
  { to: '/', label: 'Dashboard', icon: <MdSpaceDashboard /> },
  { to: '/attendance', label: 'Attendance', icon: <MdEventAvailable /> },
  { to: '/assignments', label: 'Assignments', icon: <MdAssignment /> },
  { to: '/notices', label: 'Notices', icon: <MdNotifications /> },
  { to: '/courses', label: 'Courses', icon: <MdMenuBook /> },
]

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-60 bg-white border-r min-h-screen p-4">
      <div className="text-xl font-bold text-primary mb-8 px-2">Student Portal</div>
      <nav className="flex flex-col gap-1">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition ${
                isActive
                  ? 'bg-primary text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`
            }
          >
            <span className="text-lg">{link.icon}</span>
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
