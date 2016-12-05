/**
	A degree
	
	Author: Ben Russell
	Date: 	11/29/2016
**/
//imports
var mysql		= require('mysql');

//connect to the DB
var connection 	= mysql.createConnection({
  host     : 'cssgate.insttech.washington.edu',
  user     : '_360team11',
  password : 'HifOot',
  database : '_360team11',
});

//test connection 
connection.connect(function(err) {  
  if (err) { console.log(err);};
});

module.exports = {
	/**
	* Add a new student to the DB.
	* Params: name: student's name, degree: student's degree, studentID: student's id,
	* Params: gpa: student's gpa.	
	* return: boolean whether the query succeded.
	**/
	update: function(studentID, name, degree, gpa) {
		var ret = false;
		var post = {studentID: studentID,
					name: name,
					degree: degree,
					gpa: gpa};
		connection.query('INSERT INTO transferSchools Set ?', post, function(err, result) {
			if(err) { 
				console.log(err);
				ret = false;
			};
		});
		return ret;	
	}
}	