$(document).ready(onReady);
function onReady(){
    $.get("http://127.0.0.1:8081/advance",onGetUsers);
    $("#save-button").click(onSaveButtonClick);
}

function onSaveButtonClick(){

    var user={
        id:$("#id").val(),
        date:$("#date").val(),
        eid:$("#eid").val(),
        reason:$("#reason").val(),
         amount:$("#amount").val()
    }
    $.post("http://127.0.0.1:8081/advance",user,onPostUsers);
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
        var tableHtml= "<tr><td>ID</td><td>Date</td><td>Eid</td><td>Reason</td><td>Amount</td></tr>";
for (var i=0;i<users.length;i++){
     var row = "<tr>";
     row = row + "<td>" + users[i].id + "</td>";
    row = row + "<td>" + users[i].date + "</td>";
     row = row + "<td>" + users[i].eid+ "</td>";
      row = row + "<td>" + users[i].reason+ "</td>";
      row = row + "<td>" + users[i].amount+ "</td>";
     row = row + "</tr>";
    tableHtml = tableHtml + row;
}
tableHtml=tableHtml+"</table>";
$("#table").html(tableHtml) ;  
}
