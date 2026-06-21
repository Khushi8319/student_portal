const attendanceData = [
  { subject: 'Data Structures', present: 42, total: 48 },
  { subject: 'Database Management', present: 38, total: 45 },
  { subject: 'Operating Systems', present: 30, total: 44 },
  { subject: 'Computer Networks', present: 40, total: 46 },
  { subject: 'Web Technology', present: 35, total: 40 },
  { subject: 'Software Engineering', present: 33, total: 42 },
]

function getColor(percent) {
  if (percent >= 75) return 'bg-green-500'
  if (percent >= 60) return 'bg-orange-500'
  return 'bg-red-500'
}

export default function Attendance() {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-xl font-semibold text-gray-800">Attendance</h2>

      <div className="bg-white rounded-2xl p-5 shadow-sm flex flex-col gap-5">
        {attendanceData.map((item) => {
          const percent = Math.round((item.present / item.total) * 100)
          return (
            <div key={item.subject}>
              <div className="flex justify-between mb-1">
                <p className="text-sm font-medium text-gray-700">{item.subject}</p>
                <p className="text-sm text-gray-500">{item.present}/{item.total} classes - {percent}%</p>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2.5">
                <div
                  className={`h-2.5 rounded-full ${getColor(percent)}`}
                  style={{ width: `${percent}%` }}
                ></div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 text-sm rounded-xl p-4">
        Minimum 75% attendance is required in each subject to be eligible for the semester exam.
      </div>
    </div>
  )
}
