/**
		Class that represents a Job in the system.
		Author: Nursultan Irgaliyev
		Date: 12/5/2016
		
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
connection.connect(function (err) {
    if (err) { console.log(err); };
});

module.exports = {
    /**
    * method to set endDate
    * Param endDate - endDate to set in mm/dd/year
    **/
    setEndDate: function (endDate) {
        var post = { endDate: endDate };
        connection.query('INSERT INTO job Set ?', post, function (err, result) {
            if (err) {
                console.log(err);
                return false;
            };
        });
        return true;
    },

    /**
    * Adds a job to the DB
	* Param: employer - name of employer for the job to add
	* Param: salary - salary for the job to add
	* Param: startDate - starting day of the job to add
	* Param: endDate - ending day of the job to add
	* Param: fullTime - bool variable indicating whether the job is full-time
	* Param: jobTitle - title of the job to add
	* Param: studentID - id of the student with this job
	**/
    addJob: function (employer, salary, startDate, endDate, fullTime, jobTitle, studentID) {
        var post = {
            employer: employer,
            salary: salary,
            startDate: startDate,
            endDate: endDate,
            fullTime: fullTime,
            jobTitle: jobTitle,
            studentID: studentID
        };

        connection.query('INSERT INTO job SET ?', post, function (err, result) {
            if (err) {
                console.log(err);
                return false;
            };
        });
        return true;
    },

    listJobs: function(callback) {
        connection.query('SELECT * FROM job', 
			function(err, data) {
			    try{ 
			        if (err) {
			            callback(err, null);
			        } else {
			            callback(null, data);					
			        }
			    } catch (err){
			        console.log("query failed");
			    }
			});
    }

}
