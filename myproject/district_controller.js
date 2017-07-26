module.exports = function (app) {

    //start delete api
    function deleteFile(req, res) {
        var fs = require("fs");
        var data = fs.readFileSync("district.json");
        var district = JSON.parse(data);
        var userIndex = indexOf(req.params.id, district);
        if (userIndex != -1) {
            district.splice(userIndex, 1);
            var dataToSave = JSON.stringify(district);
            fs.writeFileSync("district.json", dataToSave);
            res.send(district);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.delete('/district/:id', deleteFile);
    ////end
    ///start put api
    function put(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("district.json");
        var district = JSON.parse(data);
        var userIndex = indexOf(req.params.id, district);
        if (userIndex != -1) {
            district[userIndex] = postedUser;
            var dataToSave = JSON.stringify(district);
            fs.writeFileSync("district.json", dataToSave);
            res.send(district);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.put('/district/:id', put);
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
        var data = fs.readFileSync("district.json");
        var district = JSON.parse(data);
        var userIndex = indexOf(req.params.id, district);
        if (userIndex != -1) {
            var user = district[userIndex];
            res.send(user);
        }
        else {
            res.status(500).send("user not found");
        }
    }
    app.get('/district/:id', getById);



    function post(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("district.json");
        var district = JSON.parse(data);
        district.push(postedUser);
        var dataToSave = JSON.stringify(district);
        fs.writeFileSync("district.json", dataToSave);
        res.send(district);
    }
    app.post('/district', post);


    function getAll(req, res) {
        var fs = require('fs');
        var data = fs.readFileSync("district.json");
        var district = JSON.parse(data);
        res.send(district);
    }
    app.get('/district', getAll)
}