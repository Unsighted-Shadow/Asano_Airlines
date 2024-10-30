function login() {

    var users = JSON.parse(localStorage.getItem("signups"));
    console.log(users);

    var cpf = document.getElementById("cpf").value
    var password = document.getElementById("password").value

    var index = users.signup.findIndex(user => user.cpf === cpf);
    if (index !== -1) {
        var pass_crypto = CryptoJS.SHA1(password).toString(CryptoJS.enc.Base64);
        if (users.signup[index].password === pass_crypto) {
            window.open("../intranet_homepages/cliente.html");
        }
    }

}