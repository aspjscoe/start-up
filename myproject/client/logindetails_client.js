$(document).ready(onReady);
function onReady() {
    $.get("http://127.0.0.1:8081/logindetails", onGetUsers);
    $("#save-button").click(onSaveButtonClick);
    $("#update-button").click(onUpdateButtonClick);
    $("#delete-button").click(onDeleteButtonClick);
}

function onDeleteButtonClick() {
    var id = $("#id").val();
    var requestParams = {
        url: "http://127.0.0.1:8081/logindetails/" + id,
        method: "DELETE",
        data: id,
        success: onDeletelogindetails,
        error: onError
    };
    $.ajax(requestParams);
}

function onDeletelogindetails(result) {
    var logindetails = result;
    createTable(logindetails);
}


function onUpdateButtonClick() {
    var user = {
        id: $("#id").val(),
        UserType: $("#UserType").val(),

        Name: $("#Name").val(),
        UserName: $("#UserName").val(),
        Password: $("#Password").val(),
        mailid: $("#mailid").val()
    };
    var requestParams = {
        url: "http://127.0.0.1:8081/logindetails/" + user.id,
        method: "PUT",
        data: user,
        success: onPutlogindetails,
        error: onError
    };
    $.ajax(requestParams);
}
function onPutlogindetails(result) {
    var logindetails = result;
    createTable(logindetails)
}
function onError(result) {
    window.alert(result.responseText);
}


function onSaveButtonClick() {

    var user = {
        id: $("#id").val(),
        UserType: $("#UserType").val(),

        Name: $("#Name").val(),
        UserName: $("#UserName").val(),
        Password: $("#Password").val(),
        mailid: $("#mailid").val()
    }
    $.post("http://127.0.0.1:8081/logindetails", user, onPostUsers);
}
function onPostUsers(result) {
    var logindetails = result;
    createTable(logindetails);
}

function onGetUsers(result) {
    var logindetails = result;
    createTable(logindetails);
}
function createTable(logindetails) {
    var tableHtml = "<tr><td>ID</td><td>UserType</td><td>Name</td><td>UserName</td><td>Password</td><td>mailid</td></tr>";
    for (var i = 0; i < logindetails.length; i++) {
        var row = "<tr>";
        row = row + "<td>" + logindetails[i].id + "</td>";
        row = row + "<td>" + logindetails[i].UserType + "</td>";
        row = row + "<td>" + logindetails[i].Name + "</td>";
        row = row + "<td>" + logindetails[i].UserName + "</td>";
        row = row + "<td>" + logindetails[i].Password + "</td>";
        row = row + "<td>" + logindetails[i].mailid + "</td>";
        row = row + "<td><input type='button' value='Edit' onclick='onEdit(\"" + logindetails[i].id + "\")' /></td>";

        row = row + "</tr>";
        tableHtml = tableHtml + row;
    }
    tableHtml = tableHtml + "</table>";
    $("#table").html(tableHtml);
}
function onEdit(userId) {
    var requestParams = {
        url: "http://127.0.0.1:8081/logindetails/" + userId,
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
    $("#UserType").val(user.UserType);

    $("#Name").val(user.Name);
    $("#UserName").val(user.UserName);
    $("#Password").val(user.Password);
    $("#mailid").val(user.mailid);
}