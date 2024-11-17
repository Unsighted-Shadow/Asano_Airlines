var session_user = JSON.parse(localStorage.getItem('session'));

document.getElementById("name").innerHTML = session_user.name;

var pagto = JSON.parse(localStorage.getItem("data_client"));
var confirm = document.getElementById("pagamento").innerHTML = "<p>Pagamento confirmado! Sua passagem será enviada por e-mail em breve.</p>";


function logout() {
    localStorage.removeItem("session");
    window.open("../../Homepage/index.html", "_self");
}

