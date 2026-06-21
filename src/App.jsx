import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Attendance from './pages/Attendance.jsx'
import Assignments from './pages/Assignments.jsx'
import Notices from './pages/Notices.jsx'
import Courses from './pages/Courses.jsx'
import { useAuth } from './context/AuthContext.jsx'

function PrivateRoute({ children }) {
  const { user } = useAuth()
  return user ? children : <Navigate to="/login" />
}

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="attendance" element={<Attendance />} />
        <Route path="assignments" element={<Assignments />} />
        <Route path="notices" element={<Notices />} />
        <Route path="courses" element={<Courses />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
