var database = firebase.database();
var signUp = document.getElementById("sign-up-btn");

signUp.addEventListener('click',(e) => {
    e.preventDefault();
    var name = document.getElementById("sign-up").value;
    var userId = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var passwordConfirm = document.getElementById("password-confirm").value;
    
    if(!name || !userId || !password || !passwordConfirm){
        alert("Please fill in all the fields")
    }
    else{
        var regex = /\W/g;
        var result = userId.match(regex);
    if(result){
        document.getElementById("error-message").innerHTML = ("Your Username cannot contain special characters");
    }
    if(!result){
   if(password === passwordConfirm){
    window.localStorage.setItem("step_fit_user_name_2277",userId);
    database.ref("/Users/"+userId).set({
        personal_name: name,
        password: password
    });
    document.getElementById("textbox").innerHTML = ("Please Wait While We Redirect You");

    function redirect(){
        location.replace("homepage.html");
    }
    setTimeout(redirect, 3000);
}
else{
        document.getElementById("error").innerHTML = ("Your Passwords Do not Match");
}
    }
}
});







