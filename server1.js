function login(event) {
    // alert("function called")
    event.preventDefault();

    var userEmail = document.getElementById("useremail").value;
    var userPassword = document.getElementById("userpassword").value;

    var Ls = JSON.parse(localStorage.getItem("Users"));

    var flag = false;
    for (var i = 0; i < Ls.length; i++) {
        if (Ls[i].userEmail == userEmail && Ls[i].userPassword == userPassword) {
            flag = true;
        }
    }
    if (flag == true) {
        alert("login successfull")
    }
    else {
        alert("credintials not matched")
    }

}