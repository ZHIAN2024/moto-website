// Handle login form submission
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        // Username validation function
        function validateUsername(username) {
            return username.length >= 5 && username.length <= 10;
        }

        // Password validation function
        function validatePassword(password) {
            // Check length
            if (password.length < 6 || password.length > 18) return false;
            // Check for numbers
            if (!/\d/.test(password)) return false;
            // Check for uppercase letters
            if (!/[A-Z]/.test(password)) return false;
            // Check for lowercase letters
            if (!/[a-z]/.test(password)) return false;
            return true;
        }

        // Add real-time validation
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');

        usernameInput.addEventListener('input', function() {
            if (!validateUsername(this.value)) {
                this.setCustomValidity('Username must be between 5-10 characters');
            } else {
                this.setCustomValidity('');
            }
        });

        passwordInput.addEventListener('input', function() {
            if (!validatePassword(this.value)) {
                this.setCustomValidity('Password must be 6-18 characters and contain numbers, uppercase and lowercase letters');
            } else {
                this.setCustomValidity('');
            }
        });

        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = usernameInput.value;
            const password = passwordInput.value;
            
            if (!validateUsername(username)) {
                alert('Username must be between 5-10 characters');
                return;
            }

            if (!validatePassword(password)) {
                alert('Password must be 6-18 characters and contain numbers, uppercase and lowercase letters');
                return;
            }
            
            // Validation passed, add login logic here
            console.log('Login validation passed:', { username, password });
            alert('Validation successful! Login feature under development...');
        });
    }

    // Add click events for motorcycle cards
    const motorcycleButtons = document.querySelectorAll('.motorcycle-card button');
    motorcycleButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Details page under development...');
        });
    });

    // Add smooth scroll for About link
    const aboutLinks = document.querySelectorAll('a[href*="#about"]');
    aboutLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
                // Only prevent default if we're already on index.html
                e.preventDefault();
                document.querySelector('#about').scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}); 