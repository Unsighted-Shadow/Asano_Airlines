function signup() {

    var signups = JSON.parse(localStorage.getItem("signups"));
    
    if (!signups) {
        var signups = {
            signup: []
        };
    }

    var name_user = document.getElementsByName("name_user")[0].value
    var credential = document.getElementsByName("cpf")[0].value
    var birthday = document.getElementsByName("birthday")[0].value
    var email_user = document.getElementsByName("email_user")[0].value
    var password = document.getElementsByName("password")[0].value
    var confirm_password = document.getElementsByName("password_confirm")[0].value

    var errors = 0;

    if (!name_user) errors++;
    if (!credential) errors++;
    if (!birthday) errors++;
    if (!email_user) errors++;
    if (!password) errors++;
    if (!confirm_password) errors++;
    if (password !== confirm_password) errors++;

    if (errors === 0) {
        var pass_crypto = CryptoJS.SHA1(password).toString(CryptoJS.enc.Base64);

        var user = {
            name_user: name_user,
            credential: credential,
            birthday: birthday,
            email_user: email_user,
            password: pass_crypto,
        };

        signups.signup.push(user);
        localStorage.setItem("signups", JSON.stringify(signups));
        console.log(signups);
    }

}

