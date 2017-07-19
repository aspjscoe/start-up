$(document).ready(onReady);
function onReady() {
    $.get("http://127.0.0.1:8081/stock", onGetUsers);
    $("#save-button").click(onSaveButtonClick);
    $("#update-button").click(onUpdateButtonClick);
    $("#delete-button").click(onDeleteButtonClick);
}

function onDeleteButtonClick() {
    var id = $("#id").val();
    var requestParams = {
        url: "http://127.0.0.1:8081/stock/" + id,
        method: "DELETE",
        data: id,
        success: onDeletestock,
        error: onError
    };
    $.ajax(requestParams);
}

function onDeletestock(result) {
    var stock = result;
    createTable(stock);
}



function onUpdateButtonClick() {
    var user = {
        id: $("#id").val(),

        pcode: $("#pcode").val(),
        qtypcs: $("#qtypcs").val()
    };
    var requestParams = {
        url: "http://127.0.0.1:8081/stock/" + user.id,
        method: "PUT",
        data: user,
        success: onPutstock,
        error: onError
    };
    $.ajax(requestParams);
}
function onPutstock(result) {
    var stock = result;
    createTable(stock)
}
function onError(result) {
    window.alert(result.responseText);
}



function onSaveButtonClick() {

    var user = {
        id: $("#id").val(),

        pcode: $("#pcode").val(),
        qtypcs: $("#qtypcs").val()



    }
    $.post("http://127.0.0.1:8081/stock", user, onPostUsers);
}
function onPostUsers(result) {
    var stock = result;
    createTable(stock);
}

function onGetUsers(result) {
    var stock = result;
    createTable(stock);
}
function createTable(stock) {
    var tableHtml = "<tr><td>ID</td><td>pcode</td><td>qtypcs</td></tr>";
    for (var i = 0; i < stock.length; i++) {
        var row = "<tr>";
        row = row + "<td>" + stock[i].id + "</td>";

        row = row + "<td>" + stock[i].pcode + "</td>";
        row = row + "<td>" + stock[i].qtypcs + "</td>";

        row = row + "<td><input type='button' value='Edit' onclick='onEdit(\"" + stock[i].id + "\")' /></td>";


        row = row + "</tr>";
        tableHtml = tableHtml + row;
    }
    tableHtml = tableHtml + "</table>";
    $("#table").html(tableHtml);
}
function onEdit(userId) {
    var requestParams = {
        url: "http://127.0.0.1:8081/stock/" + userId,
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


    $("#pcode").val(user.pcode);
    $("#qtypcs").val(user.qtypcs);

}