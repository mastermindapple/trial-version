var database = firebase.database();
var username = localStorage.getItem("step_fit_user_name_2277");
var name = "";
 async function getData(){
    database.ref("/Users/"+username).child("personal_name").on("value",(data)=>{
      name = data.val();
      });
      
}

function display(){
 document.getElementById("name-para").innerHTML = ("Hi, "+name);
}
setTimeout(display,3000);
getData();