
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;




if ( username == "ploy" && password == "123456"){

window.location.replace("Menu2.html"); // Redirecting to other page.

}
else{

alert("ชื่อผู้ใช้และรหัสผ่านของคุณไม่ถูกต้อง");


}
}