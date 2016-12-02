/**
	A collection of  Students 
	
	Author: Ben Russell
	Date: 	11/27/2016
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
* StudentColletion class: A class that intefaces with the DB
* Param:  none
* return: none
**/
function StudentCollection() {
	this.addStudent = addStudent;
	this.retrieveStudent = retrieveStudent;
	this.deleteStudent = deleteStudent;
	this.studentReport = studentReport;
	this.findID = findID;
}
/**
* Retrieve student information from the DB by studentID.
* Param:  id the studentID of a student
* return: data A students data.
**/
retrieveStudent = function(id){
	connection.query('SELECT * FROM students WHERE studentID = "' + id + '"', 
		function(err, data) {
			try{ 
				if (err) {
					console.log(err);
					return null;
				} else {
					console.log(data);
					return data;
				}
			} catch (err){
				console.log("query failed");
			}
	});
}
//retrieveStudent('Russell'); //testLine
/**
* Retrieve student information from the DB by last name.
* Param:  lName the last name of a student
* return: data A students data.
**/
retrieveStudent = function(lName){
	connection.query('SELECT * FROM students WHERE lName = "' + lName + '"', 
		function(err, data) {
			try{ 
				if (err) {
					console.log(err);
					return null;
				} else {
					return data;
				}
			} catch (err){
				console.log("query failed");
			}
	});	
	return null;
}

/**
* Add a studetn to the DB.
* Param:  Student A student to add 
* return: boolean whether the query succeded.
**/
addStudent = function(fName, lName, studentID, graduationTerm, gradYear, 							externalEmail, uwEmail, gpa) {
	var post = {lName: lName,
				fName: fName,
				studentID: studentID,
				graduationTerm: graduationTerm, 
				graduationYear: graduationYear,
				externalEmail: externalEmail, 
				uwEmail: uwEmail, 
				gpa: gpa
	};
	connection.query('INSERT INTO students SET ?', post, function(err, result) {
		if(err) { 
			console.log(err);
			return false;
		};
	});
	return true;	
}

/**
* remove a student from the DB.
* Param: student A student to remove.
* return: booean whether the query succeded.
**/
deleteStudent = function(student) {
	connection.query('DELETE FROM students WHERE studentID = ?', student.studentID,
			function(err, result) {
		if(err) { 
			console.log(err);
			return false;
		};
	});
	return true;
}

/**
* return a list of all students in the database.
* Param: none 
* return: array of students.
**/
listStudents = function() {
	connection.query('SELECT * FROM students', 
		function(err, data) {
			try{ 
				if (err) {
					console.log(err);
					return null;
				} else {
					return data;
				}
			} catch (err){
				console.log("query failed");
			}
	});
	return null;
}

updateStudent = function(fName, lName, studentID, degree, degreeLevel, graduationTerm, 					gradYear, externalEmail, uwEmail, gpa) {
	var post = {lName: lName,
				fName: fName,
				graduationTerm: graduationTerm, 
				graduationYear: graduationYear,
				externalEmail: externalEmail, 
				uwEmail: uwEmail, 
				gpa: gpa
	};
	
	connection.query('UPDATE students SET ? WHERE studentID = studentID'
		, post, function(err, result) {
		if(err) { 
			console.log(err);
			return false;
		};
	});
	return true;	
}

/**
* generate a report on the percentage of students who have a job.
* Param: none
* return: double.
**/
jobReport = function() {
	return double;
}
/**
* return percentage of students within a gpa range 2.5 - 2.9, 3.0 - 3.4 ......
* Param: lowerBound, upperBound,
* return: double.
**/
gpaReport = function(lowerBound, upperBound) {	
	return double;
}
//terminate the DB connection
connection.end();