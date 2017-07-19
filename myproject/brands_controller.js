module.exports = function (app) {

    //start delete api
    function deleteFile(req, res) {
        var fs = require("fs");
        var data = fs.readFileSync("brands.json");
        var brands = JSON.parse(data);
        var userIndex = indexOf(req.params.id, brands);
        if (userIndex != -1) {
            brands.splice(userIndex, 1);
            var dataToSave = JSON.stringify(brands);
            fs.writeFileSync("brands.json", dataToSave);
            res.send(brands);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.delete('/brands/:id', deleteFile);
    ////end
    ///start put api
    function put(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("brands.json");
        var brands = JSON.parse(data);
        var userIndex = indexOf(req.params.id, brands);
        if (userIndex != -1) {
            brands[userIndex] = postedUser;
            var dataToSave = JSON.stringify(brands);
            fs.writeFileSync("brands.json", dataToSave);
            res.send(brands);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.put('/brands/:id', put);
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
        var data = fs.readFileSync("brands.json");
        var brands = JSON.parse(data);
        var userIndex = indexOf(req.params.id, brands);
        if (userIndex != -1) {
            var user = brands[userIndex];
            res.send(user);
        }
        else {
            res.status(500).send("user not found");
        }
    }
    app.get('/brands/:id', getById);

    function post(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("brands.json");
        var brands = JSON.parse(data);
        brands.push(postedUser);
        var dataToSave = JSON.stringify(brands);
        fs.writeFileSync("brands.json", dataToSave);
        res.send(brands);
    }
    app.post('/brands', post);


    function getAll(req, res) {
        var fs = require('fs');
        var data = fs.readFileSync("brands.json");
        var brands = JSON.parse(data);
        res.send(brands);
    }
    app.get('/brands', getAll)
}