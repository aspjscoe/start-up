$(document).ready(onReady);
function onReady() {
    $.get("http://127.0.0.1:8081/cancelbillitemdetails", onGetUsers);
    $("#save-button").click(onSaveButtonClick);
    $("#update-button").click(onUpdateButtonClick);
    $("#delete-button").click(onDeleteButtonClick);
}

function onDeleteButtonClick() {
    var id = $("#id").val();
    var requestParams = {
        url: "http://127.0.0.1:8081/cancelbillitemdetails/" + id,
        method: "DELETE",
        data: id,
        success: onDeletecancelbillitemdetails,
        error: onError
    };
    $.ajax(requestParams);
}

function onDeletecancelbillitemdetails(result) {
    var cancelbillitemdetails = result;
    createTable(cancelbillitemdetails);
}


function onUpdateButtonClick() {
    var user = {
        id: $("#id").val(),
        BillNo: $("#BillNo").val(),
        ModelNo: $("#ModelNo").val(),
        Quantity: $("#Quantity").val(),
        SaledPrice: $("#SaledPrice").val(),
        Tax: $("#Tax").val(),
        Discount: $("#Discount").val(),
        Total: $("#Total").val(),
        Unit: $("#Unit").val(),
    };
    var requestParams = {
        url: "http://127.0.0.1:8081/cancelbillitemdetails/" + user.id,
        method: "PUT",
        data: user,
        success: onPutcancelbillitemdetails,
        error: onError
    };
    $.ajax(requestParams);
}
function onPutcancelbillitemdetails(result) {
    var cancelbillitemdetails = result;
    createTable(cancelbillitemdetails)
}
function onError(result) {
    window.alert(result.responseText);
}


function onSaveButtonClick() {

    var user = {
        id: $("#id").val(),
        BillNo: $("#BillNo").val(),
        ModelNo: $("#ModelNo").val(),
        Quantity: $("#Quantity").val(),
        SaledPrice: $("#SaledPrice").val(),
        Tax: $("#Tax").val(),
        Discount: $("#Discount").val(),
        Total: $("#Total").val(),
        Unit: $("#Unit").val(),

    }
    $.post("http://127.0.0.1:8081/cancelbillitemdetails", user, onPostcancelbillitemdetails);
}
function onPostcancelbillitemdetails(result) {
    var cancelbillitemdetails = result;
    createTable(cancelbillitemdetails);
}

function onGetUsers(result) {
    var cancelbillitemdetails = result;
    createTable(cancelbillitemdetails);
}
function createTable(cancelbillitemdetails) {
    var tableHtml = "<tr><td>ID</td><td>BillNo</td><td>ModelNo</td><td>Quantity</td><td>SaledPrice</td><td>Tax</td><td>Discount</td><td>Total</td><td>Unit</td></tr>";
    for (var i = 0; i < cancelbillitemdetails.length; i++) {
        var row = "<tr>";
        row = row + "<td>" + cancelbillitemdetails[i].id + "</td>";
        row = row + "<td>" + cancelbillitemdetails[i].BillNo + "</td>";
        row = row + "<td>" + cancelbillitemdetails[i].ModelNo + "</td>";
        row = row + "<td>" + cancelbillitemdetails[i].Quantity + "</td>";
        row = row + "<td>" + cancelbillitemdetails[i].SaledPrice + "</td>";
        row = row + "<td>" + cancelbillitemdetails[i].Tax + "</td>";
        row = row + "<td>" + cancelbillitemdetails[i].Discount + "</td>";
        row = row + "<td>" + cancelbillitemdetails[i].Total + "</td>";
        row = row + "<td>" + cancelbillitemdetails[i].Unit + "</td>";
        row = row + "<td><input type='button' value='Edit' onclick='onEdit(\"" + cancelbillitemdetails[i].id + "\")' /></td>";
        row = row + "</tr>";
        tableHtml = tableHtml + row;
    }
    tableHtml = tableHtml + "</table>";
    $("#table").html(tableHtml);
}
function onEdit(userId) {
    var requestParams = {
        url: "http://127.0.0.1:8081/cancelbillitemdetails/" + userId,
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

    $("#BillNo").val(user.BillNo);
    $("#ModelNo").val(user.ModelNo);
    $("#Quantity").val(user.Quantity);
    $("#SaledPrice").val(user.SaledPrice);
    $("#Tax").val(user.Tax);
    $("#Discount").val(user.Discount);
    $("#Total").val(user.Total);
    $("#Unit").val(user.Unit);
}