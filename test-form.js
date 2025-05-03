// Test script for form submission
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');

// Configuration
const API_URL = 'http://localhost:5000/api';
let authToken = '';

// Step 1: Register a new user
async function registerUser() {
  try {
    const userData = {
      fullName: 'Test User',
      email: 'test@example.com',
      password: 'password123',
      role: 'student',
      collegeName: 'Test College',
      yearOfStudy: 3,
      branch: 'Computer Science',
      cgpa: 8.5,
      skills: 'JavaScript,React,Node.js'
    };

    const response = await axios.post(`${API_URL}/auth/register`, userData);
    console.log('Registration successful:', response.data);
    authToken = response.data.token;
    return response.data;
  } catch (error) {
    console.error('Registration failed:', error.response ? error.response.data : error.message);
    throw error;
  }
}

// Step 2: Login (if registration fails)
async function loginUser() {
  try {
    const loginData = {
      email: 'test@example.com',
      password: 'password123'
    };

    const response = await axios.post(`${API_URL}/auth/login`, loginData);
    console.log('Login successful:', response.data);
    authToken = response.data.token;
    return response.data;
  } catch (error) {
    console.error('Login failed:', error.response ? error.response.data : error.message);
    throw error;
  }
}

// Step 3: Submit an application
async function submitApplication() {
  try {
    // Create a sample resume file if it doesn't exist
    const resumePath = path.join(__dirname, 'test-resume.pdf');
    if (!fs.existsSync(resumePath)) {
      fs.writeFileSync(resumePath, 'This is a test resume file');
      console.log('Created test resume file');
    }

    // Create form data
    const formData = new FormData();
    formData.append('internshipId', '507f1f77bcf86cd799439011'); // Replace with a valid internship ID
    formData.append('collegeName', 'Test College');
    formData.append('yearOfStudy', '3');
    formData.append('branch', 'Computer Science');
    formData.append('cgpa', '8.5');
    formData.append('skills', 'JavaScript,React,Node.js');
    formData.append('interestReason', 'I am interested in this internship to gain practical experience');
    formData.append('resume', fs.createReadStream(resumePath));

    // Submit the application
    const response = await axios.post(`${API_URL}/applications`, formData, {
      headers: {
        ...formData.getHeaders(),
        'Authorization': `Bearer ${authToken}`
      }
    });

    console.log('Application submitted successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Application submission failed:', error.response ? error.response.data : error.message);
    throw error;
  }
}

// Main function to run the test
async function runTest() {
  try {
    // Try to register first
    try {
      await registerUser();
    } catch (error) {
      // If registration fails, try to login
      console.log('Registration failed, trying to login...');
      await loginUser();
    }

    // Submit the application
    await submitApplication();
    
    console.log('Test completed successfully!');
  } catch (error) {
    console.error('Test failed:', error.message);
  }
}

// Run the test
runTest(); 