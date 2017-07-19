$(document).ready(onReady);
function onReady() {
    $.get("http://127.0.0.1:8081/carpentercommisionlist", onGetUsers);
    $("#save-button").click(onSaveButtonClick);
    $("#update-button").click(onUpdateButtonClick);
    $("#delete-button").click(onDeleteButtonClick);
}


function onDeleteButtonClick() {
    var id = $("#id").val();
    var requestParams = {
        url: "http://127.0.0.1:8081/carpentercommisionlist/" + id,
        method: "DELETE",
        data: id,
        success: onDeletecarpentercommisionlist,
        error: onError
    };
    $.ajax(requestParams);
}

function onDeletecarpentercommisionlist(result) {
    var carpentercommisionlist = result;
    createTable(carpentercommisionlist);
}


function onUpdateButtonClick() {
    var user = {
        id: $("#id").val(),
        cid: $("#cid").val(),
        billno: $("#billno").val()
    };
    var requestParams = {
        url: "http://127.0.0.1:8081/carpentercommisionlist/" + user.id,
        method: "PUT",
        data: user,
        success: onPutcarpentercommisionlist,
        error: onError
    };
    $.ajax(requestParams);
}
function onPutcarpentercommisionlist(result) {
    var carpentercommisionlist = result;
    createTable(carpentercommisionlist)
}
function onError(result) {
    window.alert(result.responseText);
}


function onSaveButtonClick() {

    var user = {
        id: $("#id").val(),
        cid: $("#cid").val(),
        billno: $("#billno").val()

    }
    $.post("http://127.0.0.1:8081/carpentercommisionlist", user, onPostUsers);
}
function onPostUsers(result) {
    var carpentercommisionlist = result;
    createTable(carpentercommisionlist);
}

function onGetUsers(result) {
    var carpentercommisionlist = result;
    createTable(carpentercommisionlist);
}
function createTable(carpentercommisionlist) {
    var tableHtml = "<tr><td>ID</td><td>cid</td><td>billno</td></tr>";
    for (var i = 0; i < carpentercommisionlist.length; i++) {
        var row = "<tr>";
        row = row + "<td>" + carpentercommisionlist[i].id + "</td>";
        row = row + "<td>" + carpentercommisionlist[i].cid + "</td>";
        row = row + "<td>" + carpentercommisionlist[i].billno + "</td>";
        row = row + "<td><input type='button' value='Edit' onclick='onEdit(\"" + carpentercommisionlist[i].id + "\")'/></td>";
        row = row + "</tr>";
        tableHtml = tableHtml + row;
    }
    tableHtml = tableHtml + "</table>";
    $("#table").html(tableHtml);
}
function onEdit(userId) {
    var requestParams = {
        url: "http://127.0.0.1:8081/carpentercommisionlist/" + userId,
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

    $("#cid").val(user.cid);
    $("#billno").val(user.billno);
}