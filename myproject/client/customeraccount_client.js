$(document).ready(onReady);
function onReady() {
    $.get("http://127.0.0.1:8081/customeraccount", onGetUsers);
    $("#save-button").click(onSaveButtonClick);
    $("#update-button").click(onUpdateButtonClick);
    $("#delete-button").click(onDeleteButtonClick);
}

function onDeleteButtonClick() {
    var id = $("#id").val();
    var requestParams = {
        url: "http://127.0.0.1:8081/customeraccount/" + id,
        method: "DELETE",
        data: id,
        success: onDeletecustomeraccount,
        error: onError
    };
    $.ajax(requestParams);
}

function onDeletecustomeraccount(result) {
    var customeraccount = result;
    createTable(customeraccount);
}


function onUpdateButtonClick() {
    var user = {
        id: $("#id").val(),
        Date: $("#Date").val(),
        CustomerID: $("#CustomerID").val(),
        Billno: $("#Billno").val(),
        TotalAmount: $("#TotalAmount").val(),
        AmountPaid: $("#AmountPaid").val(),
        Balance: $("#Balance").val(),
        BillAmount: $("#BillAmount").val(),
        Notes: $("#Notes").val(),
        UserID: $("#UserID").val(),
        paidmode: $("#paidmode").val(),
        Bank: $("#Bank").val(),
        Chequeno: $("#Chequeno").val()

    };
    var requestParams = {
        url: "http://127.0.0.1:8081/customeraccount/" + user.id,
        method: "PUT",
        data: user,
        success: onPutcustomeraccount,
        error: onError
    };
    $.ajax(requestParams);
}
function onPutcustomeraccount(result) {
    var customeraccount = result;
    createTable(customeraccount)
}
function onError(result) {
    window.alert(result.responseText);
}


function onSaveButtonClick() {

    var user = {
        id: $("#id").val(),
        Date: $("#Date").val(),
        CustomerID: $("#CustomerID").val(),
        Billno: $("#Billno").val(),
        TotalAmount: $("#TotalAmount").val(),
        AmountPaid: $("#AmountPaid").val(),
        Balance: $("#Balance").val(),
        BillAmount: $("#BillAmount").val(),
        Notes: $("#Notes").val(),
        UserID: $("#UserID").val(),
        paidmode: $("#paidmode").val(),
        Bank: $("#Bank").val(),
        Chequeno: $("#Chequeno").val()
    }
    $.post("http://127.0.0.1:8081/customeraccount", user, onPostUsers);
}
function onPostUsers(result) {
    var customeraccount = result;
    createTable(customeraccount);
}

function onGetUsers(result) {
    var customeraccount = result;
    createTable(customeraccount);
}
function createTable(customeraccount) {
    var tableHtml = "<tr><td>ID</td><td>Date</td><td>CustomerID</td><td>Billno</td><td>TotalAmount</td><td>AmountPaid</td><td>Balance</td><td>BillAmount</td><td>Notes</td><td>UserID</td><td>paidmode</td><td>Bank</td><td>Chequeno</td></tr>";
    for (var i = 0; i < customeraccount.length; i++) {
        var row = "<tr>";
        row = row + "<td>" + customeraccount[i].id + "</td>";
        row = row + "<td>" + customeraccount[i].Date + "</td>";
        row = row + "<td>" + customeraccount[i].CustomerID + "</td>";
        row = row + "<td>" + customeraccount[i].Billno + "</td>";
        row = row + "<td>" + customeraccount[i].TotalAmount + "</td>";
        row = row + "<td>" + customeraccount[i].AmountPaid + "</td>";
        row = row + "<td>" + customeraccount[i].Balance + "</td>";
        row = row + "<td>" + customeraccount[i].BillAmount + "</td>";
        row = row + "<td>" + customeraccount[i].Notes + "</td>";
        row = row + "<td>" + customeraccount[i].UserID + "</td>";
        row = row + "<td>" + customeraccount[i].paidmode + "</td>";
        row = row + "<td>" + customeraccount[i].Bank + "</td>";
        row = row + "<td>" + customeraccount[i].Chequeno + "</td>";
        row = row + "<td><input type='button' value='Edit' onclick='onEdit(\"" + customeraccount[i].id + "\")' /></td>";
        row = row + "</tr>";
        tableHtml = tableHtml + row;
    }
    tableHtml = tableHtml + "</table>";
    $("#table").html(tableHtml);
}
function onEdit(userId) {
    var requestParams = {
        url: "http://127.0.0.1:8081/customeraccount/" + userId,
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

    $("#Date").val(user.Date);
    $("#CustomerID").val(user.CustomerID);
    $("#Billno").val(user.Billno);
    $("#TotalAmount").val(user.TotalAmount);
    $("#AmountPaid").val(user.AmountPaid);
    $("#Balance").val(user.Balance);
    $("#BillAmount").val(user.BillAmount);
    $("#Notes").val(user.Notes);
    $("#UserID").val(user.UserID);
    $("#paidmode").val(user.paidmode);
    $("#Bank").val(user.Bank);
    $("#Chequeno").val(user.Chequeno);

}