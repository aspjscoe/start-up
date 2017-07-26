$(document).ready(onReady);
function onReady() {
    $.get("http://127.0.0.1:8081/dummybillitemdetails", onGetUsers);
    $("#save-button").click(onSaveButtonClick);
    $("#update-button").click(onUpdateButtonClick);
    $("#delete-button").click(onDeleteButtonClick);
}
function onDeleteButtonClick() {
    var id = $("#id").val();
    var requestParams = {
        url: "http://127.0.0.1:8081/dummybillitemdetails/" + id,
        method: "DELETE",
        data: id,
        success: onDeletedummybillitemdetails,
        error: onError
    };
    $.ajax(requestParams);
}

function onDeletedummybillitemdetails(result) {
    var dummybillitemdetails = result;
    createTable(dummybillitemdetails);
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
        url: "http://127.0.0.1:8081/dummybillitemdetails/" + user.id,
        method: "PUT",
        data: user,
        success: onPutdummybillitemdetails,
        error: onError
    };
    $.ajax(requestParams);
}
function onPutdummybillitemdetails(result) {
    var dummybillitemdetails = result;
    createTable(dummybillitemdetails)
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
    $.post("http://127.0.0.1:8081/dummybillitemdetails", user, onPostUsers);
}
function onPostUsers(result) {
    var dummybillitemdetails = result;
    createTable(dummybillitemdetails);
}

function onGetUsers(result) {
    var dummybillitemdetails = result;
    createTable(dummybillitemdetails);
}
function createTable(dummybillitemdetails) {
    var tableHtml = "<tr><td>ID</td><td>BillNo</td><td>ModelNo</td><td>Quantity</td><td>SaledPrice</td><td>Tax</td><td>Discount</td><td>Total</td><td>Unit</td><td>taxp</td><td>rate</td><td>free</td></tr>";
    for (var i = 0; i < dummybillitemdetails.length; i++) {
        var row = "<tr>";
        row = row + "<td>" + dummybillitemdetails[i].id + "</td>";
        row = row + "<td>" + dummybillitemdetails[i].BillNo + "</td>";
        row = row + "<td>" + dummybillitemdetails[i].ModelNo + "</td>";
        row = row + "<td>" + dummybillitemdetails[i].Quantity + "</td>";
        row = row + "<td>" + dummybillitemdetails[i].SaledPrice + "</td>";
        row = row + "<td>" + dummybillitemdetails[i].Tax + "</td>";
        row = row + "<td>" + dummybillitemdetails[i].Discount + "</td>";
        row = row + "<td>" + dummybillitemdetails[i].Total + "</td>";
        row = row + "<td>" + dummybillitemdetails[i].Unit + "</td>";
        row = row + "<td>" + dummybillitemdetails[i].taxp + "</td>";
        row = row + "<td>" + dummybillitemdetails[i].rate + "</td>";
        row = row + "<td>" + dummybillitemdetails[i].free + "</td>";

        row = row + "<td><input type='button' value='Edit' onclick='onEdit(\"" + dummybillitemdetails[i].id + "\")' /></td>";
        row = row + "</tr>";
        tableHtml = tableHtml + row;
    }
    tableHtml = tableHtml + "</table>";
    $("#table").html(tableHtml);
}
function onEdit(userId) {
    var requestParams = {
        url: "http://127.0.0.1:8081/dummybillitemdetails/" + userId,
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