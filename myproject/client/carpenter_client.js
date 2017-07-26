$(document).ready(onReady);
function onReady() {
    $.get("http://127.0.0.1:8081/carpenter", onGetUsers);
    $("#save-button").click(onSaveButtonClick);
    $("#update-button").click(onUpdateButtonClick);
    $("#delete-button").click(onDeleteButtonClick);
}

function onDeleteButtonClick() {
    var id = $("#id").val();
    var requestParams = {
        url: "http://127.0.0.1:8081/carpenter/" + id,
        method: "DELETE",
        data: id,
        success: onDeletecarpenter,
        error: onError
    };
    $.ajax(requestParams);
}

function onDeletecarpenter(result) {
    var carpenter = result;
    createTable(carpenter);
}


function onUpdateButtonClick() {
    var user = {
        id: $("#id").val(),
        date: $("#date").val(),
        totalamount: $("#totalamount").val(),
        commission: $("#commission").val(),
        commamount: $("#commamount").val()

    };
    var requestParams = {
        url: "http://127.0.0.1:8081/carpenter/" + user.id,
        method: "PUT",
        data: user,
        success: onPutcarpenter,
        error: onError
    };
    $.ajax(requestParams);
}
function onPutcarpenter(result) {
    var carpenter = result;
    createTable(carpenter)
}
function onError(result) {
    window.alert(result.responseText);
}

function onSaveButtonClick() {

    var user = {
        id: $("#id").val(),
        date: $("#date").val(),
        totalamount: $("#totalamount").val(),
        commission: $("#commission").val(),
        commamount: $("#commamount").val()
    }
    $.post("http://127.0.0.1:8081/carpenter", user, onPostcarpenter);
}
function onPostcarpenter(result) {
    var carpenter = result;
    createTable(carpenter);
}

function onGetUsers(result) {
    var carpenter = result;
    createTable(carpenter);
}
function createTable(carpenter) {
    var tableHtml = "<tr><td>ID</td><td>Date</td><td>totalamount</td><td>commission</td><td>commamount</td></tr>";
    for (var i = 0; i < carpenter.length; i++) {
        var row = "<tr>";
        row = row + "<td>" + carpenter[i].id + "</td>";
        row = row + "<td>" + carpenter[i].date + "</td>";
        row = row + "<td>" + carpenter[i].totalamount + "</td>";
        row = row + "<td>" + carpenter[i].commission + "</td>";
        row = row + "<td>" + carpenter[i].commamount + "</td>";
        row = row + "<td><input type='button' value='Edit' onclick='onEdit(\"" + carpenter[i].id + "\")' /></td>";
        row = row + "</tr>";
        tableHtml = tableHtml + row;
    }
    tableHtml = tableHtml + "</table>";
    $("#table").html(tableHtml);
}
function onEdit(userId) {
    var requestParams = {
        url: "http://127.0.0.1:8081/carpenter/" + userId,
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
    var carpenter = result;
    updateTextboxes(carpenter);
}
function updateTextboxes(user) {
    $("#id").val(user.id);

    $("#date").val(user.date);
    $("#totalamount").val(user.totalamount);
    $("#commission").val(user.commission);
    $("#commamount").val(user.commamount);
}