function feedback() {

    var id = crypto.randomUUID();
    var name = document.getElementsByName("name")[0].value;
    var email = document.getElementsByName("email")[0].value;
    var tel = document.getElementsByName("tel")[0].value;
    var feedback = document.getElementsByName("feedback")[0].value;

    console.log(`id: ${id} \nNome: ${name} \nEmail: ${email} \nTel: ${tel} \nFeedback: ${feedback}`);

    var feedbackData = {
        id: id,
        name: name,
        email: email,
        tel: tel,
        feedback: feedback
    };

    localStorage.setItem('feedbackData', JSON.stringify(feedbackData));

    window.location.href = 'intranet/avaliacoes.html';

    window.location.href = 'intranet/avaliacoes.html?action=executeLocal';

}

function thxForFb() {

    var thx = document.getElementById("thx");
    if(thx === "block") {
        thx.style.display = "none"
    }

    for(let i = 0; i < document.getElementsByClassName("feedback").length; i++) {
		
		document.getElementsByClassName("feedback")[i].value = "";

}