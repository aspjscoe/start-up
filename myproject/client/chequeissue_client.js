$(document).ready(onReady);
function onReady(){
    $.get("http://127.0.0.1:8081/chequeissue",onGetUsers);
    $("#save-button").click(onSaveButtonClick);
}

function onSaveButtonClick(){

    var user={
        id:$("#id").val(),
        SuppName:$("#SuppName").val(),
        SupID:$("#SupID").val(),
        Bank:$("#Bank").val(),
         AccountNumber:$("#AccountNumber").val(),
          CheckDate:$("#CheckDate").val(),
           CheckNumber:$("#CheckNumber").val(),
            Amount:$("#Amount").val()
    }
    $.post("http://127.0.0.1:8081/chequeissue",user,onPostUsers);
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
        var tableHtml= "<tr><td>ID</td><td>SuppName</td><td>SupID</td><td>Bank</td><td>AccountNumber</td><td>CheckDate</td><td>CheckNumber</td><td>Amount</td></tr>";
for (var i=0;i<users.length;i++){
     var row = "<tr>";
     row = row + "<td>" + users[i].id + "</td>";
    row = row + "<td>" + users[i].SuppName + "</td>";
     row = row + "<td>" + users[i].SupID+ "</td>";
      row = row + "<td>" + users[i].Bank+ "</td>";
      row = row + "<td>" + users[i].AccountNumber+ "</td>";
      
      row = row + "<td>" + users[i].CheckDate+ "</td>";
      row = row + "<td>" + users[i].CheckNumber+ "</td>";
      row = row + "<td>" + users[i].Amount+ "</td>";
     row = row + "</tr>";
    tableHtml = tableHtml + row;
}
tableHtml=tableHtml+"</table>";
$("#table").html(tableHtml) ;  
}
