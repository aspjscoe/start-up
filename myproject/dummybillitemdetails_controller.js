module.exports = function (app) {

    //start delete api
    function deleteFile(req, res) {
        var fs = require("fs");
        var data = fs.readFileSync("dummybillitemdetails.json");
        var dummybillitemdetails = JSON.parse(data);
        var userIndex = indexOf(req.params.id, dummybillitemdetails);
        if (userIndex != -1) {
            dummybillitemdetails.splice(userIndex, 1);
            var dataToSave = JSON.stringify(dummybillitemdetails);
            fs.writeFileSync("dummybillitemdetails.json", dataToSave);
            res.send(dummybillitemdetails);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.delete('/dummybillitemdetails/:id', deleteFile);
    ////end
    ///start put api
    function put(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("dummybillitemdetails.json");
        var dummybillitemdetails = JSON.parse(data);
        var userIndex = indexOf(req.params.id, dummybillitemdetails);
        if (userIndex != -1) {
            dummybillitemdetails[userIndex] = postedUser;
            var dataToSave = JSON.stringify(dummybillitemdetails);
            fs.writeFileSync("dummybillitemdetails.json", dataToSave);
            res.send(dummybillitemdetails);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.put('/dummybillitemdetails/:id', put);
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
        var data = fs.readFileSync("dummybillitemdetails.json");
        var dummybillitemdetails = JSON.parse(data);
        var userIndex = indexOf(req.params.id, dummybillitemdetails);
        if (userIndex != -1) {
            var user = dummybillitemdetails[userIndex];
            res.send(user);
        }
        else {
            res.status(500).send("user not found");
        }
    }
    app.get('/dummybillitemdetails/:id', getById);

    function post(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("dummybillitemdetails.json");
        var dummybillitemdetails = JSON.parse(data);
        dummybillitemdetails.push(postedUser);
        var dataToSave = JSON.stringify(dummybillitemdetails);
        fs.writeFileSync("dummybillitemdetails.json", dataToSave);
        res.send(dummybillitemdetails);
    }
    app.post('/dummybillitemdetails', post);


    function getAll(req, res) {
        var fs = require('fs');
        var data = fs.readFileSync("dummybillitemdetails.json");
        var dummybillitemdetails = JSON.parse(data);
        res.send(dummybillitemdetails);
    }
    app.get('/dummybillitemdetails', getAll)
}