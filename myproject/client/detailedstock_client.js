$(document).ready(onReady);
function onReady(){
    $.get("http://127.0.0.1:8081/detailedstock",onGetUsers);
    $("#save-button").click(onSaveButtonClick);
}

function onSaveButtonClick(){

    var user={
        id:$("#id").val(),
        date:$("#date").val(),
               pcode:$("#pcode").val(),
                      opqtypcs:$("#opqtypcs").val(),
                             pqtypcs:$("#pqtypcs").val(),
                                    sqtypcs:$("#sqtypcs ").val(),
                                           cqtypcs:$("#cqtypcs").val(),
                                                  PRqty:$("#PRqty").val()
                                                  
      
    }
    $.post("http://127.0.0.1:8081/detailedstock",user,onPostUsers);
}
function onPostUsers(result){
var users=result;
  createTable(users);  
}

function onGetUsers(result){
    var users=result;
    createTable(users);
}
function createTable(users){
        var tableHtml= "<tr><td>ID</td><td>date</td><td>pcode</td><td>opqtypcs</td><td>pqtypcs</td><td>sqtypcs</td><td>cqtypcs</td><td>PRqty</td></tr>";
for (var i=0;i<users.length;i++){
     var row = "<tr>";
     row = row + "<td>" + users[i].id + "</td>";
    row = row + "<td>" + users[i].date + "</td>";
     row = row + "<td>" + users[i].pcode + "</td>";
      row = row + "<td>" + users[i].opqtypcs + "</td>";
       row = row + "<td>" + users[i].pqtypcs + "</td>";
        row = row + "<td>" + users[i].sqtypcs + "</td>";
         row = row + "<td>" + users[i].cqtypcs + "</td>";
          row = row + "<td>" + users[i].PRqty + "</td>";
    
     row = row + "</tr>";
    tableHtml = tableHtml + row;
}
tableHtml=tableHtml+"</table>";
$("#table").html(tableHtml) ;  
}
