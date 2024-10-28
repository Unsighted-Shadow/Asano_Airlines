function addElement() {
    var type = document.getElementsByName("type")[0].value;
    var date = document.getElementsByName("date")[0].value;
    var name = document.getElementsByName("name")[0].value
    var file = document.getElementsByName("url")[0].value;
    var id = crypto.randomUUID();
    console.log(`Type: ${type}, \nDate: ${date}, \nName: ${name} \nFile: ${file}, \nID: ${id}`);

    var row = `<tr>
                    <td>${type}</td>
                    <td>${date}</td>
                    <td>${name}</td>
                    <td>${file}</td>
                    <td hidden>${id}</td>
                </tr>`;

    var content = document.getElementById("content");
    content.innerHTML += row;
}

function searchFile() {
   
    var searchValue = document.getElementsByName("search")[0].value.toLowerCase();
    
    var rows = document.getElementById("content").getElementsByTagName("tr");
    
    for (var i = 1; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName("td");
        var found = false;

        for (var j = 0; j < cells.length; j++) {
            var cellValue = cells[j].innerText.toLowerCase();
            
            if (cellValue.includes(searchValue)) {
                found = true;
                break;
            }
        }

        if (found) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}
