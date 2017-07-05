$(document).ready(onReady);
function onReady(){
    $.get("http://127.0.0.1:8081/carpentercommisionlist",onGetUsers);
    $("#save-button").click(onSaveButtonClick);
}

function onSaveButtonClick(){

    var user={
        id:$("#id").val(),
        cid:$("#cid").val(),
        billno:$("#billno").val()
       
    }
    $.post("http://127.0.0.1:8081/carpentercommisionlist",user,onPostUsers);
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
        var tableHtml= "<tr><td>ID</td><td>cid</td><td>billno</td></tr>";
for (var i=0;i<users.length;i++){
     var row = "<tr>";
     row = row + "<td>" + users[i].id + "</td>";
    row = row + "<td>" + users[i].cid + "</td>";
     row = row + "<td>" + users[i].billno+ "</td>";
    
     row = row + "</tr>";
    tableHtml = tableHtml + row;
}
tableHtml=tableHtml+"</table>";
$("#table").html(tableHtml) ;  
}
