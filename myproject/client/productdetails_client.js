$(document).ready(onReady);
function onReady() {
    $.get("http://127.0.0.1:8081/productdetails", onGetUsers);
    $("#save-button").click(onSaveButtonClick);
    $("#update-button").click(onUpdateButtonClick);
    $("#delete-button").click(onDeleteButtonClick);
}

function onDeleteButtonClick() {
    var id = $("#id").val();
    var requestParams = {
        url: "http://127.0.0.1:8081/productdetails/" + id,
        method: "DELETE",
        data: id,
        success: onDeleteproductdetails,
        error: onError
    };
    $.ajax(requestParams);
}

function onDeleteproductdetails(result) {
    var productdetails = result;
    createTable(productdetails);
}




function onUpdateButtonClick() {
    var user = {
        id: $("#id").val(),
        Invoiceno: $("#Invoiceno").val(),
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
        url: "http://127.0.0.1:8081/productdetails/" + user.id,
        method: "PUT",
        data: user,
        success: onPutproductdetails,
        error: onError
    };
    $.ajax(requestParams);
}
function onPutproductdetails(result) {
    var productdetails = result;
    createTable(productdetails)
}
function onError(result) {
    window.alert(result.responseText);
}


function onSaveButtonClick() {

    var user = {
        id: $("#id").val(),
        Invoiceno: $("#Invoiceno").val(),
        pcode: $("#pcode").val(),
        Qty: $("#Qty").val(),
        Price: $("#Price").val(),
        Discount: $("#Discount").val(),
        Total: $("#Total").val(),
        Unit: $("#Unit").val(),
        vatp: $("#vatp").val(),
        vatamount: $("#vatamount").val()
    }
    $.post("http://127.0.0.1:8081/productdetails", user, onPostUsers);
}
function onPostUsers(result) {
    var productdetails = result;
    createTable(productdetails);
}

function onGetUsers(result) {
    var productdetails = result;
    createTable(productdetails);
}
function createTable(productdetails) {
    var tableHtml = "<tr><td>ID</td><td>Invoiceno</td><td>pcode</td><td>Qty</td><td>Price</td><td>Discount</td><td>Total</td><td>Unit</td><td>vatp</td><td>vatamount</td></tr>";
    for (var i = 0; i < productdetails.length; i++) {
        var row = "<tr>";
        row = row + "<td>" + productdetails[i].id + "</td>";
        row = row + "<td>" + productdetails[i].Invoiceno + "</td>";
        row = row + "<td>" + productdetails[i].pcode + "</td>";
        row = row + "<td>" + productdetails[i].Qty + "</td>";
        row = row + "<td>" + productdetails[i].Price + "</td>";
        row = row + "<td>" + productdetails[i].Discount + "</td>";

        row = row + "<td>" + productdetails[i].Total + "</td>";
        row = row + "<td>" + productdetails[i].Unit + "</td>";
        row = row + "<td>" + productdetails[i].vatp + "</td>";
        row = row + "<td>" + productdetails[i].vatamount + "</td>";
        row = row + "<td><input type='button' value='Edit' onclick='onEdit(\"" + productdetails[i].id + "\")' /></td>";

        row = row + "</tr>";
        tableHtml = tableHtml + row;
    }
    tableHtml = tableHtml + "</table>";
    $("#table").html(tableHtml);
}
function onEdit(userId) {
    var requestParams = {
        url: "http://127.0.0.1:8081/productdetails/" + userId,
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

    $("#Invoiceno").val(user.Invoiceno);
    $("#pcode").val(user.pcode);
    $("#Qty").val(user.Qty);
    $("#Price").val(user.Price);
    $("#Discount").val(user.Discount);
    $("#Total").val(user.Total);
    $("#Unit").val(user.Unit);
    $("#vatp").val(user.vatp);
    $("#vatamount").val(user.vatamount);

}