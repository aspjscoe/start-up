$(document).ready(onReady);
function onReady() {
    $.get("http://127.0.0.1:8081/defaultvalues", onGetUsers);
    $("#save-button").click(onSaveButtonClick);
    $("#update-button").click(onUpdateButtonClick);
    $("#delete-button").click(onDeleteButtonClick);
}

function onDeleteButtonClick() {
    var id = $("#id").val();
    var requestParams = {
        url: "http://127.0.0.1:8081/defaultvalues/" + id,
        method: "DELETE",
        data: id,
        success: onDeletedefaultvalues,
        error: onError
    };
    $.ajax(requestParams);
}

function onDeletedefaultvalues(result) {
    var defaultvalues = result;
    createTable(defaultvalues);
}


function onUpdateButtonClick() {
    var user = {
        id: $("#id").val(),
        vat: $("#vat").val()
    };
    var requestParams = {
        url: "http://127.0.0.1:8081/defaultvalues/" + user.id,
        method: "PUT",
        data: user,
        success: onPutdefaultvalues,
        error: onError
    };
    $.ajax(requestParams);
}
function onPutdefaultvalues(result) {
    var defaultvalues = result;
    createTable(defaultvalues)
}
function onError(result) {
    window.alert(result.responseText);
}


function onSaveButtonClick() {

    var user = {
        id: $("#id").val(),
        vat: $("#vat").val()

    }
    $.post("http://127.0.0.1:8081/defaultvalues", user, onPostUsers);
}
function onPostUsers(result) {
    var defaultvalues = result;
    createTable(defaultvalues);
}

function onGetUsers(result) {
    var defaultvalues = result;
    createTable(defaultvalues);
}
function createTable(defaultvalues) {
    var tableHtml = "<tr><td>ID</td><td>vat</td></tr>";
    for (var i = 0; i < defaultvalues.length; i++) {
        var row = "<tr>";
        row = row + "<td>" + defaultvalues[i].id + "</td>";
        row = row + "<td>" + defaultvalues[i].vat + "</td>";

        row = row + "<td><input type='button' value='Edit' onclick='onEdit(\"" + defaultvalues[i].id + "\")' /></td>";
        row = row + "</tr>";
        tableHtml = tableHtml + row;
    }
    tableHtml = tableHtml + "</table>";
    $("#table").html(tableHtml);
}
function onEdit(userId) {
    var requestParams = {
        url: "http://127.0.0.1:8081/defaultvalues/" + userId,
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

    $("#vat").val(user.vat);

}