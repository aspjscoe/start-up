module.exports = function (app) {

    //start delete api
    function deleteFile(req, res) {
        var fs = require("fs");
        var data = fs.readFileSync("estimatelist.json");
        var estimatelist = JSON.parse(data);
        var userIndex = indexOf(req.params.id, estimatelist);
        if (userIndex != -1) {
            estimatelist.splice(userIndex, 1);
            var dataToSave = JSON.stringify(estimatelist);
            fs.writeFileSync("estimatelist.json", dataToSave);
            res.send(estimatelist);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.delete('/estimatelist/:id', deleteFile);
    ////end
    ///start put api
    function put(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("estimatelist.json");
        var estimatelist = JSON.parse(data);
        var userIndex = indexOf(req.params.id, estimatelist);
        if (userIndex != -1) {
            estimatelist[userIndex] = postedUser;
            var dataToSave = JSON.stringify(estimatelist);
            fs.writeFileSync("estimatelist.json", dataToSave);
            res.send(estimatelist);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.put('/estimatelist/:id', put);
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
        var data = fs.readFileSync("estimatelist.json");
        var estimatelist = JSON.parse(data);
        var userIndex = indexOf(req.params.id, estimatelist);
        if (userIndex != -1) {
            var user = estimatelist[userIndex];
            res.send(user);
        }
        else {
            res.status(500).send("user not found");
        }
    }
    app.get('/estimatelist/:id', getById);


    function post(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("estimatelist.json");
        var estimatelist = JSON.parse(data);
        estimatelist.push(postedUser);
        var dataToSave = JSON.stringify(estimatelist);
        fs.writeFileSync("estimatelist.json", dataToSave);
        res.send(estimatelist);
    }
    app.post('/estimatelist', post);


    function getAll(req, res) {
        var fs = require('fs');
        var data = fs.readFileSync("estimatelist.json");
        var estimatelist = JSON.parse(data);
        res.send(estimatelist);
    }
    app.get('/estimatelist', getAll)
}