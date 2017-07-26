module.exports = function (app) {
 // start post api in table
    function post(req, res) {
        var postedUser = req.body;
        var dboperations = require("./db_operations.js");
        dboperations.save(""+collectionName, postedUser, function (err, result) {
            if (err) {
                res.send("Error in save");
            }
            else {
                dboperations.getAll(""+collectionName, function (err, objects) {
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

    app.post('/'+collectionName, post);
    //end


   //starts getall in table

    function getAll(req, res) {
        var dboperations = require("./db_operations.js");
        dboperations.getAll(""+collectionName, function (err, objects) {
            if (err) {
                res.send("Error in getall");
            }
            else {
                res.send(objects);
            }
        });
    }

    app.get('/'+collectionName, getAll);
    //end


}