function customer_service() {

    var id = crypto.randomUUID();
    var name = document.getElementsByName("name")[0].value;
    var email = document.getElementsByName("email")[0].value;
    var tel = document.getElementsByName("tel")[0].value;
    var select = document.getElementsByName("select")[0].value
    var sac = document.getElementsByName("sac")[0].value;

    console.log(`id: ${id} \nNome: ${name} \nEmail: ${email} \nTel: ${tel} \nSelect: ${select} \nSac: ${sac}`);

    var customer_care_service = {
        id: id,
        name: name,
        email: email,
        tel: tel,
        select: select,
        sac: sac
    };
    var customer_care = JSON.parse(localStorage.getItem("customer_care"));
    
    if (!customer_care) {
        var customer_care = {
            ticket: []
        };
    }
    
    customer_care.ticket.push(customer_care_service);
    
    localStorage.setItem("customer_care", JSON.stringify(customer_care));

}