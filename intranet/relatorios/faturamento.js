function profits() {
    
    var date = document.getElementsByName("date")[0].value;
    var planeID = document.getElementsByName("planeID")[0].value;
    var from = document.getElementsByName("from")[0].value
    var to = document.getElementsByName("to")[0].value;
    var employee = document.getElementsByName("employee")[0].value;
    var salary = document.getElementsByName("salary")[0].value;

    var row = `<tr>
                    <td>${date}</td>
                    <td>${planeID}</td>
                    <td>${from}</td>
                    <td>${to}</td>    
                    <td>${employee}</td>
                    <td>"R$"${salary}</td>    
                </tr>`;

    var content = document.getElementById("content");
    content.innerHTML += row;

    var table = {
        date: date,
        planeID: planeID,
        from: from,
        to: to,
        employee: employee,
        salary: salary
    }

    var moneyFlow = JSON.parse(localStorage.getItem("moneyFlow"));

    if (!moneyFlow) {
        var moneyFlow = {
            flow: []
        };
    }

    moneyFlow.flow.push(table);

    localStorage.setItem("moneyFlow", JSON.stringify(moneyFlow));

}

function showTable() {

    var money = JSON.parse(localStorage.getItem("moneyFloe"));

}