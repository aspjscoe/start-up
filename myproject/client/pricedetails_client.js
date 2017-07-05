$(document).ready(onReady);
function onReady(){
    $.get("http://127.0.0.1:8081/pricedetails",onGetUsers);
    $("#save-button").click(onSaveButtonClick);
}

function onSaveButtonClick(){

    var user={
        id:$("#id").val(),
        pcode:$("#pcode").val(),
        mrp:$("#mrp").val(),
        unitspcbb:$("#unitspcbb").val(),
         unitsppcs:$("#unitsppcs").val(),
          awprice:$("#awprice").val(),
           taxvalue:$("#taxvalue").val(),
            status:$("#status").val(),
            casevalue:$("#casevalue").val()
    }
    $.post("http://127.0.0.1:8081/pricedetails",user,onPostUsers);
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
        var tableHtml= "<tr><td>ID</td><td>pcode</td><td>mrp</td><td>unitspcbb</td><td>unitsppcs</td><td>awprice</td><td>taxvalue</td><td>status</td><td>casevalue</td></tr>";
for (var i=0;i<users.length;i++){
     var row = "<tr>";
     row = row + "<td>" + users[i].id + "</td>";
    row = row + "<td>" + users[i].pcode + "</td>";
     row = row + "<td>" + users[i].mrp+ "</td>";
      row = row + "<td>" + users[i].unitspcbb+ "</td>";
      row = row + "<td>" + users[i].unitsppcs+ "</td>";
      
      row = row + "<td>" + users[i].awprice+ "</td>";
      row = row + "<td>" + users[i].taxvalue+ "</td>";
      row = row + "<td>" + users[i].status+ "</td>";
      row = row + "<td>" + users[i].casevalue+ "</td>";
     row = row + "</tr>";
    tableHtml = tableHtml + row;
}
tableHtml=tableHtml+"</table>";
$("#table").html(tableHtml) ;  
}
