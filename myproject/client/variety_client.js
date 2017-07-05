$(document).ready(onReady);
function onReady(){
    $.get("http://127.0.0.1:8081/variety",onGetUsers);
    $("#save-button").click(onSaveButtonClick);
}

function onSaveButtonClick(){

    var user={
        id:$("#id").val(),
         code:$("#code").val(),
          name:$("#name").val(),
         brandid:$("#brandid").val(),
          status:$("#status").val()
      
               
    }
    $.post("http://127.0.0.1:8081/variety",user,onPostUsers);
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
        var tableHtml= "<tr><td>ID</td><td>code</td><td>name</td><td>brandid</td><td>status</td></tr>";
for (var i=0;i<users.length;i++){
     var row = "<tr>";
     row = row + "<td>" + users[i].id + "</td>";
         row = row + "<td>" + users[i].code + "</td>";
           row = row + "<td>" + users[i].name + "</td>";
         row = row + "<td>" + users[i].brandid + "</td>";
  row = row + "<td>" + users[i].status + "</td>";
              
    
          
     row = row + "</tr>";
    tableHtml = tableHtml + row;
}
tableHtml=tableHtml+"</table>";
$("#table").html(tableHtml) ;  
}
