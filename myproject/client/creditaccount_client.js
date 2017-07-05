$(document).ready(onReady);
function onReady(){
    $.get("http://127.0.0.1:8081/creditaccount",onGetUsers);
    $("#save-button").click(onSaveButtonClick);
}

function onSaveButtonClick(){

    var user={
        id:$("#id").val(),
        SupplierID:$("#SupplierID").val(),
        PDate:$("#PDate").val(),
        Amount:$("#Amount").val(),
         PaidType:$("#PaidType").val(),
         Chequeno:$("#Chequeno").val(),
         Paid:$("#Paid").val(),
         CurrentBalance:$("#CurrentBalance").val(),
         Bank:$("#Bank").val(),
         HolderName:$("#HolderName").val(),
         Validity:$("#Validity").val(),
         Description:$("#Description").val()
    }
    $.post("http://127.0.0.1:8081/creditaccount",user,onPostUsers);
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
        var tableHtml= "<tr><td>ID</td><td>SupplierID</td><td>PDate</td><td>Amount</td><td>PaidType</td><td>Chequeno</td><td>Paid</td><td>CurrentBalance</td><td>Bank</td> <td>HolderName</td><td>Validity</td><td>Description</td></tr>";
for (var i=0;i<users.length;i++){
     var row = "<tr>";
     row = row + "<td>" + users[i].id + "</td>";
    row = row + "<td>" + users[i].SupplierID + "</td>";
     row = row + "<td>" + users[i].PDate+ "</td>";
      row = row + "<td>" + users[i].Amount+ "</td>";
      row = row + "<td>" + users[i].PaidType+ "</td>";
      row = row + "<td>" + users[i].Chequeno+ "</td>";
      row = row + "<td>" + users[i].Paid+ "</td>";
      row = row + "<td>" + users[i].CurrentBalance+ "</td>";
      row = row + "<td>" + users[i].Bank+ "</td>";
      row = row + "<td>" + users[i].HolderName+ "</td>";
      row = row + "<td>" + users[i].Validity+ "</td>";
 row = row + "<td>" + users[i].Description+ "</td>";

     row = row + "</tr>";
    tableHtml = tableHtml + row;
}
tableHtml=tableHtml+"</table>";
$("#table").html(tableHtml) ;  
}
