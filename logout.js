// Get username from URL query parameters
var urlParams = new URLSearchParams(window.location.search);
var username = urlParams.get('username');

// Display username
document.getElementById("username").innerText = username;

// Logout button functionality
document.getElementById("logoutBtn").addEventListener("click", function() {
  // Redirect back to login page
  window.location.href = "login.html";
});
