$(document).ready(onReady);
function onReady() {
    $.get("http://127.0.0.1:8081/towns", onGetUsers);
    $("#save-button").click(onSaveButtonClick);
    $("#update-button").click(onUpdateButtonClick);
    $("#delete-button").click(onDeleteButtonClick);
}

function onDeleteButtonClick() {
    var id = $("#id").val();
    var requestParams = {
        url: "http://127.0.0.1:8081/towns/" + id,
        method: "DELETE",
        data: id,
        success: onDeletetowns,
        error: onError
    };
    $.ajax(requestParams);
}

function onDeletetowns(result) {
    var towns = result;
    createTable(towns);
}



function onUpdateButtonClick() {
    var user = {
        id: $("#id").val(),
        did: $("#did").val(),
        town: $("#town").val(),
        Code: $("#Code").val()
    };
    var requestParams = {
        url: "http://127.0.0.1:8081/towns/" + user.id,
        method: "PUT",
        data: user,
        success: onPuttowns,
        error: onError
    };
    $.ajax(requestParams);
}
function onPuttowns(result) {
    var towns = result;
    createTable(towns)
}
function onError(result) {
    window.alert(result.responseText);
}



function onSaveButtonClick() {

    var user = {
        id: $("#id").val(),
        did: $("#did").val(),
        town: $("#town").val(),
        Code: $("#Code").val()

    }
    $.post("http://127.0.0.1:8081/towns", user, onPostUsers);
}
function onPostUsers(result) {
    var towns = result;
    createTable(towns);
}

function onGetUsers(result) {
    var towns = result;
    createTable(towns);
}
function createTable(towns) {
    var tableHtml = "<tr><td>ID</td><td>did</td><td>town</td><td>Code</td></tr>";
    for (var i = 0; i < towns.length; i++) {
        var row = "<tr>";
        row = row + "<td>" + towns[i].id + "</td>";
        row = row + "<td>" + towns[i].did + "</td>";
        row = row + "<td>" + towns[i].town + "</td>";
        row = row + "<td>" + towns[i].Code + "</td>";

        row = row + "<td><input type='button' value='Edit' onclick='onEdit(\"" + towns[i].id + "\")' /></td>";


        row = row + "</tr>";
        tableHtml = tableHtml + row;
    }
    tableHtml = tableHtml + "</table>";
    $("#table").html(tableHtml);
}
function onEdit(userId) {
    var requestParams = {
        url: "http://127.0.0.1:8081/towns/" + userId,
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

    $("#did").val(user.did);
    $("#town").val(user.town);
    $("#Code").val(user.Code);

}