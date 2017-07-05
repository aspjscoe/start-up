$(document).ready(onReady);
function onReady(){
    $.get("http://127.0.0.1:8081/purchase",onGetUsers);
    $("#save-button").click(onSaveButtonClick);
}

function onSaveButtonClick(){

    var user={
        id:$("#id").val(),
         date:$("#date").val(),
        invoiceno:$("#invoiceno").val(),
        sid:$("#sid").val(),
        totalamount:$("#totalamount").val(),
         tax:$("#tax").val(),
          sd:$("#sd").val(),
           discount:$("#discount").val(),
            netamount:$("#netamount").val(),
             paidmode:$("#paidmode").val(),
              paid:$("#paid").val(),
               bankname:$("#bankname").val(),
                Chequeno:$("#Chequeno").val(),
                 balance:$("#balance").val(),
                  vatp:$("#vatp").val()
          
    }
    $.post("http://127.0.0.1:8081/purchase",user,onPostUsers);
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
        var tableHtml= "<tr><td>ID</td><td>date</td><td>invoiceno</td><td>sid</td><td>totalamount</td><td>tax</td><td>sd</td><td>discount</td><td>netamount</td><td>paidmode</td><td>paid</td><td>bankname</td><td>Chequeno</td><td>balance</td><td>vatp</td></tr>";
for (var i=0;i<users.length;i++){
     var row = "<tr>";
     row = row + "<td>" + users[i].id + "</td>";
         row = row + "<td>" + users[i].date + "</td>";
    row = row + "<td>" + users[i].invoiceno + "</td>";
     row = row + "<td>" + users[i].sid+ "</td>";
      row = row + "<td>" + users[i].totalamount+ "</td>";
      row = row + "<td>" + users[i].tax+ "</td>";
        row = row + "<td>" + users[i].sd+ "</td>";
         row = row + "<td>" + users[i].discount+ "</td>";
          row = row + "<td>" + users[i].netamount+ "</td>"; 
           row = row + "<td>" + users[i].paidmode+ "</td>";
            row = row + "<td>" + users[i].paid+ "</td>";
             row = row + "<td>" + users[i].bankname+ "</td>";
              row = row + "<td>" + users[i].Chequeno+ "</td>";
               row = row + "<td>" + users[i].balance+ "</td>";
 row = row + "<td>" + users[i].vatp+ "</td>";
    
          
     row = row + "</tr>";
    tableHtml = tableHtml + row;
}
tableHtml=tableHtml+"</table>";
$("#table").html(tableHtml) ;  
}
