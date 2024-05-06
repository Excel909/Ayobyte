let formm = document.getElementById("email-form");

formm.addEventListener('submit', function(event) {
    event.preventDefault();
});

let submit_btn = document.getElementById("sender");

submit_btn.addEventListener('click', sendMail, false);

// emailjs.init(options);

//email object
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
        document.getElementById('name').value = "";
        document.getElementById('number').value = "";
        document.getElementById('message').value = " ";
    }).catch(err=>console.log(err))
};