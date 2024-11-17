var session_user = JSON.parse(localStorage.getItem('session'));

document.getElementById("name").innerHTML = session_user.name;

function logout() {
    localStorage.removeItem("session");
    window.open("../../Homepage/index.html", "_self");
}

//pronta