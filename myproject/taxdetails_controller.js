module.exports = function (app) {

    //start delete api
    function deleteFile(req, res) {
        var fs = require("fs");
        var data = fs.readFileSync("taxdetails.json");
        var taxdetails = JSON.parse(data);
        var userIndex = indexOf(req.params.id, taxdetails);
        if (userIndex != -1) {
            taxdetails.splice(userIndex, 1);
            var dataToSave = JSON.stringify(taxdetails);
            fs.writeFileSync("taxdetails.json", dataToSave);
            res.send(taxdetails);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.delete('/taxdetails/:id', deleteFile);
    ////end
    ///start put api
    function put(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("taxdetails.json");
        var taxdetails = JSON.parse(data);
        var userIndex = indexOf(req.params.id, taxdetails);
        if (userIndex != -1) {
            taxdetails[userIndex] = postedUser;
            var dataToSave = JSON.stringify(taxdetails);
            fs.writeFileSync("taxdetails.json", dataToSave);
            res.send(taxdetails);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.put('/taxdetails/:id', put);
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
        var data = fs.readFileSync("taxdetails.json");
        var taxdetails = JSON.parse(data);
        var userIndex = indexOf(req.params.id, taxdetails);
        if (userIndex != -1) {
            var user = taxdetails[userIndex];
            res.send(user);
        }
        else {
            res.status(500).send("user not found");
        }
    }
    app.get('/taxdetails/:id', getById);


    function post(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("taxdetails.json");
        var taxdetails = JSON.parse(data);
        taxdetails.push(postedUser);
        var dataToSave = JSON.stringify(taxdetails);
        fs.writeFileSync("taxdetails.json", dataToSave);
        res.send(taxdetails);
    }
    app.post('/taxdetails', post);


    function getAll(req, res) {
        var fs = require('fs');
        var data = fs.readFileSync("taxdetails.json");
        var taxdetails = JSON.parse(data);
        res.send(taxdetails);
    }
    app.get('/taxdetails', getAll)
}