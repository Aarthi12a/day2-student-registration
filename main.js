document.addEventListener('DOMContentLoaded', function() {
    const artForm = document.getElementById('artForm');
    const popup = document.getElementById('popup-message');
    const popupText = document.getElementById('popup-text');
    let popupTimer;

    function showMessage(message, type) {
        clearTimeout(popupTimer);

        popupText.textContent = message;
        popup.className = type;
        popup.classList.add('show');

        popupTimer = setTimeout(() => {
            popup.classList.remove('show');
        }, 3000);
    }

    artForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const emailInput = document.getElementById('email');
        const email = emailInput.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailRegex.test(email)) {
            showMessage('Registration Successful!', 'success');
            artForm.reset();
        } else {
            showMessage('Please enter a valid email address.', 'error');
            emailInput.focus();
        }
    });
});