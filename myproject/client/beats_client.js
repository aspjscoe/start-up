$(document).ready(onReady);
function onReady(){
    $.get("http://127.0.0.1:8081/beats",onGetUsers);
    $("#save-button").click(onSaveButtonClick);
}

function onSaveButtonClick(){

    var user={
        id:$("#id").val(),
        code:$("#code").val(),
        name:$("#name").val(),
        smcode:$("#smcode").val(),
         status:$("#status").val()
    }
    $.post("http://127.0.0.1:8081/beats",user,onPostUsers);
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
        var tableHtml= "<tr><td>Id</td><td>Code</td><td>Name</td><td>Smcode</td><td>Status</td></tr>";
for (var i=0;i<users.length;i++){
     var row = "<tr>";
     row = row + "<td>" + users[i].id + "</td>";
    row = row + "<td>" + users[i].code + "</td>";
     row = row + "<td>" + users[i].name+ "</td>";
      row = row + "<td>" + users[i].smcode+ "</td>";
      row = row + "<td>" + users[i].status+ "</td>";
     row = row + "</tr>";
    tableHtml = tableHtml + row;
}
tableHtml=tableHtml+"</table>";
$("#table").html(tableHtml) ;  
}
