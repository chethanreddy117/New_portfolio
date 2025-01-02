var typed=new Typed(".text",{
    strings : ["Full stack developer","Python developer","Front-end Developer","Web Designer"],
    typeSpeed : 100,
    backSpeed : 100,
    backDelay : 1000,
    loop:true
});

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


 
