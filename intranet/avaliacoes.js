function feedback() {
    
    console.log('Initialized');

}

window.onload = function() {

 var feedbackData = JSON.parse(localStorage.getItem('feedbackData'));

 if(feedbackData) {

    var table = document.getElementById("feedbackTable").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow();

    newRow.insertCell(0).innerHTML = feedbackData.id;
    newRow.insertCell(1).innerHTML = feedbackData.name;
    newRow.insertCell(2).innerHTML = feedbackData.email;
    newRow.insertCell(3).innerHTML = feedbackData.tel;
    newRow.insertCell(4).innerHTML = feedbackData.feedback;

    localStorage.removeItem('feedbackData');
    
 }

    var params = new URLSearchParams(window.location.search);
    var action = params.get('action');

    if(action === 'executeLocal') {

        feedback();

    }
};

function hideShow() {
    
    var id = document.getElementById("id");
    var row = document.getElementsByTagName("td")[0]
    
    if(id.style.display === "none" && row.style.display === "none") {

        id.style.display = "block";
        row.style.display = "block";

    } else {

        id.style.display = "none";
        row.style.display = "none";

    }
}