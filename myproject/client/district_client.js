$(document).ready(onReady);
function onReady() {
    $.get("http://127.0.0.1:8081/district", onGetUsers);
    $("#save-button").click(onSaveButtonClick);
    $("#update-button").click(onUpdateButtonClick);
    $("#delete-button").click(onDeleteButtonClick);
}

function onDeleteButtonClick() {
    var id = $("#id").val();
    var requestParams = {
        url: "http://127.0.0.1:8081/district/" + id,
        method: "DELETE",
        data: id,
        success: onDeletedistrict,
        error: onError
    };
    $.ajax(requestParams);
}

function onDeletedistrict(result) {
    var district = result;
    createTable(district);
}


function onUpdateButtonClick() {
    var user = {
        id: $("#id").val(),
        Districtname: $("#Districtname").val()
    };
    var requestParams = {
        url: "http://127.0.0.1:8081/district/" + user.id,
        method: "PUT",
        data: user,
        success: onPutdistrict,
        error: onError
    };
    $.ajax(requestParams);
}
function onPutdistrict(result) {
    var district = result;
    createTable(district)
}
function onError(result) {
    window.alert(result.responseText);
}



function onSaveButtonClick() {

    var user = {
        id: $("#id").val(),
        Districtname: $("#Districtname").val()


    }
    $.post("http://127.0.0.1:8081/district", user, onPostUsers);
}
function onPostUsers(result) {
    var district = result;
    createTable(district);
}

function onGetUsers(result) {
    var district = result;
    createTable(district);
}
function createTable(district) {
    var tableHtml = "<tr><td>ID</td><td>Districtname</td></tr>";
    for (var i = 0; i < district.length; i++) {
        var row = "<tr>";
        row = row + "<td>" + district[i].id + "</td>";
        row = row + "<td>" + district[i].Districtname + "</td>";

        row = row + "<td><input type='button' value='Edit' onclick='onEdit(\"" + district[i].id + "\")' /></td>";

        row = row + "</tr>";
        tableHtml = tableHtml + row;
    }
    tableHtml = tableHtml + "</table>";
    $("#table").html(tableHtml);
}
function onEdit(userId) {
    var requestParams = {
        url: "http://127.0.0.1:8081/district/" + userId,
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

    $("#Districtname").val(user.Districtname);

}