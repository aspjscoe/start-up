module.exports = function (app) {

    //start delete api
    function deleteFile(req, res) {
        var fs = require("fs");
        var data = fs.readFileSync("stock.json");
        var stock = JSON.parse(data);
        var userIndex = indexOf(req.params.id, stock);
        if (userIndex != -1) {
            stock.splice(userIndex, 1);
            var dataToSave = JSON.stringify(stock);
            fs.writeFileSync("stock.json", dataToSave);
            res.send(stock);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.delete('/stock/:id', deleteFile);
    ////end
    ///start put api
    function put(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("stock.json");
        var stock = JSON.parse(data);
        var userIndex = indexOf(req.params.id, stock);
        if (userIndex != -1) {
            stock[userIndex] = postedUser;
            var dataToSave = JSON.stringify(stock);
            fs.writeFileSync("stock.json", dataToSave);
            res.send(stock);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.put('/stock/:id', put);
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
        var data = fs.readFileSync("stock.json");
        var stock = JSON.parse(data);
        var userIndex = indexOf(req.params.id, stock);
        if (userIndex != -1) {
            var user = stock[userIndex];
            res.send(user);
        }
        else {
            res.status(500).send("user not found");
        }
    }
    app.get('/stock/:id', getById);


    function post(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("stock.json");
        var stock = JSON.parse(data);
        stock.push(postedUser);
        var dataToSave = JSON.stringify(stock);
        fs.writeFileSync("stock.json", dataToSave);
        res.send(stock);
    }
    app.post('/stock', post);


    function getAll(req, res) {
        var fs = require('fs');
        var data = fs.readFileSync("stock.json");
        var stock = JSON.parse(data);
        res.send(stock);
    }
    app.get('/stock', getAll)
}