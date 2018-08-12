var connection = require("./connection.js");

// NOTE TO SELF
// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection

var orm = {
    selectAll: function (table, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function (err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },
    insertOne: function (table, colName, burgerName, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES (?);";
        console.log(queryString);
        connection.query(queryString, [table, colName, burgerName], function (err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },
    updateOne: function (table, colName, devouredStatus, burgerID, cb) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE id = ?;";
        console.log(queryString);
        connection.query(queryString, [table, colName, devouredStatus, burgerID], function (err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    }
};

module.exports = orm;