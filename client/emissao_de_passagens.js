function sendToPay(event) {

    event.preventDefault;

    var name = document.getElementById("pax").value
    var cpf = document.getElementById("cpf").value
    var birthday = document.getElementById("birthday").value

    var data_client = {
        name,
        cpf,
        birthday,
    }

    localStorage.setItem("data_client", JSON.stringify(data_client));
    window.open("./pagamento.html", "_self");
}