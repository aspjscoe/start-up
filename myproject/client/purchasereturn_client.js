$(document).ready(onReady);
function onReady() {
    $.get("http://127.0.0.1:8081/purchasereturn", onGetUsers);
    $("#save-button").click(onSaveButtonClick);
    $("#update-button").click(onUpdateButtonClick);
    $("#delete-button").click(onDeleteButtonClick);
}

function onDeleteButtonClick() {
    var id = $("#id").val();
    var requestParams = {
        url: "http://127.0.0.1:8081/purchasereturn/" + id,
        method: "DELETE",
        data: id,
        success: onDeletepurchasereturn,
        error: onError
    };
    $.ajax(requestParams);
}

function onDeletepurchasereturn(result) {
    var purchasereturn = result;
    createTable(purchasereturn);
}



function onUpdateButtonClick() {
    var user = {
        id: $("#id").val(),
        PurchaseDate: $("#PurchaseDate").val(),
        invoiceno: $("#invoiceno").val(),
        InvoiceDate: $("#InvoiceDate").val(),
        SupplierID: $("#SupplierID").val(),
        Total: $("#Total").val(),
        Discount: $("#Discount").val(),
        Grandtotal: $("#Grandtotal").val(),
        pbal: $("#pbal").val(),
        paid: $("#paid").val(),
        balance: $("#balance").val(),
        paidmode: $("#paidmode").val(),
        Bank: $("#Bank").val(),
        chequeno: $("#chequeno").val(),
        vatp: $("#vatp").val(),
        vatamount: $("#vatamount").val(),
        other: $("#other").val(),
        notes: $("#notes").val(),
        billamount: $("#billamount").val(),
        itemdiscount: $("#itemdiscount").val()
    };
    var requestParams = {
        url: "http://127.0.0.1:8081/purchasereturn/" + user.id,
        method: "PUT",
        data: user,
        success: onPutpurchasereturn,
        error: onError
    };
    $.ajax(requestParams);
}
function onPutpurchasereturn(result) {
    var purchasereturn = result;
    createTable(purchasereturn)
}
function onError(result) {
    window.alert(result.responseText);
}


function onSaveButtonClick() {

    var user = {
        id: $("#id").val(),
        PurchaseDate: $("#PurchaseDate").val(),
        invoiceno: $("#invoiceno").val(),
        InvoiceDate: $("#InvoiceDate").val(),
        SupplierID: $("#SupplierID").val(),
        Total: $("#Total").val(),
        Discount: $("#Discount").val(),
        Grandtotal: $("#Grandtotal").val(),
        pbal: $("#pbal").val(),
        paid: $("#paid").val(),
        balance: $("#balance").val(),
        paidmode: $("#paidmode").val(),
        Bank: $("#Bank").val(),
        chequeno: $("#chequeno").val(),
        vatp: $("#vatp").val(),
        vatamount: $("#vatamount").val(),
        other: $("#other").val(),
        notes: $("#notes").val(),
        billamount: $("#billamount").val(),
        itemdiscount: $("#itemdiscount").val()


    }
    $.post("http://127.0.0.1:8081/purchasereturn", user, onPostUsers);
}
function onPostUsers(result) {
    var purchasereturn = result;
    createTable(purchasereturn);
}

function onGetUsers(result) {
    var purchasereturn = result;
    createTable(purchasereturn);
}
function createTable(purchasereturn) {
    var tableHtml = "<tr><td>ID</td><td>PurchaseDate</td><td>invoiceno</td><td>InvoiceDate</td><td>SupplierID</td><td>Total</td><td>Discount</td><td>Grandtotal</td><td>pbal</td><td>paid</td><td>balance</td><td>paidmode</td><td>Bank</td><td>chequeno</td><td>vatp</td><td>vatamount</td><td>other</td><td>notes</td><td>billamount</td><td>itemdiscount</td></tr>";
    for (var i = 0; i < purchasereturn.length; i++) {
        var row = "<tr>";
        row = row + "<td>" + purchasereturn[i].id + "</td>";
        row = row + "<td>" + purchasereturn[i].PurchaseDate + "</td>";
        row = row + "<td>" + purchasereturn[i].invoiceno + "</td>";
        row = row + "<td>" + purchasereturn[i].InvoiceDate + "</td>";
        row = row + "<td>" + purchasereturn[i].SupplierID + "</td>";
        row = row + "<td>" + purchasereturn[i].Total + "</td>";
        row = row + "<td>" + purchasereturn[i].Discount + "</td>";
        row = row + "<td>" + purchasereturn[i].Grandtotal + "</td>";
        row = row + "<td>" + purchasereturn[i].pbal + "</td>";
        row = row + "<td>" + purchasereturn[i].paid + "</td>";
        row = row + "<td>" + purchasereturn[i].balance + "</td>";
        row = row + "<td>" + purchasereturn[i].paidmode + "</td>";
        row = row + "<td>" + purchasereturn[i].Bank + "</td>";
        row = row + "<td>" + purchasereturn[i].chequeno + "</td>";
        row = row + "<td>" + purchasereturn[i].vatp + "</td>";
        row = row + "<td>" + purchasereturn[i].vatamount + "</td>";
        row = row + "<td>" + purchasereturn[i].other + "</td>";
        row = row + "<td>" + purchasereturn[i].notes + "</td>";
        row = row + "<td>" + purchasereturn[i].billamount + "</td>";
        row = row + "<td>" + purchasereturn[i].itemdiscount + "</td>";
        row = row + "<td><input type='button' value='Edit' onclick='onEdit(\"" + purchasereturn[i].id + "\")' /></td>";
        row = row + "</tr>";
        tableHtml = tableHtml + row;
    }
    tableHtml = tableHtml + "</table>";
    $("#table").html(tableHtml);
}
function onEdit(userId) {
    var requestParams = {
        url: "http://127.0.0.1:8081/purchasereturn/" + userId,
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

    $("#PurchaseDate").val(user.PurchaseDate);
    $("#invoiceno").val(user.invoiceno);
    $("#InvoiceDate").val(user.InvoiceDate);
    $("#SupplierID").val(user.SupplierID);
    $("#Total").val(user.Total);
    $("#Discount").val(user.Discount);
    $("#Grandtotal").val(user.Grandtotal);
    $("#pbal").val(user.pbal);
    $("#paid").val(user.paid);
    $("#balance").val(user.balance);
    $("#paidmode").val(user.paidmode);
    $("#Bank").val(user.Bank);
    $("#chequeno").val(user.chequeno);
    $("#vatp").val(user.vatp);
    $("#vatamount").val(user.vatamount);
    $("#other").val(user.other);
    $("#notes").val(user.notes);
    $("#billamount").val(user.billamount);
    $("#itemdiscount").val(user.itemdiscount);
}