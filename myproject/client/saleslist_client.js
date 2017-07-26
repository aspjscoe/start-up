$(document).ready(onReady);
function onReady(){
    $.get("http://127.0.0.1:8081/saleslist",onGetUsers);
    $("#save-button").click(onSaveButtonClick);
}

function onSaveButtonClick(){

    var user={
        id:$("#id").val(),
        sid:$("#sid").val(),
        pcode:$("#pcode").val(),
        unit:$("#unit").val(),
         qty:$("#qty").val(),
          price:$("#price").val(),
           total:$("#total").val()
       
    }
    $.post("http://127.0.0.1:8081/saleslist",user,onPostUsers);
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
        var tableHtml= "<tr><td>ID</td><td>sid</td><td>pcode</td><td>unit</td><td>qty</td><td>price</td><td>total</td></tr>";
for (var i=0;i<users.length;i++){
     var row = "<tr>";
     row = row + "<td>" + users[i].id + "</td>";
    row = row + "<td>" + users[i].sid + "</td>";
     row = row + "<td>" + users[i].pcode+ "</td>";
      row = row + "<td>" + users[i].unit+ "</td>";
            row = row + "<td>" + users[i].qty+ "</td>";
                  row = row + "<td>" + users[i].price+ "</td>";
                   row = row + "<td>" + users[i].total+ "</td>";
      
     row = row + "</tr>";
    tableHtml = tableHtml + row;
}
tableHtml=tableHtml+"</table>";
$("#table").html(tableHtml) ;  
}
