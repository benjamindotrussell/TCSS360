/** 
		A collection of Jobs
		Author: Nursultan Irgaliyev
		Date: 11/30/2016
**/
	//imports
	var mysql = require('mysql');
	
	var connection = mysql.createConnection ({
		host : 'cssgate.insttech.washington.edu',
		user : '_360team11',
		password : 'HifOot',
		database : '_360team11',
	});
	
	//test connection 
	connection.connect(function(err) {  
		if (err) { console.log(err);};
	});
		
module.exports = {
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
	addJob: function(employer, salary, startDate, endDate, fullTime, jobTitle, studentID) {
		var post = { employer : employer,
					salary : salary,
					startDate : startDate,
					endDate : endDate,
					fullTime : fullTime,
					jobTitle : jobTitle,
					studentID : studentID
		};	
		connection.query('UPDATE job SET endDate = ' + startDate + ' WHERE studentID = ' 
			+ studentID + ' AND endDAte = "0000-00-00"', function(err, result) {
		if(err) { 
			console.log(err);
			return false;
		};
		connection.query('INSERT INTO job SET ?', post, function(err, result) {
		if(err) { 
			console.log(err);
			return false;
		};
	});
	return true;
	}

}	
	
