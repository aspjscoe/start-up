$(document).ready(onReady);
function onReady() {
    $.get("http://127.0.0.1:8081/bankaccount", onGetUsers);
    $("#save-button").click(onSaveButtonClick);
    $("#update-button").click(onUpdateButtonClick);
    $("#delete-button").click(onDeleteButtonClick);
}

function onDeleteButtonClick() {
    var id = $("#id").val();
    var requestParams = {
        url: "http://127.0.0.1:8081/bankaccount/" + id,
        method: "DELETE",
        data: id,
        success: onDeletebankaccount,
        error: onError
    };
    $.ajax(requestParams);
}

function onDeletebankaccount(result) {
    var bankaccount = result;
    createTable(bankaccount);
}


function onUpdateButtonClick() {
    var user = {
        id: $("#id").val(),
        date: $("#date").val(),
        from: $("#from").val(),
        type: $("#type").val(),
        bank: $("#bank").val(),
        details: $("#details").val(),
        debit: $("#debit").val(),
        credit: $("#credit").val(),
        balance: $("#balance").val(),
        fromtype: $("#fromtype").val(),
        paytype: $("#paytype").val(),
        chequeno: $("#chequeno").val()
    };
    var requestParams = {
        url: "http://127.0.0.1:8081/bankaccount/" + user.id,
        method: "PUT",
        data: user,
        success: onPutbankaccount,
        error: onError
    };
    $.ajax(requestParams);
}
function onPutbankaccount(result) {
    var bankaccount = result;
    createTable(bankaccount)
}
function onError(result) {
    window.alert(result.responseText);
}



function onSaveButtonClick() {

    var user = {
        id: $("#id").val(),
        date: $("#date").val(),
        from: $("#from").val(),
        type: $("#type").val(),
        bank: $("#bank").val(),
        details: $("#details").val(),
        debit: $("#debit").val(),
        credit: $("#credit").val(),
        balance: $("#balance").val(),
        fromtype: $("#fromtype").val(),
        paytype: $("#paytype").val(),
        chequeno: $("#chequeno").val()
    }
    $.post("http://127.0.0.1:8081/bankaccount", user, onPostUsers);
}
function onPostUsers(result) {
    var bankaccount = result;
    createTable(bankaccount);
}

function onGetUsers(result) {
    var bankaccount = result;
    createTable(bankaccount);
}
function createTable(bankaccount) {
    var tableHtml = "<tr><td>Id</td><td>Date</td><td>From</td><td>Type</td><td>Bank</td><td>Details</td><td>Debit</td><td>Credit</td><td>Balance</td><td>Fromtype</td><td>Paytype</td><td>chequeno</td></tr>";
    for (var i = 0; i < bankaccount.length; i++) {
        var row = "<tr>";
        row = row + "<td>" + bankaccount[i].id + "</td>";
        row = row + "<td>" + bankaccount[i].date + "</td>";
        row = row + "<td>" + bankaccount[i].from + "</td>";
        row = row + "<td>" + bankaccount[i].type + "</td>";
        row = row + "<td>" + bankaccount[i].bank + "</td>";
        row = row + "<td>" + bankaccount[i].details + "</td>";
        row = row + "<td>" + bankaccount[i].debit + "</td>";
        row = row + "<td>" + bankaccount[i].credit + "</td>";
        row = row + "<td>" + bankaccount[i].balance + "</td>";
        row = row + "<td>" + bankaccount[i].fromtype + "</td>";
        row = row + "<td>" + bankaccount[i].paytype + "</td>";
        row = row + "<td>" + bankaccount[i].chequeno + "</td>";
        row = row + "<td><input type='button' value='Edit' onclick='onEdit(\"" + bankaccount[i].id + "\")' /></td>";
        row = row + "</tr>";
        tableHtml = tableHtml + row;
    }
    tableHtml = tableHtml + "</table>";
    $("#table").html(tableHtml);
}
function onEdit(userId) {
    var requestParams = {
        url: "http://127.0.0.1:8081/bankaccount/" + userId,
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
    $("#from").val(user.from);
    $("#type").val(user.type);
    $("#bank").val(user.bank);
    $("#details").val(user.details);
    $("#debit").val(user.debit);
    $("#credit").val(user.credit);
    $("#balance").val(user.balance);
    $("#fromtype").val(user.fromtype);
    $("#paytype").val(user.paytype);
    $("#chequeno").val(user.chequeno)
}