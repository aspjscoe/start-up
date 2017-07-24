
var express = require('express');
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());



var employeeController = require('./employee_controller');
employeeController(app);
var advanceController = require('./advance_controller');
advanceController(app);
var areaSalesManController = require('./areasalesman_controller');
areaSalesManController(app);
var bankAccountController = require('./bankaccount_controller');
bankAccountController(app);
var bankListController = require('./banklist_controller');
bankListController(app);
var beastController = require('./beats_controller');
beastController(app);
var billDetailsController = require('./billdetails_controller');
billDetailsController(app);
var billItemDetailsController = require('./billitemdetails_controller');
billItemDetailsController(app);
var brandsController = require('./brands_controller');
brandsController(app);
var cancelBillDetailsController = require('./cancelbilldetails_controller');
cancelBillDetailsController(app);
var cancelBillItemDetailsController = require('./cancelbillitemdetails_controller');
cancelBillItemDetailsController(app);
var carpenterController = require('./carpenter_controller');
carpenterController(app);
var carpenterCommisionListController = require('./carpentercommisionlist_controller');
carpenterCommisionListController(app);
var chequeIssueController = require('./chequeissue_controller');
chequeIssueController(app);
var creditAccountController = require('./creditaccount_controller');
creditAccountController(app);
var customerAccountController = require('./customeraccount_controller');
customerAccountController(app);
var customersController = require('./customers_controller');
customersController(app);
var defaultValuesController = require('./defaultvalues_controller');
defaultValuesController(app);
var detailedstockController = require('./detailedstock_controller');
detailedstockController(app);
var discountController = require('./discount_controller');
discountController(app);
var districtController = require('./district_controller');
districtController(app);
var dummyBillDetailsController = require('./dummybilldetails_controller');
dummyBillDetailsController(app);
var dummybillitemdetailsController = require('./dummybillitemdetails_controller');
dummybillitemdetailsController(app);
var estimateController = require('./estimate_controller');
estimateController(app);
var estimatelistController = require('./estimatelist_controller');
estimatelistController(app);
var expenseController = require('./expense_controller');
expenseController(app);
var logdetailsController = require('./logdetails_controller');
logdetailsController(app);
var logindetailsController = require('./logindetails_controller');
logindetailsController(app);
var priceDetailsController = require('./pricedetails_controller');
priceDetailsController(app);
var productDetailsController = require('./productdetails_controller');
productDetailsController(app);
var productsController = require('./products_controller');
productsController(app);
var productUnitsController = require('./productunits_controller');
productUnitsController(app);
var purchaseController = require('./purchase_controller');
purchaseController(app);
var purchasedetailsController = require('./purchasedetails_controller');
purchasedetailsController(app);
var purchaseListController = require('./purchaselist_controller');
purchaseListController(app);
var purchaseReturnController = require('./purchasereturn_controller');
purchaseReturnController(app);
var purchaseReturnListController = require('./purchasereturnlist_controller');
purchaseReturnListController(app);
var salaryController = require('./salary_controller');
salaryController(app);
var salaryListController = require('./salarylist_controller');
salaryListController(app);
var salesController = require('./sales_controller');
salesController(app);
var salesListController = require('./saleslist_controller');
salesListController(app);
var salesManController = require('./salesman_controller');
salesManController(app);
var statesController = require('./states_controller');
statesController(app);
var stockController = require('./stock_controller');
stockController(app);
var supplierAccountController = require('./supplieraccount_controller');
supplierAccountController(app);
var suppliersController = require('./suppliers_controller');
suppliersController(app);
var taxDetailsController = require('./taxdetails_controller');
taxDetailsController(app);
var townsController = require('./towns_controller');
townsController(app);
var unitsController = require('./units_controller');
unitsController(app);
var varietyController = require('./variety_controller');
varietyController(app);


app.get('/', function (req, res) {

    res.send("hello world");
});
var staticServer = express.static('client');
app.use(staticServer);

app.listen(8081, function () {
    console.log("Example app listening at 8081");

});