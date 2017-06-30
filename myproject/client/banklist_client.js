$(document).ready(onReady);
function onReady(){
    $.get("http://127.0.0.1:8081/banklist",onGetUsers);
    $("#save-button").click(onSaveButtonClick);
}

function onSaveButtonClick(){

    var user={
        id:$("#id").val(),
        bankname:$("#bankname").val(),
        accountno:$("#accountno").val(),
        accountname:$("#accountname").val(),
         branch:$("#branch").val(),
           openingbalance:$("#openingbalance").val()
    }
    $.post("http://127.0.0.1:8081/banklist",user,onPostUsers);
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
        var tableHtml= "<tr><td>Id</td><td>Bankname</td><td>Accountno</td><td>Accountname</td><td>Branch</td><td>Openingbalance</td></tr>";
for (var i=0;i<users.length;i++){
     var row = "<tr>";
     row = row + "<td>" + users[i].id + "</td>";
    row = row + "<td>" + users[i].bankname + "</td>";
     row = row + "<td>" + users[i].accountno+ "</td>";
      row = row + "<td>" + users[i].accountname+ "</td>";
      row = row + "<td>" + users[i].branch+ "</td>";
          row = row + "<td>" + users[i].openingbalance+ "</td>";
     row = row + "</tr>";
    tableHtml = tableHtml + row;
}
tableHtml=tableHtml+"</table>";
$("#table").html(tableHtml) ;  
}
