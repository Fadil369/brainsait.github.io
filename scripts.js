document.addEventListener('DOMContentLoaded', () => {
    // Basic form validation for the contact form
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            alert('Please fill in all fields before submitting.');
            event.preventDefault(); // Prevent form submission
        }
    });
});
