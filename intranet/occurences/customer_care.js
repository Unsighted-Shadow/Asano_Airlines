function showsac() {

    var customer_care = JSON.parse(localStorage.getItem('customer_care'));
    console.log(customer_care);
   
       if(customer_care) {
   
           var table = document.getElementById("sacTable").getElementsByTagName("tbody")[0];
           var newRow = table.insertRow();
       
           for(i = 0; i < customer_care.ticket.length ; i++) {
   
               newRow.insertCell(0).innerHTML = customer_care.ticket[i].id;
               newRow.insertCell(1).innerHTML = customer_care.ticket[i].name;
               newRow.insertCell(2).innerHTML = customer_care.ticket[i].email;
               newRow.insertCell(3).innerHTML = customer_care.ticket[i].tel;
               newRow.insertCell(4).innerHTML = customer_care.ticket[i].select;
               newRow.insertCell(5).innerHTML = customer_care.ticket[i].sac
       
           }
       }
   
   }
   
   function showid() {
       
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