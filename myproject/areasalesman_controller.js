module.exports = function (app) {

    //start delete api
    function deleteFile(req, res) {
        var fs = require("fs");
        var data = fs.readFileSync("areasalesman.json");
        var areasalesman = JSON.parse(data);
        var userIndex = indexOf(req.params.id, areasalesman);
        if (userIndex != -1) {
            areasalesman.splice(userIndex, 1);
            var dataToSave = JSON.stringify(areasalesman);
            fs.writeFileSync("areasalesman.json", dataToSave);
            res.send(areasalesman);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.delete('/areasalesman/:id', deleteFile);
    ////end
    ///start put api
    function put(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("areasalesman.json");
        var areasalesman = JSON.parse(data);
        var userIndex = indexOf(req.params.id, areasalesman);
        if (userIndex != -1) {
            areasalesman[userIndex] = postedUser;
            var dataToSave = JSON.stringify(areasalesman);
            fs.writeFileSync("areasalesman.json", dataToSave);
            res.send(areasalesman);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.put('/areasalesman/:id', put);
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
        var data = fs.readFileSync("areasalesman.json");
        var areasalesman = JSON.parse(data);
        var userIndex = indexOf(req.params.id, areasalesman);
        if (userIndex != -1) {
            var user = areasalesman[userIndex];
            res.send(user);
        }
        else {
            res.status(500).send("user not found");
        }
    }
    app.get('/areasalesman/:id', getById);


    function post(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("areasalesman.json");
        var areasalesman = JSON.parse(data);
        areasalesman.push(postedUser);
        var dataToSave = JSON.stringify(areasalesman);
        fs.writeFileSync("areasalesman.json", dataToSave);
        res.send(areasalesman);
    }
    app.post('/areasalesman', post);


    function getAll(req, res) {
        var fs = require('fs');
        var data = fs.readFileSync("areasalesman.json");
        var areasalesman = JSON.parse(data);
        res.send(areasalesman);
    }
    app.get('/areasalesman', getAll)
}