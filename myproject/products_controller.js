module.exports = function (app) {

    //start delete api
    function deleteFile(req, res) {
        var fs = require("fs");
        var data = fs.readFileSync("products.json");
        var products = JSON.parse(data);
        var userIndex = indexOf(req.params.id, products);
        if (userIndex != -1) {
            products.splice(userIndex, 1);
            var dataToSave = JSON.stringify(products);
            fs.writeFileSync("products.json", dataToSave);
            res.send(products);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.delete('/products/:id', deleteFile);
    ////end
    ///start put api
    function put(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("products.json");
        var products = JSON.parse(data);
        var userIndex = indexOf(req.params.id, products);
        if (userIndex != -1) {
            products[userIndex] = postedUser;
            var dataToSave = JSON.stringify(products);
            fs.writeFileSync("products.json", dataToSave);
            res.send(products);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.put('/products/:id', put);
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
        var data = fs.readFileSync("products.json");
        var products = JSON.parse(data);
        var userIndex = indexOf(req.params.id, products);
        if (userIndex != -1) {
            var user = products[userIndex];
            res.send(user);
        }
        else {
            res.status(500).send("user not found");
        }
    }
    app.get('/products/:id', getById);


    function post(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("products.json");
        var products = JSON.parse(data);
        products.push(postedUser);
        var dataToSave = JSON.stringify(products);
        fs.writeFileSync("products.json", dataToSave);
        res.send(products);
    }
    app.post('/products', post);


    function getAll(req, res) {
        var fs = require('fs');
        var data = fs.readFileSync("products.json");
        var products = JSON.parse(data);
        res.send(products);
    }
    app.get('/products', getAll)
}