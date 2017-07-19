module.exports = function (app) {
    //start delete api
    function deleteFile(req, res) {
        var fs = require("fs");
        var data = fs.readFileSync("expense.json");
        var expense = JSON.parse(data);
        var userIndex = indexOf(req.params.id, expense);
        if (userIndex != -1) {
            expense.splice(userIndex, 1);
            var dataToSave = JSON.stringify(expense);
            fs.writeFileSync("expense.json", dataToSave);
            res.send(expense);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.delete('/expense/:id', deleteFile);
    ////end
    ///start put api
    function put(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("expense.json");
        var expense = JSON.parse(data);
        var userIndex = indexOf(req.params.id, expense);
        if (userIndex != -1) {
            expense[userIndex] = postedUser;
            var dataToSave = JSON.stringify(expense);
            fs.writeFileSync("expense.json", dataToSave);
            res.send(expense);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.put('/expense/:id', put);
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
        var data = fs.readFileSync("expense.json");
        var expense = JSON.parse(data);
        var userIndex = indexOf(req.params.id, expense);
        if (userIndex != -1) {
            var user = expense[userIndex];
            res.send(user);
        }
        else {
            res.status(500).send("user not found");
        }
    }
    app.get('/expense/:id', getById);

    function post(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("expense.json");
        var users = JSON.parse(data);
        users.push(postedUser);
        var dataToSave = JSON.stringify(users);
        fs.writeFileSync("expense.json", dataToSave);
        res.send(users);
    }
    app.post('/expense', post);


    function getAll(req, res) {
        var fs = require('fs');
        var data = fs.readFileSync("expense.json");
        var users = JSON.parse(data);
        res.send(users);
    }
    app.get('/expense', getAll)
}