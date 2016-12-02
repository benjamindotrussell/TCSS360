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
/**
	A Degree Object
	field1: myDegree		name of the degree
	field2: myDegreeLevel	level of the degree
**/
function Degree(degree, degreeLevel) {
	this.myDegree = degree;
	this.myDegreeLevel = degreeLevel;
}

addDegree = function(degreeName, degreeLvl, studentID) {	
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

module.exports = Degree;
connection.end();
