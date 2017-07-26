$(document).ready(onReady);
function onReady() {
  $.get("http://127.0.0.1:8081/purchaselist", onGetUsers);
  $("#save-button").click(onSaveButtonClick);
  $("#update-button").click(onUpdateButtonClick);
  $("#delete-button").click(onDeleteButtonClick);
}

function onDeleteButtonClick() {
  var id = $("#id").val();
  var requestParams = {
    url: "http://127.0.0.1:8081/purchaselist/" + id,
    method: "DELETE",
    data: id,
    success: onDeletepurchaselist,
    error: onError
  };
  $.ajax(requestParams);
}

function onDeletepurchaselist(result) {
  var purchaselist = result;
  createTable(purchaselist);
}



function onUpdateButtonClick() {
  var user = {
    id: $("#id").val(),
    pid: $("#pid").val(),
    pcode: $("#pcode").val(),
    batchno: $("#batchno").val(),
    cbbsize: $("#cbbsize").val(),
    qtycbb: $("#qtycbb").val(),
    qtyinpcs: $("#qtyinpcs").val(),

    value: $("#value").val(),
    rate: $("#rate").val(),
    taxcode: $("#taxcode").val(),
    mrp: $("#mrp").val(),
    packeddate: $("#packeddate").val(),
    expiryperiod: $("#expiryperiod").val(),
    expirydate: $("#expirydate").val(),
    qtyrecd: $("#qtyrecd").val(),
    qtymissedcbb: $("#qtymissedcbb").val(),
    qtymissedpcs: $("#qtymissedpcs").val(),
    qtydamagedcbb: $("#qtydamagedcbb").val(),
    qtydamagedpcs: $("#qtydamagedpcs").val(),
    reason: $("#reason").val(),
    goodtype: $("#goodtype").val(),
    netwt: $("#netwt").val()
  };
  var requestParams = {
    url: "http://127.0.0.1:8081/purchaselist/" + user.id,
    method: "PUT",
    data: user,
    success: onPutpurchaselist,
    error: onError
  };
  $.ajax(requestParams);
}
function onPutpurchaselist(result) {
  var purchaselist = result;
  createTable(purchaselist)
}
function onError(result) {
  window.alert(result.responseText);
}

function onSaveButtonClick() {

  var user = {
    id: $("#id").val(),
    pid: $("#pid").val(),
    pcode: $("#pcode").val(),
    batchno: $("#batchno").val(),
    cbbsize: $("#cbbsize").val(),
    qtycbb: $("#qtycbb").val(),
    qtyinpcs: $("#qtyinpcs").val(),

    value: $("#value").val(),
    rate: $("#rate").val(),
    taxcode: $("#taxcode").val(),
    mrp: $("#mrp").val(),
    packeddate: $("#packeddate").val(),
    expiryperiod: $("#expiryperiod").val(),
    expirydate: $("#expirydate").val(),
    qtyrecd: $("#qtyrecd").val(),
    qtymissedcbb: $("#qtymissedcbb").val(),
    qtymissedpcs: $("#qtymissedpcs").val(),
    qtydamagedcbb: $("#qtydamagedcbb").val(),
    qtydamagedpcs: $("#qtydamagedpcs").val(),
    reason: $("#reason").val(),
    goodtype: $("#goodtype").val(),
    netwt: $("#netwt").val()


  }
  $.post("http://127.0.0.1:8081/purchaselist", user, onPostUsers);
}
function onPostUsers(result) {
  var purchaselist = result;
  createTable(purchaselist);
}

