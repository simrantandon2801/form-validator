const form = document.getElementById('form');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

function validateForm() {
    //Using constraint API
    isValid = form.checkValidity();
    //Style main message for an error
     if (!isValid) {
        message.textContent = 'Please fill out all fields';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;
     }
     //Check to see if password match
     if (password1.value === password2.value){
        passwordsMatch = true;
        password1.style.bordercolor = 'green';
        password2.style.bordercolor = 'green';    
     }else {
        passwordsMatch = false;
        message.textContent = 'Make sure passwords match';
        message.style.color =  'red';
        messageContainer.style.borderColor = 'red';
        password1.style.borderColor = 'red';
        password2.style.borderColor = 'red';
        return;  
     }  
      // If form is valid and passwords match
      if(isValid && passwordsMatch){
        message.textContent = 'Successfully Registered!';
        message.style.color =  'green';
        messageContainer.style.borderColor = 'green';
      }
    
}   
function storeFormData(){
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    };
    //Do something with user data
    console.log(user);
}

function processFormData(e) {
    e.preventDefault();
    //Validate form
    validateForm();
    //Submit data if valid
    if (isValid && passwordsMatch){
        storeFormData(); 
    }
}

//Event Listener
form.addEventListener('submit',processFormData);