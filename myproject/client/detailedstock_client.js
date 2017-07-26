$(document).ready(onReady);
function onReady() {
    $.get("http://127.0.0.1:8081/detailedstock", onGetUsers);
    $("#save-button").click(onSaveButtonClick);
    $("#update-button").click(onUpdateButtonClick);
    $("#delete-button").click(onDeleteButtonClick);
}


function onDeleteButtonClick() {
    var id = $("#id").val();
    var requestParams = {
        url: "http://127.0.0.1:8081/detailedstock/" + id,
        method: "DELETE",
        data: id,
        success: onDeletedetailedstock,
        error: onError
    };
    $.ajax(requestParams);
}

function onDeletedetailedstock(result) {
    var detailedstock = result;
    createTable(detailedstock);
}


function onUpdateButtonClick() {
    var user = {
        id: $("#id").val(),
        date: $("#date").val(),
        pcode: $("#pcode").val(),
        opqtypcs: $("#opqtypcs").val(),
        pqtypcs: $("#pqtypcs").val(),
        sqtypcs: $("#sqtypcs ").val(),
        cqtypcs: $("#cqtypcs").val(),
        PRqty: $("#PRqty").val()
    };
    var requestParams = {
        url: "http://127.0.0.1:8081/detailedstock/" + user.id,
        method: "PUT",
        data: user,
        success: onPutdetailedstock,
        error: onError
    };
    $.ajax(requestParams);
}
function onPutdetailedstock(result) {
    var detailedstock = result;
    createTable(detailedstock)
}
function onError(result) {
    window.alert(result.responseText);
}

function onSaveButtonClick() {

    var user = {
        id: $("#id").val(),
        date: $("#date").val(),
        pcode: $("#pcode").val(),
        opqtypcs: $("#opqtypcs").val(),
        pqtypcs: $("#pqtypcs").val(),
        sqtypcs: $("#sqtypcs ").val(),
        cqtypcs: $("#cqtypcs").val(),
        PRqty: $("#PRqty").val()


    }
    $.post("http://127.0.0.1:8081/detailedstock", user, onPostUsers);
}
function onPostUsers(result) {
    var detailedstock = result;
    createTable(detailedstock);
}

function onGetUsers(result) {
    var detailedstock = result;
    createTable(detailedstock);
}
function createTable(detailedstock) {
    var tableHtml = "<tr><td>ID</td><td>date</td><td>pcode</td><td>opqtypcs</td><td>pqtypcs</td><td>sqtypcs</td><td>cqtypcs</td><td>PRqty</td></tr>";
    for (var i = 0; i < detailedstock.length; i++) {
        var row = "<tr>";
        row = row + "<td>" + detailedstock[i].id + "</td>";
        row = row + "<td>" + detailedstock[i].date + "</td>";
        row = row + "<td>" + detailedstock[i].pcode + "</td>";
        row = row + "<td>" + detailedstock[i].opqtypcs + "</td>";
        row = row + "<td>" + detailedstock[i].pqtypcs + "</td>";
        row = row + "<td>" + detailedstock[i].sqtypcs + "</td>";
        row = row + "<td>" + detailedstock[i].cqtypcs + "</td>";
        row = row + "<td>" + detailedstock[i].PRqty + "</td>";

        row = row + "<td><input type='button' value='Edit' onclick='onEdit(\"" + detailedstock[i].id + "\")' /></td>";
        row = row + "</tr>";
        tableHtml = tableHtml + row;
    }
    tableHtml = tableHtml + "</table>";
    $("#table").html(tableHtml);
}
function onEdit(userId) {
    var requestParams = {
        url: "http://127.0.0.1:8081/detailedstock/" + userId,
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
    $("#pcode").val(user.pcode);
    $("#opqtypcs").val(user.opqtypcs);
    $("#pqtypcs").val(user.pqtypcs);
    $("#sqtypcs ").val(user.sqtypcs);
    $("#cqtypcs").val(user.cqtypcs);
    $("#PRqty").val(user.PRqty);

}