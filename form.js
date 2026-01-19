alert("fill the form correctly");
const form = document.getElementById('registrationForm');
const msg = document.getElementById('msg');
// IMPORTANT: Paste your NEW deployment URL here
const scriptURL = 'https://script.google.com/macros/s/AKfycbwW2P9duYR7GK2reTJZgBELZrwWoqyR_Cj3gFV6maak9_7PWmEpI6905igal0_gg7TGvA/exec';

form.addEventListener('submit',(e)=> {
    e.preventDefault();

    // 1. Password Validation
    const password = document.getElementById('password').value;
    const confirm = document.getElementById('confirm_password').value;

    if (password !== confirm) {
        alert("Passwords do not match!");
        return;
    }

    // 2. Checkbox Validation
    const courses = document.querySelectorAll('input[name="course[]"]:checked');
    if (courses.length === 0) {
        alert("Please select at least one course.");
        return;
    }

    // 3. Submit Form
    msg.innerHTML = "Submitting...";
    msg.style.color = "blue";

    fetch(scriptURL, { 
        method: 'POST', 
        body: new FormData(form)
    })
    .then(response => {
        msg.innerHTML = "Form submitted successfully!";
        msg.style.color = "green";
        form.reset();
    })
    .catch(error => {
        msg.innerHTML = "Submission failed! Check console.";
    msg.style.color ="red";
    console.error('Error!',error.message);
    });
});