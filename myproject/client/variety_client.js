$(document).ready(onReady);
function onReady() {
    $.get("http://127.0.0.1:8081/variety", onGetUsers);
    $("#save-button").click(onSaveButtonClick);
    $("#update-button").click(onUpdateButtonClick);
    $("#delete-button").click(onDeleteButtonClick);
}

function onDeleteButtonClick() {
    var id = $("#id").val();
    var requestParams = {
        url: "http://127.0.0.1:8081/variety/" + id,
        method: "DELETE",
        data: id,
        success: onDeletevariety,
        error: onError
    };
    $.ajax(requestParams);
}

function onDeletevariety(result) {
    var variety = result;
    createTable(variety);
}



function onUpdateButtonClick() {
    var user = {
        id: $("#id").val(),
        code: $("#code").val(),
        name: $("#name").val(),
        brandid: $("#brandid").val(),
        status: $("#status").val()
    };
    var requestParams = {
        url: "http://127.0.0.1:8081/variety/" + user.id,
        method: "PUT",
        data: user,
        success: onPutvariety,
        error: onError
    };
    $.ajax(requestParams);
}
function onPutvariety(result) {
    var variety = result;
    createTable(variety)
}
function onError(result) {
    window.alert(result.responseText);
}



function onSaveButtonClick() {

    var user = {
        id: $("#id").val(),
        code: $("#code").val(),
        name: $("#name").val(),
        brandid: $("#brandid").val(),
        status: $("#status").val()


    }
    $.post("http://127.0.0.1:8081/variety", user, onPostUsers);
}
function onPostUsers(result) {
    var variety = result;
    createTable(variety);
}

function onGetUsers(result) {
    var variety = result;
    createTable(variety);
}
function createTable(variety) {
    var tableHtml = "<tr><td>ID</td><td>code</td><td>name</td><td>brandid</td><td>status</td></tr>";
    for (var i = 0; i < variety.length; i++) {
        var row = "<tr>";
        row = row + "<td>" + variety[i].id + "</td>";
        row = row + "<td>" + variety[i].code + "</td>";
        row = row + "<td>" + variety[i].name + "</td>";
        row = row + "<td>" + variety[i].brandid + "</td>";
        row = row + "<td>" + variety[i].status + "</td>";

        row = row + "<td><input type='button' value='Edit' onclick='onEdit(\"" + variety[i].id + "\")' /></td>";


        row = row + "</tr>";
        tableHtml = tableHtml + row;
    }
    tableHtml = tableHtml + "</table>";
    $("#table").html(tableHtml);
}
function onEdit(userId) {
    var requestParams = {
        url: "http://127.0.0.1:8081/variety/" + userId,
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
    $("#brandid").val(user.brandid);
    $("#status").val(user.status);

}