$(document).ready(onReady);
function onReady() {
    $.get("http://127.0.0.1:8081/units", onGetUsers);
    $("#save-button").click(onSaveButtonClick);
    $("#update-button").click(onUpdateButtonClick);
    $("#delete-button").click(onDeleteButtonClick);
}

function onDeleteButtonClick() {
    var id = $("#id").val();
    var requestParams = {
        url: "http://127.0.0.1:8081/units/" + id,
        method: "DELETE",
        data: id,
        success: onDeleteunits,
        error: onError
    };
    $.ajax(requestParams);
}

function onDeleteunits(result) {
    var units = result;
    createTable(units);
}



function onUpdateButtonClick() {
    var user = {
        id: $("#id").val(),
        unit: $("#unit").val()
    };
    var requestParams = {
        url: "http://127.0.0.1:8081/units/" + user.id,
        method: "PUT",
        data: user,
        success: onPutunits,
        error: onError
    };
    $.ajax(requestParams);
}
function onPutunits(result) {
    var units = result;
    createTable(units)
}
function onError(result) {
    window.alert(result.responseText);
}



function onSaveButtonClick() {

    var user = {
        id: $("#id").val(),
        unit: $("#unit").val()


    }
    $.post("http://127.0.0.1:8081/units", user, onPostUsers);
}
function onPostUsers(result) {
    var units = result;
    createTable(units);
}

function onGetUsers(result) {
    var units = result;
    createTable(units);
}
function createTable(units) {
    var tableHtml = "<tr><td>ID</td><td>unit</td></tr>";
    for (var i = 0; i < units.length; i++) {
        var row = "<tr>";
        row = row + "<td>" + units[i].id + "</td>";
        row = row + "<td>" + units[i].unit + "</td>";

        row = row + "<td><input type='button' value='Edit' onclick='onEdit(\"" + units[i].id + "\")' /></td>";



        row = row + "</tr>";
        tableHtml = tableHtml + row;
    }
    tableHtml = tableHtml + "</table>";
    $("#table").html(tableHtml);
}
function onEdit(userId) {
    var requestParams = {
        url: "http://127.0.0.1:8081/units/" + userId,
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

    $("#unit").val(user.unit);

}