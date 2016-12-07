/**
*   A class to represent a set of skills that 
*   some student has
*   Author: Nursultan Irgaliyev
*	Date: 12/5/2016
*
**/

//imports 
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'cssgate.insttech.washington.edu',
    user: '_360team11',
    password: 'HifOot',
    database: '_360team11',
});

//test connection 
connection.connect(function(err) {  
    if (err) { console.log(err);};
});

module.exports = {
/**
*  method to add skills for the student
*  param: studentID - id of the student to add skills to
*  param: skill - skill being added
**/

    addSkill: function(studentID, skill) {
        var post = { studentID: studentID,
            skill: skill
        };
        connection.query('INSERT INTO skills SET ?', post, function (err, result) {
            if (err) {
                console.log(err);
                return false;
            };
        });
        return true;
    }

}


