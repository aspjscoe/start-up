$(document).ready(onReady);
function onReady(){
    $.get("http://127.0.0.1:8081/users",onGetUsers);
    $("#save-button").click(onSaveButtonClick);
}

function onSaveButtonClick(){

    var user={
        name:$("#name").val(),
        address:$("#address").val(),
        phoneno:$("#phone").val(),
        designation:$("#designation").val()
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
        var tableHtml= "<tr><td>Name</td><td>Address</td><td>Phoneno</td><td>Designation</td></tr>";
for (var i=0;i<users.length;i++){
     var row = "<tr>";
     row = row + "<td>" + users[i].name + "</td>";
    row = row + "<td>" + users[i].address + "</td>";
  
    row = row + "<td>" + users[i].phoneno+ "</td>";
      row = row + "<td>" + users[i].designation+ "</td>";
     row = row + "</tr>";
    tableHtml = tableHtml + row;
}
tableHtml=tableHtml+"</table>";
$("#table").html(tableHtml) ;  
}
