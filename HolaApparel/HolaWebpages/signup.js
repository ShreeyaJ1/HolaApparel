document.addEventListener("DOMContentLoaded", function() {
    // Get form and form elements
    var signUpForm = document.getElementById("signUpForm");
    var usernameInput = document.getElementById("username");
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");
    var confirmPasswordInput = document.getElementById("confirmPassword");
    var signUpButton = document.getElementById("signUpButton");

    // Function to validate form
    function validateForm() {
        var username = usernameInput.value.trim();
        var email = emailInput.value.trim();
        var password = passwordInput.value.trim();
        var confirmPassword = confirmPasswordInput.value.trim();

        if (username === "" || email === "" || password === "" || confirmPassword === "") {
            alert("Please fill in all fields.");
            return false;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return false;
        }

        return true;
    }
    // Function to handle form submission
    function submitForm() {
        if (validateForm()) {
            var message = 'Form submitted successfully!\n';
            message += 'Username: ' + usernameInput.value + '\n';
            message += 'Email: ' + emailInput.value + '\n';
            message += 'Password: ' + passwordInput.value;
            alert(message);
            // Redirect to the homepage
            window.location.href ="login.html";
        }
    }

    // Add event listener to form submission
    signUpButton.addEventListener("click", submitForm);
});
