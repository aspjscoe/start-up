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

    // start post api in table
    function post(req, res) {
        var postedUser = req.body;
        var dboperations = require("./db-operations.js");
        dboperations.save("advance", postedUser, function (err, result) {
            if (err) {
                res.send("Error in save");
            }
            else {
                dboperations.getAll("advance", function (err, objects) {
                    if (err) {
                        res.send("Error in save");
                    }
                    else {
                        res.send(objects);
                    }
                });
            }
        });
    }

    app.post('/advance', post);
    //end
    //starts getall in table

    function getAll(req, res) {
        var dboperations = require("./db-operations.js");
        dboperations.getAll("advance", function (err, objects) {
            if (err) {
                res.send("Error in getall");
            }
            else {
                res.send(objects);
            }
        });
    }

    app.get('/advance', getAll);
    //end

}