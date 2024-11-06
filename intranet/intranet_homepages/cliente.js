var session_user = JSON.parse(localStorage.getItem('session'));

document.getElementById("name").innerHTML = session_user.name;