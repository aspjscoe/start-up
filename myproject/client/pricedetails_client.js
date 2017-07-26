$(document).ready(onReady);
function onReady() {
    $.get("http://127.0.0.1:8081/pricedetails", onGetUsers);
    $("#save-button").click(onSaveButtonClick);
    $("#update-button").click(onUpdateButtonClick);
    $("#delete-button").click(onDeleteButtonClick);
}
function onDeleteButtonClick() {
    var id = $("#id").val();
    var requestParams = {
        url: "http://127.0.0.1:8081/pricedetails/" + id,
        method: "DELETE",
        data: id,
        success: onDeletepricedetails,
        error: onError
    };
    $.ajax(requestParams);
}

function onDeletepricedetails(result) {
    var pricedetails = result;
    createTable(pricedetails);
}



function onUpdateButtonClick() {
    var user = {
        id: $("#id").val(),
        pcode: $("#pcode").val(),
        mrp: $("#mrp").val(),
        unitspcbb: $("#unitspcbb").val(),
        unitsppcs: $("#unitsppcs").val(),
        awprice: $("#awprice").val(),
        taxvalue: $("#taxvalue").val(),
        status: $("#status").val(),
        casevalue: $("#casevalue").val()
    };
    var requestParams = {
        url: "http://127.0.0.1:8081/pricedetails/" + user.id,
        method: "PUT",
        data: user,
        success: onPutpricedetails,
        error: onError
    };
    $.ajax(requestParams);
}
function onPutpricedetails(result) {
    var pricedetails = result;
    createTable(pricedetails)
}
function onError(result) {
    window.alert(result.responseText);
}


function onSaveButtonClick() {

    var user = {
        id: $("#id").val(),
        pcode: $("#pcode").val(),
        mrp: $("#mrp").val(),
        unitspcbb: $("#unitspcbb").val(),
        unitsppcs: $("#unitsppcs").val(),
        awprice: $("#awprice").val(),
        taxvalue: $("#taxvalue").val(),
        status: $("#status").val(),
        casevalue: $("#casevalue").val()
    }
    $.post("http://127.0.0.1:8081/pricedetails", user, onPostUsers);
}
function onPostUsers(result) {
    var pricedetails = result;
    createTable(pricedetails);
}

function onGetUsers(result) {
    var pricedetails = result;
    createTable(pricedetails);
}
function createTable(pricedetails) {
    var tableHtml = "<tr><td>ID</td><td>pcode</td><td>mrp</td><td>unitspcbb</td><td>unitsppcs</td><td>awprice</td><td>taxvalue</td><td>status</td><td>casevalue</td></tr>";
    for (var i = 0; i < pricedetails.length; i++) {
        var row = "<tr>";
        row = row + "<td>" + pricedetails[i].id + "</td>";
        row = row + "<td>" + pricedetails[i].pcode + "</td>";
        row = row + "<td>" + pricedetails[i].mrp + "</td>";
        row = row + "<td>" + pricedetails[i].unitspcbb + "</td>";
        row = row + "<td>" + pricedetails[i].unitsppcs + "</td>";

        row = row + "<td>" + pricedetails[i].awprice + "</td>";
        row = row + "<td>" + pricedetails[i].taxvalue + "</td>";
        row = row + "<td>" + pricedetails[i].status + "</td>";
        row = row + "<td>" + pricedetails[i].casevalue + "</td>";
        row = row + "<td><input type='button' value='Edit' onclick='onEdit(\"" + pricedetails[i].id + "\")' /></td>";

        row = row + "</tr>";
        tableHtml = tableHtml + row;
    }
    tableHtml = tableHtml + "</table>";
    $("#table").html(tableHtml);
}
function onEdit(userId) {
    var requestParams = {
        url: "http://127.0.0.1:8081/pricedetails/" + userId,
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
    $("#mrp").val(user.mrp);
    $("#unitspcbb").val(user.unitspcbb);
    $("#unitsppcs").val(user.unitsppcs);
    $("#awprice").val(user.awprice);
    $("#taxvalue").val(user.taxvalue);
    $("#status").val(user.status);
    $("#casevalue").val(user.casevalue);

}