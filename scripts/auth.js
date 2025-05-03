// Authentication functions
document.addEventListener('DOMContentLoaded', function() {
    // Login form handler
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Here you would typically make an API call to your backend
            // For now, we'll just simulate a successful login
            console.log('Login attempt:', { email, password });
            
            // Redirect based on role (this would come from your backend)
            // For demo purposes, redirecting to student page
            window.location.href = 'student.html';
        });
    }

    // Registration form handler
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const fullName = document.getElementById('fullName').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const role = document.getElementById('role').value;

            // Validate passwords match
            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }

            // Here you would typically make an API call to your backend
            // For now, we'll just simulate a successful registration
            console.log('Registration attempt:', { fullName, email, role });
            
            // Redirect to login page after successful registration
            window.location.href = 'login.html';
        });
    }
}); 