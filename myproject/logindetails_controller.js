module.exports = function (app) {

    //start delete api
    function deleteFile(req, res) {
        var fs = require("fs");
        var data = fs.readFileSync("logindetails.json");
        var logindetails = JSON.parse(data);
        var userIndex = indexOf(req.params.id, logindetails);
        if (userIndex != -1) {
            logindetails.splice(userIndex, 1);
            var dataToSave = JSON.stringify(logindetails);
            fs.writeFileSync("logindetails.json", dataToSave);
            res.send(logindetails);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.delete('/logindetails/:id', deleteFile);
    ////end
    ///start put api
    function put(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("logindetails.json");
        var logindetails = JSON.parse(data);
        var userIndex = indexOf(req.params.id, logindetails);
        if (userIndex != -1) {
            logindetails[userIndex] = postedUser;
            var dataToSave = JSON.stringify(logindetails);
            fs.writeFileSync("logindetails.json", dataToSave);
            res.send(logindetails);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.put('/logindetails/:id', put);
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
        var data = fs.readFileSync("logindetails.json");
        var logindetails = JSON.parse(data);
        var userIndex = indexOf(req.params.id, logindetails);
        if (userIndex != -1) {
            var user = logindetails[userIndex];
            res.send(user);
        }
        else {
            res.status(500).send("user not found");
        }
    }
    app.get('/logindetails/:id', getById);


    function post(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("logindetails.json");
        var logindetails = JSON.parse(data);
        logindetails.push(postedUser);
        var dataToSave = JSON.stringify(logindetails);
        fs.writeFileSync("logindetails.json", dataToSave);
        res.send(logindetails);
    }
    app.post('/logindetails', post);


    function getAll(req, res) {
        var fs = require('fs');
        var data = fs.readFileSync("logindetails.json");
        var logindetails = JSON.parse(data);
        res.send(logindetails);
    }
    app.get('/logindetails', getAll)
}