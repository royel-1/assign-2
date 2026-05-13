// Get users from localStorage
let users = JSON.parse(localStorage.getItem("users")) || [];

let output = "";

// Loop through users
users.forEach(function(user){

    output += `
        <tr>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.password}</td>
        </tr>
    `;
});

// Display data
document.getElementById("userdata").innerHTML = output;
