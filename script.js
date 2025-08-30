function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const consent = document.querySelector('input[type="checkbox"]');
    const status = document.getElementById('form-status');

    // Clear previous status message
   status.textContent = "";

   // Validate required fields
    if (name === "" || email === "" || message === "") {
        status.textContent = "Please fill out all fields.";
        status.style.color = "red";
        return false;
    }
   // Validate email format
   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (!emailPattern.test(email)) {
    status.textContent = "Please enter a valid email address.";
    status.style.color = "red";
    return false;
  }

  // Validate consent checkbox
  if (!consent.checked) {
    status.textContent = "Please confirm your consent to proceed.";
    status.style.color = "red";
    return false;
  }

  // Success message
  status.textContent = "Message sent successfully!";
  status.style.color = "green";
  return true;
}
 