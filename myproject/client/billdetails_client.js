$(document).ready(onReady);
function onReady() {
    $.get("http://127.0.0.1:8081/billdetails", onGetUsers);
    $("#save-button").click(onSaveButtonClick);
    $("#update-button").click(onUpdateButtonClick);
    $("#delete-button").click(onDeleteButtonClick);
}


function onDeleteButtonClick() {
    var id = $("#id").val();
    var requestParams = {
        url: "http://127.0.0.1:8081/billdetails/" + id,
        method: "DELETE",
        data: id,
        success: onDeletebilldetails,
        error: onError
    };
    $.ajax(requestParams);
}

function onDeletebilldetails(result) {
    var billdetails = result;
    createTable(billdetails);
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
        url: "http://127.0.0.1:8081/billdetails/" + user.id,
        method: "PUT",
        data: user,
        success: onPutbilldetails,
        error: onError
    };
    $.ajax(requestParams);
}
function onPutbilldetails(result) {
    var billdetails = result;
    createTable(billdetails)
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
    $.post("http://127.0.0.1:8081/billdetails", user, onPostUsers);
}
function onPostUsers(result) {
    var billdetails = result;
    createTable(billdetails);
}

function onGetUsers(result) {
    var billdetails = result;
    createTable(billdetails);
}
function createTable(billdetails) {
    var tableHtml = "<tr><td>ID</td><td>BillNo</td><td>BillDate</td><td>CustomerID</td><td>Total</td><td>Tax</td><td>FreightCharge</td><td>Discount</td><td>GrandTotal</td><td>salesmanid</td><td>beatid</td><td>Documentt</td><td>pbal</td><td>paid</td><td>balance</td><td>paidmode</td><td>bank</td><td>checkno</td><td>Replacement</td><td>Status</td><td>billamount</td><td>itemdiscount</td> </tr>";
    for (var i = 0; i < billdetails.length; i++) {
        var row = "<tr>";
        row = row + "<td>" + billdetails[i].id + "</td>";
        row = row + "<td>" + billdetails[i].BillNo + "</td>";
        row = row + "<td>" + billdetails[i].BillDate + "</td>";
        row = row + "<td>" + billdetails[i].CustomerID + "</td>";
        row = row + "<td>" + billdetails[i].Total + "</td>";
        row = row + "<td>" + billdetails[i].Tax + "</td>";
        row = row + "<td>" + billdetails[i].FreightCharge + "</td>";
        row = row + "<td>" + billdetails[i].Discount + "</td>";
        row = row + "<td>" + billdetails[i].GrandTotal + "</td>";
        row = row + "<td>" + billdetails[i].salesmanid + "</td>";
        row = row + "<td>" + billdetails[i].beatid + "</td>";
        row = row + "<td>" + billdetails[i].Documentt + "</td>";
        row = row + "<td>" + billdetails[i].pbal + "</td>";
        row = row + "<td>" + billdetails[i].paid + "</td>";
        row = row + "<td>" + billdetails[i].balance + "</td>";
        row = row + "<td>" + billdetails[i].paidmode + "</td>";
        row = row + "<td>" + billdetails[i].bank + "</td>";
        row = row + "<td>" + billdetails[i].checkno + "</td>";
        row = row + "<td>" + billdetails[i].Replacement + "</td>";
        row = row + "<td>" + billdetails[i].Status + "</td>";
        row = row + "<td>" + billdetails[i].billamount + "</td>";
        row = row + "<td>" + billdetails[i].itemdiscount + "</td>";
        row = row + "<td><input type='button' value='Edit' onclick='onEdit(\"" + billdetails[i].id + "\")' /></td>";
        row = row + "</tr>";
        tableHtml = tableHtml + row;
    }
    tableHtml = tableHtml + "</table>";
    $("#table").html(tableHtml);
}
function onEdit(userId) {
    var requestParams = {
        url: "http://127.0.0.1:8081/billdetails/" + userId,
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