module.exports = function (app) {

    //start delete api
    function deleteFile(req, res) {
        var fs = require("fs");
        var data = fs.readFileSync("salary.json");
        var salary = JSON.parse(data);
        var userIndex = indexOf(req.params.id, salary);
        if (userIndex != -1) {
            salary.splice(userIndex, 1);
            var dataToSave = JSON.stringify(salary);
            fs.writeFileSync("salary.json", dataToSave);
            res.send(salary);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.delete('/salary/:id', deleteFile);
    ////end
    ///start put api
    function put(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("salary.json");
        var salary = JSON.parse(data);
        var userIndex = indexOf(req.params.id, salary);
        if (userIndex != -1) {
            salary[userIndex] = postedUser;
            var dataToSave = JSON.stringify(salary);
            fs.writeFileSync("salary.json", dataToSave);
            res.send(salary);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.put('/salary/:id', put);
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
        var data = fs.readFileSync("salary.json");
        var salary = JSON.parse(data);
        var userIndex = indexOf(req.params.id, salary);
        if (userIndex != -1) {
            var user = salary[userIndex];
            res.send(user);
        }
        else {
            res.status(500).send("user not found");
        }
    }
    app.get('/salary/:id', getById);

    function post(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("salary.json");
        var salary = JSON.parse(data);
        salary.push(postedUser);
        var dataToSave = JSON.stringify(salary);
        fs.writeFileSync("salary.json", dataToSave);
        res.send(salary);
    }
    app.post('/salary', post);


    function getAll(req, res) {
        var fs = require('fs');
        var data = fs.readFileSync("salary.json");
        var salary = JSON.parse(data);
        res.send(salary);
    }
    app.get('/salary', getAll)
}