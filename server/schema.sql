-- Drop database and recreate it
DROP DATABASE IF EXISTS internship_platform;
CREATE DATABASE internship_platform;
USE internship_platform;

-- Drop tables in reverse order (to handle foreign key constraints)
DROP TABLE IF EXISTS sdg_po_peo_mapping;
DROP TABLE IF EXISTS progress;
DROP TABLE IF EXISTS applications;
DROP TABLE IF EXISTS internships;
DROP TABLE IF EXISTS users;

-- Create tables in correct order
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('student', 'faculty', 'admin') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE internships (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    company VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    requirements TEXT NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    created_by INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE applications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT NOT NULL,
    internship_id INT NOT NULL,
    mentor_id INT,
    status ENUM('pending', 'accepted', 'rejected') DEFAULT 'pending',
    application_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (student_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (internship_id) REFERENCES internships(id) ON DELETE CASCADE,
    FOREIGN KEY (mentor_id) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE progress (
    id INT AUTO_INCREMENT PRIMARY KEY,
    application_id INT NOT NULL,
    milestone VARCHAR(255) NOT NULL,
    status ENUM('pending', 'in_progress', 'completed') DEFAULT 'pending',
    feedback TEXT,
    completion_date TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (application_id) REFERENCES applications(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE sdg_po_peo_mapping (
    id INT AUTO_INCREMENT PRIMARY KEY,
    sdg_id INT NOT NULL,
    po_id INT NOT NULL,
    peo_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insert admin users
INSERT INTO users (name, email, password, role) VALUES
('John Admin', 'john.admin1@example.com', 'hashed_password', 'admin'),
('Sarah Admin', 'sarah.admin2@example.com', 'hashed_password', 'admin'),
('Mike Admin', 'mike.admin3@example.com', 'hashed_password', 'admin'),
('Lisa Admin', 'lisa.admin4@example.com', 'hashed_password', 'admin');

-- Insert faculty users
INSERT INTO users (name, email, password, role) VALUES
('Dr. Smith', 'dr.smith1@example.com', 'hashed_password', 'faculty'),
('Prof. Johnson', 'prof.johnson2@example.com', 'hashed_password', 'faculty'),
('Dr. Williams', 'dr.williams3@example.com', 'hashed_password', 'faculty');

-- Insert student users
INSERT INTO users (name, email, password, role) VALUES
('Alex Student', 'alex.student1@example.com', 'hashed_password', 'student'),
('Emma Student', 'emma.student2@example.com', 'hashed_password', 'student'),
('Ryan Student', 'ryan.student3@example.com', 'hashed_password', 'student'),
('Sophia Student', 'sophia.student4@example.com', 'hashed_password', 'student'),
('James Student', 'james.student5@example.com', 'hashed_password', 'student');

-- Insert internships
INSERT INTO internships (title, company, description, requirements, start_date, end_date, created_by) VALUES
('Software Development Intern', 'Tech Solutions Inc.', 
'Join our development team to work on cutting-edge web applications using React and Node.js.',
'Strong knowledge of JavaScript, React, and Node.js. Experience with Git and REST APIs.',
'2024-06-01', '2024-08-31', 1),

('Data Science Intern', 'Data Analytics Corp', 
'Work with our data science team to analyze large datasets and create predictive models.',
'Python programming, knowledge of machine learning algorithms, experience with pandas and numpy.',
'2024-06-15', '2024-09-15', 2),

('Marketing Intern', 'Creative Marketing Agency', 
'Help create and implement marketing strategies for various clients.',
'Strong communication skills, knowledge of social media platforms, creative thinking.',
'2024-07-01', '2024-09-30', 3),

('UI/UX Design Intern', 'Design Studio', 
'Create user interfaces and experiences for web and mobile applications.',
'Knowledge of Figma or Adobe XD, understanding of design principles, portfolio required.',
'2024-06-01', '2024-08-31', 4);

-- Insert applications
INSERT INTO applications (student_id, internship_id, mentor_id, status) VALUES
(8, 1, 5, 'accepted'),  -- Alex (ID: 8) applied for Software Dev (ID: 1), mentored by Dr. Smith (ID: 5)
(9, 2, 6, 'pending'),   -- Emma (ID: 9) applied for Data Science (ID: 2), mentored by Prof. Johnson (ID: 6)
(10, 3, 7, 'accepted'), -- Ryan (ID: 10) applied for Marketing (ID: 3), mentored by Dr. Williams (ID: 7)
(11, 1, 5, 'rejected'), -- Sophia (ID: 11) applied for Software Dev (ID: 1), mentored by Dr. Smith (ID: 5)
(12, 4, 6, 'pending');  -- James (ID: 12) applied for UI/UX (ID: 4), mentored by Prof. Johnson (ID: 6)

-- Insert progress records
INSERT INTO progress (application_id, milestone, status, feedback, completion_date) VALUES
(1, 'Profile Setup', 'completed', 'Profile completed successfully', '2024-05-15 10:00:00'),
(1, 'Resume Review', 'completed', 'Resume looks good, proceed to interview', '2024-05-20 14:30:00'),
(1, 'Technical Interview', 'in_progress', 'Scheduled for next week', NULL),
(2, 'Profile Setup', 'completed', 'Profile setup done', '2024-05-16 11:00:00'),
(3, 'Profile Setup', 'completed', 'Profile verified', '2024-05-17 09:00:00'),
(3, 'Resume Review', 'completed', 'Excellent resume, proceed to next stage', '2024-05-22 15:00:00');

-- Insert SDG-PO-PEO mappings
INSERT INTO sdg_po_peo_mapping (sdg_id, po_id, peo_id) VALUES
(4, 1, 1), -- Quality Education
(8, 2, 2), -- Decent Work and Economic Growth
(9, 3, 3), -- Industry, Innovation and Infrastructure
(10, 4, 4); -- Reduced Inequalities 