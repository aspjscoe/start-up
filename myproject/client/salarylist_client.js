$(document).ready(onReady);
function onReady(){
    $.get("http://127.0.0.1:8081/salarylist",onGetUsers);
    $("#save-button").click(onSaveButtonClick);
}

function onSaveButtonClick(){

    var user={
        id:$("#id").val(),
        sid:$("#sid").val(),
        eid:$("#eid").val(),
        salary:$("#salary").val(),
         advance:$("#advance").val(),
          balance:$("#balance").val()
       
    }
    $.post("http://127.0.0.1:8081/salarylist",user,onPostUsers);
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
        var tableHtml= "<tr><td>ID</td><td>sid</td><td>eid</td><td>salary</td><td>advance</td><<td>balance</td>/tr>";
for (var i=0;i<users.length;i++){
     var row = "<tr>";
     row = row + "<td>" + users[i].id + "</td>";
    row = row + "<td>" + users[i].sid + "</td>";
     row = row + "<td>" + users[i].eid+ "</td>";
      row = row + "<td>" + users[i].salary+ "</td>";
            row = row + "<td>" + users[i].advance+ "</td>";
                  row = row + "<td>" + users[i].balance+ "</td>";
      
     row = row + "</tr>";
    tableHtml = tableHtml + row;
}
tableHtml=tableHtml+"</table>";
$("#table").html(tableHtml) ;  
}
