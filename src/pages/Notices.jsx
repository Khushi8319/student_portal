import { MdCampaign } from 'react-icons/md'

const notices = [
  { id: 1, title: 'Mid Semester Exam Schedule Released', date: '20 June 2026', desc: 'The mid semester exam timetable has been uploaded on the college website. Students are advised to check their exam dates and seating arrangement.' },
  { id: 2, title: 'Library Will Remain Closed on Sunday', date: '18 June 2026', desc: 'Due to maintenance work, the central library will remain closed this Sunday. Regular timing will resume from Monday.' },
  { id: 3, title: 'Workshop on AI and Machine Learning', date: '15 June 2026', desc: 'A two day workshop on AI and Machine Learning will be organized by the CS department. Interested students can register at the department office.' },
  { id: 4, title: 'Fee Payment Last Date Extended', date: '12 June 2026', desc: 'The last date for semester fee payment has been extended to 30 June 2026. Late fee will be applicable after this date.' },
  { id: 5, title: 'Annual Sports Meet Registration Open', date: '10 June 2026', desc: 'Registration for the annual sports meet has started. Students can register through the sports department before the deadline.' },
]

export default function Notices() {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-xl font-semibold text-gray-800">Notices</h2>

      <div className="flex flex-col gap-4">
        {notices.map((notice) => (
          <div key={notice.id} className="bg-white rounded-2xl p-5 shadow-sm flex gap-4">
            <div className="w-10 h-10 rounded-lg bg-indigo-100 text-primary flex items-center justify-center text-xl shrink-0">
              <MdCampaign />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-medium text-gray-800">{notice.title}</h3>
                <span className="text-xs text-gray-400">{notice.date}</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">{notice.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
