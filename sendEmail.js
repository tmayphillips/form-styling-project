// Your code to validate your form and send the email will go here!
// All Fields are required for submission
// Make sure the Password and Confirm Password Match

// Let the user know if the passwords to not match
// // Also let the user know when the email has been successfully sent

const SERVICE_ID = 'service_r0b5wqi'
const TEMPLATE_ID = 'template_mzog1g8'
// const USER_ID = 'user_i7gGxnGkYMcFUFT4IdYm4'

let form = document.getElementById('contact-form')

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let password = document.getElementById('password').value
    let passwordConfirmation = document.getElementById('password2').value
    let passwordError = document.getElementById('passwordError')
    let formSubmitted = document.getElementById('formSubmitted')
    const btn = document.getElementById('submitBtn');
    
    if (password === passwordConfirmation) {
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, this)
            .then(() => {
            btn.value = 'Send Email';
            }, (err) => {
            btn.value = 'Send Email';
            alert(JSON.stringify(err));
        })
        formSubmitted.style.display = 'block'
        passwordError.style.display = 'none'
        form.reset()
        setTimeout(() => formSubmitted.style.display = 'none',3000)
    } else {
        passwordError.style.display = 'block'
    }
})