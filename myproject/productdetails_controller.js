module.exports = function (app) {

    //start delete api
    function deleteFile(req, res) {
        var fs = require("fs");
        var data = fs.readFileSync("productdetails.json");
        var productdetails = JSON.parse(data);
        var userIndex = indexOf(req.params.id, productdetails);
        if (userIndex != -1) {
            productdetails.splice(userIndex, 1);
            var dataToSave = JSON.stringify(productdetails);
            fs.writeFileSync("productdetails.json", dataToSave);
            res.send(productdetails);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.delete('/productdetails/:id', deleteFile);
    ////end
    ///start put api
    function put(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("productdetails.json");
        var productdetails = JSON.parse(data);
        var userIndex = indexOf(req.params.id, productdetails);
        if (userIndex != -1) {
            productdetails[userIndex] = postedUser;
            var dataToSave = JSON.stringify(productdetails);
            fs.writeFileSync("productdetails.json", dataToSave);
            res.send(productdetails);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.put('/productdetails/:id', put);
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
        var data = fs.readFileSync("productdetails.json");
        var productdetails = JSON.parse(data);
        var userIndex = indexOf(req.params.id, productdetails);
        if (userIndex != -1) {
            var user = productdetails[userIndex];
            res.send(user);
        }
        else {
            res.status(500).send("user not found");
        }
    }
    app.get('/productdetails/:id', getById);


    function post(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("productdetails.json");
        var productdetails = JSON.parse(data);
        productdetails.push(postedUser);
        var dataToSave = JSON.stringify(productdetails);
        fs.writeFileSync("productdetails.json", dataToSave);
        res.send(productdetails);
    }
    app.post('/productdetails', post);


    function getAll(req, res) {
        var fs = require('fs');
        var data = fs.readFileSync("productdetails.json");
        var productdetails = JSON.parse(data);
        res.send(productdetails);
    }
    app.get('/productdetails', getAll)
}