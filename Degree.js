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
		Add a Degree to the DB.
		field1: degreeName:	name of the degree
		param: degreeLvl: level of the degree
		param: studentID: student id
	**/
	addDegree: function(degreeName, degreeLvl, studentID) {	
		var post = {degreeProgram: degreeName,
					degreeLevel: degreeLvl,
					studentID: studentID};
		connection.query('INSERT INTO degrees Set ?', post, function(err, result) {
			if(err) { 
				console.log(err);
				return false;
			};
		});
		return true;	
	}
}

