let submitBtn=document.getElementById("btn")
let name=document.getElementById("userName")
let email=document.getElementById("userEmail")
let pswd=document.getElementById("userPswd")
submitBtn.addEventListener("click",(e)=>{
    if(name.value!="" && email.value!="" && pswd.value!=""){
        e.preventDefault()
        const nameValue=name.value
        const emailValue=email.value
        const pswdValue=pswd.value
        console.log(name.value)  
        localStorage.setItem("name",nameValue)   
        localStorage.setItem("email",emailValue)
        localStorage.setItem("pswd",pswdValue)
        alert("Signup done successfully!!")
        setTimeout(()=>{
         window.location.href="login.html"
        },3000)
    }else{
        alert("Please..!! fill up the fields")
    }
})
    
      

// const loginBtn=document.getElementById("btn2")
// loginBtn.addEventListener("click",(e)=>{
//     e.preventDefault()
//     let nameStorage=localStorage.getItem("name")
//     let pswdStorage=localStorage.getItem("pswd")
//     let inputUserName=document.getElementById("userName").value
//     let inputUserPswd=document.getElementById("userPswd").value 
//     if(nameStorage==inputUserName && pswdStorage==inputUserPswd){
//         alert("Login successfully")
//         setTimeout(()=>{
//             window.location.href="home.html"
//         },5000)
//     }else{
//         alert("wrong credentials")
//     }
// })
