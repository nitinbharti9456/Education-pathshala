document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // You can perform validation and registration process here
    // For simplicity, let's just display the entered values
    document.getElementById("registrationMessage").innerHTML = "Registration Successfull Plese Login..."
    document.getElementById("registrationForm").reset();
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