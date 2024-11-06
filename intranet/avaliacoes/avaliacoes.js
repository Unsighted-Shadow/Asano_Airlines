function showFeedBack() {

    var feedbackData = JSON.parse(localStorage.getItem("feedbackData")); 
    console.log(feedbackData);

    if(feedbackData) {

        var table = document.getElementById("feedbackTable").getElementsByTagName("tbody")[0];
    
        for(i = 0; i < feedbackData.feedbacks.length; i++) {
            
            var newRow = table.insertRow();

            newRow.insertCell(0).innerHTML = feedbackData.feedbacks[i].id;
            newRow.insertCell(1).innerHTML = feedbackData.feedbacks[i].name;
            newRow.insertCell(2).innerHTML = feedbackData.feedbacks[i].email;
            newRow.insertCell(3).innerHTML = feedbackData.feedbacks[i].tel;
            newRow.insertCell(4).innerHTML = feedbackData.feedbacks[i].feedback;
    
        }
    }

}

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

