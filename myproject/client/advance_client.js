$(document).ready(onReady);
function onReady() {
    $.get("http://127.0.0.1:8081/advance", onGetUsers);
    $("#save-button").click(onSaveButtonClick);
    $("#update-button").click(onUpdateButtonClick);
    $("#delete-button").click(onDeleteButtonClick);
}

function onDeleteButtonClick() {
    var id = $("#id").val();
    var requestParams = {
        url: "http://127.0.0.1:8081/advance/" + id,
        method: "DELETE",
        data: id,
        success: onDeleteadvance,
        error: onError
    };
    $.ajax(requestParams);
}

function onDeleteadvance(result) {
    var advance = result;
    createTable(advance);
}



function onUpdateButtonClick() {
    var user = {
        id: $("#id").val(),
        date: $("#date").val(),
        eid: $("#eid").val(),
        reason: $("#reason").val(),
        amount: $("#amount").val()
    };
    var requestParams = {
        url: "http://127.0.0.1:8081/advance/" + user.id,
        method: "PUT",
        data: user,
        success: onPutadvance,
        error: onError
    };
    $.ajax(requestParams);
}
function onPutadvance(result) {
    var advance = result;
    createTable(advance)
}
function onError(result) {
    window.alert(result.responseText);
}


function onSaveButtonClick() {

    var user = {
        id: $("#id").val(),
        date: $("#date").val(),
        eid: $("#eid").val(),
        reason: $("#reason").val(),
        amount: $("#amount").val()

    }
    $.post("http://127.0.0.1:8081/advance", user, onPostUsers);
}
function onPostUsers(result) {
    var advance = result;
    createTable(advance);
}

function onGetUsers(result) {
    var advance = result;
    createTable(advance);
}
function createTable(advance) {
    var tableHtml = "<tr><td>Id</td><td>Date</td><td>Eid</td><td>Reason</td><td>Amount</td></tr>";
    for (var i = 0; i < advance.length; i++) {
        var row = "<tr>";
        row = row + "<td>" + advance[i].id + "</td>";
        row = row + "<td>" + advance[i].date + "</td>";
        row = row + "<td>" + advance[i].eid + "</td>";
        row = row + "<td>" + advance[i].reason + "</td>";
        row = row + "<td>" + advance[i].amount + "</td>";
        row = row + "<td><input type='button' value='Edit' onclick='onEdit(\"" + advance[i].id + "\")' /></td>";
        row = row + "</tr>";
        tableHtml = tableHtml + row;
    }
    tableHtml = tableHtml + "</table>";
    $("#table").html(tableHtml);
}

function onEdit(userId) {
    var requestParams = {
        url: "http://127.0.0.1:8081/advance/" + userId,
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
    $("#eid").val(user.eid);
    $("#reason").val(user.reason);
    $("#amount").val(user.amount);

}