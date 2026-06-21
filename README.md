# Student Portal

This is a simple Student Portal where students can view their dashboard, attendance, assignments, notices, and courses after logging in.

## Tech Stack

- React.js
- Vite
- Tailwind CSS
- React Router DOM
- React Icons

## How to Run

### Step 1 - Install Dependencies

```bash
npm install
```

### Step 2 - Run the Project

```bash
npm run dev
```

The application will open in the browser at:

```text
http://localhost:5173
```

## Login Credentials

```text
Email: khushi@stu.com
Password: 123456
```

## Pages

- Login - Login using email and password
- Dashboard - Overview of attendance, assignments, and notices
- Attendance - Subject-wise attendance percentage
- Assignments - List of assignments and their status
- Notices - Important college notices
- Courses - All semester subjects

## Project Structure

```text
student-portal/
├── src/
│   ├── components/
│   │   ├── Layout.jsx
│   │   ├── Navbar.jsx
│   │   └── Sidebar.jsx
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Attendance.jsx
│   │   ├── Assignments.jsx
│   │   ├── Notices.jsx
│   │   └── Courses.jsx
│   ├── assets/
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

> The data is currently hardcoded. To connect a backend, API calls can be added inside AuthContext and the page components.

## Future Improvements

- Backend Integration
- Database Connectivity
- Real Authentication System
- Assignment Submission
- Student Profile Management

## Author

**Khushi Rajbhar**
