function payment(pay) {
    switch(pay) {
        case "card":
            document.getElementById("credit").style.display = "block";
            document.getElementById("paper").style.display = "none";
            document.getElementById("instant").style.display = "none";
            break;
        case "boleto":
            document.getElementById("paper").style.display = "block";
            document.getElementById("instant").style.display = "none";
            document.getElementById("credit").style.display = "none";
            break;
        case "pix":
            document.getElementById("instant").style.display = "block";
            document.getElementById("paper").style.display = "none";
            document.getElementById("credit").style.display = "none";
            break;
    }
}

function pagto(event) {

    event.preventDefault();

    var user = JSON.parse(localStorage.getItem("data_client"));
    var session = JSON.parse(localStorage.getItem("session"));

    var pagamento = {
        confirmacao,
        user: cpf,
    }

    if (pagamento && session) {
        window.open("../intranet/intranet_homepages/cliente.html", "_self");
    }

    window.open("../intranet/signin_up/intranet_login.html", "_self");
}

//tem que arrumar