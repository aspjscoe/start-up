module.exports = function (app) {

    //start delete api
    function deleteFile(req, res) {
        var fs = require("fs");
        var data = fs.readFileSync("suppliers.json");
        var suppliers = JSON.parse(data);
        var userIndex = indexOf(req.params.id, suppliers);
        if (userIndex != -1) {
            suppliers.splice(userIndex, 1);
            var dataToSave = JSON.stringify(suppliers);
            fs.writeFileSync("suppliers.json", dataToSave);
            res.send(suppliers);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.delete('/suppliers/:id', deleteFile);
    ////end
    ///start put api
    function put(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("suppliers.json");
        var suppliers = JSON.parse(data);
        var userIndex = indexOf(req.params.id, suppliers);
        if (userIndex != -1) {
            suppliers[userIndex] = postedUser;
            var dataToSave = JSON.stringify(suppliers);
            fs.writeFileSync("suppliers.json", dataToSave);
            res.send(suppliers);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.put('/suppliers/:id', put);
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
        var data = fs.readFileSync("suppliers.json");
        var suppliers = JSON.parse(data);
        var userIndex = indexOf(req.params.id, suppliers);
        if (userIndex != -1) {
            var user = suppliers[userIndex];
            res.send(user);
        }
        else {
            res.status(500).send("user not found");
        }
    }
    app.get('/suppliers/:id', getById);


    function post(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("suppliers.json");
        var suppliers = JSON.parse(data);
        suppliers.push(postedUser);
        var dataToSave = JSON.stringify(suppliers);
        fs.writeFileSync("suppliers.json", dataToSave);
        res.send(suppliers);
    }
    app.post('/suppliers', post);


    function getAll(req, res) {
        var fs = require('fs');
        var data = fs.readFileSync("suppliers.json");
        var suppliers = JSON.parse(data);
        res.send(suppliers);
    }
    app.get('/suppliers', getAll)
}