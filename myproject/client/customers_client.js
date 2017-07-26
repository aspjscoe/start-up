$(document).ready(onReady);
function onReady() {
    $.get("http://127.0.0.1:8081/customers", onGetUsers);
    $("#save-button").click(onSaveButtonClick);
    $("#update-button").click(onUpdateButtonClick);
    $("#delete-button").click(onDeleteButtonClick);

}

function onDeleteButtonClick() {
    var id = $("#id").val();
    var requestParams = {
        url: "http://127.0.0.1:8081/customers/" + id,
        method: "DELETE",
        data: id,
        success: onDeletecustomers,
        error: onError
    };
    $.ajax(requestParams);
}

function onDeletecustomers(result) {
    var customers = result;
    createTable(customers);
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
        interstate: $("#interstate").val(),
        cstper: $("#cstper").val(),
        rating: $("#rating").val(),
        creditlimit: $("#creditlimit").val(),
        creditdays: $("#creditdays").val(),
        cusdisper: $("#cusdisper").val(),
        comments: $("#comments").val(),
        type: $("#type").val(),
        beatid: $("#beatid").val(),
        smid: $("#smid").val(),
        customertype: $("#customertype").val()

    };
    var requestParams = {
        url: "http://127.0.0.1:8081/customers/" + user.id,
        method: "PUT",
        data: user,
        success: onPutcustomers,
        error: onError
    };
    $.ajax(requestParams);
}
function onPutcustomers(result) {
    var customers = result;
    createTable(customers)
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
        interstate: $("#interstate").val(),
        cstper: $("#cstper").val(),
        rating: $("#rating").val(),
        creditlimit: $("#creditlimit").val(),
        creditdays: $("#creditdays").val(),
        cusdisper: $("#cusdisper").val(),
        comments: $("#comments").val(),
        type: $("#type").val(),
        beatid: $("#beatid").val(),
        smid: $("#smid").val(),
        customertype: $("#customertype").val()

    }
    $.post("http://127.0.0.1:8081/customers", user, onPostUsers);
}
function onPostUsers(result) {
    var customers = result;
    createTable(customers);
}

function onGetUsers(result) {
    var customers = result;
    createTable(customers);
}
function createTable(customers) {
    var tableHtml = "<tr><td>ID</td><td>code</td><td>name</td><td>email</td><td>address</td><td>districtid</td><td>towncode</td><td>pincode</td><td>statecode</td><td>mobileno</td><td>landline</td><td>lst</td><td>cst</td><td>interstate</td><td>cstper</td><td>rating</td><td>creditlimit</td><td>creditdays</td><td>cusdisper</td><td>comments</td><td>type</td><td>beatid</td> <td>smid</td> <td>customertype</td> </tr>";
    for (var i = 0; i < customers.length; i++) {
        var row = "<tr>";
        row = row + "<td>" + customers[i].id + "</td>";
        row = row + "<td>" + customers[i].code + "</td>";
        row = row + "<td>" + customers[i].name + "</td>";
        row = row + "<td>" + customers[i].email + "</td>";
        row = row + "<td>" + customers[i].address + "</td>";
        row = row + "<td>" + customers[i].districtid + "</td>";
        row = row + "<td>" + customers[i].towncode + "</td>";
        row = row + "<td>" + customers[i].pincode + "</td>";
        row = row + "<td>" + customers[i].statecode + "</td>";
        row = row + "<td>" + customers[i].mobileno + "</td>";
        row = row + "<td>" + customers[i].landline + "</td>";
        row = row + "<td>" + customers[i].lst + "</td>";
        row = row + "<td>" + customers[i].cst + "</td>";
        row = row + "<td>" + customers[i].interstate + "</td>";
        row = row + "<td>" + customers[i].cstper + "</td>";
        row = row + "<td>" + customers[i].rating + "</td>";
        row = row + "<td>" + customers[i].creditlimit + "</td>";
        row = row + "<td>" + customers[i].creditdays + "</td>";
        row = row + "<td>" + customers[i].cusdisper + "</td>";
        row = row + "<td>" + customers[i].comments + "</td>";
        row = row + "<td>" + customers[i].type + "</td>";
        row = row + "<td>" + customers[i].beatid + "</td>";
        row = row + "<td>" + customers[i].smid + "</td>";
        row = row + "<td>" + customers[i].customertype + "</td>";

        row = row + "<td><input type='button' value='Edit' onclick='onEdit(\"" + customers[i].id + "\")' /></td>";
        row = row + "</tr>";
        tableHtml = tableHtml + row;
    }
    tableHtml = tableHtml + "</table>";
    $("#table").html(tableHtml);
}
function onEdit(userId) {
    var requestParams = {
        url: "http://127.0.0.1:8081/customers/" + userId,
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
    $("#interstate").val(user.interstate);
    $("#cstper").val(user.cstper);
    $("#rating").val(user.rating);
    $("#creditlimit").val(user.creditlimit);
    $("#creditdays").val(user.creditdays);
    $("#cusdisper").val(user.cusdisper);
    $("#comments").val(user.comments);
    $("#type").val(user.type);
    $("#beatid").val(user.beatid);
    $("#smid").val(user.smid);
    $("#customertype").val(user.customertype);

}