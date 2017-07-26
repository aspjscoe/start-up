$(document).ready(onReady);
function onReady() {
    $.get("http://127.0.0.1:8081/supplieraccount", onGetUsers);
    $("#save-button").click(onSaveButtonClick);
    $("#update-button").click(onUpdateButtonClick);
    $("#delete-button").click(onDeleteButtonClick);
}

function onDeleteButtonClick() {
    var id = $("#id").val();
    var requestParams = {
        url: "http://127.0.0.1:8081/supplieraccount/" + id,
        method: "DELETE",
        data: id,
        success: onDeletesupplieraccount,
        error: onError
    };
    $.ajax(requestParams);
}

function onDeletesupplieraccount(result) {
    var supplieraccount = result;
    createTable(supplieraccount);
}



function onUpdateButtonClick() {
    var user = {
        id: $("#id").val(),
        date: $("#date").val(),
        SupplierID: $("#SupplierID").val(),
        PurchaseID: $("#PurchaseID").val(),
        totalamount: $("#totalamount").val(),
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
        url: "http://127.0.0.1:8081/supplieraccount/" + user.id,
        method: "PUT",
        data: user,
        success: onPutsupplieraccount,
        error: onError
    };
    $.ajax(requestParams);
}
function onPutsupplieraccount(result) {
    var supplieraccount = result;
    createTable(supplieraccount)
}
function onError(result) {
    window.alert(result.responseText);
}



function onSaveButtonClick() {

    var user = {
        id: $("#id").val(),
        date: $("#date").val(),
        SupplierID: $("#SupplierID").val(),
        PurchaseID: $("#PurchaseID").val(),
        totalamount: $("#totalamount").val(),
        AmountPaid: $("#AmountPaid").val(),
        Balance: $("#Balance").val(),
        BillAmount: $("#BillAmount").val(),
        Notes: $("#Notes").val(),
        UserID: $("#UserID").val(),
        paidmode: $("#paidmode").val(),
        Bank: $("#Bank").val(),
        Chequeno: $("#Chequeno").val()

    }
    $.post("http://127.0.0.1:8081/supplieraccount", user, onPostUsers);
}
function onPostUsers(result) {
    var supplieraccount = result;
    createTable(supplieraccount);
}

function onGetUsers(result) {
    var supplieraccount = result;
    createTable(supplieraccount);
}
function createTable(supplieraccount) {
    var tableHtml = "<tr><td>ID</td><td>date</td><td>SupplierID</td><td>PurchaseID</td><td>totalamount</td><td>AmountPaid</td><td>Balance</td><td>BillAmount</td><td>Notes</td><td>UserID</td><td>paidmode</td><td>Bank</td><td>Chequeno</td></tr>";
    for (var i = 0; i < supplieraccount.length; i++) {
        var row = "<tr>";
        row = row + "<td>" + supplieraccount[i].id + "</td>";
        row = row + "<td>" + supplieraccount[i].date + "</td>";
        row = row + "<td>" + supplieraccount[i].SupplierID + "</td>";
        row = row + "<td>" + supplieraccount[i].PurchaseID + "</td>";
        row = row + "<td>" + supplieraccount[i].totalamount + "</td>";
        row = row + "<td>" + supplieraccount[i].AmountPaid + "</td>";
        row = row + "<td>" + supplieraccount[i].Balance + "</td>";
        row = row + "<td>" + supplieraccount[i].BillAmount + "</td>";
        row = row + "<td>" + supplieraccount[i].Notes + "</td>";
        row = row + "<td>" + supplieraccount[i].UserID + "</td>";
        row = row + "<td>" + supplieraccount[i].paidmode + "</td>";
        row = row + "<td>" + supplieraccount[i].Bank + "</td>";
        row = row + "<td>" + supplieraccount[i].Chequeno + "</td>";

        row = row + "<td><input type='button' value='Edit' onclick='onEdit(\"" + supplieraccount[i].id + "\")' /></td>";


        row = row + "</tr>";
        tableHtml = tableHtml + row;
    }
    tableHtml = tableHtml + "</table>";
    $("#table").html(tableHtml);
}
function onEdit(userId) {
    var requestParams = {
        url: "http://127.0.0.1:8081/supplieraccount/" + userId,
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

    $("#date").val(user.date);
        $("#SupplierID").val(user.SupplierID);
        $("#PurchaseID").val(user.PurchaseID);
        $("#totalamount").val(user.totalamount);
        $("#AmountPaid").val(user.AmountPaid);
        $("#Balance").val(user.Balance);
        $("#BillAmount").val(user.BillAmount);
        $("#Notes").val(user.Notes);
        $("#UserID").val(user.UserID);
        $("#paidmode").val(user.paidmode);
        $("#Bank").val(user.Bank);
        $("#Chequeno").val(user.Chequeno);

}