$(document).ready(onReady);
function onReady(){
    $.get("http://127.0.0.1:8081/productdetails",onGetUsers);
    $("#save-button").click(onSaveButtonClick);
}

function onSaveButtonClick(){

    var user={
        id:$("#id").val(),
         Invoiceno:$("#Invoiceno").val(),
        pcode:$("#pcode").val(),
        Qty:$("#Qty").val(),
        Price:$("#Price").val(),
         Discount:$("#Discount").val(),
          Total:$("#Total").val(),
           Unit:$("#Unit").val(),
            vatp:$("#vatp").val(),
            vatamount:$("#vatamount").val()
    }
    $.post("http://127.0.0.1:8081/productdetails",user,onPostUsers);
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
        var tableHtml= "<tr><td>ID</td><td>Invoiceno</td><td>pcode</td><td>Qty</td><td>Price</td><td>Discount</td><td>Total</td><td>Unit</td><td>vatp</td><td>vatamount</td></tr>";
for (var i=0;i<users.length;i++){
     var row = "<tr>";
     row = row + "<td>" + users[i].id + "</td>";
         row = row + "<td>" + users[i].Invoiceno + "</td>";
    row = row + "<td>" + users[i].pcode + "</td>";
     row = row + "<td>" + users[i].Qty+ "</td>";
      row = row + "<td>" + users[i].Price+ "</td>";
      row = row + "<td>" + users[i].Discount+ "</td>";
      
      row = row + "<td>" + users[i].Total+ "</td>";
      row = row + "<td>" + users[i].Unit+ "</td>";
      row = row + "<td>" + users[i].vatp+ "</td>";
      row = row + "<td>" + users[i].vatamount+ "</td>";
     row = row + "</tr>";
    tableHtml = tableHtml + row;
}
tableHtml=tableHtml+"</table>";
$("#table").html(tableHtml) ;  
}
