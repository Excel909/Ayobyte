let Username = document.getElementById("name");
let number = document.getElementById("number");
let message = document.getElementById("message");
let feedback = document.getElementById("user_feedback");

function checker() {
    let user_val = Username.value.length;
    let number_val = number.value.length;
    let message_val = message.value.length;
    let isValid = true; // Variable to track validation status

    if (user_val <= 3) {
        feedback.textContent = "Name must not be less than 4 letters";
        isValid = false; // Set isValid to false if validation fails
    } 
    if (number_val < 10) {
        feedback.textContent = "Phone number must not be less than 10 digits";
        isValid = false; // Set isValid to false if validation fails
    } 
    if (message_val <= 5) { // Corrected condition for message length
        feedback.textContent = "Message must be longer than 5 letters";
        isValid = false; // Set isValid to false if validation fails
    } 
    
    if (isValid) {
        feedback.textContent = ""; // Clear feedback if all validations pass
    }

    return isValid; // Return true if all validations pass, otherwise false
}


// email object
let form = document.getElementById("email-form");


// Prevent form submission
form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    if(checker()){
        sendMail()
    }
});

function sendMail() {
    let email = {
        name: document.getElementById('name').value,
        tel: document.getElementById('number').value,
        message: document.getElementById('message').value 
    };

    const serviceID = "service_w6dtfvh";
    const templateID = "template_wppnlgi";

    emailjs.send(serviceID,templateID,email)
    .then( res => {
        alert("Message sent successfully");
        // Clear input fields after sending mail
        document.getElementById('name').value = "";
        document.getElementById('number').value = "";
        document.getElementById('message').value = "";
    }).catch(err => console.log(err));
}
