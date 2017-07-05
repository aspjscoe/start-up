$(document).ready(onReady);
function onReady(){
    $.get("http://127.0.0.1:8081/states",onGetUsers);
    $("#save-button").click(onSaveButtonClick);
}

function onSaveButtonClick(){

    var user={
        id:$("#id").val(),
       
        name:$("#name").val(),
         code:$("#code").val(),
        isapp:$("#isapp").val(),
         rst:$("#rst").val(),
          status:$("#status").val()
           
       
    }
    $.post("http://127.0.0.1:8081/states",user,onPostUsers);
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
        var tableHtml= "<tr><td>ID</td><td>name</td><td>code</td><td>isapp</td><td>rst</td><td>status</td></tr>";
for (var i=0;i<users.length;i++){
     var row = "<tr>";
     row = row + "<td>" + users[i].id + "</td>";
   
     row = row + "<td>" + users[i].name+ "</td>";
      row = row + "<td>" + users[i].code + "</td>";
      row = row + "<td>" + users[i].isapp+ "</td>";
            row = row + "<td>" + users[i].rst+ "</td>";
                  row = row + "<td>" + users[i].status+ "</td>";
                  
      
     row = row + "</tr>";
    tableHtml = tableHtml + row;
}
tableHtml=tableHtml+"</table>";
$("#table").html(tableHtml) ;  
}
