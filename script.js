// Get the form
const form = document.getElementById("registrationForm");

// Get the message area
const message = document.getElementById("message");

// Listen for form submission
form.addEventListener("submit", function(event) {

    // Stop the page from refreshing
    event.preventDefault();

    // Get the values entered by the user
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Email validation pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if any field is empty
    if (name === "" || email === "" || password === "") {

        message.textContent = "Please fill in all fields.";
        message.style.color = "#ff4f8b";

        return;
    }

    // Check if email is valid
    if (!emailPattern.test(email)) {

        message.textContent = "Please enter a valid email address.";
        message.style.color = "#ff4f8b";

        return;
    }

    // Check password length
    if (password.length < 8) {

        message.textContent = "Password must be at least 8 characters long.";
        message.style.color = "#ff4f8b";

        return;
    }

    // Everything is correct
    message.textContent = "Registration successful! ✨";
    message.style.color = "#7CFF8A";

});