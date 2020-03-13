


const db = firebase.firestore();//สร้าตัวแปร object สำหรับอ้างอิง firestore
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;

firebase.auth().onAuthStateChanged(function(user) {
   
    if (user) {
        window.location.replace("Menu2.html"); // Redirecting to other page.
      
    } else {
      
    }
  });


// if ( username == "ploy" && password == "123456"){

// window.location.replace("Menu2.html"); // Redirecting to other page.

// }
// else{

// alert("ชื่อผู้ใช้และรหัสผ่านของคุณไม่ถูกต้อง");

// }
}