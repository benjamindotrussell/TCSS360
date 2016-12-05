/**
	Represents a Student in the system.
	
	Author: Ben Russell
	Date: 	11/27/2016
**/
//imports
var degree 				= require('./Degree.js');
var TransferSchool 		= require("./TransferSchool.js");
var mysql				= require('mysql');
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

<<<<<<< HEAD
var gpaData;

//export these functions.
module.exports = {
	
=======

//export these functions.
module.exports = {	
>>>>>>> 0ff9e00748c8eb608135fb59732d07f0eb11c73c
	/**
	* Add a student to the DB.
	* Params:  fName: student's first name, lName; student's last name, studentID: student's id
    * Params:  degree: student's degree, degreeLevel: student's degree level, 
	* Params:  graduationTerm: student's grad term, gradYear: student's grad year,
    * Params:  externalEmail: student's personal email, uwEmail: student's UW email,
	* Params:  gpa: student's gpa
	* return: boolean whether the query succeded.
	**/
<<<<<<< HEAD
	addStudent: function(fName, lName, studentID, degree, degreeLevel, graduationTerm, 					graduationYear, externalEmail, uwEmail, gpa) {
		
=======
	addStudent: function(fName, lName, studentID, degree, degreeLevel, graduationTerm, 					graduationYear, externalEmail, uwEmail, gpa) {		
>>>>>>> 0ff9e00748c8eb608135fb59732d07f0eb11c73c
		var post = {lName: lName,
					fName: fName,
					studentID: studentID,
					graduationTerm: graduationTerm, 
					graduationYear: graduationYear,
					externalEmail: externalEmail, 
					uwEmail: uwEmail, 
					gpa: gpa
		};
		console.log(gpa);
		connection.query('INSERT INTO students SET ?', post, function(err, result) {
			if(err) { 
				console.log(err);
				return false;
			};
		});
		//degree.addDegree(degree, degreeLevel, studentID);
		
	},

<<<<<<< HEAD
	/** 
	* Add a degree to the students information.
	* param1: degreeName: name of the degree, 
	* param2: degreeLvl: level of the degreee Bachelors, Masters....
	* param3: student The student to add the degree to.
	* return: boolean Success or failure.
	*/
	addDegree: function(degreeName, degreeLvl, student) {
		degreeList.push(new Degree(degreeName, degreeLvl));
		return Degree.addDegree(degreeName, degreeLvl, student.studentID);	
	},
	
=======
>>>>>>> 0ff9e00748c8eb608135fb59732d07f0eb11c73c
	/**
	* Update a student's information in the DB.
	* Params:  fName: student's first name, lName; student's last name, studentID: student's id
    * Params:  degree: student's degree, degreeLevel: student's degree level, 
	* Params:  graduationTerm: student's grad term, gradYear: student's grad year,
    * Params:  externalEmail: student's personal email, uwEmail: student's UW email,
	* Params:  gpa: student's gpa
	* return: boolean whether the query succeded.
	**/
	updateStudent: function(fName, lName, externalEmail, uwEmail) {	
		var post = {lName: lName,
					fName: fName,
					externalEmail: externalEmail, 
					uwEmail: uwEmail,
		};
		
		connection.query('UPDATE students SET ? WHERE studentID = studentID'
			, post, function(err, result) {
			if(err) { 
				console.log(err);
				return false;
			};
		});
		return true;	
	},

	
	/**
	* Retrieve student information from the DB by studentID.
	* Param:  id the studentID of a student
	* return: data A students data.
	**/
	retrieveStudent: function(id, callback){
		connection.query('SELECT * FROM students WHERE studentID = "' + id + '"', 
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
		
	},

	/**
	* remove a student from the DB.
	* Param: student A student to remove.
	* return: booean whether the query succeded.
	**/
	deleteStudent: function(studentID) {
		connection.query('DELETE FROM students WHERE studentID = ?', studentID,
				function(err, result) {
			if(err) { 
				console.log(err);
				return false;
			};
		});
		return true;
	},

	/**
	* return a list of all students in the database.
	* Param: none 
	* return: array of students.
	**/
	listStudents: function(callback) {
		connection.query('SELECT * FROM students', 
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
	},
	
	/** add a transfer school for the student.
	* Params: name: student's name, degree: student's degree, studentID: student's id,
	* Params: gpa: student's gpa.
	* return: boolean: whether the query succeded.
	**/
	addTransferSchool: function(studentID, name, degree, gpa) {		
		return TransferSchool.update(studentID, name, degree, gpa);
	},
	/**
	* generate a report on the percentage of students who have a job.
	* Param: none
	* return: double.
	**/
	jobReport: function(callback) {
		
		connection.query(' SELECT * FROM students LEFT OUTER JOIN job ON students.studentID=job.studentID'
			, function(err, data) {
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
	},
	/**
	* return percentage of students within a gpa range 2.5 - 2.9, 3.0 - 3.4 ......
	* Param: lowerBound, upperBound,
	* return: double.
	**/
	gpaReport: function(lowerBound, upperBound, callback) {		
		
		connection.query('SELECT * FROM students WHERE gpa BETWEEN ' + lowerBound + ' AND ' + upperBound , function(err, data) {			
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
	},
	
}