# Internship Platform

A full-stack web application for managing internships, applications, and student progress tracking.

## Features

- **User Roles**:
  - Students: Apply for internships, track progress, submit reports
  - Faculty: Monitor student progress, provide feedback
  - Admin: Manage users, internships, and system settings
  - Management: View analytics and reports

- **Student Features**:
  - Browse available internships
  - Submit applications with resumes
  - Track application status
  - Submit progress reports
  - View feedback from faculty

- **Faculty Features**:
  - Monitor student progress
  - Provide feedback and evaluations
  - View student reports
  - Track internship milestones

- **Admin Features**:
  - User management
  - Internship posting and management
  - System configuration
  - Analytics and reporting

- **Management Features**:
  - Resource allocation
  - Program goals tracking
  - Performance analytics
  - System-wide reports

## Tech Stack

- **Frontend**:
  - React.js
  - React Router
  - Bootstrap
  - Chart.js
  - Axios

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB
  - JWT Authentication
  - Multer (File Upload)

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

## Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd internship-platform
   ```

2. **Install Frontend Dependencies**:
   ```bash
   npm install
   ```

3. **Install Backend Dependencies**:
   ```bash
   cd server
   npm install
   ```

4. **Environment Setup**:
   Create a `.env` file in the server directory with:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/internship_dashboard
   JWT_SECRET=your-secret-key-here
   ```

## Running the Application

1. **Start MongoDB**:
   Make sure MongoDB is running on your system

2. **Start Backend Server**:
   ```bash
   cd server
   npm run dev
   ```

3. **Start Frontend Development Server**:
   ```bash
   npm start
   ```

4. **Access the Application**:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## Project Structure

```
internship-platform/
├── public/              # Static files
├── src/                 # Frontend source code
│   ├── components/      # React components
│   ├── pages/          # Page components
│   ├── styles/         # CSS files
│   └── App.js          # Main App component
├── server/             # Backend code
│   ├── controllers/    # Route controllers
│   ├── models/         # MongoDB models
│   ├── routes/         # API routes
│   └── server.js       # Server entry point
└── uploads/            # File uploads directory
```

## API Endpoints

- **Authentication**:
  - POST /api/auth/register - Register new user
  - POST /api/auth/login - User login

- **Internships**:
  - GET /api/internships - Get all internships
  - POST /api/internships - Create new internship

- **Applications**:
  - GET /api/applications - Get all applications
  - POST /api/applications - Submit new application

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@example.com or create an issue in the repository. 

https://github.com/user-attachments/assets/d9610acc-bb1b-44f6-910e-c17163230cec