function onGetUsers(result) {
  var purchaselist = result;
  createTable(purchaselist);
}
function createTable(purchaselist) {
  var tableHtml = "<tr><td>ID</td><td>pid</td><td>pcode</td><td>batchno</td><td>cbbsize</td><td>qtycbb</td><td>qtyinpcs</td><td>value</td><td>rate</td><td>taxcode</td><td>mrp</td><td>packeddate</td><td>expiryperiod</td><td>expirydate</td><td>qtyrecd</td><td>qtymissedcbb</td><td>qtymissedpcs</td><td>qtydamagedcbb</td><td>qtydamagedpcs</td><td>reason</td><td>goodtype</td><td>netwt</td></tr>";
  for (var i = 0; i < purchaselist.length; i++) {
    var row = "<tr>";
    row = row + "<td>" + purchaselist[i].id + "</td>";
    row = row + "<td>" + purchaselist[i].pid + "</td>";
    row = row + "<td>" + purchaselist[i].pcode + "</td>";
    row = row + "<td>" + purchaselist[i].batchno + "</td>";
    row = row + "<td>" + purchaselist[i].cbbsize + "</td>";
    row = row + "<td>" + purchaselist[i].qtycbb + "</td>";
    row = row + "<td>" + purchaselist[i].qtyinpcs + "</td>";
    row = row + "<td>" + purchaselist[i].value + "</td>";
    row = row + "<td>" + purchaselist[i].rate + "</td>";
    row = row + "<td>" + purchaselist[i].taxcode + "</td>";
    row = row + "<td>" + purchaselist[i].mrp + "</td>";
    row = row + "<td>" + purchaselist[i].packeddate + "</td>";
    row = row + "<td>" + purchaselist[i].expiryperiod + "</td>";
    row = row + "<td>" + purchaselist[i].expirydate + "</td>";
    row = row + "<td>" + purchaselist[i].qtyrecd + "</td>";
    row = row + "<td>" + purchaselist[i].qtymissedcbb + "</td>";
    row = row + "<td>" + purchaselist[i].qtymissedpcs + "</td>";
    row = row + "<td>" + purchaselist[i].qtydamagedcbb + "</td>";
    row = row + "<td>" + purchaselist[i].qtydamagedpcs + "</td>";
    row = row + "<td>" + purchaselist[i].reason + "</td>";
    row = row + "<td>" + purchaselist[i].goodtype + "</td>";
    row = row + "<td>" + purchaselist[i].netwt + "</td>";
    row = row + "<td><input type='button' value='Edit' onclick='onEdit(\"" + purchaselist[i].id + "\")' /></td>";

    row = row + "</tr>";
    tableHtml = tableHtml + row;
  }
  tableHtml = tableHtml + "</table>";
  $("#table").html(tableHtml);
}
function onEdit(userId) {
  var requestParams = {
    url: "http://127.0.0.1:8081/purchaselist/" + userId,
    method: "GET",
    success: onGetUser,
    error: onError
  };
  $.ajax(requestParams);
}
function onError(result) {
  window.alert(result.responseText);
}
function onGetUser(result) {
  var user = result;
  updateTextboxes(user);
}
function updateTextboxes(user) {
  $("#id").val(user.id);

  $("#pid").val(user.pid);
  $("#pcode").val(user.pcode);
  $("#batchno").val(user.batchno);
  $("#cbbsize").val(user.cbbsize);
  $("#qtycbb").val(user.qtycbb);
  $("#qtyinpcs").val(user.qtyinpcs);

  $("#value").val(user.value);
  $("#rate").val(user.rate);
  $("#taxcode").val(user.taxcode);
  $("#mrp").val(user.mrp);
  $("#packeddate").val(user.packeddate);
  $("#expiryperiod").val(user.expiryperiod);
  $("#expirydate").val(user.expirydate);
  $("#qtyrecd").val(user.qtyrecd);
  $("#qtymissedcbb").val(user.qtymissedcbb);
  $("#qtymissedpcs").val(user.qtymissedpcs);
  $("#qtydamagedcbb").val(user.qtydamagedcbb);
  $("#qtydamagedpcs").val(user.qtydamagedpcs);
  $("#reason").val(user.reason);
  $("#goodtype").val(user.goodtype);
  $("#netwt").val(user.netwt);

}