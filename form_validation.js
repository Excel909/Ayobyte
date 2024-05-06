let Username = document.getElementById("name");
let number = document.getElementById("number");
let message = document.getElementById("message");
let feedback = document.getElementById("user_feedback");


let button = document.getElementById("sender");

button.addEventListener("click", checker,false);

export function checker(){
        let user_val = Username.value.length;
    
        let number_val = number.value.length;
    
        let message_val = message.value.length;
    
        if(user_val <= 3){
            feedback.textContent = "Name must not be less than 4 letters";
            return;
        } else if(number_val < 10){
            feedback.textContent = "Phone number must not be less than 10 digits";
            return;
        } else if(message_val <= 5){
            feedback.textContent = "Message must be longer than 5 letters";
            return;
        } else{
            feedback.textContent = "";
        }
}
