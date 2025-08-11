document.addEventListener('DOMContentLoaded', function() {
    const artForm = document.getElementById('artForm');
    //heellooooo
    artForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const emailInput = document.getElementById('email');
        const email = emailInput.value;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailRegex.test(email)) {
            alert('Registration Successful');
            artForm.reset(); 
        } else {
            alert('Please enter a valid email address.');
            emailInput.focus();
        }
    });
});