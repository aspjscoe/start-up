$(document).ready(onReady);
function onReady() {
    $.get("http://127.0.0.1:8081/brands", onGetUsers);
    $("#save-button").click(onSaveButtonClick);
    $("#update-button").click(onUpdateButtonClick);
    $("#delete-button").click(onDeleteButtonClick);
}

function onDeleteButtonClick() {
    var id = $("#id").val();
    var requestParams = {
        url: "http://127.0.0.1:8081/brands/" + id,
        method: "DELETE",
        data: id,
        success: onDeletebrands,
        error: onError
    };
    $.ajax(requestParams);
}

function onDeletebrands(result) {
    var brands = result;
    createTable(brands);
}


function onUpdateButtonClick() {
    var user = {
        id: $("#id").val(),
        code: $("#code").val(),
        name: $("#name").val(),
        status: $("#status").val()
    };
    var requestParams = {
        url: "http://127.0.0.1:8081/brands/" + user.id,
        method: "PUT",
        data: user,
        success: onPutbrands,
        error: onError
    };
    $.ajax(requestParams);
}
function onPutbrands(result) {
    var brands = result;
    createTable(brands)
}
function onError(result) {
    window.alert(result.responseText);
}


function onSaveButtonClick() {

    var user = {
        id: $("#id").val(),
        code: $("#code").val(),
        name: $("#name").val(),
        status: $("#status").val()

    }
    $.post("http://127.0.0.1:8081/brands", user, onPostbrands);
}
function onPostbrands(result) {
    var brands = result;
    createTable(brands);
}

function onGetUsers(result) {
    var brands = result;
    createTable(brands);
}
function createTable(brands) {
    var tableHtml = "<tr><td>ID</td><td>code</td><td>name</td><td>status</td></tr>";
    for (var i = 0; i < brands.length; i++) {
        var row = "<tr>";
        row = row + "<td>" + brands[i].id + "</td>";
        row = row + "<td>" + brands[i].code + "</td>";
        row = row + "<td>" + brands[i].name + "</td>";
        row = row + "<td>" + brands[i].status + "</td>";
        row = row + "<td><input type='button' value='Edit' onclick='onEdit(\"" + brands[i].id + "\")' /></td>";
        row = row + "</tr>";
        tableHtml = tableHtml + row;
    }
    tableHtml = tableHtml + "</table>";
    $("#table").html(tableHtml);
}
function onEdit(userId) {
    var requestParams = {
        url: "http://127.0.0.1:8081/brands/" + userId,
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

    $("#code").val(user.code);
    $("#name").val(user.name);
    $("#status").val(user.status);
}