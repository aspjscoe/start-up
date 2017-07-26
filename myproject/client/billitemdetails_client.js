$(document).ready(onReady);
function onReady() {
    $.get("http://127.0.0.1:8081/billitemdetails", onGetUsers);
    $("#save-button").click(onSaveButtonClick);
    $("#update-button").click(onUpdateButtonClick);
    $("#delete-button").click(onDeleteButtonClick);
}


function onDeleteButtonClick() {
    var id = $("#id").val();
    var requestParams = {
        url: "http://127.0.0.1:8081/billitemdetails/" + id,
        method: "DELETE",
        data: id,
        success: onDeletebillitemdetails,
        error: onError
    };
    $.ajax(requestParams);
}

function onDeletebillitemdetails(result) {
    var billitemdetails = result;
    createTable(billitemdetails);
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
        taxp: $("#taxp").val(),
        rate: $("#rate").val(),
        free: $("#free").val()
    };
    var requestParams = {
        url: "http://127.0.0.1:8081/billitemdetails/" + user.id,
        method: "PUT",
        data: user,
        success: onPutbillitemdetails,
        error: onError
    };
    $.ajax(requestParams);
}
function onPutbillitemdetails(result) {
    var billitemdetails = result;
    createTable(billitemdetails)
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
        taxp: $("#taxp").val(),
        rate: $("#rate").val(),
        free: $("#free").val()
    }
    $.post("http://127.0.0.1:8081/billitemdetails", user, onPostUsers);
}
function onPostUsers(result) {
    var billitemdetails = result;
    createTable(billitemdetails);
}

function onGetUsers(result) {
    var billitemdetails = result;
    createTable(billitemdetails);
}
function createTable(billitemdetails) {
    var tableHtml = "<tr><td>ID</td><td>BillNo</td><td>ModelNo</td><td>Quantity</td><td>SaledPrice</td><td>Tax</td><td>Discount</td><td>Total</td><td>Unit</td><td>taxp</td><td>rate</td><td>free</td></tr>";
    for (var i = 0; i < billitemdetails.length; i++) {
        var row = "<tr>";
        row = row + "<td>" + billitemdetails[i].id + "</td>";
        row = row + "<td>" + billitemdetails[i].BillNo + "</td>";
        row = row + "<td>" + billitemdetails[i].ModelNo + "</td>";
        row = row + "<td>" + billitemdetails[i].Quantity + "</td>";
        row = row + "<td>" + billitemdetails[i].SaledPrice + "</td>";
        row = row + "<td>" + billitemdetails[i].Tax + "</td>";
        row = row + "<td>" + billitemdetails[i].Discount + "</td>";
        row = row + "<td>" + billitemdetails[i].Total + "</td>";
        row = row + "<td>" + billitemdetails[i].Unit + "</td>";
        row = row + "<td>" + billitemdetails[i].taxp + "</td>";
        row = row + "<td>" + billitemdetails[i].rate + "</td>";
        row = row + "<td>" + billitemdetails[i].free + "</td>";
        row = row + "<td><input type='button' value='Edit' onclick='onEdit(\"" + billitemdetails[i].id + "\")' /></td>";
        row = row + "</tr>";
        tableHtml = tableHtml + row;
    }
    tableHtml = tableHtml + "</table>";
    $("#table").html(tableHtml);
}
function onEdit(userId) {
    var requestParams = {
        url: "http://127.0.0.1:8081/billitemdetails/" + userId,
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
    $("#taxp").val(user.taxp);
    $("#rate").val(user.rate);
    $("#free").val(user.free);
}