$(document).ready(onReady);
function onReady() {
    $.get("http://127.0.0.1:8081/estimate", onGetUsers);
    $("#save-button").click(onSaveButtonClick);
    $("#update-button").click(onUpdateButtonClick);
    $("#delete-button").click(onDeleteButtonClick);
}

function onDeleteButtonClick() {
    var id = $("#id").val();
    var requestParams = {
        url: "http://127.0.0.1:8081/estimate/" + id,
        method: "DELETE",
        data: id,
        success: onDeleteestimate,
        error: onError
    };
    $.ajax(requestParams);
}

function onDeleteestimate(result) {
    var estimate = result;
    createTable(estimate);
}


function onUpdateButtonClick() {
    var user = {
        id: $("#id").val(),
        BillNo: $("#BillNo").val(),
        BillDate: $("#BillDate").val(),
        CustomerID: $("#CustomerID").val(),
        Total: $("#Total").val(),
        Tax: $("#Tax").val(),
        FreightCharge: $("#FreightCharge").val(),
        Discount: $("#Discount").val(),
        GrandTotal: $("#GrandTotal").val(),
        salesmanid: $("#salesmanid").val(),
        beatid: $("#beatid").val(),
        Documentt: $("#Documentt").val(),
        pbal: $("#pbal").val(),
        paid: $("#paid").val(),
        balance: $("#balance").val(),
        paidmode: $("#paidmode").val(),
        bank: $("#bank").val(),
        checkno: $("#checkno").val(),
        Replacement: $("#Replacement").val(),
        Status: $("#Status").val(),
        billamount: $("#billamount").val(),
        itemdiscount: $("#itemdiscount").val()
    };
    var requestParams = {
        url: "http://127.0.0.1:8081/estimate/" + user.id,
        method: "PUT",
        data: user,
        success: onPutestimate,
        error: onError
    };
    $.ajax(requestParams);
}
function onPutestimate(result) {
    var estimate = result;
    createTable(estimate)
}
function onError(result) {
    window.alert(result.responseText);
}

function onSaveButtonClick() {

    var user = {
        id: $("#id").val(),
        BillNo: $("#BillNo").val(),
        BillDate: $("#BillDate").val(),
        CustomerID: $("#CustomerID").val(),
        Total: $("#Total").val(),
        Tax: $("#Tax").val(),
        FreightCharge: $("#FreightCharge").val(),
        Discount: $("#Discount").val(),
        GrandTotal: $("#GrandTotal").val(),
        salesmanid: $("#salesmanid").val(),
        beatid: $("#beatid").val(),
        Documentt: $("#Documentt").val(),
        pbal: $("#pbal").val(),
        paid: $("#paid").val(),
        balance: $("#balance").val(),
        paidmode: $("#paidmode").val(),
        bank: $("#bank").val(),
        checkno: $("#checkno").val(),
        Replacement: $("#Replacement").val(),
        Status: $("#Status").val(),
        billamount: $("#billamount").val(),
        itemdiscount: $("#itemdiscount").val()

    }
    $.post("http://127.0.0.1:8081/estimate", user, onPostUsers);
}
function onPostUsers(result) {
    var estimate = result;
    createTable(estimate);
}

function onGetUsers(result) {
    var estimate = result;
    createTable(estimate);
}
function createTable(estimate) {
    var tableHtml = "<tr><td>ID</td><td>BillNo</td><td>BillDate</td><td>CustomerID</td><td>Total</td><td>Tax</td><td>FreightCharge</td><td>Discount</td><td>GrandTotal</td><td>salesmanid</td><td>beatid</td><td>Documentt</td><td>pbal</td><td>paid</td><td>balance</td><td>paidmode</td><td>bank</td><td>checkno</td><td>Replacement</td><td>Status</td><td>billamount</td><td>itemdiscount</td> </tr>";
    for (var i = 0; i < estimate.length; i++) {
        var row = "<tr>";
        row = row + "<td>" + estimate[i].id + "</td>";
        row = row + "<td>" + estimate[i].BillNo + "</td>";
        row = row + "<td>" + estimate[i].BillDate + "</td>";
        row = row + "<td>" + estimate[i].CustomerID + "</td>";
        row = row + "<td>" + estimate[i].Total + "</td>";
        row = row + "<td>" + estimate[i].Tax + "</td>";
        row = row + "<td>" + estimate[i].FreightCharge + "</td>";
        row = row + "<td>" + estimate[i].Discount + "</td>";
        row = row + "<td>" + estimate[i].GrandTotal + "</td>";
        row = row + "<td>" + estimate[i].salesmanid + "</td>";
        row = row + "<td>" + estimate[i].beatid + "</td>";
        row = row + "<td>" + estimate[i].Documentt + "</td>";
        row = row + "<td>" + estimate[i].pbal + "</td>";
        row = row + "<td>" + estimate[i].paid + "</td>";
        row = row + "<td>" + estimate[i].balance + "</td>";
        row = row + "<td>" + estimate[i].paidmode + "</td>";
        row = row + "<td>" + estimate[i].bank + "</td>";
        row = row + "<td>" + estimate[i].checkno + "</td>";
        row = row + "<td>" + estimate[i].Replacement + "</td>";
        row = row + "<td>" + estimate[i].Status + "</td>";
        row = row + "<td>" + estimate[i].billamount + "</td>";
        row = row + "<td>" + estimate[i].itemdiscount + "</td>";
        row = row + "<td><input type='button' value='Edit' onclick='onEdit(\"" + estimate[i].id + "\")' /></td>";

        row = row + "</tr>";
        tableHtml = tableHtml + row;
    }
    tableHtml = tableHtml + "</table>";
    $("#table").html(tableHtml);
}
function onEdit(userId) {
    var requestParams = {
        url: "http://127.0.0.1:8081/estimate/" + userId,
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
    $("#BillNo").val(user.BillNo);
    $("#BillDate").val(user.BillDate);
    $("#CustomerID").val(user.CustomerID);
    $("#Total").val(user.Total);
    $("#Tax").val(user.Tax);
    $("#FreightCharge").val(user.FreightCharge);
    $("#Discount").val(user.Discount);
    $("#GrandTotal").val(user.GrandTotal);
    $("#salesmanid").val(user.salesmanid);
    $("#beatid").val(user.beatid);
    $("#Documentt").val(user.Documentt);
    $("#pbal").val(user.pbal);
    $("#paid").val(user.paid);
    $("#balance").val(user.balance);
    $("#paidmode").val(user.paidmode);
    $("#bank").val(user.bank);
    $("#checkno").val(user.checkno);
    $("#Replacement").val(user.Replacement);
    $("#Status").val(user.Status);
    $("#billamount").val(user.billamount);
    $("#itemdiscount").val(user.itemdiscount);

}