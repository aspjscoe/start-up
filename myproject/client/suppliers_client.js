$(document).ready(onReady);
function onReady(){
    $.get("http://127.0.0.1:8081/suppliers",onGetUsers);
    $("#save-button").click(onSaveButtonClick);
}

function onSaveButtonClick(){

    var user={
        id:$("#id").val(),
         code:$("#code").val(),
        name:$("#name").val(),
        email:$("#email").val(),
        address:$("#address").val(),
         districtid:$("#districtid").val(),
          towncode:$("#towncode").val(),
           pincode:$("#pincode").val(),
            statecode:$("#statecode").val(),
             mobileno:$("#mobileno").val(),
              landline:$("#landline").val(),
               lst:$("#lst").val(),
                cst:$("#cst").val(),
                 status:$("#status").val(),
                  type:$("#type").val()
               
    }
    $.post("http://127.0.0.1:8081/suppliers",user,onPostUsers);
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
        var tableHtml= "<tr><td>ID</td><td>code</td><td>name</td><td>email</td><td>address</td><td>districtid</td><td>towncode</td><td>pincode</td><td>statecode</td><td>mobileno</td><td>landline</td><td>lst</td><td>cst</td><td>status</td><td>type</td></tr>";
for (var i=0;i<users.length;i++){
     var row = "<tr>";
     row = row + "<td>" + users[i].id + "</td>";
         row = row + "<td>" + users[i].code + "</td>";
    row = row + "<td>" + users[i].name + "</td>";
     row = row + "<td>" + users[i].email+ "</td>";
      row = row + "<td>" + users[i].address+ "</td>";
      row = row + "<td>" + users[i].districtid+ "</td>";
        row = row + "<td>" + users[i].towncode+ "</td>";
         row = row + "<td>" + users[i].pincode+ "</td>";
          row = row + "<td>" + users[i].statecode+ "</td>"; 
           row = row + "<td>" + users[i].mobileno+ "</td>";
            row = row + "<td>" + users[i].landline+ "</td>";
             row = row + "<td>" + users[i].lst+ "</td>";
              row = row + "<td>" + users[i].cst+ "</td>";
               row = row + "<td>" + users[i].status+ "</td>";
                row = row + "<td>" + users[i].type+ "</td>";
              
    
          
     row = row + "</tr>";
    tableHtml = tableHtml + row;
}
tableHtml=tableHtml+"</table>";
$("#table").html(tableHtml) ;  
}
