function login(){
    var email = document.getElementById('email');
    var password = document.getElementById('password');

    if(email.value == "bikram@gmail.com" && password.value == "bikram@1234"){
        window.location.href = "dashboard.html";
    }else{
        document.getElementById('email-error').textContent = "Invalid email";
        document.getElementById('password-error').textContent = "Invalid password";
    }
}