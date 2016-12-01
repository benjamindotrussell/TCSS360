/**
	A collection of  Students 
	
	Author: Ben Russell
	Date: 	11/27/2016
**/
var mysql		= require('mysql');
var connection 	= mysql.createConnection({
  host     : 'cssgate.insttech.washington.edu',
  user     : '_360team11',
  password : 'HifOot',
  database : '_360team11',
});
connection.connect(function(err) {
  
	//forTest
  console.log("Connected");
  
});
//for testing
//var post = {lName: 'Russell', fName: 'Ben', studentID: '1'};
//var query = connection.query('INSERT INTO students SET ?', post, function(err, resut) {
	
//});
//console.log(query.sql);
var students = [];
function StudentCollection() {
	this.addStudent = addStudent;
	this.retrieveStudent = retrieveStudent;
	this.deleteStudent = deleteStudent;
	this.studentReport = studentReport;
	this.findID = findID;
}
retrieveStudent = function(id){
	var query = connection.query('SELECT * FROM students WHERE studentID = ' + id, 
		function(err, data) {
			try{ 
				if (err) {
					console.log(err);
				} else {
					//console.log(data[1, 0]);
					return data;
				}
			} catch (err){
				console.log("query failed");
			}
	});
	//forTest
	console.log(query.sql);
	
	return null;
	//for (i = 0; i < students.length; i++) {
		//if (students[i].studentID == id) {
		//	return student[i];
//
	//}
	//return null;
}

	//forTest
retrieveStudent('21');

retrieveStudent = function(lName){
	var query = connection.query('SELECT * FROM students WHERE lName = "' + lName + '"', 
		function(err, data) {
			try{ 
				if (err) {
					console.log(err);
				} else {
					console.log(data);
				}
			} catch (err){
				console.log("query failed");
			}
	});
	
	//forTest
	console.log(query.sql);
	/**
	for (i = 0; i < students.length; i++) {
		if (students[i].lName == lName) {
			return student[i];
		}
	}
	**/
	return null;
}

	//forTest
//retrieveStudent('Doe');
addStudent = function(Student) {
	var numbe
	rOfStudents = students.length;
	var post = {lName: Student.lName,
				fName: Student.fName,
				studentID: Student.studentID,
				graduationTerm: Student.graduationTerm, 
				graduationYear: Student.graduationYear,
				externalEmail: Student.externalEmail, 
				uwEmail: Student.uwEmail, 
				gpa: Student.gpa
	};
	//var query = connection.query('INSERT INTO students SET ?', post, function(err, resut) {
	
	//});
	return (numberOfStudents + 1 == students.push(Student));	
}

deleteStudent = function(Student) {
	var numberOfStudents = students.length;
	for (i = 0; i < students.length; i++) {
		if (students[i].studentID == Student.studentID) {
			students.splice(i, 1);
		}
	}
	var newNumberOfStudents = students.length;
	return (numberOfStudents == newNumberOfStudents + 1);
}

//return a list of all students in the database
listStudents = function() {
	
	return true;
}
//generate a report on the percentage of students who have a job.
jobReport = function() {
	return double;
}
//return percentage of students within a gpa range 2.5 - 2.9, 3.0 - 3.4 ......
gpaReport = function() {	
	return double;
}

findID = function() {
	return true;
}
connection.end();