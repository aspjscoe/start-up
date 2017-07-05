$(document).ready(onReady);
function onReady(){
    $.get("http://127.0.0.1:8081/products",onGetUsers);
    $("#save-button").click(onSaveButtonClick);
}

function onSaveButtonClick(){

    var user={
        id:$("#id").val(),
         code:$("#code").val(),
        name:$("#name").val(),
        brandid:$("#brandid").val(),
        varietyid:$("#varietyid").val(),
         netweight:$("#netweight").val(),
          pieceweight:$("#pieceweight").val(),
           days:$("#days").val(),
            rd:$("#rd").val(),
            sd:$("#sd").val(), 
              rt:$("#rt").val(),
        expiry:$("#expiry").val(),
        unitid:$("#unitid").val(),
         pcs:$("#pcs").val(),
          vat:$("#vat").val(),
           pprice:$("#pprice").val(),
            sprice:$("#sprice").val(),
            mrp:$("#mrp").val(),
            techprice:$("#techprice").val()
    }
    $.post("http://127.0.0.1:8081/products",user,onPostUsers);
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
        var tableHtml= "<tr><td>ID</td><td>code</td><td>name</td><td>brandid</td><td>varietyid</td><td>netweight</td><td>pieceweight</td><td>days</td><td>rd</td><td>sd</td><td>rt</td><td>expiry</td><td>unitid</td><td>pcs</td><td>vat</td><td>pprice</td><td>sprice</td><td>mrp</td><td>techprice</td></tr>";
for (var i=0;i<users.length;i++){
     var row = "<tr>";
     row = row + "<td>" + users[i].id + "</td>";
         row = row + "<td>" + users[i].code + "</td>";
    row = row + "<td>" + users[i].name + "</td>";
     row = row + "<td>" + users[i].brandid+ "</td>";
      row = row + "<td>" + users[i].varietyid+ "</td>";
      row = row + "<td>" + users[i].netweight+ "</td>";
        row = row + "<td>" + users[i].pieceweight+ "</td>";
      row = row + "<td>" + users[i].days+ "</td>";
      row = row + "<td>" + users[i].rd+ "</td>";
      row = row + "<td>" + users[i].sd+ "</td>";
          row = row + "<td>" + users[i].rt + "</td>";
     row = row + "<td>" + users[i].expiry+ "</td>";
      row = row + "<td>" + users[i].unitid+ "</td>";
      row = row + "<td>" + users[i].pcs+ "</td>";
        row = row + "<td>" + users[i].vat+ "</td>";
      row = row + "<td>" + users[i].pprice+ "</td>";
      row = row + "<td>" + users[i].sprice+ "</td>";
      row = row + "<td>" + users[i].mrp+ "</td>";
       row = row + "<td>" + users[i].techprice+ "</td>";
     row = row + "</tr>";
    tableHtml = tableHtml + row;
}
tableHtml=tableHtml+"</table>";
$("#table").html(tableHtml) ;  
}
