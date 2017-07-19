$(document).ready(onReady);
function onReady() {
    $.get("http://127.0.0.1:8081/purchase", onGetUsers);
    $("#save-button").click(onSaveButtonClick);
    $("#update-button").click(onUpdateButtonClick);
    $("#delete-button").click(onDeleteButtonClick);
}

function onDeleteButtonClick() {
    var id = $("#id").val();
    var requestParams = {
        url: "http://127.0.0.1:8081/purchase/" + id,
        method: "DELETE",
        data: id,
        success: onDeletepurchase,
        error: onError
    };
    $.ajax(requestParams);
}

function onDeletepurchase(result) {
    var purchase = result;
    createTable(purchase);
}



function onUpdateButtonClick() {
    var user = {
        id: $("#id").val(),
        date: $("#date").val(),
        invoiceno: $("#invoiceno").val(),
        sid: $("#sid").val(),
        totalamount: $("#totalamount").val(),
        tax: $("#tax").val(),
        sd: $("#sd").val(),
        discount: $("#discount").val(),
        netamount: $("#netamount").val(),
        paidmode: $("#paidmode").val(),
        paid: $("#paid").val(),
        bankname: $("#bankname").val(),
        Chequeno: $("#Chequeno").val(),
        balance: $("#balance").val(),
        vatp: $("#vatp").val()
    };
    var requestParams = {
        url: "http://127.0.0.1:8081/purchase/" + user.id,
        method: "PUT",
        data: user,
        success: onPutpurchase,
        error: onError
    };
    $.ajax(requestParams);
}
function onPutpurchase(result) {
    var purchase = result;
    createTable(purchase)
}
function onError(result) {
    window.alert(result.responseText);
}

function onSaveButtonClick() {

    var user = {
        id: $("#id").val(),
        date: $("#date").val(),
        invoiceno: $("#invoiceno").val(),
        sid: $("#sid").val(),
        totalamount: $("#totalamount").val(),
        tax: $("#tax").val(),
        sd: $("#sd").val(),
        discount: $("#discount").val(),
        netamount: $("#netamount").val(),
        paidmode: $("#paidmode").val(),
        paid: $("#paid").val(),
        bankname: $("#bankname").val(),
        Chequeno: $("#Chequeno").val(),
        balance: $("#balance").val(),
        vatp: $("#vatp").val()

    }
    $.post("http://127.0.0.1:8081/purchase", user, onPostUsers);
}
function onPostUsers(result) {
    var purchase = result;
    createTable(purchase);
}

function onGetUsers(result) {
    var purchase = result;
    createTable(purchase);
}
function createTable(purchase) {
    var tableHtml = "<tr><td>ID</td><td>date</td><td>invoiceno</td><td>sid</td><td>totalamount</td><td>tax</td><td>sd</td><td>discount</td><td>netamount</td><td>paidmode</td><td>paid</td><td>bankname</td><td>Chequeno</td><td>balance</td><td>vatp</td></tr>";
    for (var i = 0; i < purchase.length; i++) {
        var row = "<tr>";
        row = row + "<td>" + purchase[i].id + "</td>";
        row = row + "<td>" + purchase[i].date + "</td>";
        row = row + "<td>" + purchase[i].invoiceno + "</td>";
        row = row + "<td>" + purchase[i].sid + "</td>";
        row = row + "<td>" + purchase[i].totalamount + "</td>";
        row = row + "<td>" + purchase[i].tax + "</td>";
        row = row + "<td>" + purchase[i].sd + "</td>";
        row = row + "<td>" + purchase[i].discount + "</td>";
        row = row + "<td>" + purchase[i].netamount + "</td>";
        row = row + "<td>" + purchase[i].paidmode + "</td>";
        row = row + "<td>" + purchase[i].paid + "</td>";
        row = row + "<td>" + purchase[i].bankname + "</td>";
        row = row + "<td>" + purchase[i].Chequeno + "</td>";
        row = row + "<td>" + purchase[i].balance + "</td>";
        row = row + "<td><input type='button' value='Edit' onclick='onEdit(\"" + purchase[i].id + "\")' /></td>";

        row = row + "<td>" + purchase[i].vatp + "</td>";


        row = row + "</tr>";
        tableHtml = tableHtml + row;
    }
    tableHtml = tableHtml + "</table>";
    $("#table").html(tableHtml);
}
function onEdit(userId) {
    var requestParams = {
        url: "http://127.0.0.1:8081/purchase/" + userId,
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
    $("#invoiceno").val(user.invoiceno);
    $("#sid").val(user.sid);
    $("#totalamount").val(user.totalamount);
    $("#tax").val(user.tax);
    $("#sd").val(user.sd);
    $("#discount").val(user.discount);
    $("#netamount").val(user.netamount);
    $("#paidmode").val(user.paidmode);
    $("#paid").val(user.paid);
    $("#bankname").val(user.bankname);
    $("#Chequeno").val(user.Chequeno);
    $("#balance").val(user.balance);
    $("#vatp").val(user.vatp);
}