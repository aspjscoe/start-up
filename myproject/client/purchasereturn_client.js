$(document).ready(onReady);
function onReady(){
    $.get("http://127.0.0.1:8081/purchasereturn",onGetUsers);
    $("#save-button").click(onSaveButtonClick);
}

function onSaveButtonClick(){

    var user={
        id:$("#id").val(),
         PurchaseDate:$("#PurchaseDate").val(),
        invoiceno:$("#invoiceno").val(),
        InvoiceDate:$("#InvoiceDate").val(),
        SupplierID:$("#SupplierID").val(),
         Total:$("#Total").val(),
          Discount:$("#Discount").val(),
           Grandtotal:$("#Grandtotal").val(),
            pbal:$("#pbal").val(),
             paid:$("#paid").val(),
              balance:$("#balance").val(),
               paidmode:$("#paidmode").val(),
                Bank:$("#Bank").val(),
                 chequeno:$("#chequeno").val(),
                  vatp:$("#vatp").val(),
                    vatamount:$("#vatamount").val(),
                      other:$("#other").val(),
                        notes:$("#notes").val(),
                          billamount:$("#billamount").val(),
                            itemdiscount:$("#itemdiscount").val()
                            
          
    }
    $.post("http://127.0.0.1:8081/purchasereturn",user,onPostUsers);
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
        var tableHtml= "<tr><td>ID</td><td>PurchaseDate</td><td>invoiceno</td><td>InvoiceDate</td><td>SupplierID</td><td>Total</td><td>Discount</td><td>Grandtotal</td><td>pbal</td><td>paid</td><td>balance</td><td>paidmode</td><td>Bank</td><td>chequeno</td><td>vatp</td><td>vatamount</td><td>other</td><td>notes</td><td>billamount</td><td>itemdiscount</td></tr>";
for (var i=0;i<users.length;i++){
     var row = "<tr>";
     row = row + "<td>" + users[i].id + "</td>";
         row = row + "<td>" + users[i].PurchaseDate + "</td>";
    row = row + "<td>" + users[i].invoiceno + "</td>";
     row = row + "<td>" + users[i].InvoiceDate+ "</td>";
      row = row + "<td>" + users[i].SupplierID+ "</td>";
      row = row + "<td>" + users[i].Total+ "</td>";
        row = row + "<td>" + users[i].Discount+ "</td>";
         row = row + "<td>" + users[i].Grandtotal+ "</td>";
          row = row + "<td>" + users[i].pbal+ "</td>"; 
           row = row + "<td>" + users[i].paid+ "</td>";
            row = row + "<td>" + users[i].balance+ "</td>";
             row = row + "<td>" + users[i].paidmode+ "</td>";
              row = row + "<td>" + users[i].Bank+ "</td>";
               row = row + "<td>" + users[i].chequeno+ "</td>";
 row = row + "<td>" + users[i].vatp+ "</td>";
 row = row + "<td>" + users[i].vatamount+ "</td>";
 row = row + "<td>" + users[i].other+ "</td>";
 row = row + "<td>" + users[i].notes+ "</td>";
 row = row + "<td>" + users[i].billamount+ "</td>";
 row = row + "<td>" + users[i].itemdiscount+ "</td>";
 

    
          
     row = row + "</tr>";
    tableHtml = tableHtml + row;
}
tableHtml=tableHtml+"</table>";
$("#table").html(tableHtml) ;  
}
