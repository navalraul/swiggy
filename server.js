function register(event) {
    event.preventDefault();
    // alert("function called")
    var name = document.getElementById("Swiggyusername").value
    // console.log(name, "name here")
    var email = document.getElementById("Swiggyuseremail").value
    // console.log(email);
    var password = document.getElementById("Swiggyuserpassword").value
    // console.log(password)
    var confirmpassword = document.getElementById("Swiggyuserconfirmpassword").value
    // console.log(confirmpassword);

    if (name && email && password && confirmpassword) {
        if (password.length >= 8 && confirmpassword >= 8) {

            if (password == confirmpassword) {

                var Ls = JSON.parse(localStorage.getItem("SwiggyUsers")) || []
                var flag = false;
                for (var i = 0; i < Ls.length; i++) {
                    if (Ls[i].userEmail == email) {
                        flag = true;
                    }
                }
                if (!flag) {
                    var userdata = {
                        userName: name,
                        userEmail: email,
                        userPassword: password,
                        userConfirmPassword: confirmpassword
                    }
                    Ls.push(userdata);
                    localStorage.setItem("SwiggyUsers", JSON.stringify(Ls))
                    alert("Registration Successful");
                    window.location.href = `./SwiggySignup.html`;
                    document.getElementById("Swiggyusername").value = ""
                    document.getElementById("Swiggyuseremail").value = ""
                    document.getElementById("Swiggyuserpassword").value = ""
                    document.getElementById("Swiggyuserconfirmpassword").value = ""
                }
                else {
                    alert("Email aleready exist")
                }
            }
            else {
                console.log("password not match");
            }

        } else {
            console.log("password should  include 8 or more characters");
        }
    } else {
        console.log("please fill all fields");
    }

}