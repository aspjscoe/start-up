module.exports = function (app) {

    //start delete api
    function deleteFile(req, res) {
        var fs = require("fs");
        var data = fs.readFileSync("discount.json");
        var discount = JSON.parse(data);
        var userIndex = indexOf(req.params.id, discount);
        if (userIndex != -1) {
            discount.splice(userIndex, 1);
            var dataToSave = JSON.stringify(discount);
            fs.writeFileSync("discount.json", dataToSave);
            res.send(discount);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.delete('/discount/:id', deleteFile);
    ////end
    ///start put api
    function put(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("discount.json");
        var discount = JSON.parse(data);
        var userIndex = indexOf(req.params.id, discount);
        if (userIndex != -1) {
            discount[userIndex] = postedUser;
            var dataToSave = JSON.stringify(discount);
            fs.writeFileSync("discount.json", dataToSave);
            res.send(discount);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.put('/discount/:id', put);
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
        var data = fs.readFileSync("discount.json");
        var discount = JSON.parse(data);
        var userIndex = indexOf(req.params.id, discount);
        if (userIndex != -1) {
            var user = discount[userIndex];
            res.send(user);
        }
        else {
            res.status(500).send("user not found");
        }
    }
    app.get('/discount/:id', getById);



    function post(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("discount.json");
        var discount = JSON.parse(data);
        discount.push(postedUser);
        var dataToSave = JSON.stringify(discount);
        fs.writeFileSync("discount.json", dataToSave);
        res.send(discount);
    }
    app.post('/discount', post);


    function getAll(req, res) {
        var fs = require('fs');
        var data = fs.readFileSync("discount.json");
        var discount = JSON.parse(data);
        res.send(discount);
    }
    app.get('/discount', getAll)
}