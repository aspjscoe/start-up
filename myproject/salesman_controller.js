module.exports = function (app) {

    //start delete api
    function deleteFile(req, res) {
        var fs = require("fs");
        var data = fs.readFileSync("salesman.json");
        var salesman = JSON.parse(data);
        var userIndex = indexOf(req.params.id, salesman);
        if (userIndex != -1) {
            salesman.splice(userIndex, 1);
            var dataToSave = JSON.stringify(salesman);
            fs.writeFileSync("salesman.json", dataToSave);
            res.send(salesman);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.delete('/salesman/:id', deleteFile);
    ////end
    ///start put api
    function put(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("salesman.json");
        var salesman = JSON.parse(data);
        var userIndex = indexOf(req.params.id, salesman);
        if (userIndex != -1) {
            salesman[userIndex] = postedUser;
            var dataToSave = JSON.stringify(salesman);
            fs.writeFileSync("salesman.json", dataToSave);
            res.send(salesman);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.put('/salesman/:id', put);
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
        var data = fs.readFileSync("salesman.json");
        var salesman = JSON.parse(data);
        var userIndex = indexOf(req.params.id, salesman);
        if (userIndex != -1) {
            var user = salesman[userIndex];
            res.send(user);
        }
        else {
            res.status(500).send("user not found");
        }
    }
    app.get('/salesman/:id', getById);

    function post(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("salesman.json");
        var salesman = JSON.parse(data);
        salesman.push(postedUser);
        var dataToSave = JSON.stringify(salesman);
        fs.writeFileSync("salesman.json", dataToSave);
        res.send(salesman);
    }
    app.post('/salesman', post);


    function getAll(req, res) {
        var fs = require('fs');
        var data = fs.readFileSync("salesman.json");
        var salesman = JSON.parse(data);
        res.send(salesman);
    }
    app.get('/salesman', getAll)
}