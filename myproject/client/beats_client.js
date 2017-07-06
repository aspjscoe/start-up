$(document).ready(onReady);
function onReady() {
    $.get("http://127.0.0.1:8081/beats", onGetUsers);
    $("#save-button").click(onSaveButtonClick);
    $("#update-button").click(onUpdateButtonClick);
    $("#delete-button").click(onDeleteButtonClick);
}

function onDeleteButtonClick() {
    var id = $("#id").val();
    var requestParams = {
        url: "http://127.0.0.1:8081/beats/" + id,
        method: "DELETE",
        data: id,
        success: onDeletebeats,
        error: onError
    };
    $.ajax(requestParams);
}

function onDeletebeats(result) {
    var beats = result;
    createTable(beats);
}


function onUpdateButtonClick() {
    var user = {
        id: $("#id").val(),
        code: $("#code").val(),
        name: $("#name").val(),
        smcode: $("#smcode").val(),
        status: $("#status").val()
    };
    var requestParams = {
        url: "http://127.0.0.1:8081/beats/" + user.id,
        method: "PUT",
        data: user,
        success: onPutbeats,
        error: onError
    };
    $.ajax(requestParams);
}
function onPutbeats(result) {
    var beats = result;
    createTable(beats)
}
function onError(result) {
    window.alert(result.responseText);
}


function onSaveButtonClick() {

    var user = {
        id: $("#id").val(),
        code: $("#code").val(),
        name: $("#name").val(),
        smcode: $("#smcode").val(),
        status: $("#status").val()
    }
    $.post("http://127.0.0.1:8081/beats", user, onPostUsers);
}
function onPostUsers(result) {
    var beats = result;
    createTable(beats);
}

function onGetUsers(result) {
    var beats = result;
    createTable(beats);
}
function createTable(beats) {
    var tableHtml = "<tr><td>Id</td><td>Code</td><td>Name</td><td>Smcode</td><td>Status</td></tr>";
    for (var i = 0; i < beats.length; i++) {
        var row = "<tr>";
        row = row + "<td>" + beats[i].id + "</td>";
        row = row + "<td>" + beats[i].code + "</td>";
        row = row + "<td>" + beats[i].name + "</td>";
        row = row + "<td>" + beats[i].smcode + "</td>";
        row = row + "<td>" + beats[i].status + "</td>";
        row = row + "<td><input type='button' value='Edit' onclick='onEdit(\"" + beats[i].id + "\")' /></td>";
        row = row + "</tr>";
        tableHtml = tableHtml + row;
    }
    tableHtml = tableHtml + "</table>";
    $("#table").html(tableHtml);
}
function onEdit(userId) {
    var requestParams = {
        url: "http://127.0.0.1:8081/beats/" + userId,
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
    $("#smcode").val(user.smcode);
    $("#status").val(user.status);
}