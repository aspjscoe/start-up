$(document).ready(onReady);
function onReady(){
    $.get("http://127.0.0.1:8081/estimate",onGetUsers);
    $("#save-button").click(onSaveButtonClick);
}

function onSaveButtonClick(){

    var user={
        id:$("#id").val(),
        BillNo:$("#BillNo").val(),
        BillDate:$("#BillDate").val(),
        CustomerID:$("#CustomerID").val(),
         Total:$("#Total").val(),
          Tax:$("#Tax").val(),
           FreightCharge:$("#FreightCharge").val(),
              Discount:$("#Discount").val(),
              GrandTotal:$("#GrandTotal").val(),
               salesmanid:$("#salesmanid").val(),
                beatid:$("#beatid").val(),
                 Documentt:$("#Documentt").val(),
                  pbal:$("#pbal").val(),
                   paid:$("#paid").val(),
                    balance:$("#balance").val(),
                     paidmode:$("#paidmode").val(),
                      bank:$("#bank").val(),
                       checkno:$("#checkno").val(),
                       Replacement:$("#Replacement").val(),
                       Status:$("#Status").val(),
                       billamount:$("#billamount").val(),
                      itemdiscount:$("#itemdiscount").val()

    }
    $.post("http://127.0.0.1:8081/estimate",user,onPostUsers);
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
        var tableHtml= "<tr><td>ID</td><td>BillNo</td><td>BillDate</td><td>CustomerID</td><td>Total</td><td>Tax</td><td>FreightCharge</td><td>Discount</td><td>GrandTotal</td><td>salesmanid</td><td>beatid</td><td>Documentt</td><td>pbal</td><td>paid</td><td>balance</td><td>paidmode</td><td>bank</td><td>checkno</td><td>Replacement</td><td>Status</td><td>billamount</td><td>itemdiscount</td> </tr>";
   for (var i=0;i<users.length;i++){
     var row = "<tr>";
     row = row + "<td>" + users[i].id + "</td>";
    row = row + "<td>" + users[i].BillNo + "</td>";
     row = row + "<td>" + users[i].BillDate+ "</td>";
      row = row + "<td>" + users[i].CustomerID+ "</td>";
      row = row + "<td>" + users[i].Total+ "</td>";
       row = row + "<td>" + users[i].Tax+ "</td>";
        row = row + "<td>" + users[i].FreightCharge+ "</td>";
         row = row + "<td>" + users[i].Discount+ "</td>";
          row = row + "<td>" + users[i].GrandTotal+ "</td>";
           row = row + "<td>" + users[i].salesmanid+ "</td>";
            row = row + "<td>" + users[i].beatid+ "</td>";
             row = row + "<td>" + users[i].Documentt+ "</td>";
              row = row + "<td>" + users[i].pbal+ "</td>";
               row = row + "<td>" + users[i].paid+ "</td>";
                row = row + "<td>" + users[i].balance+ "</td>";
                 row = row + "<td>" + users[i].paidmode+ "</td>";
                  row = row + "<td>" + users[i].bank+ "</td>";
                   row = row + "<td>" + users[i].checkno+ "</td>";
                    row = row + "<td>" + users[i].Replacement+ "</td>";
                    row = row + "<td>" + users[i].Status+ "</td>";
                    row = row + "<td>" + users[i].billamount+ "</td>";
                    row = row + "<td>" + users[i].itemdiscount+ "</td>";
     row = row + "</tr>";
    tableHtml = tableHtml + row;
}
tableHtml=tableHtml+"</table>";
$("#table").html(tableHtml) ;  
}
