import { Link } from 'react-router-dom'
import { MdEventAvailable, MdAssignment, MdNotifications, MdMenuBook } from 'react-icons/md'
import { useAuth } from '../context/AuthContext.jsx'

const stats = [
  { label: 'Overall Attendance', value: '84%', icon: <MdEventAvailable />, link: '/attendance', color: 'bg-green-100 text-green-600' },
  { label: 'Pending Assignments', value: '3', icon: <MdAssignment />, link: '/assignments', color: 'bg-orange-100 text-orange-600' },
  { label: 'New Notices', value: '5', icon: <MdNotifications />, link: '/notices', color: 'bg-blue-100 text-blue-600' },
  { label: 'Enrolled Courses', value: '6', icon: <MdMenuBook />, link: '/courses', color: 'bg-purple-100 text-purple-600' },
]

const recentNotices = [
  { title: 'Mid Semester Exam Schedule Released', date: '20 June 2026' },
  { title: 'Library Will Remain Closed on Sunday', date: '18 June 2026' },
  { title: 'Workshop on AI and Machine Learning', date: '15 June 2026' },
]

const upcomingAssignments = [
  { title: 'Data Structures Assignment 4', due: '25 June 2026' },
  { title: 'DBMS Lab Report', due: '27 June 2026' },
  { title: 'Operating System Quiz', due: '30 June 2026' },
]

export default function Dashboard() {
  const { user } = useAuth()

  return (
    <div className="flex flex-col gap-6">
      <div className="bg-primary text-white rounded-2xl p-6">
        <h2 className="text-xl font-semibold">Hello, {user?.name}</h2>
        <p className="text-sm opacity-90 mt-1">{user?.course} - {user?.semester}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((item) => (
          <Link
            to={item.link}
            key={item.label}
            className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition flex flex-col gap-3"
          >
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl ${item.color}`}>
              {item.icon}
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800">{item.value}</p>
              <p className="text-sm text-gray-400">{item.label}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h3 className="font-semibold text-gray-800 mb-4">Recent Notices</h3>
          <div className="flex flex-col gap-3">
            {recentNotices.map((notice) => (
              <div key={notice.title} className="flex justify-between items-center border-b pb-2 last:border-none">
                <p className="text-sm text-gray-600">{notice.title}</p>
                <span className="text-xs text-gray-400">{notice.date}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h3 className="font-semibold text-gray-800 mb-4">Upcoming Assignments</h3>
          <div className="flex flex-col gap-3">
            {upcomingAssignments.map((item) => (
              <div key={item.title} className="flex justify-between items-center border-b pb-2 last:border-none">
                <p className="text-sm text-gray-600">{item.title}</p>
                <span className="text-xs text-orange-500 font-medium">Due {item.due}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
