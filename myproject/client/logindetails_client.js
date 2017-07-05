$(document).ready(onReady);
function onReady(){
    $.get("http://127.0.0.1:8081/logindetails",onGetUsers);
    $("#save-button").click(onSaveButtonClick);
}

function onSaveButtonClick(){

    var user={
        id:$("#id").val(),
        UserType:$("#UserType").val(),
        
        Name:$("#Name").val(),
         UserName:$("#UserName").val(),
         Password:$("#Password").val(),
          mailid:$("#mailid").val()
    }
    $.post("http://127.0.0.1:8081/logindetails",user,onPostUsers);
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
        var tableHtml= "<tr><td>ID</td><td>UserType</td><td>Name</td><td>UserName</td><td>Password</td><td>mailid</td></tr>";
for (var i=0;i<users.length;i++){
     var row = "<tr>";
     row = row + "<td>" + users[i].id + "</td>";
    row = row + "<td>" + users[i].UserType + "</td>";
      row = row + "<td>" + users[i].Name + "</td>";
      row = row + "<td>" + users[i].UserName+ "</td>";
      row = row + "<td>" + users[i].Password+ "</td>";
       row = row + "<td>" + users[i].mailid+ "</td>";
     row = row + "</tr>";
    tableHtml = tableHtml + row;
}
tableHtml=tableHtml+"</table>";
$("#table").html(tableHtml) ;  
}
