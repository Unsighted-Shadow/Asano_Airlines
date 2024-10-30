function showResumes() {

    var applications = JSON.parse(localStorage.getItem("applications"));

    if(applications) {

        var table = document.getElementById("resumeTable").getElementsByTagName("tbody")[0];
        
        for(i = 0; i < applications.resumes.length; i++) {

            var newRow = table.insertRow();
            newRow.insertCell(0).innerHTML = applications.resumes[i].name;
            newRow.insertCell(1).innerHTML = applications.resumes[i].gender;
            newRow.insertCell(2).innerHTML = applications.resumes[i].genderId;
            newRow.insertCell(3).innerHTML = applications.resumes[i].lgbtq;
            newRow.insertCell(4).innerHTML = applications.resumes[i].etnia;
            newRow.insertCell(5).innerHTML = applications.resumes[i].study;
            newRow.insertCell(6).innerHTML = applications.resumes[i].course;
            newRow.insertCell(7).innerHTML = applications.resumes[i].date;
            newRow.insertCell(8).innerHTML = applications.resumes[i].email;
            newRow.insertCell(9).innerHTML = applications.resumes[i].tel;
            newRow.insertCell(10).innerHTML = applications.resumes[i].whatsApp;
            newRow.insertCell(11).innerHTML = applications.resumes[i].telm;
            newRow.insertCell(12).innerHTML = applications.resumes[i].message;
            newRow.insertCell(13).innerHTML = applications.resumes[i].cv;

        }
    }
}

function searchResume() {
   
    var searchClass = document.getElementsByClass("resume").toLowerCase();
    
    var rowsTable = document.getElementById("resumeTable").getElementsByTagName("tr");
    
    for (var x = 1; x < rowsTable.length; x++) {
        var cellsTable = rowsTable[x].getElementsByTagName("td");
        var foundValue = false;

        for (var a = 0; a < cellsTable.length; a++) {
            var cellValueTable = cellsTable[a].innerText.toLowerCase();
            
            if (cellValueTable.includes(searchClass)) {
                foundValue = true;
                break;
            }
        }

    }

}