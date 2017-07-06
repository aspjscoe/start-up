$(document).ready(onReady);
function onReady() {
    $.get("http://127.0.0.1:8081/banklist", onGetUsers);
    $("#save-button").click(onSaveButtonClick);
    $("#update-button").click(onUpdateButtonClick);
    $("#delete-button").click(onDeleteButtonClick);
}

function onDeleteButtonClick() {
    var id = $("#id").val();
    var requestParams = {
        url: "http://127.0.0.1:8081/banklist/" + id,
        method: "DELETE",
        data: id,
        success: onDeletebanklist,
        error: onError
    };
    $.ajax(requestParams);
}

function onDeletebanklist(result) {
    var banklist = result;
    createTable(banklist);
}


function onUpdateButtonClick() {
    var user = {
        id: $("#id").val(),
        bankname: $("#bankname").val(),
        accountno: $("#accountno").val(),
        accountname: $("#accountname").val(),
        branch: $("#branch").val(),
        openingbalance: $("#openingbalance").val()
    };
    var requestParams = {
        url: "http://127.0.0.1:8081/banklist/" + user.id,
        method: "PUT",
        data: user,
        success: onPutbanklist,
        error: onError
    };
    $.ajax(requestParams);
}
function onPutbanklist(result) {
    var banklist = result;
    createTable(banklist)
}
function onError(result) {
    window.alert(result.responseText);
}


function onSaveButtonClick() {

    var user = {
        id: $("#id").val(),
        bankname: $("#bankname").val(),
        accountno: $("#accountno").val(),
        accountname: $("#accountname").val(),
        branch: $("#branch").val(),
        openingbalance: $("#openingbalance").val()
    }
    $.post("http://127.0.0.1:8081/banklist", user, onPostUsers);
}
function onPostUsers(result) {
    var banklist = result;
    createTable(banklist);
}

function onGetUsers(result) {
    var banklist = result;
    createTable(banklist);
}
function createTable(banklist) {
    var tableHtml = "<tr><td>Id</td><td>Bankname</td><td>Accountno</td><td>Accountname</td><td>Branch</td><td>Openingbalance</td></tr>";
    for (var i = 0; i < banklist.length; i++) {
        var row = "<tr>";
        row = row + "<td>" + banklist[i].id + "</td>";
        row = row + "<td>" + banklist[i].bankname + "</td>";
        row = row + "<td>" + banklist[i].accountno + "</td>";
        row = row + "<td>" + banklist[i].accountname + "</td>";
        row = row + "<td>" + banklist[i].branch + "</td>";
        row = row + "<td>" + banklist[i].openingbalance + "</td>";
        row = row + "<td><input type='button' value='Edit' onclick='onEdit(\"" + banklist[i].id + "\")' /></td>";
        row = row + "</tr>";
        tableHtml = tableHtml + row;
    }
    tableHtml = tableHtml + "</table>";
    $("#table").html(tableHtml);
}
function onEdit(userId) {
    var requestParams = {
        url: "http://127.0.0.1:8081/banklist/" + userId,
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
    $("#bankname").val(user.bankname);
    $("#accountno").val(user.accountno);
    $("#accountname").val(user.accountname);
    $("#branch").val(user.branch);
    $("#openingbalance").val(user.openingbalance);
}