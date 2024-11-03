function user_login(event) {
    event.preventDefault();

    var users = JSON.parse(localStorage.getItem("signups"));

    var category = document.getElementById("category").value;
    var cpf = document.getElementById("cpf").value;
    var password = document.getElementById("password").value;

    var index = users.signup.findIndex(user => user.credential === cpf);

    cleanFields();

    if (index !== -1) {
        var pass_crypto = CryptoJS.SHA1(password).toString(CryptoJS.enc.Base64);
        if (users.signup[index].password === pass_crypto) {
            switch (category) {
                case "pax":
                    window.open("../intranet_homepages/cliente.html", "_self");
                    break;
                case "employee":
                case "provider":
                    window.open("../intranet_homepages/pagina_inicial.html", "_self");
                    break;
                default:
                    window.open("intranet_login.html", "_self")
            }
            
            
        }
    }


}

function cleanFields() {
    document.getElementById("cpf").value = "";
    document.getElementById("password").value = "";
}