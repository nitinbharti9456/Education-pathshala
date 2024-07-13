document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // You might want to validate the username and password against a database or backend system
    // For simplicity, I'm hardcoding a username and password here
    var validUsername = "Nitin Bharti";
    var validPassword = "123";

    // Check if username and password are correct
    if (username === validUsername && password === validPassword) {
        // Successful login
        document.getElementById("loginMessage").textContent = "Login successful!";
        // Here you can redirect the user to another page or perform other actions
        window.location.href = "pg1.html?username=" + username;
    } else {
        // Failed login
        document.getElementById("loginMessage").textContent = "Invalid username or password. Please try again.";
    }
});
function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var checkbox = document.getElementById("showPasswordCheckbox");

    if (checkbox.checked) {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}