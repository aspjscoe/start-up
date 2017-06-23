$(document).ready(onReady);
function onReady(){
    $.get("http://127.0.0.1:8081/users",onGetUsers);
    $("#save-button").click(onSaveButtonClick);
}

function onSaveButtonClick(){

    var user={
        id:$("#userid").val(),
        name:$("#username").val(),
        phone:$("phone").val()
    }
    $.post("http://127.0.0.1:8081/users",user,onPostUsers);
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
        var tableHtml= "<tr><td>User Id</td><td>User Name</td><td>Phone</td></tr>";
for (var i=0;i<users.length;i++){
     var row = "<tr>";
     row = row + "<td>" + users[i].id + "</td>";
    row = row + "<td>" + users[i].name + "</td>";
  
    row = row + "<td>" + users[i].phone+ "</td>";
     row = row + "</tr>";
    tableHtml = tableHtml + row;
}
tableHtml=tableHtml+"</table>";
$("#table").html(tableHtml) ;  
}
