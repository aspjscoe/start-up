$(document).ready(onReady);
function onReady() {
    $.get("http://127.0.0.1:8081/logdetails", onGetUsers);
    $("#save-button").click(onSaveButtonClick);
    $("#update-button").click(onUpdateButtonClick);
    $("#delete-button").click(onDeleteButtonClick);
}

function onDeleteButtonClick() {
    var id = $("#id").val();
    var requestParams = {
        url: "http://127.0.0.1:8081/logdetails/" + id,
        method: "DELETE",
        data: id,
        success: onDeletelogdetails,
        error: onError
    };
    $.ajax(requestParams);
}

function onDeletelogdetails(result) {
    var logdetails = result;
    createTable(logdetails);
}


function onUpdateButtonClick() {
    var user = {
        id: $("#id").val(),
        date: $("#date").val(),

        UserID: $("#UserID").val(),
        TimeIn: $("#TimeIn").val(),
        TimeOut: $("#TimeOut").val()
    };
    var requestParams = {
        url: "http://127.0.0.1:8081/logdetails/" + user.id,
        method: "PUT",
        data: user,
        success: onPutlogdetails,
        error: onError
    };
    $.ajax(requestParams);
}
function onPutlogdetails(result) {
    var logdetails = result;
    createTable(logdetails)
}
function onError(result) {
    window.alert(result.responseText);
}



function onSaveButtonClick() {

    var user = {
        id: $("#id").val(),
        date: $("#date").val(),

        UserID: $("#UserID").val(),
        TimeIn: $("#TimeIn").val(),
        TimeOut: $("#TimeOut").val()
    }
    $.post("http://127.0.0.1:8081/logdetails", user, onPostUsers);
}
function onPostUsers(result) {
    var logdetails = result;
    createTable(logdetails);
}

function onGetUsers(result) {
    var logdetails = result;
    createTable(logdetails);
}
function createTable(logdetails) {
    var tableHtml = "<tr><td>ID</td><td>Date</td><td>UserID</td><td>TimeIn</td><td>TimeOut</td></tr>";
    for (var i = 0; i < logdetails.length; i++) {
        var row = "<tr>";
        row = row + "<td>" + logdetails[i].id + "</td>";
        row = row + "<td>" + logdetails[i].date + "</td>";
        row = row + "<td>" + logdetails[i].UserID + "</td>";
        row = row + "<td>" + logdetails[i].TimeIn + "</td>";
        row = row + "<td>" + logdetails[i].TimeOut + "</td>";
        row = row + "<td><input type='button' value='Edit' onclick='onEdit(\"" + logdetails[i].id + "\")' /></td>";

        row = row + "</tr>";
        tableHtml = tableHtml + row;
    }
    tableHtml = tableHtml + "</table>";
    $("#table").html(tableHtml);
}
function onEdit(userId) {
    var requestParams = {
        url: "http://127.0.0.1:8081/logdetails/" + userId,
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
    $("#UserID").val(user.UserID);
    $("#TimeIn").val(user.TimeIn);
    $("#TimeOut").val(user.TimeOut);
}