$(document).ready(onReady);
function onReady() {
    $.get("http://127.0.0.1:8081/cancelbilldetails", onGetUsers);
    $("#save-button").click(onSaveButtonClick);
    $("#update-button").click(onUpdateButtonClick);
    $("#delete-button").click(onDeleteButtonClick);
}

function onDeleteButtonClick() {
    var id = $("#id").val();
    var requestParams = {
        url: "http://127.0.0.1:8081/cancelbilldetails/" + id,
        method: "DELETE",
        data: id,
        success: onDeletecancelbilldetails,
        error: onError
    };
    $.ajax(requestParams);
}

function onDeletecancelbilldetails(result) {
    var cancelbilldetails = result;
    createTable(cancelbilldetails);
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
        PartyOrderno: $("#PartyOrderno").val(),
        Despatch: $("#Despatch").val(),
        Documentt: $("#Documentt").val(),
        pbal: $("#pbal").val(),
        paid: $("#paid").val(),
        balance: $("#balance").val(),
        paidmode: $("#paidmode").val(),
        bank: $("#bank").val(),
        checkno: $("#checkno").val(),
        Replacement: $("#Replacement").val(),
        Status: $("#Status").val(),
        billamount: $("#billamount").val()
    };
    var requestParams = {
        url: "http://127.0.0.1:8081/cancelbilldetails/" + user.id,
        method: "PUT",
        data: user,
        success: onPutcancelbilldetails,
        error: onError
    };
    $.ajax(requestParams);
}
function onPutcancelbilldetails(result) {
    var cancelbilldetails = result;
    createTable(cancelbilldetails)
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
        PartyOrderno: $("#PartyOrderno").val(),
        Despatch: $("#Despatch").val(),
        Documentt: $("#Documentt").val(),
        pbal: $("#pbal").val(),
        paid: $("#paid").val(),
        balance: $("#balance").val(),
        paidmode: $("#paidmode").val(),
        bank: $("#bank").val(),
        checkno: $("#checkno").val(),
        Replacement: $("#Replacement").val(),
        Status: $("#Status").val(),
        billamount: $("#billamount").val()

    }
    $.post("http://127.0.0.1:8081/cancelbilldetails", user, onPostcancelbilldetails);
}
function onPostcancelbilldetails(result) {
    var cancelbilldetails = result;
    createTable(cancelbilldetails);
}

function onGetUsers(result) {
    var cancelbilldetails = result;
    createTable(cancelbilldetails);
}
function createTable(cancelbilldetails) {
    var tableHtml = "<tr><td>ID</td><td>BillNo</td><td>BillDate</td><td>CustomerID</td><td>Total</td><td>Tax</td><td>FreightCharge</td><td>Discount</td><td>GrandTotal</td><td>PartyOrderno</td><td>Despatch</td><td>Documentt</td><td>pbal</td><td>paid</td><td>balance</td><td>paidmode</td><td>bank</td><td>checkno</td><td>Replacement</td><td>Status</td><td>billamount</td></tr>";
    for (var i = 0; i < cancelbilldetails.length; i++) {
        var row = "<tr>";
        row = row + "<td>" + cancelbilldetails[i].id + "</td>";
        row = row + "<td>" + cancelbilldetails[i].BillNo + "</td>";
        row = row + "<td>" + cancelbilldetails[i].BillDate + "</td>";
        row = row + "<td>" + cancelbilldetails[i].CustomerID + "</td>";
        row = row + "<td>" + cancelbilldetails[i].Total + "</td>";
        row = row + "<td>" + cancelbilldetails[i].Tax + "</td>";
        row = row + "<td>" + cancelbilldetails[i].FreightCharge + "</td>";
        row = row + "<td>" + cancelbilldetails[i].Discount + "</td>";
        row = row + "<td>" + cancelbilldetails[i].GrandTotal + "</td>";
        row = row + "<td>" + cancelbilldetails[i].PartyOrderno + "</td>";
        row = row + "<td>" + cancelbilldetails[i].Despatch + "</td>";
        row = row + "<td>" + cancelbilldetails[i].Documentt + "</td>";
        row = row + "<td>" + cancelbilldetails[i].pbal + "</td>";
        row = row + "<td>" + cancelbilldetails[i].paid + "</td>";
        row = row + "<td>" + cancelbilldetails[i].balance + "</td>";
        row = row + "<td>" + cancelbilldetails[i].paidmode + "</td>";
        row = row + "<td>" + cancelbilldetails[i].bank + "</td>";
        row = row + "<td>" + cancelbilldetails[i].checkno + "</td>";
        row = row + "<td>" + cancelbilldetails[i].Replacement + "</td>";
        row = row + "<td>" + cancelbilldetails[i].Status + "</td>";
        row = row + "<td>" + cancelbilldetails[i].billamount + "</td>";
        row = row + "<td><input type='button' value='Edit' onclick='onEdit(\"" + cancelbilldetails[i].id + "\")' /></td>";
        row = row + "</tr>";
        tableHtml = tableHtml + row;
    }
    tableHtml = tableHtml + "</table>";
    $("#table").html(tableHtml);
}
function onEdit(userId) {
    var requestParams = {
        url: "http://127.0.0.1:8081/cancelbilldetails/" + userId,
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
    $("#PartyOrderno").val(user.PartyOrderno);
    $("#Despatch").val(user.Despatch);
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
}