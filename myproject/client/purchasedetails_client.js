$(document).ready(onReady);
function onReady() {
    $.get("http://127.0.0.1:8081/purchasedetails", onGetUsers);
    $("#save-button").click(onSaveButtonClick);
    $("#update-button").click(onUpdateButtonClick);
    $("#delete-button").click(onDeleteButtonClick);
}

function onDeleteButtonClick() {
    var id = $("#id").val();
    var requestParams = {
        url: "http://127.0.0.1:8081/purchasedetails/" + id,
        method: "DELETE",
        data: id,
        success: onDeletepurchasedetails,
        error: onError
    };
    $.ajax(requestParams);
}

function onDeletepurchasedetails(result) {
    var purchasedetails = result;
    createTable(purchasedetails);
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
        url: "http://127.0.0.1:8081/purchasedetails/" + user.id,
        method: "PUT",
        data: user,
        success: onPutpurchasedetails,
        error: onError
    };
    $.ajax(requestParams);
}
function onPutpurchasedetails(result) {
    var purchasedetails = result;
    createTable(purchasedetails)
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
    $.post("http://127.0.0.1:8081/purchasedetails", user, onPostUsers);
}
function onPostUsers(result) {
    var purchasedetails = result;
    createTable(purchasedetails);
}

function onGetUsers(result) {
    var purchasedetails = result;
    createTable(purchasedetails);
}
function createTable(purchasedetails) {
    var tableHtml = "<tr><td>ID</td><td>PurchaseDate</td><td>invoiceno</td><td>InvoiceDate</td><td>SupplierID</td><td>Total</td><td>Discount</td><td>Grandtotal</td><td>pbal</td><td>paid</td><td>balance</td><td>paidmode</td><td>Bank</td><td>chequeno</td><td>vatp</td><td>vatamount</td><td>other</td><td>notes</td><td>billamount</td><td>itemdiscount</td></tr>";
    for (var i = 0; i < purchasedetails.length; i++) {
        var row = "<tr>";
        row = row + "<td>" + purchasedetails[i].id + "</td>";
        row = row + "<td>" + purchasedetails[i].PurchaseDate + "</td>";
        row = row + "<td>" + purchasedetails[i].invoiceno + "</td>";
        row = row + "<td>" + purchasedetails[i].InvoiceDate + "</td>";
        row = row + "<td>" + purchasedetails[i].SupplierID + "</td>";
        row = row + "<td>" + purchasedetails[i].Total + "</td>";
        row = row + "<td>" + purchasedetails[i].Discount + "</td>";
        row = row + "<td>" + purchasedetails[i].Grandtotal + "</td>";
        row = row + "<td>" + purchasedetails[i].pbal + "</td>";
        row = row + "<td>" + purchasedetails[i].paid + "</td>";
        row = row + "<td>" + purchasedetails[i].balance + "</td>";
        row = row + "<td>" + purchasedetails[i].paidmode + "</td>";
        row = row + "<td>" + purchasedetails[i].Bank + "</td>";
        row = row + "<td>" + purchasedetails[i].chequeno + "</td>";
        row = row + "<td>" + purchasedetails[i].vatp + "</td>";
        row = row + "<td>" + purchasedetails[i].vatamount + "</td>";
        row = row + "<td>" + purchasedetails[i].other + "</td>";
        row = row + "<td>" + purchasedetails[i].notes + "</td>";
        row = row + "<td>" + purchasedetails[i].billamount + "</td>";
        row = row + "<td>" + purchasedetails[i].itemdiscount + "</td>";
        row = row + "<td><input type='button' value='Edit' onclick='onEdit(\"" + purchasedetails[i].id + "\")' /></td>";

        row = row + "</tr>";
        tableHtml = tableHtml + row;
    }
    tableHtml = tableHtml + "</table>";
    $("#table").html(tableHtml);
}
function onEdit(userId) {
    var requestParams = {
        url: "http://127.0.0.1:8081/purchasedetails/" + userId,
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