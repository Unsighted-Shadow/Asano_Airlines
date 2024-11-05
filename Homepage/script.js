function feedback() {

    var id = crypto.randomUUID();
    var name = document.getElementsByName("name")[0].value;
    var email = document.getElementsByName("email")[0].value;
    var tel = document.getElementsByName("tel")[0].value;
    var feedback = document.getElementsByName("feedback")[0].value;

    var opinions = {
        id: id,
        name: name,
        email: email,
        tel: tel,
        feedback: feedback
    };
    var feedbackData = JSON.parse(localStorage.getItem("feedbackData"));
    
    if (!feedbackData) {
        var feedbackData = {
            feedbacks: []
        };
    }
    
    feedbackData.feedbacks.push(opinions);
    
    localStorage.setItem("feedbackData", JSON.stringify(feedbackData));
    
    var tks = document.getElementById("thx");
    tks.removeAttribute("hidden");
    
    
    for(let i = 0; i < document.getElementsByClassName("feedback").length; i++) {
		
		document.getElementsByClassName("feedback")[i].value = "";

    }

}

function popula_destinos_domesticos() {
    var table_body = document.querySelector("#destinos_domesticos tbody");

    destinos
        .filter(destino => destino.pais_destino === 'Brasil')
        .forEach(destino => {
            var table_row = document.createElement('tr');
            table_row.innerHTML = `<td>${destino.origem}</td><td>✈</td><td>${destino.destino}</td><td>${destino.preco}</td><td><a href="emissao_de_passagem.html?id=${destino.id}">Escolher esta!</a></td>`;
            table_body.appendChild(table_row);
        });
}

function popula_destinos_internacionais() {
    var table_body = document.querySelector("#destinos_internacionais tbody");

    destinos
        .filter(destino => destino.pais_destino !== 'Brasil')
        .forEach(destino => {
            var table_row = document.createElement('tr');
            table_row.innerHTML = `<td>${destino.origem}</td><td>✈</td><td>${destino.destino}</td><td>${destino.preco}</td><td><a href="emissao_de_passagem.html?id=${destino.id}">Escolher esta!</a></td>`;
            table_body.appendChild(table_row);
        });
}

popula_destinos_domesticos();
popula_destinos_internacionais();