$(document).ready(onReady);
function onReady(){
    $.get("http://127.0.0.1:8081/bankaccount",onGetUsers);
    $("#save-button").click(onSaveButtonClick);
}
function onSaveButtonClick(){

    var user={
        id:$("#id").val(),
        date:$("#date").val(),
        from:$("#from").val(),
        type:$("#type").val(),
         bank:$("#bank").val(),
          details:$("#details").val(),
          debit:$("#debit").val(),
           credit:$("#credit").val(),
            balance:$("#balance").val(),
            fromtype:$("#fromtype").val(),
            paytype:$("#paytype").val(),
            chequeno:$("#chequeno").val()
    }
    $.post("http://127.0.0.1:8081/bankaccount",user,onPostUsers);
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
        var tableHtml= "<tr><td>Id</td><td>Date</td><td>From</td><td>Type</td><td>Bank</td><td>Details</td><td>Debit</td><td>Credit</td><td>Balance</td><td>Fromtype</td><td>Paytype</td><td>chequeno</td></tr>";
for (var i=0;i<users.length;i++){
     var row = "<tr>";
     row = row + "<td>" + users[i].id + "</td>";
    row = row + "<td>" + users[i].date + "</td>";
     row = row + "<td>" + users[i].from+ "</td>";
      row = row + "<td>" + users[i].type+ "</td>";
       row = row + "<td>" + users[i].bank+ "</td>";
        row = row + "<td>" + users[i].details+ "</td>";
         row = row + "<td>" + users[i].debit+ "</td>";
          row = row + "<td>" + users[i].credit+ "</td>";
           row = row + "<td>" + users[i].balance+ "</td>";
            row = row + "<td>" + users[i].fromtype+ "</td>";
             row = row + "<td>" + users[i].paytype+ "</td>";
              row = row + "<td>" + users[i].chequeno+ "</td>";
      
     row = row + "</tr>";
    tableHtml = tableHtml + row;
}
tableHtml=tableHtml+"</table>";
$("#table").html(tableHtml) ;  
}
