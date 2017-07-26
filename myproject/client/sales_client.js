$(document).ready(onReady);
function onReady(){
    $.get("http://127.0.0.1:8081/sales",onGetUsers);
    $("#save-button").click(onSaveButtonClick);
}

function onSaveButtonClick(){

    var user={
        id:$("#id").val(),
         date:$("#date").val(),
        billno:$("#billno").val(),
        smid:$("#smid").val(),
        beatid:$("#beatid").val(),
         cid:$("#cid").val(),
          pbal:$("#pbal").val(),
           totalamount:$("#totalamount").val(),
            tax:$("#tax").val(),
             sd:$("#sd").val(),
              discount:$("#discount").val(),
               netamount:$("#netamount").val(),
                paidmode:$("#paidmode").val(),
                 paid:$("#paid").val(),
                  bankname:$("#bankname").val(),
                   chequeno:$("#chequeno").val(),
                balance:$("#balance").val(),
                 vatp:$("#vatp").val(),
                  status:$("#status").val()
          
    }
    $.post("http://127.0.0.1:8081/sales",user,onPostUsers);
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
        var tableHtml= "<tr><td>ID</td><td>date</td><td>billno</td><td>smid</td><td>beatid</td><td>cid</td><td>pbal</td><td>totalamount</td><td>tax</td><td>sd</td><td>discount</td><td>netamount</td><td>paidmode</td><td>paid</td><td>bankname</td><td>chequeno</td><td>balance</td><td>vatp</td><td>status</td></tr>";
for (var i=0;i<users.length;i++){
     var row = "<tr>";
     row = row + "<td>" + users[i].id + "</td>";
         row = row + "<td>" + users[i].date + "</td>";
    row = row + "<td>" + users[i].billno + "</td>";
     row = row + "<td>" + users[i].smid+ "</td>";
      row = row + "<td>" + users[i].beatid+ "</td>";
      row = row + "<td>" + users[i].cid+ "</td>";
        row = row + "<td>" + users[i].pbal+ "</td>";
         row = row + "<td>" + users[i].totalamount+ "</td>";
          row = row + "<td>" + users[i].tax+ "</td>"; 
           row = row + "<td>" + users[i].sd+ "</td>";
            row = row + "<td>" + users[i].discount+ "</td>";
             row = row + "<td>" + users[i].netamount+ "</td>";
              row = row + "<td>" + users[i].paidmode+ "</td>";
               row = row + "<td>" + users[i].paid+ "</td>";
              row = row + "<td>" + users[i].bankname+ "</td>";
    row = row + "<td>" + users[i].chequeno+ "</td>";
              row = row + "<td>" + users[i].balance+ "</td>";
               row = row + "<td>" + users[i].vatp+ "</td>";
              row = row + "<td>" + users[i].status+ "</td>";
    
          
     row = row + "</tr>";
    tableHtml = tableHtml + row;
}
tableHtml=tableHtml+"</table>";
$("#table").html(tableHtml) ;  
}
