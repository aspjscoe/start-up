module.exports = function (app) {

    //start delete api
    function deleteFile(req, res) {
        var fs = require("fs");
        var data = fs.readFileSync("cancelbilldetails.json");
        var cancelbilldetails = JSON.parse(data);
        var userIndex = indexOf(req.params.id, cancelbilldetails);
        if (userIndex != -1) {
            cancelbilldetails.splice(userIndex, 1);
            var dataToSave = JSON.stringify(cancelbilldetails);
            fs.writeFileSync("cancelbilldetails.json", dataToSave);
            res.send(cancelbilldetails);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.delete('/cancelbilldetails/:id', deleteFile);
    ////end
    ///start put api
    function put(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("cancelbilldetails.json");
        var cancelbilldetails = JSON.parse(data);
        var userIndex = indexOf(req.params.id, cancelbilldetails);
        if (userIndex != -1) {
            cancelbilldetails[userIndex] = postedUser;
            var dataToSave = JSON.stringify(cancelbilldetails);
            fs.writeFileSync("cancelbilldetails.json", dataToSave);
            res.send(cancelbilldetails);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.put('/cancelbilldetails/:id', put);
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
        var data = fs.readFileSync("cancelbilldetails.json");
        var cancelbilldetails = JSON.parse(data);
        var userIndex = indexOf(req.params.id, cancelbilldetails);
        if (userIndex != -1) {
            var user = cancelbilldetails[userIndex];
            res.send(user);
        }
        else {
            res.status(500).send("user not found");
        }
    }
    app.get('/cancelbilldetails/:id', getById);

    function post(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("cancelbilldetails.json");
        var cancelbilldetails = JSON.parse(data);
        cancelbilldetails.push(postedUser);
        var dataToSave = JSON.stringify(cancelbilldetails);
        fs.writeFileSync("cancelbilldetails.json", dataToSave);
        res.send(cancelbilldetails);
    }
    app.post('/cancelbilldetails', post);


    function getAll(req, res) {
        var fs = require('fs');
        var data = fs.readFileSync("cancelbilldetails.json");
        var cancelbilldetails = JSON.parse(data);
        res.send(cancelbilldetails);
    }
    app.get('/cancelbilldetails', getAll)
}