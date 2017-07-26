$(document).ready(onReady);
function onReady() {
    $.get("http://127.0.0.1:8081/salary", onGetUsers);
    $("#save-button").click(onSaveButtonClick);
    $("#update-button").click(onUpdateButtonClick);
    $("#delete-button").click(onDeleteButtonClick);
}

function onDeleteButtonClick() {
    var id = $("#id").val();
    var requestParams = {
        url: "http://127.0.0.1:8081/salary/" + id,
        method: "DELETE",
        data: id,
        success: onDeletesalary,
        error: onError
    };
    $.ajax(requestParams);
}

function onDeletesalary(result) {
    var salary = result;
    createTable(salary);
}



function onUpdateButtonClick() {
    var user = {
        id: $("#id").val(),
        date: $("#date").val(),
        month: $("#month").val(),
        total: $("#total").val(),
    };
    var requestParams = {
        url: "http://127.0.0.1:8081/salary/" + user.id,
        method: "PUT",
        data: user,
        success: onPutsalary,
        error: onError
    };
    $.ajax(requestParams);
}
function onPutsalary(result) {
    var salary = result;
    createTable(salary)
}
function onError(result) {
    window.alert(result.responseText);
}


function onSaveButtonClick() {

    var user = {
        id: $("#id").val(),
        date: $("#date").val(),
        month: $("#month").val(),
        total: $("#total").val(),

    }
    $.post("http://127.0.0.1:8081/salary", user, onPostUsers);
}
function onPostUsers(result) {
    var salary = result;
    createTable(salary);
}

function onGetUsers(result) {
    var salary = result;
    createTable(salary);
}
function createTable(salary) {
    var tableHtml = "<tr><td>ID</td><td>Date</td><td>month</td><td>total</td></tr>";
    for (var i = 0; i < salary.length; i++) {
        var row = "<tr>";
        row = row + "<td>" + salary[i].id + "</td>";
        row = row + "<td>" + salary[i].date + "</td>";
        row = row + "<td>" + salary[i].month + "</td>";
        row = row + "<td>" + salary[i].total + "</td>";
        row = row + "<td><input type='button' value='Edit' onclick='onEdit(\"" + salary[i].id + "\")' /></td>";

        row = row + "</tr>";
        tableHtml = tableHtml + row;
    }
    tableHtml = tableHtml + "</table>";
    $("#table").html(tableHtml);
}

function onEdit(userId) {
    var requestParams = {
        url: "http://127.0.0.1:8081/salary/" + userId,
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
    $("#month").val(user.month);
    $("#total").val(user.total);

}