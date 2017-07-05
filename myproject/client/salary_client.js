$(document).ready(onReady);
function onReady(){
    $.get("http://127.0.0.1:8081/salary",onGetUsers);
    $("#save-button").click(onSaveButtonClick);
}

function onSaveButtonClick(){

    var user={
        id:$("#id").val(),
        date:$("#date").val(),
        month:$("#month").val(),
        total:$("#total").val(),
       
    }
    $.post("http://127.0.0.1:8081/salary",user,onPostUsers);
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
        var tableHtml= "<tr><td>ID</td><td>Date</td><td>month</td><td>total</td></tr>";
for (var i=0;i<users.length;i++){
     var row = "<tr>";
     row = row + "<td>" + users[i].id + "</td>";
    row = row + "<td>" + users[i].date + "</td>";
     row = row + "<td>" + users[i].month+ "</td>";
      row = row + "<td>" + users[i].total+ "</td>";
      
     row = row + "</tr>";
    tableHtml = tableHtml + row;
}
tableHtml=tableHtml+"</table>";
$("#table").html(tableHtml) ;  
}
