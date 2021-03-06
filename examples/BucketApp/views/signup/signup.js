(function($) {

    "use strict";

    m.app.view("signup").on("ready", function() {

       
        // form on submit event
        $("#btnSignUp").on("click", function() {
            var email = $('#txtEmailId').val();
            var password = $('#txtPassword').val();
	    var ref = new Firebase("https://burning-fire-1723.firebaseio.com");

ref.createUser({
  email: email,
  password: password
}, function(error) {
  if (error) {
    switch (error.code) {
      case "EMAIL_TAKEN":
        console.log("The new user account cannot be created because the email is already in use.");
        break;
      case "INVALID_EMAIL":
        console.log("The specified email is not a valid email.");
        break;
      default:
        console.log("Error creating user:", error);
    }
  } else {
    console.log("User account created successfully!");
    window.location.href = "";
  }
});
        });
    });

}(window.$));
