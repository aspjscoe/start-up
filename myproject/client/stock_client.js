$(document).ready(onReady);
function onReady(){
    $.get("http://127.0.0.1:8081/stock",onGetUsers);
    $("#save-button").click(onSaveButtonClick);
}

function onSaveButtonClick(){

    var user={
        id:$("#id").val(),
       
        pcode:$("#pcode").val(),
         qtypcs:$("#qtypcs").val()
      
           
       
    }
    $.post("http://127.0.0.1:8081/stock",user,onPostUsers);
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
        var tableHtml= "<tr><td>ID</td><td>pcode</td><td>qtypcs</td></tr>";
for (var i=0;i<users.length;i++){
     var row = "<tr>";
     row = row + "<td>" + users[i].id + "</td>";
   
     row = row + "<td>" + users[i].pcode+ "</td>";
      row = row + "<td>" + users[i].qtypcs + "</td>";
   
                  
      
     row = row + "</tr>";
    tableHtml = tableHtml + row;
}
tableHtml=tableHtml+"</table>";
$("#table").html(tableHtml) ;  
}
