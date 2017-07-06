module.exports = function (app) {
  
    //start delete api
    function deleteFile(req, res) {
        var fs = require("fs");
        var data = fs.readFileSync("advance.json");
        var advance = JSON.parse(data);
        var userIndex = indexOf(req.params.id, advance);
        if (userIndex != -1) {
            advance.splice(userIndex, 1);
            var dataToSave = JSON.stringify(advance);
            fs.writeFileSync("advance.json", dataToSave);
            res.send(advance);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.delete('/advance/:id', deleteFile);
    ////end
    ///start put api
    function put(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("advance.json");
        var advance = JSON.parse(data);
        var userIndex = indexOf(req.params.id, advance);
        if (userIndex != -1) {
            advance[userIndex] = postedUser;
            var dataToSave = JSON.stringify(advance);
            fs.writeFileSync("advance.json", dataToSave);
            res.send(advance);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.put('/advance/:id', put);
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
        var data = fs.readFileSync("advance.json");
        var advance = JSON.parse(data);
        var userIndex = indexOf(req.params.id, advance);
        if (userIndex != -1) {
            var user = advance[userIndex];
            res.send(user);
        }
        else {
            res.status(500).send("user not found");
        }
    }
    app.get('/advance/:id', getById);

    function post(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("advance.json");
        var advance = JSON.parse(data);
        advance.push(postedUser);
        var dataToSave = JSON.stringify(advance);
        fs.writeFileSync("advance.json", dataToSave);
        res.send(advance);
    }
    app.post('/advance', post);


    function getAll(req, res) {
        var fs = require('fs');
        var data = fs.readFileSync("advance.json");
        var advance = JSON.parse(data);
        res.send(advance);
    }
    app.get('/advance', getAll)
}