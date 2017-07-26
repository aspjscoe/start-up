$(document).ready(onReady);
function onReady() {
    $.get("http://127.0.0.1:8081/suppliers", onGetUsers);
    $("#save-button").click(onSaveButtonClick);
    $("#update-button").click(onUpdateButtonClick);
    $("#delete-button").click(onDeleteButtonClick);
}

function onDeleteButtonClick() {
    var id = $("#id").val();
    var requestParams = {
        url: "http://127.0.0.1:8081/suppliers/" + id,
        method: "DELETE",
        data: id,
        success: onDeletesuppliers,
        error: onError
    };
    $.ajax(requestParams);
}

function onDeletesuppliers(result) {
    var suppliers = result;
    createTable(suppliers);
}



function onUpdateButtonClick() {
    var user = {
        id: $("#id").val(),
        code: $("#code").val(),
        name: $("#name").val(),
        email: $("#email").val(),
        address: $("#address").val(),
        districtid: $("#districtid").val(),
        towncode: $("#towncode").val(),
        pincode: $("#pincode").val(),
        statecode: $("#statecode").val(),
        mobileno: $("#mobileno").val(),
        landline: $("#landline").val(),
        lst: $("#lst").val(),
        cst: $("#cst").val(),
        status: $("#status").val(),
        type: $("#type").val()
    };
    var requestParams = {
        url: "http://127.0.0.1:8081/suppliers/" + user.id,
        method: "PUT",
        data: user,
        success: onPutsuppliers,
        error: onError
    };
    $.ajax(requestParams);
}
function onPutsuppliers(result) {
    var suppliers = result;
    createTable(suppliers)
}
function onError(result) {
    window.alert(result.responseText);
}



function onSaveButtonClick() {

    var user = {
        id: $("#id").val(),
        code: $("#code").val(),
        name: $("#name").val(),
        email: $("#email").val(),
        address: $("#address").val(),
        districtid: $("#districtid").val(),
        towncode: $("#towncode").val(),
        pincode: $("#pincode").val(),
        statecode: $("#statecode").val(),
        mobileno: $("#mobileno").val(),
        landline: $("#landline").val(),
        lst: $("#lst").val(),
        cst: $("#cst").val(),
        status: $("#status").val(),
        type: $("#type").val()

    }
    $.post("http://127.0.0.1:8081/suppliers", user, onPostUsers);
}
function onPostUsers(result) {
    var suppliers = result;
    createTable(suppliers);
}

function onGetUsers(result) {
    var suppliers = result;
    createTable(suppliers);
}
function createTable(suppliers) {
    var tableHtml = "<tr><td>ID</td><td>code</td><td>name</td><td>email</td><td>address</td><td>districtid</td><td>towncode</td><td>pincode</td><td>statecode</td><td>mobileno</td><td>landline</td><td>lst</td><td>cst</td><td>status</td><td>type</td></tr>";
    for (var i = 0; i < suppliers.length; i++) {
        var row = "<tr>";
        row = row + "<td>" + suppliers[i].id + "</td>";
        row = row + "<td>" + suppliers[i].code + "</td>";
        row = row + "<td>" + suppliers[i].name + "</td>";
        row = row + "<td>" + suppliers[i].email + "</td>";
        row = row + "<td>" + suppliers[i].address + "</td>";
        row = row + "<td>" + suppliers[i].districtid + "</td>";
        row = row + "<td>" + suppliers[i].towncode + "</td>";
        row = row + "<td>" + suppliers[i].pincode + "</td>";
        row = row + "<td>" + suppliers[i].statecode + "</td>";
        row = row + "<td>" + suppliers[i].mobileno + "</td>";
        row = row + "<td>" + suppliers[i].landline + "</td>";
        row = row + "<td>" + suppliers[i].lst + "</td>";
        row = row + "<td>" + suppliers[i].cst + "</td>";
        row = row + "<td>" + suppliers[i].status + "</td>";
        row = row + "<td>" + suppliers[i].type + "</td>";

        row = row + "<td><input type='button' value='Edit' onclick='onEdit(\"" + suppliers[i].id + "\")' /></td>";


        row = row + "</tr>";
        tableHtml = tableHtml + row;
    }
    tableHtml = tableHtml + "</table>";
    $("#table").html(tableHtml);
}
function onEdit(userId) {
    var requestParams = {
        url: "http://127.0.0.1:8081/suppliers/" + userId,
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
    $("#email").val(user.email);
    $("#address").val(user.address);
    $("#districtid").val(user.districtid);
    $("#towncode").val(user.towncode);
    $("#pincode").val(user.pincode);
    $("#statecode").val(user.statecode);
    $("#mobileno").val(user.mobileno);
    $("#landline").val(user.landline);
    $("#lst").val(user.lst);
    $("#cst").val(user.cst);
    $("#status").val(user.status);
    $("#type").val(user.type);

}