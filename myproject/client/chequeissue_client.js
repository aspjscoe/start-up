$(document).ready(onReady);
function onReady() {
    $.get("http://127.0.0.1:8081/chequeissue", onGetUsers);
    $("#save-button").click(onSaveButtonClick);
    $("#update-button").click(onUpdateButtonClick);
    $("#delete-button").click(onDeleteButtonClick);
}

function onDeleteButtonClick() {
    var id = $("#id").val();
    var requestParams = {
        url: "http://127.0.0.1:8081/chequeissue/" + id,
        method: "DELETE",
        data: id,
        success: onDeletechequeissue,
        error: onError
    };
    $.ajax(requestParams);
}

function onDeletechequeissue(result) {
    var chequeissue = result;
    createTable(chequeissue);
}


function onUpdateButtonClick() {
    var user = {

        id: $("#id").val(),
        SuppName: $("#SuppName").val(),
        SupID: $("#SupID").val(),
        Bank: $("#Bank").val(),
        AccountNumber: $("#AccountNumber").val(),
        CheckDate: $("#CheckDate").val(),
        CheckNumber: $("#CheckNumber").val(),
        Amount: $("#Amount").val(),
    };
    var requestParams = {
        url: "http://127.0.0.1:8081/chequeissue/" + user.id,
        method: "PUT",
        data: user,
        success: onPutchequeissue,
        error: onError
    };
    $.ajax(requestParams);
}
function onPutchequeissue(result) {
    var chequeissue = result;
    createTable(chequeissue)
}
function onError(result) {
    window.alert(result.responseText);
}


function onSaveButtonClick() {

    var user = {
        id: $("#id").val(),
        SuppName: $("#SuppName").val(),
        SupID: $("#SupID").val(),
        Bank: $("#Bank").val(),
        AccountNumber: $("#AccountNumber").val(),
        CheckDate: $("#CheckDate").val(),
        CheckNumber: $("#CheckNumber").val(),
        Amount: $("#Amount").val(),


    }
    $.post("http://127.0.0.1:8081/chequeissue", user, onPostUsers);
}
function onPostUsers(result) {
    var chequeissue = result;
    createTable(chequeissue);
}

function onGetUsers(result) {
    var chequeissue = result;
    createTable(chequeissue);
}
function createTable(chequeissue) {
    var tableHtml = "<tr><td>Id</td><td>Date</td><td>Eid</td><td>Reason</td><td>Amount</td></tr>";
    for (var i = 0; i < chequeissue.length; i++) {
        var row = "<tr>";
        row = row + "<td>" + chequeissue[i].id + "</td>";
        row = row + "<td>" + chequeissue[i].SuppName + "</td>";
        row = row + "<td>" + chequeissue[i].SupID + "</td>";
        row = row + "<td>" + chequeissue[i].Bank + "</td>";
        row = row + "<td>" + chequeissue[i].AccountNumber + "</td>";
        row = row + "<td>" + chequeissue[i].CheckDate + "</td>";
        row = row + "<td>" + chequeissue[i].CheckNumber + "</td>";
        row = row + "<td>" + chequeissue[i].Amount + "</td>";


        row = row + "<td><input type='button' value='Edit' onclick='onEdit(\"" + chequeissue[i].id + "\")' /></td>";
        row = row + "</tr>";
        tableHtml = tableHtml + row;
    }
    tableHtml = tableHtml + "</table>";
    $("#table").html(tableHtml);
}

function onEdit(userId) {
    var requestParams = {
        url: "http://127.0.0.1:8081/chequeissue/" + userId,
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
    $("#SuppName").val(user.SuppName);
    $("#SupID").val(user.SupID);
    $("#Bank").val(user.Bank);
    $("#AccountNumber").val(user.AccountNumber);
    $("#CheckDate").val(user.CheckDate);
    $("#CheckNumber").val(user.CheckNumber);
    $("#Amount").val(user.Amount);

}