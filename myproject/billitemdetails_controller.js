module.exports = function (app) {

    //start delete api
    function deleteFile(req, res) {
        var fs = require("fs");
        var data = fs.readFileSync("billitemdetails.json");
        var billitemdetails = JSON.parse(data);
        var userIndex = indexOf(req.params.id, billitemdetails);
        if (userIndex != -1) {
            billitemdetails.splice(userIndex, 1);
            var dataToSave = JSON.stringify(billitemdetails);
            fs.writeFileSync("billitemdetails.json", dataToSave);
            res.send(billitemdetails);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.delete('/billitemdetails/:id', deleteFile);
    ////end
    ///start put api
    function put(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("billitemdetails.json");
        var billitemdetails = JSON.parse(data);
        var userIndex = indexOf(req.params.id, billitemdetails);
        if (userIndex != -1) {
            billitemdetails[userIndex] = postedUser;
            var dataToSave = JSON.stringify(billitemdetails);
            fs.writeFileSync("billitemdetails.json", dataToSave);
            res.send(billitemdetails);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.put('/billitemdetails/:id', put);
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
        var data = fs.readFileSync("billitemdetails.json");
        var billitemdetails = JSON.parse(data);
        var userIndex = indexOf(req.params.id, billitemdetails);
        if (userIndex != -1) {
            var user = billitemdetails[userIndex];
            res.send(user);
        }
        else {
            res.status(500).send("user not found");
        }
    }
    app.get('/billitemdetails/:id', getById);

    function post(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("billitemdetails.json");
        var billitemdetails = JSON.parse(data);
        billitemdetails.push(postedUser);
        var dataToSave = JSON.stringify(billitemdetails);
        fs.writeFileSync("billitemdetails.json", dataToSave);
        res.send(billitemdetails);
    }
    app.post('/billitemdetails', post);


    function getAll(req, res) {
        var fs = require('fs');
        var data = fs.readFileSync("billitemdetails.json");
        var billitemdetails = JSON.parse(data);
        res.send(billitemdetails);
    }
    app.get('/billitemdetails', getAll)
}