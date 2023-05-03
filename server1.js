function login(event) {
    // alert("function called")
    event.preventDefault();

    var userEmail = document.getElementById("useremail").value;
    var userPassword = document.getElementById("userpassword").value;

    var Ls = JSON.parse(localStorage.getItem("Users"));

    var currentUser ;
    var flag = false;
    for (var i = 0; i < Ls.length; i++) {
        if (Ls[i].userEmail == userEmail && Ls[i].userPassword == userPassword) {
            flag = true;
            currentUser = Ls[i];
        }
    }
    if (flag == true) {
        // console.log(currentUser,"currentUser")
        localStorage.setItem("currentUser",JSON.stringify(currentUser))
        window.location.href = './swiggy.html';
        alert("login successfull")
    }
    else {
        alert("credintials not matched")
    }

}