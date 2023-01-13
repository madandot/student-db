function validate() {
  var username = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  console.log(username, password);
  const users = [
    {
      id: 1,
      userName: "pavan",
      email: "pk023029@gmail.com",
      password: "123456",
    },
    {
      id: 2,
      userName: "Madan",
      email: "reddymadan0512@gmail.com",
      password: "Madan@0512",
    },
  ];

  const currentUser = users.filter((user) => user.userName === username);
  console.log(currentUser);

  if (currentUser.length > 0) {
    if (currentUser[0]?.userName === username && currentUser[0]?.password === password) {
      alert("login successfully");
    } else {
      alert("login details are not correct");
    }
  } else {
    alert("login failed");
  }

  //   if (username === "reddymadan0512@gmail.com" && password === "Madan@0512") {
  //     alert("login successfully");
  //     return;
  //   } else {
  //     alert("login failed");
  //   }
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
