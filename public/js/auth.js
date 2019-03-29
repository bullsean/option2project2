//listen for auth status changes
auth.onAuthStateChanged(function(user) {
    // console.log(user);
    if(user) {
        console.log("User logged in: ", user)
    } else {
        console.log("User logged out");
    };
});


var signupForm = $("#signup-form");
signupForm.on("submit", function(event) {
    event.preventDefault();
    //1. get user input
    var password = $("#signup-password")
        .val()
        .trim();
    var email = $("#signup-email")
        .val()
        .trim();
    //sign up user
    auth.createUserWithEmailAndPassword(email, password).then(function (cred) {
        const modal = $("#modal-signup");
        M.Modal.getInstance(modal).close();
        signupForm[0].reset();
    });
});

//logout
var logout = $("#logout");
logout.on("click", function(event) {
    event.preventDefault();
    auth.signOut().then(function () {
    });
});

//login
var loginForm = $("#login-form");
loginForm.on("submit", function(event) {
    event.preventDefault();
    //get user info
    var password = $("#login-password")
        .val()
        .trim();
    var email = $("#login-email")
        .val()
        .trim();
    auth.signInWithEmailAndPassword(email, password).then(function(cred) {
        //close the login modal and reset the form
        const modal = $("#modal-login");
        M.Modal.getInstance(modal).close();
        loginForm[0].reset();
    });
});

