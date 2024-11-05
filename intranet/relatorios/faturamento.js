function profits() {
    
    var date = document.getElementsByName("date")[0].value;
    var planeID = document.getElementsByName("planeID")[0].value;
    var from = document.getElementsByName("from")[0].value
    var to = document.getElementsByName("to")[0].value;
    var employee = document.getElementsByName("employee")[0].value;
    var salary = document.getElementsByName("salary")[0].value;


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

    var content = JSON.parse(localStorage.getItem("moneyFlow"));

    if(content) {

        var table = document.getElementById("content").getElementsByTagName("tbody")[0];
        
        for(i = 0; i < moneyFlow.flow.length; i++) {

            var newRow = table.insertRow();
            newRow.insertCell(0).innerHTML = moneyFlow.flow[i].date;
            newRow.insertCell(1).innerHTML = moneyFlow.flow[i].planeID;
            newRow.insertCell(2).innerHTML = moneyFlow.flow[i].from;
            newRow.insertCell(3).innerHTML = moneyFlow.flow[i].to;
            newRow.insertCell(4).innerHTML = moneyFlow.flow[i].employee;
            newRow.insertCell(5).innerHTML = moneyFlow.flow[i].salary;

        }

    }

}