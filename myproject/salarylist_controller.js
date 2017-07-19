module.exports = function (app) {

    //start delete api
    function deleteFile(req, res) {
        var fs = require("fs");
        var data = fs.readFileSync("salarylist.json");
        var salarylist = JSON.parse(data);
        var userIndex = indexOf(req.params.id, salarylist);
        if (userIndex != -1) {
            salarylist.splice(userIndex, 1);
            var dataToSave = JSON.stringify(salarylist);
            fs.writeFileSync("salarylist.json", dataToSave);
            res.send(salarylist);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.delete('/salarylist/:id', deleteFile);
    ////end
    ///start put api
    function put(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("salarylist.json");
        var salarylist = JSON.parse(data);
        var userIndex = indexOf(req.params.id, salarylist);
        if (userIndex != -1) {
            salarylist[userIndex] = postedUser;
            var dataToSave = JSON.stringify(salarylist);
            fs.writeFileSync("salarylist.json", dataToSave);
            res.send(salarylist);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.put('/salarylist/:id', put);
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
        var data = fs.readFileSync("salarylist.json");
        var salarylist = JSON.parse(data);
        var userIndex = indexOf(req.params.id, salarylist);
        if (userIndex != -1) {
            var user = salarylist[userIndex];
            res.send(user);
        }
        else {
            res.status(500).send("user not found");
        }
    }
    app.get('/salarylist/:id', getById);

    function post(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("salarylist.json");
        var salarylist = JSON.parse(data);
        salarylist.push(postedUser);
        var dataToSave = JSON.stringify(salarylist);
        fs.writeFileSync("salarylist.json", dataToSave);
        res.send(salarylist);
    }
    app.post('/salarylist', post);


    function getAll(req, res) {
        var fs = require('fs');
        var data = fs.readFileSync("salarylist.json");
        var salarylist = JSON.parse(data);
        res.send(salarylist);
    }
    app.get('/salarylist', getAll)
}