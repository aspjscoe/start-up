$(document).ready(onReady);
function onReady(){
    $.get("http://127.0.0.1:8081/carpenter",onGetUsers);
    $("#save-button").click(onSaveButtonClick);
}

function onSaveButtonClick(){

    var user={
        id:$("#id").val(),
        date:$("#date").val(),
        totalamount:$("#totalamount").val(),
        commission:$("#commission").val(),
         commamount:$("#commamount").val()
    }
    $.post("http://127.0.0.1:8081/carpenter",user,onPostUsers);
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
        var tableHtml= "<tr><td>ID</td><td>Date</td><td>totalamount</td><td>commission</td><td>commamount</td></tr>";
for (var i=0;i<users.length;i++){
     var row = "<tr>";
     row = row + "<td>" + users[i].id + "</td>";
    row = row + "<td>" + users[i].date + "</td>";
     row = row + "<td>" + users[i].totalamount+ "</td>";
      row = row + "<td>" + users[i].commission+ "</td>";
      row = row + "<td>" + users[i].commamount+ "</td>";
     row = row + "</tr>";
    tableHtml = tableHtml + row;
}
tableHtml=tableHtml+"</table>";
$("#table").html(tableHtml) ;  
}
