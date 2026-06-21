import { useState } from 'react'

const initialAssignments = [
  { id: 1, title: 'Data Structures Assignment 4', subject: 'Data Structures', due: '25 June 2026', status: 'Pending' },
  { id: 2, title: 'DBMS Lab Report', subject: 'Database Management', due: '27 June 2026', status: 'Pending' },
  { id: 3, title: 'Operating System Quiz', subject: 'Operating Systems', due: '30 June 2026', status: 'Pending' },
  { id: 4, title: 'Networking Case Study', subject: 'Computer Networks', due: '10 June 2026', status: 'Submitted' },
  { id: 5, title: 'Web Project Phase 1', subject: 'Web Technology', due: '05 June 2026', status: 'Submitted' },
]

function statusStyle(status) {
  if (status === 'Submitted') return 'bg-green-100 text-green-600'
  return 'bg-orange-100 text-orange-600'
}

export default function Assignments() {
  const [assignments, setAssignments] = useState(initialAssignments)

  const markSubmitted = (id) => {
    setAssignments((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: 'Submitted' } : item))
    )
  }

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-xl font-semibold text-gray-800">Assignments</h2>

      <div className="bg-white rounded-2xl shadow-sm overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-400 border-b">
              <th className="p-4">Title</th>
              <th className="p-4">Subject</th>
              <th className="p-4">Due Date</th>
              <th className="p-4">Status</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((item) => (
              <tr key={item.id} className="border-b last:border-none">
                <td className="p-4 text-gray-700 font-medium">{item.title}</td>
                <td className="p-4 text-gray-500">{item.subject}</td>
                <td className="p-4 text-gray-500">{item.due}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyle(item.status)}`}>
                    {item.status}
                  </span>
                </td>
                <td className="p-4">
                  {item.status === 'Pending' ? (
                    <button
                      onClick={() => markSubmitted(item.id)}
                      className="text-primary text-xs font-medium hover:underline"
                    >
                      Mark as Submitted
                    </button>
                  ) : (
                    <span className="text-gray-300 text-xs">Done</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
