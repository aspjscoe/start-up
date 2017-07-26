module.exports = function (app) {


    //start delete api
    function deleteFile(req, res) {
        var fs = require("fs");
        var data = fs.readFileSync("bankaccount.json");
        var bankaccount = JSON.parse(data);
        var userIndex = indexOf(req.params.id, bankaccount);
        if (userIndex != -1) {
            bankaccount.splice(userIndex, 1);
            var dataToSave = JSON.stringify(bankaccount);
            fs.writeFileSync("bankaccount.json", dataToSave);
            res.send(bankaccount);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.delete('/bankaccount/:id', deleteFile);
    ////end
    ///start put api
    function put(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("bankaccount.json");
        var bankaccount = JSON.parse(data);
        var userIndex = indexOf(req.params.id, bankaccount);
        if (userIndex != -1) {
            bankaccount[userIndex] = postedUser;
            var dataToSave = JSON.stringify(bankaccount);
            fs.writeFileSync("bankaccount.json", dataToSave);
            res.send(bankaccount);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.put('/bankaccount/:id', put);
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
        var data = fs.readFileSync("bankaccount.json");
        var bankaccount = JSON.parse(data);
        var userIndex = indexOf(req.params.id, bankaccount);
        if (userIndex != -1) {
            var user = bankaccount[userIndex];
            res.send(user);
        }
        else {
            res.status(500).send("user not found");
        }
    }
    app.get('/bankaccount/:id', getById);

//starts get api 

    function get(req, res) {
        var tables = require("./tables_controller.js");
        tables.get("bankaccount", function (err, objects) {
            if (err) {
                res.send("Error in getall");
            }
            else {
                res.send(objects);
            }
        });
    }

    function get(req, res) {
        var advance = require("./common_controller.js");
        advance.get("bankaccount", function (err, objects) {
            if (err) {
                res.send("Error in getall");
            }
            else {
                res.send(objects);
            }
        });
    }

}