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

var TransferSchool = function(name, degree, gpa,) {
	this.schoolName = name;
	this.degreeProgram = degree;
	this.gpa = gpa;

};

update = function(studentID, name, degree, gpa) {
	var post = {studentID: studentID,
				name: name,
				degree: degree,
				gpa: gpa};
	connection.query('INSERT INTO transferSchools Set ?', post, function(err, result) {
		if(err) { 
			console.log(err);
			return false;
		};
	});
	return true;	
};
	