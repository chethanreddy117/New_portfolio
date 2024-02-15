var typed=new Typed(".text",{
    strings : ["Front-end Developer","Web Designer","UI/UX Designer"],
    typeSpeed : 100,
    backSpeed : 100,
    backDelay : 1000,
    loop:true
});

 
// emailjs.init("rchethanreddy2001@gmail.com"); // Replace YOUR_USER_ID with your actual EmailJS user ID

// // Function to send the email
// function sendEmail() {
//     event.preventDefault(); // Prevent the default form submission
//     const form = document.getElementById("contact-form");
//     emailjs.sendForm("service_294qt8v", "template_mhybeeu", form)
//         .then(function(response) {
//             console.log("Email sent successfully:", response);
//             alert("Your message has been sent successfully!");
//             form.reset(); // Clear the form fields after successful submission
//         }, function(error) {
//             console.error("Email sending failed:", error);
//             alert("Sorry, something went wrong. Please try again later.");
//         });
// }

// // Attach the sendEmail function to the form submission event
// document.getElementById("contact-form").addEventListener("submit", sendEmail);
let fullname=document.getElementById("name");
let email_id=document.getElementById("email");
let message_txt=document.getElementById("message");
let err_txt=document.getElementById("error_style")
let form=document.querySelector("form");
function sendemail(){
    let body_msg=`Full Name: ${fullname.value}<br> Email: ${email_id.value}<br> Message: ${message_txt.value}`;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "rchethanreddy2001@gmail.com",
        Password : "844F0F7750236F287421684A79000E31F473",
        To : 'rchethanreddy2001@gmail.com',
        From : "rchethanreddy2001@gmail.com",
        Subject : "portfolio contact",
        Body : body_msg
    }).then(
        function(message){
            if(message=="OK"){
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully!",
                    icon: "success"
                  });
            }
            fullname.value="";
            email_id.value="";
            message_txt.value="";
        }
    );
}
function check_inputs(){
    let items=document.querySelectorAll(".contact_style");
    for(let item of items){
        if(item.value==""){
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }
        
        item.addEventListener("keyup",() => {
            if(item.value!=""){
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else{
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }
}
form.addEventListener("submit",function(e){
    e.preventDefault();
    check_inputs();
    if(!fullname.classList.contains("error") && !email_id.classList.contains("error") && !message_txt.classList.contains("error"))
    {
        sendemail();
    }
});


 
