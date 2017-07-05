$(document).ready(onReady);
function onReady(){
    $.get("http://127.0.0.1:8081/supplieraccount",onGetUsers);
    $("#save-button").click(onSaveButtonClick);
}

function onSaveButtonClick(){

    var user={
        id:$("#id").val(),
         date:$("#date").val(),
        SupplierID:$("#SupplierID").val(),
        PurchaseID:$("#PurchaseID").val(),
        totalamount:$("#totalamount").val(),
         AmountPaid:$("#AmountPaid").val(),
          Balance:$("#Balance").val(),
           BillAmount:$("#BillAmount").val(),
            Notes:$("#Notes").val(),
             UserID:$("#UserID").val(),
              paidmode:$("#paidmode").val(),
               Bank:$("#Bank").val(),
                Chequeno:$("#Chequeno").val()
               
    }
    $.post("http://127.0.0.1:8081/supplieraccount",user,onPostUsers);
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
        var tableHtml= "<tr><td>ID</td><td>date</td><td>SupplierID</td><td>PurchaseID</td><td>totalamount</td><td>AmountPaid</td><td>Balance</td><td>BillAmount</td><td>Notes</td><td>UserID</td><td>paidmode</td><td>Bank</td><td>Chequeno</td></tr>";
for (var i=0;i<users.length;i++){
     var row = "<tr>";
     row = row + "<td>" + users[i].id + "</td>";
         row = row + "<td>" + users[i].date + "</td>";
    row = row + "<td>" + users[i].SupplierID + "</td>";
     row = row + "<td>" + users[i].PurchaseID+ "</td>";
      row = row + "<td>" + users[i].totalamount+ "</td>";
      row = row + "<td>" + users[i].AmountPaid+ "</td>";
        row = row + "<td>" + users[i].Balance+ "</td>";
         row = row + "<td>" + users[i].BillAmount+ "</td>";
          row = row + "<td>" + users[i].Notes+ "</td>"; 
           row = row + "<td>" + users[i].UserID+ "</td>";
            row = row + "<td>" + users[i].paidmode+ "</td>";
             row = row + "<td>" + users[i].Bank+ "</td>";
              row = row + "<td>" + users[i].Chequeno+ "</td>";
              
    
          
     row = row + "</tr>";
    tableHtml = tableHtml + row;
}
tableHtml=tableHtml+"</table>";
$("#table").html(tableHtml) ;  
}
