const email = document.getElementById("email-user")
const password = document.getElementById("password-user")

function SeePassword(){
    if(password.type==="text"){
        icon.name="eye-off-outline"
        password.type="password"
    }else {
        icon.name="eye-outline"
        password.type="text"
    }
}