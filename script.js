const form = document.querySelector('#registerForm');
const passInputFields = document.querySelectorAll('.error');

//Builds error message element.
const passwordError = document.createElement('p');
const passwordErrorMessage = document.createTextNode('* Passwords do not match');
passwordError.appendChild(passwordErrorMessage);

form.addEventListener("submit", function(e) {
    e.preventDefault() //Prevents window reloading

    let formData = new FormData(this);
    let pass = formData.get("user_pass");
    let confirmPass = formData.get("confirm_pass");

    if(pass !== confirmPass) {
        let errorElement = document.getElementById('passField');
        errorElement.appendChild(passwordError);
        errorElement.style.color = 'red';
        errorElement.style.fontSize = '12px';
        passInputFields.forEach(passInputField => {
            passInputField.style.border = '1px solid red'
        });
    }
s});