$(document).ready(onReady);
function onReady() {
    $.get("http://127.0.0.1:8081/creditaccount", onGetUsers);
    $("#save-button").click(onSaveButtonClick);
    $("#update-button").click(onUpdateButtonClick);
    $("#delete-button").click(onDeleteButtonClick);
}

function onDeleteButtonClick() {
    var id = $("#id").val();
    var requestParams = {
        url: "http://127.0.0.1:8081/creditaccount/" + id,
        method: "DELETE",
        data: id,
        success: onDeletecreditaccount,
        error: onError
    };
    $.ajax(requestParams);
}

function onDeletecreditaccount(result) {
    var creditaccount = result;
    createTable(creditaccount);
}


function onUpdateButtonClick() {
    var user = {
        id: $("#id").val(),
        SupplierID: $("#SupplierID").val(),
        PDate: $("#PDate").val(),
        Amount: $("#Amount").val(),
        PaidType: $("#PaidType").val(),
        Chequeno: $("#Chequeno").val(),
        Paid: $("#Paid").val(),
        CurrentBalance: $("#CurrentBalance").val(),
        Bank: $("#Bank").val(),
        HolderName: $("#HolderName").val(),
        Validity: $("#Validity").val(),
        Description: $("#Description").val()
    };
    var requestParams = {
        url: "http://127.0.0.1:8081/creditaccount/" + user.id,
        method: "PUT",
        data: user,
        success: onPutcreditaccount,
        error: onError
    };
    $.ajax(requestParams);
}
function onPutcreditaccount(result) {
    var creditaccount = result;
    createTable(creditaccount)
}
function onError(result) {
    window.alert(result.responseText);
}


function onSaveButtonClick() {

    var user = {
        id: $("#id").val(),
        SupplierID: $("#SupplierID").val(),
        PDate: $("#PDate").val(),
        Amount: $("#Amount").val(),
        PaidType: $("#PaidType").val(),
        Chequeno: $("#Chequeno").val(),
        Paid: $("#Paid").val(),
        CurrentBalance: $("#CurrentBalance").val(),
        Bank: $("#Bank").val(),
        HolderName: $("#HolderName").val(),
        Validity: $("#Validity").val(),
        Description: $("#Description").val()
    }
    $.post("http://127.0.0.1:8081/creditaccount", user, onPostUsers);
}
function onPostUsers(result) {
    var creditaccount = result;
    createTable(creditaccount);
}

function onGetUsers(result) {
    var creditaccount = result;
    createTable(creditaccount);
}
function createTable(creditaccount) {
    var tableHtml = "<tr><td>ID</td><td>SupplierID</td><td>PDate</td><td>Amount</td><td>PaidType</td><td>Chequeno</td><td>Paid</td><td>CurrentBalance</td><td>Bank</td> <td>HolderName</td><td>Validity</td><td>Description</td></tr>";
    for (var i = 0; i < creditaccount.length; i++) {
        var row = "<tr>";
        row = row + "<td>" + creditaccount[i].id + "</td>";
        row = row + "<td>" + creditaccount[i].SupplierID + "</td>";
        row = row + "<td>" + creditaccount[i].PDate + "</td>";
        row = row + "<td>" + creditaccount[i].Amount + "</td>";
        row = row + "<td>" + creditaccount[i].PaidType + "</td>";
        row = row + "<td>" + creditaccount[i].Chequeno + "</td>";
        row = row + "<td>" + creditaccount[i].Paid + "</td>";
        row = row + "<td>" + creditaccount[i].CurrentBalance + "</td>";
        row = row + "<td>" + creditaccount[i].Bank + "</td>";
        row = row + "<td>" + creditaccount[i].HolderName + "</td>";
        row = row + "<td>" + creditaccount[i].Validity + "</td>";
        row = row + "<td>" + creditaccount[i].Description + "</td>";
        row = row + "<td><input type='button' value='Edit' onclick='onEdit(\"" + creditaccount[i].id + "\")' /></td>";
        row = row + "</tr>";
        tableHtml = tableHtml + row;
    }
    tableHtml = tableHtml + "</table>";
    $("#table").html(tableHtml);
}

function onEdit(userId) {
    var requestParams = {
        url: "http://127.0.0.1:8081/creditaccount/" + userId,
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
    $("#SupplierID").val(user.SupplierID),
        $("#PDate").val(user.PDate),
        $("#Amount").val(user.Amount),
        $("#PaidType").val(user.PaidType),
        $("#Chequeno").val(user.Chequeno),
        $("#Paid").val(user.Paid),
        $("#CurrentBalance").val(user.CurrentBalance),
        $("#Bank").val(user.Bank),
        $("#HolderName").val(user.HolderName),
        $("#Validity").val(user.Validity),
        $("#Description").val(user.Description)
}