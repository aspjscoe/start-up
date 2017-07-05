$(document).ready(onReady);
function onReady(){
    $.get("http://127.0.0.1:8081/cancelbillitemdetails",onGetUsers);
    $("#save-button").click(onSaveButtonClick);
}

function onSaveButtonClick(){

    var user={
        id:$("#id").val(),
        BillNo:$("#BillNo").val(),
        ModelNo:$("#ModelNo").val(),
        Quantity:$("#Quantity").val(),
         SaledPrice:$("#SaledPrice").val(),
          Tax:$("#Tax").val(),
           Discount:$("#Discount").val(),
            Total:$("#Total").val(),
             Unit:$("#Unit").val(),
             
    }
    $.post("http://127.0.0.1:8081/cancelbillitemdetails",user,onPostUsers);
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
        var tableHtml= "<tr><td>ID</td><td>BillNo</td><td>ModelNo</td><td>Quantity</td><td>SaledPrice</td><td>Tax</td><td>Discount</td><td>Total</td><td>Unit</td></tr>";
        for (var i=0;i<users.length;i++){
     var row = "<tr>";
     row = row + "<td>" + users[i].id + "</td>";
    row = row + "<td>" + users[i].BillNo + "</td>";
     row = row + "<td>" + users[i].ModelNo+ "</td>";
      row = row + "<td>" + users[i].Quantity+ "</td>";
      row = row + "<td>" + users[i].SaledPrice+ "</td>";
          row = row + "<td>" + users[i].Tax+ "</td>";
              row = row + "<td>" + users[i].Discount+ "</td>";
                  row = row + "<td>" + users[i].Total+ "</td>";
                      row = row + "<td>" + users[i].Unit+ "</td>";

     row = row + "</tr>";
    tableHtml = tableHtml + row;
}
tableHtml=tableHtml+"</table>";
$("#table").html(tableHtml) ;  
}
