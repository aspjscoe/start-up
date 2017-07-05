$(document).ready(onReady);
function onReady(){
    $.get("http://127.0.0.1:8081/purchaselist",onGetUsers);
    $("#save-button").click(onSaveButtonClick);
}

function onSaveButtonClick(){

    var user={
        id:$("#id").val(),
         pid:$("#pid").val(),
        pcode:$("#pcode").val(),
        batchno:$("#batchno").val(),
        cbbsize:$("#cbbsize").val(),
         qtycbb:$("#qtycbb").val(),
          qtyinpcs:$("#qtyinpcs").val(),
       
            value:$("#value").val(),
             rate:$("#rate").val(),
              taxcode:$("#taxcode").val(),
               mrp:$("#mrp").val(),
                packeddate:$("#packeddate").val(),
                 expiryperiod:$("#expiryperiod").val(),
                  expirydate:$("#expirydate").val(),
                    qtyrecd:$("#qtyrecd").val(),
                      qtymissedcbb:$("#qtymissedcbb").val(),
                        qtymissedpcs:$("#qtymissedpcs").val(),
                        qtydamagedcbb:$("#qtydamagedcbb").val(),
                          qtydamagedpcs:$("#qtydamagedpcs").val(),
                            reason:$("#reason").val(),
                              goodtype:$("#goodtype").val(),
                                netwt:$("#netwt").val()
                            
          
    }
    $.post("http://127.0.0.1:8081/purchaselist",user,onPostUsers);
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
        var tableHtml= "<tr><td>ID</td><td>pid</td><td>pcode</td><td>batchno</td><td>cbbsize</td><td>qtycbb</td><td>qtyinpcs</td><td>value</td><td>rate</td><td>taxcode</td><td>mrp</td><td>packeddate</td><td>expiryperiod</td><td>expirydate</td><td>qtyrecd</td><td>qtymissedcbb</td><td>qtymissedpcs</td><td>qtydamagedcbb</td><td>qtydamagedpcs</td><td>reason</td><td>goodtype</td><td>netwt</td></tr>";
for (var i=0;i<users.length;i++){
     var row = "<tr>";
     row = row + "<td>" + users[i].id + "</td>";
         row = row + "<td>" + users[i].pid + "</td>";
    row = row + "<td>" + users[i].pcode + "</td>";
     row = row + "<td>" + users[i].batchno+ "</td>";
      row = row + "<td>" + users[i].cbbsize+ "</td>";
      row = row + "<td>" + users[i].qtycbb+ "</td>";
        row = row + "<td>" + users[i].qtyinpcs+ "</td>";
         row = row + "<td>" + users[i].value+ "</td>";
          row = row + "<td>" + users[i].rate+ "</td>"; 
           row = row + "<td>" + users[i].taxcode+ "</td>";
            row = row + "<td>" + users[i].mrp+ "</td>";
             row = row + "<td>" + users[i].packeddate+ "</td>";
              row = row + "<td>" + users[i].expiryperiod+ "</td>";
               row = row + "<td>" + users[i].expirydate+ "</td>";
 row = row + "<td>" + users[i].qtyrecd+ "</td>";
 row = row + "<td>" + users[i].qtymissedcbb+ "</td>";
 row = row + "<td>" + users[i].qtymissedpcs+ "</td>";
 row = row + "<td>" + users[i].qtydamagedcbb+ "</td>";
 row = row + "<td>" + users[i].qtydamagedpcs+ "</td>";
 row = row + "<td>" + users[i].reason+ "</td>";
  row = row + "<td>" + users[i].goodtype+ "</td>";
   row = row + "<td>" + users[i].netwt+ "</td>";
 

    
          
     row = row + "</tr>";
    tableHtml = tableHtml + row;
}
tableHtml=tableHtml+"</table>";
$("#table").html(tableHtml) ;  
}
