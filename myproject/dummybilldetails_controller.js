module.exports = function (app) {

    //start delete api
    function deleteFile(req, res) {
        var fs = require("fs");
        var data = fs.readFileSync("dummybilldetails.json");
        var dummybilldetails = JSON.parse(data);
        var userIndex = indexOf(req.params.id, dummybilldetails);
        if (userIndex != -1) {
            dummybilldetails.splice(userIndex, 1);
            var dataToSave = JSON.stringify(dummybilldetails);
            fs.writeFileSync("dummybilldetails.json", dataToSave);
            res.send(dummybilldetails);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.delete('/dummybilldetails/:id', deleteFile);
    ////end
    ///start put api
    function put(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("dummybilldetails.json");
        var dummybilldetails = JSON.parse(data);
        var userIndex = indexOf(req.params.id, dummybilldetails);
        if (userIndex != -1) {
            dummybilldetails[userIndex] = postedUser;
            var dataToSave = JSON.stringify(dummybilldetails);
            fs.writeFileSync("dummybilldetails.json", dataToSave);
            res.send(dummybilldetails);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.put('/dummybilldetails/:id', put);
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
        var data = fs.readFileSync("dummybilldetails.json");
        var dummybilldetails = JSON.parse(data);
        var userIndex = indexOf(req.params.id, dummybilldetails);
        if (userIndex != -1) {
            var user = dummybilldetails[userIndex];
            res.send(user);
        }
        else {
            res.status(500).send("user not found");
        }
    }
    app.get('/dummybilldetails/:id', getById);


    function post(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("dummybilldetails.json");
        var dummybilldetails = JSON.parse(data);
        dummybilldetails.push(postedUser);
        var dataToSave = JSON.stringify(dummybilldetails);
        fs.writeFileSync("dummybilldetails.json", dataToSave);
        res.send(dummybilldetails);
    }
    app.post('/dummybilldetails', post);


    function getAll(req, res) {
        var fs = require('fs');
        var data = fs.readFileSync("dummybilldetails.json");
        var dummybilldetails = JSON.parse(data);
        res.send(dummybilldetails);
    }
    app.get('/dummybilldetails', getAll)
}