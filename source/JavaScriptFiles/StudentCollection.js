/**
	A collection of  Students 
	
	Author: Ben Russell
	Date: 	11/27/2016
**/
var Student		= require('./Student');
var mysql		= require('mysql');
var connection 	= mysql.createConnection({
  host     : 'cssgate.insttech.washington.edu',
  user     : '_360team11',
  password : 'HifOot',
  database : '_360team11',
});
connection.connect(function(err) {  
  if (err) { console.log(err);};
});
//for testing
//var s = Student("Russell", "Jerry", "14", "Fall", "2001", "bigYellow@Yahoo.com", "notastudent@uw.edu", "2.5");
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
	connection.query('SELECT * FROM students WHERE studentID = ' + id, 
		function(err, data) {
			try{ 
				if (err) {
					console.log(err);
					return null;
				} else {
					//console.log(data[1, 0]);
					return data;
				}
			} catch (err){
				console.log("query failed");
			}
	});
}

	//forTest
//retrieveStudent('21');
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

	//forTest
//retrieveStudent('Doe');

/**
* Add a studetn to the DB.
* Param:  Student A student to add 
* return: boolean whether the query succeded.
**/
addStudent = function(Student) {
	var post = {lName: Student.lName,
				fName: Student.fName,
				studentID: Student.studentID,
				graduationTerm: Student.graduationTerm, 
				graduationYear: Student.graduationYear,
				externalEmail: Student.externalEmail, 
				uwEmail: Student.uwEmail, 
				gpa: Student.gpa
	};
	connection.query('INSERT INTO students SET ?', post, function(err, result) {
		if(err) { 
			console.log(err);
			return false;
		};
	});
	return true;	
}
//Test line
//addStudent(s);

/**
* remove a student from the DB.
* Param: student A student to remove.
* return: booean whether the query succeded.
**/
deleteStudent = function(student) {
	connection.query('DELETE FROM students WHERE studentID = ?', student.studentID,
			function(err, result) {
		if(err) { 
			//console.log(err);
			return false;
		};
	});
	return true;
}
//Test line
//deleteStudent(s);

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