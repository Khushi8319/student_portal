const courses = [
  { code: 'CS501', name: 'Data Structures', credits: 4, faculty: 'Dr. R. Sharma' },
  { code: 'CS502', name: 'Database Management', credits: 4, faculty: 'Dr. A. Verma' },
  { code: 'CS503', name: 'Operating Systems', credits: 3, faculty: 'Dr. S. Mehta' },
  { code: 'CS504', name: 'Computer Networks', credits: 3, faculty: 'Dr. P. Singh' },
  { code: 'CS505', name: 'Web Technology', credits: 3, faculty: 'Dr. N. Gupta' },
  { code: 'CS506', name: 'Software Engineering', credits: 3, faculty: 'Dr. K. Joshi' },
]

export default function Courses() {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-xl font-semibold text-gray-800">Courses</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course) => (
          <div key={course.code} className="bg-white rounded-2xl p-5 shadow-sm flex flex-col gap-2">
            <span className="text-xs text-primary font-semibold">{course.code}</span>
            <h3 className="font-medium text-gray-800">{course.name}</h3>
            <p className="text-sm text-gray-500">Faculty: {course.faculty}</p>
            <p className="text-sm text-gray-500">Credits: {course.credits}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
