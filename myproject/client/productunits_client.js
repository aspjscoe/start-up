$(document).ready(onReady);
function onReady(){
    $.get("http://127.0.0.1:8081/productunits",onGetUsers);
    $("#save-button").click(onSaveButtonClick);
}

function onSaveButtonClick(){

    var user={
        id:$("#id").val(),
         pid:$("#pid").val(),
        unit:$("#unit").val(),
        qty:$("#qty").val(),
        nxtunit:$("#nxtunit").val(),
         pdefault:$("#pdefault").val(),
          sdefault:$("#sdefault").val()
          
    }
    $.post("http://127.0.0.1:8081/productunits",user,onPostUsers);
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
        var tableHtml= "<tr><td>ID</td><td>pid</td><td>unit</td><td>qty</td><td>nxtunit</td><td>pdefault</td><td>sdefault</td></tr>";
for (var i=0;i<users.length;i++){
     var row = "<tr>";
     row = row + "<td>" + users[i].id + "</td>";
         row = row + "<td>" + users[i].pid + "</td>";
    row = row + "<td>" + users[i].unit + "</td>";
     row = row + "<td>" + users[i].qty+ "</td>";
      row = row + "<td>" + users[i].nxtunit+ "</td>";
      row = row + "<td>" + users[i].pdefault+ "</td>";
        row = row + "<td>" + users[i].sdefault+ "</td>";
    
          
     row = row + "</tr>";
    tableHtml = tableHtml + row;
}
tableHtml=tableHtml+"</table>";
$("#table").html(tableHtml) ;  
}
