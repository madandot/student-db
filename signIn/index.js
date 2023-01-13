function validate() {
  var username = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (username == "nagendrashiva258@gmail.com" && password == "Nagendra@123") {
    alert("login successfully");
    return false;
  } else {
    alert("login failed");
  }
}
function toggle() {
  var x = document.getElementById("password");
  var y = document.getElementById("eyes");
  var z = document.getElementById("eye");
  if (x.type === "password") {
    x.type = "text";
    y.style.display = "block";
    z.style.display = "none";
  } else {
    x.type = "password";
    y.style.display = "none";
    z.style.display = "block";
  }
}
