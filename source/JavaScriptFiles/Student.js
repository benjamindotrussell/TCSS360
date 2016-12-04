/**
	Represents a Student in the system.
	
	Author: Ben Russell
	Date: 	11/27/2016
**/
//imports
var degree 				= require('./Degree.js');
var TransferSchool 		= require("./TransferSchool.js");
//var studentCollection 	= require('./StudentCollection.js');
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

module.exports = {

	/**
	* Add a student to the DB.
	* Params:  fName: student's first name, lName; student's last name, studentID: student's id
    * Params:  degree: student's degree, degreeLevel: student's degree level, 
	* Params:  graduationTerm: student's grad term, gradYear: student's grad year,
    * Params:  externalEmail: student's personal email, uwEmail: student's UW email,
	* Params:  gpa: student's gpa
	* return: boolean whether the query succeded.
	**/
	addStudent: function(fName, lName, studentID, degree, degreeLevel, graduationTerm, 					gradYear, externalEmail, uwEmail, gpa) {
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
	},

	/**
	* Add a new student to the DB.
	* Params:  fName: student's first name, lName; student's last name, studentID: student's id	* 	* return: boolean whether the query succeded.
	**/
	addNewStudent: function(fName, lName, studentID) {
		var post = {lName: lName,
					fName: fName,
					studentID: studentID
		};
		connection.query('INSERT INTO students SET ?', post, function(err, result) {
			if(err) { 
				console.log(err);
				return false;
			};
		});
		return true;	
	},
	
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
	
	/**
	* Update a student's information in the DB.
	* Params:  fName: student's first name, lName; student's last name, studentID: student's id
    * Params:  degree: student's degree, degreeLevel: student's degree level, 
	* Params:  graduationTerm: student's grad term, gradYear: student's grad year,
    * Params:  externalEmail: student's personal email, uwEmail: student's UW email,
	* Params:  gpa: student's gpa
	* return: boolean whether the query succeded.
	**/
	updateStudent: function(fName, lName, studentID, degree, degreeLevel, graduationTerm, 					gradYear, externalEmail, uwEmail, gpa) {	
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
	},

	/**  Update a Students employment information **/
	/**
	* Update a Students employment information.
	* Param: employerName: Name of the company the student works at.
	* Param: employeeSalary: amount of mony the student earns per year.
	* Param: startDate: date the student started the job.
	* Param: startDate: date the student ended the job.
	* Param: jobTitle: job title.
	* return: data A students data.
	**/
	updateStudentJob: function(employerName, employeeSalary, startDate, jobTitle) {
		
		return JobCollection.addJob(employerName, employeeSalary, startDate, jobTitle);
	},
	
	/**
	* Retrieve student information from the DB by studentID.
	* Param:  id the studentID of a student
	* return: data A students data.
	**/
	retrieveStudent: function(id){
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
	},

	/**
	* Retrieve student information from the DB by last name.
	* Param:  lName the last name of a student
	* return: data A students data.
	**/
	retrieveStudent: function(lName){
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
	},

	/**
	* remove a student from the DB.
	* Param: student A student to remove.
	* return: booean whether the query succeded.
	**/
	deleteStudent: function(student) {
		connection.query('DELETE FROM students WHERE studentID = ?', student.studentID,
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
	listStudents: function() {
		connection.query('SELECT * FROM students', 
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
		return null;
	},

	/**
	* generate a report on the percentage of students who have a job.
	* Param: none
	* return: double.
	**/
	jobReport: function() {
		var num;
		connection.query('SELECT COUNT(DISTINCT students.studentID) AS num FROM students INNER JOIN job ON students.studentID=job.studentID', function(err, data) {
			try{ 
				if (err) {
					console.log(err);
					num = null;
				} else {
					console.log(data);					
					num = data;
				}
			} catch (err){
				console.log("query failed");
			}
		});
		return num;
	},
	/**
	* return percentage of students within a gpa range 2.5 - 2.9, 3.0 - 3.4 ......
	* Param: lowerBound, upperBound,
	* return: double.
	**/
	gpaReport: function(lowerBound, upperBound) {	
		return double;
	}
}
connection.end();