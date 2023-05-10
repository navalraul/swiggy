function login(event) {
    // alert("function called")
    event.preventDefault();

    var userEmail = document.getElementById("Swiggyuseremail").value;
    var userPassword = document.getElementById("Swiggyuserpassword").value;

    var Ls = JSON.parse(localStorage.getItem("SwiggyUsers"));

    var SwiggycurrentUser ;
    var flag = false;
    for (var i = 0; i < Ls.length; i++) {
        if (Ls[i].userEmail == userEmail && Ls[i].userPassword == userPassword) {
            flag = true;
            currentUser = Ls[i];
        }
    }
    if (flag == true) {
        // console.log(currentUser,"currentUser")
        localStorage.setItem("SwiggycurrentUser",JSON.stringify(SwiggycurrentUser))
        window.location.href = './Swiggyjs.html';
        alert("login successfull")
    }
    else {
        alert("credintials not matched")
    }

}