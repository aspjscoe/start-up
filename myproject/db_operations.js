module.exports = (function () {
    function connectDb(dbName, callback) {
        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb://localhost:27017/billing";
        MongoClient.connect(url, function (err, db) {
            if (err) {
                callback("Error in connecting db", undefined);
            } else {
                callback(undefined, db);
            }
        });
    }

    function save(advanceTable, obj, callback) {
        connectDb("billing", onConnected);
        function onConnected(err, db) {
            if (err) {
                callback(err, undefined);
            } else {
                db.collection(advanceTable).insertOne(obj, onSaveObject);
            }
        }
        function onSaveObject(err, result) {
            if (err) {
                callback("Error in inserting record", undefined);
            } else {
                callback(undefined, result);
            }
        }
    }

    function getAll(advanceTable, callback) {
        connectDb("billing", onConnected);
        function onConnected(err, db) {
            if (err) {
                callback(err, undefined);
            } else {
                db.collection(advanceTable).find({}).toArray(onGetAll);
            }
        }
        function onGetAll(err, result) {
            if (err) {
                callback("Error in getting records", undefined);
            } else {
                callback(undefined, result);
            }
        }
    }


    function getById(advanceTable, objId, callback) {
        connectDb("billing", onConnected);
        function onConnected(err, db) {
            if (err) {
                callback(err, undefined);
            } else {
                db.collection(advanceTable).findOne({ id: objId }).toArray(onGetAll);
            }
        }
        function onGetById(err, result) {
            if (err) {
                callback("Error in getting records", undefined);
            } else {
                callback(undefined, result);
            }
        }
    }

    return {
        save: save,
        getAll: getAll,
        getById: getById
    };
});