(function($) {

    "use strict";

    m.app.view("userhome").on("ready", function() {

        // create the firebase object
        var firebaseRef = new Firebase('https://burning-fire-1723.firebaseio.com');

        

        // Logout click event
        $("#btnLogout").click(function() {
            firebaseRef.unauth();
            window.location.href = "";
        });
    });

}(window.$));
