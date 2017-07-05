$(document).ready(onReady);
function onReady(){
    $.get("http://127.0.0.1:8081/advance",onGetUsers);
    $("#save-button").click(onSaveButtonClick);
     $("#update-button").click(onUpdateButtonClick);
      $("#delete-button").click(onDeleteButtonClick);
}

function onDeleteButtonClick(){
 var id=$("#id").val();
        var requestParams={
        url:"http://127.0.0.1:8081/advance/"+id,
        method:"DELETE",
        data:id,
        success:onDeleteUsers,
        error:onError
  };  
$.ajax(requestParams);
}

function onDeleteUsers(result){
    var users=result;
    createTable(users);
}


function onUpdateButtonClick(){
 var user={
        id:$("#id").val(),
        date:$("#date").val(),
        eid:$("#eid").val(),
        reason:$("#reason").val(),
         amount:$("#amount").val()
    };
    var requestParams={
        url:"http://127.0.0.1:8081/advance/"+user.id,
        method:"PUT",
        data:user,
        success:onPutUsers,
        error:onError
  };  
$.ajax(requestParams);
}
function onPutUsers(result){
    var users=result;
    createTable(users)
}
function onError(result){
window.alert(result.responseText);
}

function onSaveButtonClick(){

    var user={
        id:$("#id").val(),
        date:$("#date").val(),
        eid:$("#eid").val(),
        reason:$("#reason").val(),
         amount:$("#amount").val()
    }
    $.post("http://127.0.0.1:8081/advance",user,onPostUsers);
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
        var tableHtml= "<tr><td>ID</td><td>Date</td><td>Eid</td><td>Reason</td><td>Amount</td></tr>";
for (var i=0;i<users.length;i++){
     var row = "<tr>";
     row = row + "<td>" + users[i].id + "</td>";
    row = row + "<td>" + users[i].date + "</td>";
     row = row + "<td>" + users[i].eid+ "</td>";
      row = row + "<td>" + users[i].reason+ "</td>";
      row = row + "<td>" + users[i].amount+ "</td>";
       row = row +"<td><input type='button' value='Edit' onclick='onEdit(\"" + users[i].id +"\")' /></td>" ;
     row = row + "</tr>";
    tableHtml = tableHtml + row;
}
tableHtml=tableHtml+"</table>";
$("#table").html(tableHtml) ;  
}
function onEdit(userId){
    var requestParams={
        url:"http://127.0.0.1:8081/advance/"+userId,
        method:"GET",
        success:onGetUser,
        error:onError
  };
  $.ajax(requestParams);
}
function onError(result){
    window.alert(result.responseText);
}
function onGetUser(result){
    var user=result;
    updateTextboxes(user);
}
function updateTextboxes(user){
   $("#id").val(user.id);
        $("#date").val(user.date);
        $("#eid").val(user.eid);
        $("#reason").val(user.reason);
        $("#amount").val(user.amount);
}