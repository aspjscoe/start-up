module.exports = function (app) {

    //start delete api
    function deleteFile(req, res) {
        var fs = require("fs");
        var data = fs.readFileSync("areasalesman.json");
        var areasalesman = JSON.parse(data);
        var userIndex = indexOf(req.params.id, advance);
        if (userIndex != -1) {
            areasalesman.splice(userIndex, 1);
            var dataToSave = JSON.stringify(areasalesman);
            fs.writeFileSync("areasalesman.json", dataToSave);
            res.send(areasalesman);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.delete('/areasalesman/:id', deleteFile);
    ////end

    ///start put api
    function put(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("areasalesman.json");
        var areasalesman = JSON.parse(data);
        var userIndex = indexOf(req.params.id, areasalesman);
        if (userIndex != -1) {
            areasalesman[userIndex] = postedUser;
            var dataToSave = JSON.stringify(areasalesman);
            fs.writeFileSync("areasalesman.json", dataToSave);
            res.send(areasalesman);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.put('/areasalesman/:id', put);
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
        var data = fs.readFileSync("areasalesman.json");
        var areasalesman = JSON.parse(data);
        var userIndex = indexOf(req.params.id, areasalesman);
        if (userIndex != -1) {
            var user = areasalesman[userIndex];
            res.send(user);
        }
        else {
            res.status(500).send("user not found");
        }
    }
    app.get('/areasalesman/:id', getById);

   
 

  //starts get api 

    function get(req, res) {
        var tables = require("./tables_controller.js");
        tables.get("areasalesman", function (err, objects) {
            if (err) {
                res.send("Error in get");
            }
            else {
                res.send(objects);
            }
        });
    }

    //end
    function get(req, res) {
        var areasalesman = require("./common_controller.js");
        areasalesman.get("areasalesman", function (err, objects) {
            if (err) {
                res.send("Error in get");
            }
            else {
                res.send(objects);
            }
        });
    }
    
}
