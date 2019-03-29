var signupForm = $("#signup-form");
signupForm.on("submit", function (event) {
    event.preventDefault();
    //1. get user input
    var password = $("#signup-password")
        .val()
        .trim();
    var email = $("#signup-email")
        .val()
        .trim();
    //sign up user
    auth.createUserWithEmailAndPassword(email, password).then(function(cred) {
        console.log(cred.user);
        const modal = $("#modal-signup");
        M.Modal.getInstance(modal).close();
        signupForm[0].reset();

    })
});
