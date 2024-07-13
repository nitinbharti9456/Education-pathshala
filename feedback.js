document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var feedback = document.getElementById("feedback").value;

    // You can perform validation and submit feedback process here
    // For simplicity, let's just display the entered values as feedback message
    var feedbackMessage = "Thank you for your feedback...." 
    document.getElementById("feedbackMessage").innerHTML = feedbackMessage;

    // Optionally, you can clear the form fields after submission
    document.getElementById("feedbackForm").reset();
});
