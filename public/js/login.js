$(document).ready(function() {
    $("#loginForm").on("submit", function(event) {
        loginInfo = {
            userName: $("#login").val().trim(),
            userPassword: $("#password").val().trim()
        };

        console.log("whaddup", loginInfo)
        event.preventDefault();
        $.ajax("/login", {
            type: "POST",
            data: loginInfo
        })
    })
})