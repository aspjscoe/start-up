$(document).ready(onReady);
function onReady(){
    $.get("http://127.0.0.1:8081/towns",onGetUsers);
    $("#save-button").click(onSaveButtonClick);
}

function onSaveButtonClick(){

    var user={
        id:$("#id").val(),
         did:$("#did").val(),
       town:$("#town").val(),
         Code:$("#Code").val()
               
    }
    $.post("http://127.0.0.1:8081/towns",user,onPostUsers);
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
        var tableHtml= "<tr><td>ID</td><td>did</td><td>town</td><td>Code</td></tr>";
for (var i=0;i<users.length;i++){
     var row = "<tr>";
     row = row + "<td>" + users[i].id + "</td>";
         row = row + "<td>" + users[i].did + "</td>";
   row = row + "<td>" + users[i].town + "</td>";
         row = row + "<td>" + users[i].Code + "</td>";
              
    
          
     row = row + "</tr>";
    tableHtml = tableHtml + row;
}
tableHtml=tableHtml+"</table>";
$("#table").html(tableHtml) ;  
}
