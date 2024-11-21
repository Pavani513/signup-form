const loginBtn=document.getElementById("btn2")
loginBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    let nameStorage=localStorage.getItem("name")
    let pswdStorage=localStorage.getItem("pswd")
    let inputUserName=document.getElementById("userName").value
    let inputUserPswd=document.getElementById("userPswd").value 
    if(nameStorage==inputUserName && pswdStorage==inputUserPswd){
        alert("Login successfully")
        setTimeout(()=>{
            window.location.href="home.html"
        },5000)
    }else{
        alert("wrong credentials")
    }
})