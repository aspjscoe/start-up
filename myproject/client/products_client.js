$(document).ready(onReady);
function onReady() {
    $.get("http://127.0.0.1:8081/products", onGetUsers);
    $("#save-button").click(onSaveButtonClick);
    $("#update-button").click(onUpdateButtonClick);
    $("#delete-button").click(onDeleteButtonClick);
}

function onDeleteButtonClick() {
    var id = $("#id").val();
    var requestParams = {
        url: "http://127.0.0.1:8081/products/" + id,
        method: "DELETE",
        data: id,
        success: onDeleteproducts,
        error: onError
    };
    $.ajax(requestParams);
}

function onDeleteproducts(result) {
    var products = result;
    createTable(products);
}



function onUpdateButtonClick() {
    var user = {

        id: $("#id").val(),
        code: $("#code").val(),
        name: $("#name").val(),
        brandid: $("#brandid").val(),
        varietyid: $("#varietyid").val(),
        netweight: $("#netweight").val(),
        pieceweight: $("#pieceweight").val(),
        days: $("#days").val(),
        rd: $("#rd").val(),
        sd: $("#sd").val(),
        rt: $("#rt").val(),
        expiry: $("#expiry").val(),
        unitid: $("#unitid").val(),
        pcs: $("#pcs").val(),
        vat: $("#vat").val(),
        pprice: $("#pprice").val(),
        sprice: $("#sprice").val(),
        mrp: $("#mrp").val(),
        techprice: $("#techprice").val()

    };
    var requestParams = {
        url: "http://127.0.0.1:8081/products/" + user.id,
        method: "PUT",
        data: user,
        success: onPutproducts,
        error: onError
    };
    $.ajax(requestParams);
}
function onPutproducts(result) {
    var products = result;
    createTable(products)
}
function onError(result) {
    window.alert(result.responseText);
}



function onSaveButtonClick() {

    var user = {
        id: $("#id").val(),
        code: $("#code").val(),
        name: $("#name").val(),
        brandid: $("#brandid").val(),
        varietyid: $("#varietyid").val(),
        netweight: $("#netweight").val(),
        pieceweight: $("#pieceweight").val(),
        days: $("#days").val(),
        rd: $("#rd").val(),
        sd: $("#sd").val(),
        rt: $("#rt").val(),
        expiry: $("#expiry").val(),
        unitid: $("#unitid").val(),
        pcs: $("#pcs").val(),
        vat: $("#vat").val(),
        pprice: $("#pprice").val(),
        sprice: $("#sprice").val(),
        mrp: $("#mrp").val(),
        techprice: $("#techprice").val()
    }
    $.post("http://127.0.0.1:8081/products", user, onPostUsers);
}
function onPostUsers(result) {
    var products = result;
    createTable(products);
}

function onGetUsers(result) {
    var products = result;
    createTable(products);
}
function createTable(products) {
    var tableHtml = "<tr><td>ID</td><td>code</td><td>name</td><td>brandid</td><td>varietyid</td><td>netweight</td><td>pieceweight</td><td>days</td><td>rd</td><td>sd</td><td>rt</td><td>expiry</td><td>unitid</td><td>pcs</td><td>vat</td><td>pprice</td><td>sprice</td><td>mrp</td><td>techprice</td></tr>";
    for (var i = 0; i < products.length; i++) {
        var row = "<tr>";
        row = row + "<td>" + products[i].id + "</td>";
        row = row + "<td>" + products[i].code + "</td>";
        row = row + "<td>" + products[i].name + "</td>";
        row = row + "<td>" + products[i].brandid + "</td>";
        row = row + "<td>" + products[i].varietyid + "</td>";
        row = row + "<td>" + products[i].netweight + "</td>";
        row = row + "<td>" + products[i].pieceweight + "</td>";
        row = row + "<td>" + products[i].days + "</td>";
        row = row + "<td>" + products[i].rd + "</td>";
        row = row + "<td>" + products[i].sd + "</td>";
        row = row + "<td>" + products[i].rt + "</td>";
        row = row + "<td>" + products[i].expiry + "</td>";
        row = row + "<td>" + products[i].unitid + "</td>";
        row = row + "<td>" + products[i].pcs + "</td>";
        row = row + "<td>" + products[i].vat + "</td>";
        row = row + "<td>" + products[i].pprice + "</td>";
        row = row + "<td>" + products[i].sprice + "</td>";
        row = row + "<td>" + products[i].mrp + "</td>";
        row = row + "<td>" + products[i].techprice + "</td>";
        row = row + "<td><input type='button' value='Edit' onclick='onEdit(\"" + products[i].id + "\")' /></td>";

        row = row + "</tr>";
        tableHtml = tableHtml + row;
    }
    tableHtml = tableHtml + "</table>";
    $("#table").html(tableHtml);
}
function onEdit(userId) {
    var requestParams = {
        url: "http://127.0.0.1:8081/products/" + userId,
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
    $("#brandid").val(user.brandid);
    $("#varietyid").val(user.varietyid);
    $("#netweight").val(user.netweight);
    $("#pieceweight").val(user.pieceweight);
    $("#days").val(user.days);
    $("#rd").val(user.rd);
    $("#sd").val(user.sd);
    $("#rt").val(user.rt);
    $("#expiry").val(user.expiry);
    $("#unitid").val(user.unitid);
    $("#pcs").val(user.pcs);
    $("#vat").val(user.vat);
    $("#pprice").val(user.pprice);
    $("#sprice").val(user.sprice);
    $("#mrp").val(user.mrp);
    $("#techprice").val(user.techprice);

}