$(document).ready(onReady);
function onReady() {
    $.get("http://127.0.0.1:8081/areasalesman", onGetUsers);
    $.get("http://127.0.0.1:8081/areasalesman", onTable);
    $("#save-button").click(onSaveButtonClick);
    $("#update-button").click(onUpdateButtonClick);
    $("#delete-button").click(onDeleteButtonClick);
}

function onDeleteButtonClick() {
    var id = $("#id").val();
    var requestParams = {
        url: "http://127.0.0.1:8081/areasalesman/" + id,
        method: "DELETE",
        data: id,
        success: onDeleteAreasalesman,
        error: onError
    };
    $.ajax(requestParams);
}

function onDeleteAreasalesman(result) {
    var areasalesman = result;
    createTable(areasalesman);
}


function onUpdateButtonClick() {
    var user = {
        id: $("#id").val(),
        code: $("#code").val(),
        name: $("#name").val(),
        status: $("#status").val()

    };
    var requestParams = {
        url: "http://127.0.0.1:8081/areasalesman/" + user.id,
        method: "PUT",
        data: user,
        success: onPutAreasalesman,
        error: onError
    };
    $.ajax(requestParams);
}
function onPutAreasalesman(result) {
    var areasalesman = result;
    createTable(areasalesman)
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
    $.post("http://127.0.0.1:8081/areasalesman", user, onPostUsers);
}
function onPostUsers(result) {
    var areasalesman = result;
    createTable(areasalesman);
}

function onGetUsers(result) {
    var areasalesman = result;
    createTable(areasalesman);
}
function createTable(areasalesman) {
    var tableHtml = "<tr><td>Id</td><td>Code</td><td>Name</td><td>Status</td></tr>";
    for (var i = 0; i < areasalesman.length; i++) {
        var row = "<tr>";
        row = row + "<td>" + areasalesman[i].id + "</td>";
        row = row + "<td>" + areasalesman[i].code + "</td>";
        row = row + "<td>" + areasalesman[i].name + "</td>";
        row = row + "<td>" + areasalesman[i].status + "</td>";
        row = row + "<td><input type='button' value='Edit' onclick='onEdit(\"" + areasalesman[i].id + "\")' /></td>";
        row = row + "</tr>";
        tableHtml = tableHtml + row;
    }
    tableHtml = tableHtml + "</table>";
    $("#table").html(tableHtml);
}

function onEdit(userId) {
    var requestParams = {
        url: "http://127.0.0.1:8081/areasalesman/" + userId,
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
function onTable(createTables) {
    $.get("http://127.0.0.1:8081/areasalesman", createTables);
}