module.exports = function (app) {

    //start delete api
    function deleteFile(req, res) {
        var fs = require("fs");
        var data = fs.readFileSync("customers.json");
        var customers = JSON.parse(data);
        var userIndex = indexOf(req.params.id, customers);
        if (userIndex != -1) {
            customers.splice(userIndex, 1);
            var dataToSave = JSON.stringify(customers);
            fs.writeFileSync("customers.json", dataToSave);
            res.send(customers);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.delete('/customers/:id', deleteFile);
    ////end
    ///start put api
    function put(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("customers.json");
        var customers = JSON.parse(data);
        var userIndex = indexOf(req.params.id, customers);
        if (userIndex != -1) {
            customers[userIndex] = postedUser;
            var dataToSave = JSON.stringify(customers);
            fs.writeFileSync("customers.json", dataToSave);
            res.send(customers);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.put('/customers/:id', put);
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
        var data = fs.readFileSync("customers.json");
        var customers = JSON.parse(data);
        var userIndex = indexOf(req.params.id, customers);
        if (userIndex != -1) {
            var user = customers[userIndex];
            res.send(user);
        }
        else {
            res.status(500).send("user not found");
        }
    }
    app.get('/customers/:id', getById);


    function post(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("customers.json");
        var customers = JSON.parse(data);
        customers.push(postedUser);
        var dataToSave = JSON.stringify(customers);
        fs.writeFileSync("customers.json", dataToSave);
        res.send(customers);
    }
    app.post('/customers', post);


    function getAll(req, res) {
        var fs = require('fs');
        var data = fs.readFileSync("customers.json");
        var customers = JSON.parse(data);
        res.send(customers);
    }
    app.get('/customers', getAll)
}