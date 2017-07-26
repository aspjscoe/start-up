$(document).ready(onReady);
function onReady() {
    $.get("http://127.0.0.1:8081/salarylist", onGetUsers);
    $("#save-button").click(onSaveButtonClick);
    $("#update-button").click(onUpdateButtonClick);
    $("#delete-button").click(onDeleteButtonClick);
}
function onDeleteButtonClick() {
    var id = $("#id").val();
    var requestParams = {
        url: "http://127.0.0.1:8081/salarylist/" + id,
        method: "DELETE",
        data: id,
        success: onDeletesalarylist,
        error: onError
    };
    $.ajax(requestParams);
}

function onDeletesalarylist(result) {
    var salarylist = result;
    createTable(salarylist);
}



function onUpdateButtonClick() {
    var user = {
        id: $("#id").val(),
        sid: $("#sid").val(),
        eid: $("#eid").val(),
        salary: $("#salary").val(),
        advance: $("#advance").val(),
        balance: $("#balance").val()
    };
    var requestParams = {
        url: "http://127.0.0.1:8081/salarylist/" + user.id,
        method: "PUT",
        data: user,
        success: onPutsalarylist,
        error: onError
    };
    $.ajax(requestParams);
}
function onPutsalarylist(result) {
    var salarylist = result;
    createTable(salarylist)
}
function onError(result) {
    window.alert(result.responseText);
}



function onSaveButtonClick() {

    var user = {
        id: $("#id").val(),
        sid: $("#sid").val(),
        eid: $("#eid").val(),
        salary: $("#salary").val(),
        advance: $("#advance").val(),
        balance: $("#balance").val()

    }
    $.post("http://127.0.0.1:8081/salarylist", user, onPostUsers);
}
function onPostUsers(result) {
    var salarylist = result;
    createTable(salarylist);
}

function onGetUsers(result) {
    var salarylist = result;
    createTable(salarylist);
}
function createTable(salarylist) {
    var tableHtml = "<tr><td>ID</td><td>sid</td><td>eid</td><td>salary</td><td>advance</td><<td>balance</td>/tr>";
    for (var i = 0; i < salarylist.length; i++) {
        var row = "<tr>";
        row = row + "<td>" + salarylist[i].id + "</td>";
        row = row + "<td>" + salarylist[i].sid + "</td>";
        row = row + "<td>" + salarylist[i].eid + "</td>";
        row = row + "<td>" + salarylist[i].salary + "</td>";
        row = row + "<td>" + salarylist[i].advance + "</td>";
        row = row + "<td>" + salarylist[i].balance + "</td>";
        row = row + "<td><input type='button' value='Edit' onclick='onEdit(\"" + salarylist[i].id + "\")' /></td>";

        row = row + "</tr>";
        tableHtml = tableHtml + row;
    }
    tableHtml = tableHtml + "</table>";
    $("#table").html(tableHtml);
}
function onEdit(userId) {
    var requestParams = {
        url: "http://127.0.0.1:8081/salarylist/" + userId,
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

    $("#sid").val(user.sid);
    $("#eid").val(user.eid);
    $("#salary").val(user.salary);
    $("#advance").val(user.advance);
    $("#balance").val(user.balance);

}