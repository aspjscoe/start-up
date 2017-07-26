module.exports = function (app) {

    //start delete api
    function deleteFile(req, res) {
        var fs = require("fs");
        var data = fs.readFileSync("billdetails.json");
        var billdetails = JSON.parse(data);
        var userIndex = indexOf(req.params.id, billdetails);
        if (userIndex != -1) {
            billdetails.splice(userIndex, 1);
            var dataToSave = JSON.stringify(billdetails);
            fs.writeFileSync("billdetails.json", dataToSave);
            res.send(billdetails);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.delete('/billdetails/:id', deleteFile);
    ////end
    ///start put api
    function put(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("billdetails.json");
        var billdetails = JSON.parse(data);
        var userIndex = indexOf(req.params.id, billdetails);
        if (userIndex != -1) {
            billdetails[userIndex] = postedUser;
            var dataToSave = JSON.stringify(billdetails);
            fs.writeFileSync("billdetails.json", dataToSave);
            res.send(billdetails);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.put('/billdetails/:id', put);
    ///end
    function indexOf(userId, usersArray) {
        for (var i = 0; i < usersArray.length; i++) {
            if (usersArray[i].id == userId) {
                return i;
            }
        }
        return -1;
    }

    function getById(req, res) {
        var fs = require("fs");
        var data = fs.readFileSync("billdetails.json");
        var billdetails = JSON.parse(data);
        var userIndex = indexOf(req.params.id, billdetails);
        if (userIndex != -1) {
            var user = billdetails[userIndex];
            res.send(user);
        }
        else {
            res.status(500).send("user not found");
        }
    }
    app.get('/billdetails/:id', getById);


    function post(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("billdetails.json");
        var billdetails = JSON.parse(data);
        billdetails.push(postedUser);
        var dataToSave = JSON.stringify(billdetails);
        fs.writeFileSync("billdetails.json", dataToSave);
        res.send(billdetails);
    }
    app.post('/billdetails', post);


    function getAll(req, res) {
        var fs = require('fs');
        var data = fs.readFileSync("billdetails.json");
        var billdetails = JSON.parse(data);
        res.send(billdetails);
    }
    app.get('/billdetails', getAll)
}