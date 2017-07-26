$(document).ready(onReady);
function onReady() {
    $.get("http://127.0.0.1:8081/taxdetails", onGetUsers);
    $("#save-button").click(onSaveButtonClick);
    $("#update-button").click(onUpdateButtonClick);
    $("#delete-button").click(onDeleteButtonClick);
}

function onDeleteButtonClick() {
    var id = $("#id").val();
    var requestParams = {
        url: "http://127.0.0.1:8081/taxdetails/" + id,
        method: "DELETE",
        data: id,
        success: onDeletetaxdetails,
        error: onError
    };
    $.ajax(requestParams);
}

function onDeletetaxdetails(result) {
    var taxdetails = result;
    createTable(taxdetails);
}



function onUpdateButtonClick() {
    var user = {
        id: $("#id").val(),
        tax: $("#tax").val(),
    };
    var requestParams = {
        url: "http://127.0.0.1:8081/taxdetails/" + user.id,
        method: "PUT",
        data: user,
        success: onPuttaxdetails,
        error: onError
    };
    $.ajax(requestParams);
}
function onPuttaxdetails(result) {
    var taxdetails = result;
    createTable(taxdetails)
}
function onError(result) {
    window.alert(result.responseText);
}


function onSaveButtonClick() {

    var user = {
        id: $("#id").val(),
        tax: $("#tax").val(),


    }
    $.post("http://127.0.0.1:8081/taxdetails", user, onPostUsers);
}
function onPostUsers(result) {
    var taxdetails = result;
    createTable(taxdetails);
}

function onGetUsers(result) {
    var taxdetails = result;
    createTable(taxdetails);
}
function createTable(taxdetails) {
    var tableHtml = "<tr><td>ID</td><td>tax</td></tr>";
    for (var i = 0; i < taxdetails.length; i++) {
        var row = "<tr>";
        row = row + "<td>" + taxdetails[i].id + "</td>";
        row = row + "<td>" + taxdetails[i].tax + "</td>";


        row = row + "<td><input type='button' value='Edit' onclick='onEdit(\"" + taxdetails[i].id + "\")' /></td>";


        row = row + "</tr>";
        tableHtml = tableHtml + row;
    }
    tableHtml = tableHtml + "</table>";
    $("#table").html(tableHtml);
}
function onEdit(userId) {
    var requestParams = {
        url: "http://127.0.0.1:8081/taxdetails/" + userId,
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
    $("#tax").val(user.tax);
}