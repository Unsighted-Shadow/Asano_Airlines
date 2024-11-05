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