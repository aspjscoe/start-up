$(document).ready(onReady);
function onReady() {
    $.get("http://127.0.0.1:8081/states", onGetUsers);
    $("#save-button").click(onSaveButtonClick);
    $("#update-button").click(onUpdateButtonClick);
    $("#delete-button").click(onDeleteButtonClick);
}

function onDeleteButtonClick() {
    var id = $("#id").val();
    var requestParams = {
        url: "http://127.0.0.1:8081/states/" + id,
        method: "DELETE",
        data: id,
        success: onDeletestates,
        error: onError
    };
    $.ajax(requestParams);
}

function onDeletestates(result) {
    var states = result;
    createTable(states);
}



function onUpdateButtonClick() {
    var user = {
        id: $("#id").val(),

        name: $("#name").val(),
        code: $("#code").val(),
        isapp: $("#isapp").val(),
        rst: $("#rst").val(),
        status: $("#status").val()
    };
    var requestParams = {
        url: "http://127.0.0.1:8081/states/" + user.id,
        method: "PUT",
        data: user,
        success: onPutstates,
        error: onError
    };
    $.ajax(requestParams);
}
function onPutstates(result) {
    var states = result;
    createTable(states)
}
function onError(result) {
    window.alert(result.responseText);
}



function onSaveButtonClick() {

    var user = {
        id: $("#id").val(),

        name: $("#name").val(),
        code: $("#code").val(),
        isapp: $("#isapp").val(),
        rst: $("#rst").val(),
        status: $("#status").val()


    }
    $.post("http://127.0.0.1:8081/states", user, onPostUsers);
}
function onPostUsers(result) {
    var states = result;
    createTable(states);
}

function onGetUsers(result) {
    var states = result;
    createTable(states);
}
function createTable(states) {
    var tableHtml = "<tr><td>ID</td><td>name</td><td>code</td><td>isapp</td><td>rst</td><td>status</td></tr>";
    for (var i = 0; i < states.length; i++) {
        var row = "<tr>";
        row = row + "<td>" + states[i].id + "</td>";

        row = row + "<td>" + states[i].name + "</td>";
        row = row + "<td>" + states[i].code + "</td>";
        row = row + "<td>" + states[i].isapp + "</td>";
        row = row + "<td>" + states[i].rst + "</td>";
        row = row + "<td>" + states[i].status + "</td>";

        row = row + "<td><input type='button' value='Edit' onclick='onEdit(\"" + states[i].id + "\")' /></td>";

        row = row + "</tr>";
        tableHtml = tableHtml + row;
    }
    tableHtml = tableHtml + "</table>";
    $("#table").html(tableHtml);
}
function onEdit(userId) {
    var requestParams = {
        url: "http://127.0.0.1:8081/states/" + userId,
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

    $("#name").val(user.name);
    $("#code").val(user.code);
    $("#isapp").val(user.isapp);
    $("#rst").val(user.rst);
    $("#status").val(user.status);

}