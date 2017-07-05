$(document).ready(onReady);
function onReady(){
    $.get("http://127.0.0.1:8081/salesman",onGetUsers);
    $("#save-button").click(onSaveButtonClick);
}

function onSaveButtonClick(){

    var user={
        id:$("#id").val(),
        code:$("#code").val(),
        name:$("#name").val(),
        asmid:$("#asmid").val(),
         status:$("#status").val(),
          address:$("#address").val(),
           phoneno:$("#phoneno").val(), 
           designation:$("#designation").val(),
           salary:$("#salary").val()
       
    }
    $.post("http://127.0.0.1:8081/salesman",user,onPostUsers);
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
        var tableHtml= "<tr><td>ID</td><td>code</td><td>name</td><td>asmid</td><td>status</td><td>address</td><td>phoneno</td><td>designation</td><td>salary</td></tr>";
for (var i=0;i<users.length;i++){
     var row = "<tr>";
     row = row + "<td>" + users[i].id + "</td>";
    row = row + "<td>" + users[i].code + "</td>";
     row = row + "<td>" + users[i].name+ "</td>";
      row = row + "<td>" + users[i].asmid+ "</td>";
            row = row + "<td>" + users[i].status+ "</td>";
                  row = row + "<td>" + users[i].address+ "</td>";
                   row = row + "<td>" + users[i].phoneno+ "</td>";
                   row = row + "<td>" + users[i].designation+ "</td>";
                   row = row + "<td>" + users[i].salary+ "</td>";
      
     row = row + "</tr>";
    tableHtml = tableHtml + row;
}
tableHtml=tableHtml+"</table>";
$("#table").html(tableHtml) ;  
}
