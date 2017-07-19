$(document).ready(onReady);
function onReady() {
    $.get("http://127.0.0.1:8081/purchasereturnlist", onGetUsers);
    $("#save-button").click(onSaveButtonClick);
    $("#update-button").click(onUpdateButtonClick);
    $("#delete-button").click(onDeleteButtonClick);
}

function onDeleteButtonClick() {
    var id = $("#id").val();
    var requestParams = {
        url: "http://127.0.0.1:8081/purchasereturnlist/" + id,
        method: "DELETE",
        data: id,
        success: onDeletepurchasereturnlist,
        error: onError
    };
    $.ajax(requestParams);
}

function onDeletepurchasereturnlist(result) {
    var purchasereturnlist = result;
    createTable(purchasereturnlist);
}



function onUpdateButtonClick() {
    var user = {
        id: $("#id").val(),
        invoiceno: $("#invoiceno").val(),
        pcode: $("#pcode").val(),
        Qty: $("#Qty").val(),
        Price: $("#Price").val(),
        Discount: $("#Discount").val(),
        Total: $("#Total").val(),
        Unit: $("#Unit").val(),

        vatp: $("#vatp").val(),
        vatamount: $("#vatamount").val()

    };
    var requestParams = {
        url: "http://127.0.0.1:8081/purchasereturnlist/" + user.id,
        method: "PUT",
        data: user,
        success: onPutpurchasereturnlist,
        error: onError
    };
    $.ajax(requestParams);
}
function onPutpurchasereturnlist(result) {
    var purchasereturnlist = result;
    createTable(purchasereturnlist)
}
function onError(result) {
    window.alert(result.responseText);
}


function onSaveButtonClick() {

    var user = {
        id: $("#id").val(),
        invoiceno: $("#invoiceno").val(),
        pcode: $("#pcode").val(),
        Qty: $("#Qty").val(),
        Price: $("#Price").val(),
        Discount: $("#Discount").val(),
        Total: $("#Total").val(),
        Unit: $("#Unit").val(),

        vatp: $("#vatp").val(),
        vatamount: $("#vatamount").val()


    }
    $.post("http://127.0.0.1:8081/purchasereturnlist", user, onPostUsers);
}
function onPostUsers(result) {
    var purchasereturnlist = result;
    createTable(purchasereturnlist);
}

function onGetUsers(result) {
    var purchasereturnlist = result;
    createTable(purchasereturnlist);
}
function createTable(purchasereturnlist) {
    var tableHtml = "<tr><td>ID</td><td>invoiceno</td><td>pcode</td><td>Qty</td><td>Price</td><td>Discount</td><td>Total</td><td>Unit</td><td>vatp</td><td>vatamount</td></tr>";
    for (var i = 0; i < purchasereturnlist.length; i++) {
        var row = "<tr>";
        row = row + "<td>" + purchasereturnlist[i].id + "</td>";

        row = row + "<td>" + purchasereturnlist[i].invoiceno + "</td>";
        row = row + "<td>" + purchasereturnlist[i].pcode + "</td>";
        row = row + "<td>" + purchasereturnlist[i].Qty + "</td>";
        row = row + "<td>" + purchasereturnlist[i].Price + "</td>";
        row = row + "<td>" + purchasereturnlist[i].Discount + "</td>";
        row = row + "<td>" + purchasereturnlist[i].Total + "</td>";
        row = row + "<td>" + purchasereturnlist[i].Unit + "</td>";
        row = row + "<td>" + purchasereturnlist[i].vatp + "</td>";
        row = row + "<td>" + purchasereturnlist[i].vatamount + "</td>";
        row = row + "<td><input type='button' value='Edit' onclick='onEdit(\"" + purchasereturnlist[i].id + "\")' /></td>";

        row = row + "</tr>";
        tableHtml = tableHtml + row;
    }
    tableHtml = tableHtml + "</table>";
    $("#table").html(tableHtml);
}
function onEdit(userId) {
    var requestParams = {
        url: "http://127.0.0.1:8081/purchasereturnlist/" + userId,
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

    $("#invoiceno").val(user.invoiceno)
    $("#pcode").val(user.pcode);
    $("#Qty").val(user.Qty);
    $("#Price").val(user.Price);
    $("#Discount").val(user.Discount);
    $("#Total").val(user.Total);
    $("#Unit").val(user.Unit);

    $("#vatp").val(user.vatp);
    $("#vatamount").val(user.vatamount);


}