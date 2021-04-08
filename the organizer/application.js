$(document).ready(function() {
    $("#signup").click(function() {
        $("#error-message").html(" ");
        const firstname = $("#firstname").val();
        const lastname = $("#lastname").val();
        const username = $("#username").val();
        const password = $("#password").val();

        if (firstname == "" || lastname == "" || username == "" || password == "") {
            alert("Please check inputs");
        }
        if (firstname.length != "" && lastname.length != "" && username.length != "" && password.length !== "") {
            $.ajax({
                type: "POST",
                url: "api/signup.php",
                data: { "firstname": firstname, "lastname": lastname, "username": username, "password": password },
                datatype: 'JSON',
                success: function(response) {
                    response = $.parseJSON(response);
                    if (response.status == 'error') {
                        $("#error-message").html(response.message);

                    } else if (response.status == 'success') {
                        $("#error-message").html(response.message);

                    }
                }
            })
        }
    })

    $("#login").click(function() {
        $("#error-message").html(" ");
        const username = $("#username1").val();
        const password = $("#password1").val();
        if (username == "" || password == "") {
            alert("Please check inputs");
        }
        if (username.length != "" && password.length !== "") {
            $.ajax({
                type: "POST",
                url: "api/signin.php",
                data: { "username": username, "password": password },
                datatype: 'JSON',
                success: function(response) {
                    response = $.parseJSON(response);
                    if (response.status == "success") {
                        window.location = "thecalendar/index.php";
                    } else if (response.status == "error") {
                        $("#error-message").html(response.message);


                    }
                }
            })
        }
    })

})