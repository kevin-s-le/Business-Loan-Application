// Event listener for form submission, checks for submit button
document.getElementById('loanForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

// Function to validate the form inputs
function validateForm() {
    let isValid = true;

    // Name validation
    const name = document.getElementById('name').value;
    if (name.trim() === '') {
        alert('Please enter a valid name.');
        isValid = false;
    }

    // Address validation
    const address = document.getElementById('address').value;
    if (address.trim() === '') {
        alert('Please enter a valid address.');
        isValid = false;
    }

    // Phone validation
    const phone = document.getElementById('phone').value;
    if (!/^\d{10}$/.test(phone)) {
        alert('Please enter a valid 9-digit phone number.');
        isValid = false;
    }

    // Email validation
    const email = document.getElementById('email').value;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Please enter a valid email address.');
        isValid = false;
    }

    // Business Name validation
    const businessName = document.getElementById('businessName').value;
    if (businessName.trim() === '') {
        alert('Please enter a valid business name.');
        isValid = false;
    }

    // Loan Amount validation
    const loanAmount = document.getElementById('loanAmount').value;
    if (loanAmount <= 0) {
        alert('Please enter a valid loan amount.');
        isValid = false;
    }

    // If all the above fields are valid, display a success message with an alert, then reset the form
    if (isValid) {
        alert('Your business loan application has been submitted successfully! Please wait for our response.');
        document.getElementById('loanForm').reset();
    }
}