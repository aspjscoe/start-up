$(document).ready(onReady);
function onReady() {
    $.get("http://127.0.0.1:8081/expense", onGetUsers);
    $("#save-button").click(onSaveButtonClick);
    $("#update-button").click(onUpdateButtonClick);
    $("#delete-button").click(onDeleteButtonClick);
}

function onDeleteButtonClick() {
    var id = $("#id").val();
    var requestParams = {
        url: "http://127.0.0.1:8081/expense/" + id,
        method: "DELETE",
        data: id,
        success: onDeleteexpense,
        error: onError
    };
    $.ajax(requestParams);
}

function onDeleteexpense(result) {
    var expense = result;
    createTable(expense);
}


function onUpdateButtonClick() {
    var user = {

        id: $("#id").val(),
        date: $("#date").val(),

        reason: $("#reason").val(),
        amount: $("#amount").val()
    };
    var requestParams = {
        url: "http://127.0.0.1:8081/expense/" + user.id,
        method: "PUT",
        data: user,
        success: onPutexpense,
        error: onError
    };
    $.ajax(requestParams);
}
function onPutexpense(result) {
    var expense = result;
    createTable(expense)
}
function onError(result) {
    window.alert(result.responseText);
}



function onSaveButtonClick() {

    var user = {
        id: $("#id").val(),
        date: $("#date").val(),

        reason: $("#reason").val(),
        amount: $("#amount").val()
    }
    $.post("http://127.0.0.1:8081/expense", user, onPostUsers);
}
function onPostUsers(result) {
    var expense = result;
    createTable(expense);
}

function onGetUsers(result) {
    var expense = result;
    createTable(expense);
}
function createTable(expense) {
    var tableHtml = "<tr><td>ID</td><td>Date</td><td>Reason</td><td>Amount</td></tr>";
    for (var i = 0; i < expense.length; i++) {
        var row = "<tr>";
        row = row + "<td>" + expense[i].id + "</td>";
        row = row + "<td>" + expense[i].date + "</td>";

        row = row + "<td>" + expense[i].reason + "</td>";
        row = row + "<td>" + expense[i].amount + "</td>";
        row = row + "<td><input type='button' value='Edit' onclick='onEdit(\"" + expense[i].id + "\")' /></td>";

        row = row + "</tr>";
        tableHtml = tableHtml + row;
    }
    tableHtml = tableHtml + "</table>";
    $("#table").html(tableHtml);
}
function onEdit(userId) {
    var requestParams = {
        url: "http://127.0.0.1:8081/expense/" + userId,
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

    $("#date").val(user.date);

    $("#reason").val(user.reason);
    $("#amount").val(user.amount);

}