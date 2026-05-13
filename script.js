$(document).ready(function(){

    $("#registerForm").submit(function(e){

        e.preventDefault();

        // Get input values
        let name = $("#name").val();
        let email = $("#email").val();
        let password = $("#password").val();

        // Create object
        let user = {
            name: name,
            email: email,
            password: password
        };

        // Get existing users
        let users = JSON.parse(localStorage.getItem("users")) || [];

        // Push new user
        users.push(user);

        // Store in localStorage
        localStorage.setItem("users", JSON.stringify(users));

        // AJAX POST Method
        $.ajax({

            url: "https://jsonplaceholder.typicode.com/posts",

            type: "POST",

            data: user,

            success: function(response){

                alert("Registration Successful");

                // Redirect to users page
                window.location.href = "users.html";
            }

        });

    });

});
