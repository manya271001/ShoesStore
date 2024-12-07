//DROP DOWN FOR ACCOUNT
function account(){
    document.querySelector("#dropdown").style.display="block";
}
document.addEventListener('click', function (event) {
    const dropdown = document.getElementById('dropdown');
    const menu = document.getElementById('menu');
    if (!dropdown.contains(event.target)) {
        dropdown.style.display = 'none'; 
    }
});
function signUp(){
    let name=document.querySelector("#Fname").value
    let surname=document.querySelector("#Sname").value
    let email=document.querySelector("#Email").value
    let password=document.querySelector("#Pass").value
    if(name===""){
        document.querySelector("#errorfname").style.border="2px solid red";
        document.querySelector("#errorfname").innerHTML="Enter Name"
        document.querySelector("#errorfname").style.color="red"
        return false;
    }
    else if(surname===""){
        document.querySelector("#errorsname").style.border="2px solid red";
        document.querySelector("#errorsname").innerHTML="Enter Second Name"
        document.querySelector("#errorsname").style.color="red"
        return false;
    }
    else if(email===""){
     document.querySelector("#erroremail").innerHTML ="enter email please"
     let selectedemail = document.querySelector("#erroremail")
     selectedemail.style.borderColor="red"
     selectedemail.style.outlineColor="red"
     selectedemail.style.Color="red"

     return false;
    }
    else if(!(email.includes('@')&& email.includes('.com'))){
        document.querySelector("#erroremail").innerHTML="please enter valid email"
         let selectedemail = document.querySelector("#erroremail")
     selectedemail.style.borderColor="red"
     selectedemail.style.Color="red"
     return false;
    }
    else if(password ===""){
        document.querySelector("#errorpass").innerHTML="enter passowrd"
        let selectedpass = document.querySelector("#errorpass");
        selectedpass.style.borderColor ="red"
        selectedpass.style.outlineColor = "red"
        return false;
    }
    else if(!(password.match(/[1234567890]/)
    && 
    password.match(/[!@#$%^&*()-+]/)
    && 
    password.match(/[qwertyuiopasdfghjklzxcvbnm]/)
    && 
    password.match(/[QWERTYUIOPASDFGHJKLZXCVBNM]/) )){
         document.querySelector("#errorpass").innerHTML="enter STRONG password"
        let selectedpass = document.querySelector("#errorpass");
        selectedpass.style.borderColor ="red";
        selectedpass.style.outlineColor = "red";
        return false;
    }
    return false;
}