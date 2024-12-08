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
    let obj={
        Name:document.querySelector("#Fname").value,
        Secondname:document.querySelector("#Sname").value,
        EmailEntered:document.querySelector("#Email").value,
        Passowrd:document.querySelector("#Pass").value
    }
    localStorage.setItem("DATA",JSON.stringify(obj))
}
function Login(){
    let email=document.querySelector("#Remail").value
    let password=document.querySelector("#Rpass").value
      if(email===""){
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
    let d = JSON.parse(localStorage.getItem("DATA")) 
    let newemail = document.querySelector("#Remail").value
    let newpass = document.querySelector("#Rpass").value
    if(newemail==d.EmailEntered && newpass==d.Passowrd){
      window.location.href="./home.html"
    }
    else{
        window.alert("wrong password")
    }

    return false;
    
}
// HOME PAGE 

function zoomin(){
    document.querySelector("img").style.transform="scale(1.2)"
    document.querySelector("img").style.transition="transform 2000 easeInOut"
}
function zoomout(){
    document.querySelector("img").style.transform="scale(1)"
    document.querySelector("img").style.transition="transform 2000 easeInOut"
}
function addToCart(){
    window.location.href='./add_to_cart.html'
}

function changeImageById(myid){
    let selectedImg = document.querySelector("#largeimg");
    let hoveredImg = document.querySelector(`#${myid}`);
    selectedImg.src = hoveredImg.src;
}
function resetImage() {
    let selectedImg = document.querySelector("#largeimg");
    selectedImg.src = "./img/S1img1.png";
}