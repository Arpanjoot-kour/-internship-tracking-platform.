// MongoDB Schema and Sample Data for Internship Dashboard

// Switch to internship_dashboard database
db = db.getSiblingDB('internship_dashboard');

// Clear existing collections
db.students.drop();
db.companies.drop();
db.internships.drop();
db.applications.drop();

// Students Collection
const student1 = new ObjectId();
const student2 = new ObjectId();
const student3 = new ObjectId();

db.students.insertMany([
  {
    _id: student1,
    studentId: "STU001",
    name: "Arpanjoot Kour",
    email: "arpanjoot.kour@example.com",
    course: "Computer Science",
    year: "3rd Year",
    gpa: 8.5,
    department: "Computer Science",
    enrollmentYear: 2021,
    skills: ["JavaScript", "React", "Node.js", "MongoDB"],
    resumeUrl: "/uploads/resumes/arpanjoot_resume.pdf",
    profilePicture: "/uploads/profiles/arpanjoot.jpg",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: student2,
    studentId: "STU002",
    name: "Vansh Raina",
    email: "vansh.raina@example.com",
    course: "Electrical Engineering",
    year: "2nd Year",
    gpa: 7.8,
    department: "Electrical Engineering",
    enrollmentYear: 2022,
    skills: ["Python", "MATLAB", "Circuit Design", "PCB Layout"],
    resumeUrl: "/uploads/resumes/vansh_resume.pdf",
    profilePicture: "/uploads/profiles/vansh.jpg",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: student3,
    studentId: "STU003",
    name: "Angela Mary Promod",
    email: "angela.promod@example.com",
    course: "Mechanical Engineering",
    year: "4th Year",
    gpa: 9.2,
    department: "Mechanical Engineering",
    enrollmentYear: 2020,
    skills: ["AutoCAD", "SolidWorks", "Thermodynamics", "Fluid Mechanics"],
    resumeUrl: "/uploads/resumes/angela_resume.pdf",
    profilePicture: "/uploads/profiles/angela.jpg",
    createdAt: new Date(),
    updatedAt: new Date()
  }
]);

// Companies Collection
const company1 = new ObjectId();
const company2 = new ObjectId();

db.companies.insertMany([
  {
    _id: company1,
    companyId: "COMP001",
    name: "Tech Solutions Inc.",
    industry: "Technology",
    location: "Mumbai, India",
    website: "https://techsolutions.example.com",
    description: "Leading technology solutions provider",
    logo: "/uploads/companies/techsolutions_logo.png",
    contactPerson: "Rajesh Kumar",
    contactEmail: "hr@techsolutions.example.com",
    contactPhone: "+91-9876543210",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: company2,
    companyId: "COMP002",
    name: "Power Systems Ltd",
    industry: "Energy",
    location: "Delhi, India",
    website: "https://powersystems.example.com",
    description: "Renewable energy solutions provider",
    logo: "/uploads/companies/powersystems_logo.png",
    contactPerson: "Priya Sharma",
    contactEmail: "careers@powersystems.example.com",
    contactPhone: "+91-9876543211",
    createdAt: new Date(),
    updatedAt: new Date()
  }
]);

// Internships Collection
const internship1 = new ObjectId();
const internship2 = new ObjectId();

db.internships.insertMany([
  {
    _id: internship1,
    internshipId: "INT001",
    title: "Full Stack Developer Intern",
    companyId: company1,
    description: "Full stack development internship position",
    requirements: [
      "Knowledge of JavaScript",
      "Basic understanding of React",
      "Good problem-solving skills"
    ],
    duration: "6 months",
    stipend: 25000,
    location: "Mumbai, India",
    type: "On-site",
    status: "Active",
    applicationDeadline: new Date("2024-05-01"),
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: internship2,
    internshipId: "INT002",
    title: "Electrical Engineering Intern",
    companyId: company2,
    description: "Electrical engineering internship focusing on power systems",
    requirements: [
      "Knowledge of circuit design",
      "Basic understanding of power systems",
      "MATLAB proficiency"
    ],
    duration: "3 months",
    stipend: 20000,
    location: "Delhi, India",
    type: "Hybrid",
    status: "Active",
    applicationDeadline: new Date("2024-04-15"),
    createdAt: new Date(),
    updatedAt: new Date()
  }
]);

// Applications Collection
db.applications.insertMany([
  {
    _id: new ObjectId(),
    applicationId: "APP001",
    studentId: student1,
    internshipId: internship1,
    status: "Active",
    appliedDate: new Date("2024-03-01"),
    resumeUrl: "/uploads/resumes/arpanjoot_resume.pdf",
    coverLetter: "I am excited to apply for this position...",
    currentStage: "Interview",
    interviewDate: new Date("2024-03-15"),
    feedback: "Strong technical skills demonstrated",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: new ObjectId(),
    applicationId: "APP002",
    studentId: student2,
    internshipId: internship2,
    status: "Pending",
    appliedDate: new Date("2024-03-05"),
    resumeUrl: "/uploads/resumes/vansh_resume.pdf",
    coverLetter: "I am writing to express my interest...",
    currentStage: "Application Review",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: new ObjectId(),
    applicationId: "APP003",
    studentId: student3,
    internshipId: internship1,
    status: "Completed",
    appliedDate: new Date("2024-02-15"),
    resumeUrl: "/uploads/resumes/angela_resume.pdf",
    coverLetter: "I am writing to apply for...",
    currentStage: "Completed",
    completionDate: new Date("2024-03-01"),
    feedback: "Excellent performance during internship",
    createdAt: new Date(),
    updatedAt: new Date()
  }
]);

// Create Indexes
db.students.createIndex({ "studentId": 1 }, { unique: true });
db.students.createIndex({ "email": 1 }, { unique: true });
db.companies.createIndex({ "companyId": 1 }, { unique: true });
db.internships.createIndex({ "internshipId": 1 }, { unique: true });
db.applications.createIndex({ "applicationId": 1 }, { unique: true });
db.applications.createIndex({ "studentId": 1 });
db.applications.createIndex({ "internshipId": 1 });
db.applications.createIndex({ "status": 1 });

// Print success message
print("Database initialized successfully!"); 