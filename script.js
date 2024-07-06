document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Email and password basic validation
    if (!email || !password) {
        alert('Please fill in both fields.');
        return;
    }

    // Regex for email validation
    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Form submitted successfully!');
});

function togglePasswordVisibility() {
    var passwordInput = document.getElementById('password');
    var passwordType = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', passwordType);
}
