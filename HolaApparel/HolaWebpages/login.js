document.addEventListener("DOMContentLoaded", function() {
    // Get form and form elements
    var loginForm = document.getElementById("loginForm");
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");
    var loginButton = document.getElementById("loginButton");

    // Function to validate form
    function validateForm() {
        var username = usernameInput.value.trim();
        var password = passwordInput.value.trim();

        if (username === "" ||password === "" ) {
            alert("Please fill in all fields.");
            return false;
        }
        return true;
    }
    // Function to handle form submission
    function submitForm() {
        if (validateForm()) {
            var message = 'Form submitted successfully!\n';
            message += 'Username: ' + usernameInput.value + '\n';            message += 'Password: ' + passwordInput.value;
            alert(message);
            // Redirect to the homepage
            window.location.href ="homepage.html";
        }
    }

    // Add event listener to form submission
    loginButton.addEventListener("click", submitForm);
});
