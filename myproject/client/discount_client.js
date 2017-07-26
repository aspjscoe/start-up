$(document).ready(onReady);
function onReady() {
    $.get("http://127.0.0.1:8081/discount", onGetUsers);
    $("#save-button").click(onSaveButtonClick);
    $("#update-button").click(onUpdateButtonClick);
    $("#delete-button").click(onDeleteButtonClick);
}

function onDeleteButtonClick() {
    var id = $("#id").val();
    var requestParams = {
        url: "http://127.0.0.1:8081/discount/" + id,
        method: "DELETE",
        data: id,
        success: onDeletediscount,
        error: onError
    };
    $.ajax(requestParams);
}

function onDeletediscount(result) {
    var discount = result;
    createTable(discount);
}


function onUpdateButtonClick() {
    var user = {
        id: $("#id").val(),
        Billno: $("#Billno").val(),
        DiscountAmount: $("#DiscountAmount").val()
    };
    var requestParams = {
        url: "http://127.0.0.1:8081/discount/" + user.id,
        method: "PUT",
        data: user,
        success: onPutdiscount,
        error: onError
    };
    $.ajax(requestParams);
}
function onPutdiscount(result) {
    var discount = result;
    createTable(discount)
}
function onError(result) {
    window.alert(result.responseText);
}


function onSaveButtonClick() {

    var user = {
        id: $("#id").val(),
        Billno: $("#Billno").val(),
        DiscountAmount: $("#DiscountAmount").val()

    }
    $.post("http://127.0.0.1:8081/discount", user, onPostUsers);
}
function onPostUsers(result) {
    var discount = result;
    createTable(discount);
}

function onGetUsers(result) {
    var discount = result;
    createTable(discount);
}
function createTable(discount) {
    var tableHtml = "<tr><td>ID</td><td>Billno</td><td>DiscountAmount</td></tr>";
    for (var i = 0; i < discount.length; i++) {
        var row = "<tr>";
        row = row + "<td>" + discount[i].id + "</td>";
        row = row + "<td>" + discount[i].Billno + "</td>";
        row = row + "<td>" + discount[i].DiscountAmount + "</td>";

        row = row + "<td><input type='button' value='Edit' onclick='onEdit(\"" + discount[i].id + "\")' /></td>";
        row = row + "</tr>";
        tableHtml = tableHtml + row;
    }
    tableHtml = tableHtml + "</table>";
    $("#table").html(tableHtml);
}
function onEdit(userId) {
    var requestParams = {
        url: "http://127.0.0.1:8081/discount/" + userId,
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

    $("#Billno").val(user.Billno);
    $("#DiscountAmount").val(user.DiscountAmount);
}