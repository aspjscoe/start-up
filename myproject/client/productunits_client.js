$(document).ready(onReady);
function onReady() {
    $.get("http://127.0.0.1:8081/productunits", onGetUsers);
    $("#save-button").click(onSaveButtonClick);
}

function onDeleteButtonClick() {
    var id = $("#id").val();
    var requestParams = {
        url: "http://127.0.0.1:8081/productunits/" + id,
        method: "DELETE",
        data: id,
        success: onDeleteproductunits,
        error: onError
    };
    $.ajax(requestParams);
}

function onDeleteproductunits(result) {
    var productunits = result;
    createTable(productunits);
}



function onUpdateButtonClick() {
    var user = {
        id: $("#id").val(),
        pid: $("#pid").val(),
        unit: $("#unit").val(),
        qty: $("#qty").val(),
        nxtunit: $("#nxtunit").val(),
        pdefault: $("#pdefault").val(),
        sdefault: $("#sdefault").val()
    };
    var requestParams = {
        url: "http://127.0.0.1:8081/productunits/" + user.id,
        method: "PUT",
        data: user,
        success: onPutproductunits,
        error: onError
    };
    $.ajax(requestParams);
}
function onPutproductunits(result) {
    var productunits = result;
    createTable(productunits)
}
function onError(result) {
    window.alert(result.responseText);
}



function onSaveButtonClick() {

    var user = {
        id: $("#id").val(),
        pid: $("#pid").val(),
        unit: $("#unit").val(),
        qty: $("#qty").val(),
        nxtunit: $("#nxtunit").val(),
        pdefault: $("#pdefault").val(),
        sdefault: $("#sdefault").val()

    }
    $.post("http://127.0.0.1:8081/productunits", user, onPostUsers);
}
function onPostUsers(result) {
    var productunits = result;
    createTable(productunits);
}

function onGetUsers(result) {
    var productunits = result;
    createTable(productunits);
}
function createTable(productunits) {
    var tableHtml = "<tr><td>ID</td><td>pid</td><td>unit</td><td>qty</td><td>nxtunit</td><td>pdefault</td><td>sdefault</td></tr>";
    for (var i = 0; i < productunits.length; i++) {
        var row = "<tr>";
        row = row + "<td>" + productunits[i].id + "</td>";
        row = row + "<td>" + productunits[i].pid + "</td>";
        row = row + "<td>" + productunits[i].unit + "</td>";
        row = row + "<td>" + productunits[i].qty + "</td>";
        row = row + "<td>" + productunits[i].nxtunit + "</td>";
        row = row + "<td>" + productunits[i].pdefault + "</td>";
        row = row + "<td>" + productunits[i].sdefault + "</td>";

        row = row + "<td><input type='button' value='Edit' onclick='onEdit(\"" + productunits[i].id + "\")' /></td>";

        row = row + "</tr>";
        tableHtml = tableHtml + row;
    }
    tableHtml = tableHtml + "</table>";
    $("#table").html(tableHtml);
}
function onEdit(userId) {
    var requestParams = {
        url: "http://127.0.0.1:8081/productunits/" + userId,
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

    $("#pid").val(user.pid);
    $("#unit").val(user.unit);
    $("#qty").val(user.qty);
    $("#nxtunit").val(user.nxtunit);
    $("#pdefault").val(user.pdefault);
    $("#sdefault").val(user.sdefault);

}