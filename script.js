document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('mail').value;
    const message = document.getElementById('message').value;
    const contact = document.getElementById('contact').value;
    const errorMessage = document.getElementById('error-message');

    errorMessage.textContent = '';

    let isValid = true;

    if (!validateUsername(username)) {
        errorMessage.textContent += 'Username must be 3-15 characters long and contain only letters and numbers.\n';
        isValid = false;
    }

    if (!validateEmail(email)) {
        errorMessage.textContent += 'Please enter a valid email address.\n';
        isValid = false;
    }

    if (!validateContact(contact)) {
        errorMessage.textContent += 'Contact number must be exactly 10 digits.\n';
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
    }
});

function validateUsername(username) {
    const re = /^[a-zA-Z0-9]{3,15}$/;
    return re.test(username);
}

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}


function validateContact(contact) {
    const re = /^\d{10}$/;
    return re.test(contact);
}
