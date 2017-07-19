$(document).ready(onReady);
function onReady() {
    $.get("http://127.0.0.1:8081/salesman", onGetUsers);
    $("#save-button").click(onSaveButtonClick);
    $("#update-button").click(onUpdateButtonClick);
    $("#delete-button").click(onDeleteButtonClick);
}

function onDeleteButtonClick() {
    var id = $("#id").val();
    var requestParams = {
        url: "http://127.0.0.1:8081/salesman/" + id,
        method: "DELETE",
        data: id,
        success: onDeletesalesman,
        error: onError
    };
    $.ajax(requestParams);
}

function onDeletesalesman(result) {
    var salesman = result;
    createTable(salesman);
}



function onUpdateButtonClick() {
    var user = {
        id: $("#id").val(),
        code: $("#code").val(),
        name: $("#name").val(),
        asmid: $("#asmid").val(),
        status: $("#status").val(),
        address: $("#address").val(),
        phoneno: $("#phoneno").val(),
        designation: $("#designation").val(),
        salary: $("#salary").val()
    };
    var requestParams = {
        url: "http://127.0.0.1:8081/salesman/" + user.id,
        method: "PUT",
        data: user,
        success: onPutsalesman,
        error: onError
    };
    $.ajax(requestParams);
}
function onPutsalesman(result) {
    var salesman = result;
    createTable(salesman)
}
function onError(result) {
    window.alert(result.responseText);
}


function onSaveButtonClick() {

    var user = {
        id: $("#id").val(),
        code: $("#code").val(),
        name: $("#name").val(),
        asmid: $("#asmid").val(),
        status: $("#status").val(),
        address: $("#address").val(),
        phoneno: $("#phoneno").val(),
        designation: $("#designation").val(),
        salary: $("#salary").val()

    }
    $.post("http://127.0.0.1:8081/salesman", user, onPostUsers);
}
function onPostUsers(result) {
    var salesman = result;
    createTable(salesman);
}

function onGetUsers(result) {
    var salesman = result;
    createTable(salesman);
}
function createTable(salesman) {
    var tableHtml = "<tr><td>ID</td><td>code</td><td>name</td><td>asmid</td><td>status</td><td>address</td><td>phoneno</td><td>designation</td><td>salary</td></tr>";
    for (var i = 0; i < salesman.length; i++) {
        var row = "<tr>";
        row = row + "<td>" + salesman[i].id + "</td>";
        row = row + "<td>" + salesman[i].code + "</td>";
        row = row + "<td>" + salesman[i].name + "</td>";
        row = row + "<td>" + salesman[i].asmid + "</td>";
        row = row + "<td>" + salesman[i].status + "</td>";
        row = row + "<td>" + salesman[i].address + "</td>";
        row = row + "<td>" + salesman[i].phoneno + "</td>";
        row = row + "<td>" + salesman[i].designation + "</td>";
        row = row + "<td>" + salesman[i].salary + "</td>";
        row = row + "<td><input type='button' value='Edit' onclick='onEdit(\"" + salesman[i].id + "\")' /></td>";

        row = row + "</tr>";
        tableHtml = tableHtml + row;
    }
    tableHtml = tableHtml + "</table>";
    $("#table").html(tableHtml);
}
function onEdit(userId) {
    var requestParams = {
        url: "http://127.0.0.1:8081/salesman/" + userId,
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

    $("#code").val(user.code);
    $("#name").val(user.name);
    $("#asmid").val(user.asmid);
    $("#status").val(user.status);
    $("#address").val(user.address);
    $("#phoneno").val(user.phoneno);
    $("#designation").val(user.designation);
    $("#salary").val(user.salary);

}