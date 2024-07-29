document.getElementById('subscribeBtn').addEventListener('click', function() {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const successMessage = document.getElementById('successMessage');
    const userEmail = document.getElementById('userEmail');
    const container = document.querySelector('.container');

    // Simple email validation
    if (emailInput.value === '' || !emailInput.value.includes('@')) {
    emailError.style.display = 'block';
    emailInput.classList.add('invalid');
    } else {
    emailError.style.display = 'none';
    emailInput.classList.remove('invalid');
    userEmail.textContent = emailInput.value;

      // Hide the previous content
    container.style.display = 'none';

      // Show the success message
    successMessage.classList.remove('hidden');
    successMessage.classList.add('visible');
    }
});

document.getElementById('dismissBtn').addEventListener('click', function() {
    const successMessage = document.getElementById('successMessage');
    successMessage.classList.remove('visible');
    successMessage.classList.add('hidden');

    const container = document.querySelector('.container');
    container.style.display = 'flex';
});

const button = document.getElementById('subscribeBtn');
const mainImage = document.getElementById('mainImage');

button.addEventListener('mouseover', function() {
    mainImage.style.border = 'none';
});

button.addEventListener('mouseout', function() {
    mainImage.style.border = '0'; 
});
