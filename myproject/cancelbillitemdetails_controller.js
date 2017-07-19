module.exports = function (app) {

    //start delete api
    function deleteFile(req, res) {
        var fs = require("fs");
        var data = fs.readFileSync("cancelbillitemdetails.json");
        var cancelbillitemdetails = JSON.parse(data);
        var userIndex = indexOf(req.params.id, cancelbillitemdetails);
        if (userIndex != -1) {
            cancelbillitemdetails.splice(userIndex, 1);
            var dataToSave = JSON.stringify(cancelbillitemdetails);
            fs.writeFileSync("cancelbillitemdetails.json", dataToSave);
            res.send(cancelbillitemdetails);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.delete('/cancelbillitemdetails/:id', deleteFile);
    ////end
    ///start put api
    function put(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("cancelbillitemdetails.json");
        var cancelbillitemdetails = JSON.parse(data);
        var userIndex = indexOf(req.params.id, cancelbillitemdetails);
        if (userIndex != -1) {
            cancelbillitemdetails[userIndex] = postedUser;
            var dataToSave = JSON.stringify(cancelbillitemdetails);
            fs.writeFileSync("cancelbillitemdetails.json", dataToSave);
            res.send(cancelbillitemdetails);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.put('/cancelbillitemdetails/:id', put);
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
        var data = fs.readFileSync("cancelbillitemdetails.json");
        var cancelbillitemdetails = JSON.parse(data);
        var userIndex = indexOf(req.params.id, cancelbillitemdetails);
        if (userIndex != -1) {
            var user = cancelbillitemdetails[userIndex];
            res.send(user);
        }
        else {
            res.status(500).send("user not found");
        }
    }
    app.get('/cancelbillitemdetails/:id', getById);

    function post(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("cancelbillitemdetails.json");
        var cancelbillitemdetails = JSON.parse(data);
        cancelbillitemdetails.push(postedUser);
        var dataToSave = JSON.stringify(cancelbillitemdetails);
        fs.writeFileSync("cancelbillitemdetails.json", dataToSave);
        res.send(cancelbillitemdetails);
    }
    app.post('/cancelbillitemdetails', post);


    function getAll(req, res) {
        var fs = require('fs');
        var data = fs.readFileSync("cancelbillitemdetails.json");
        var cancelbillitemdetails = JSON.parse(data);
        res.send(cancelbillitemdetails);
    }
    app.get('/cancelbillitemdetails', getAll)
}