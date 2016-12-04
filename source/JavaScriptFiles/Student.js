/**
	Represents a Student in the system.
	
	Author: Ben Russell
	Date: 	11/27/2016
**/
var degree = require('./Degree.js');
var TransferSchool 	= require("./TransferSchool.js");
var studentCollection = require('./StudentCollection.js');
var degreeList = [];
var transferSchoolList = [];
var jobList = [];
/**	Student with fields.**/
module.exports = {

	/** Add a student to the system with all information. **/
	addStudent: function(fName, lName, studentID, degree, degreeLevel, graduationTerm, 					gradYear, externalEmail, uwEmail, gpa) {
		//var student = new Student(fName, lName, studentID, graduationTerm, gradYear, 						externalEmail, uwEmail, gpa);
		addDegree(degree, degreeLevel, student);
		return StudentCollection.addStudent(fName, lName, studentID, graduationTerm, gradYear, 						externalEmail, uwEmail, gpa);
	},

	/** Add a student to the system with just name and id. **/
	addNewStudent: function(fName, lName, studentID) {
		//var student = new Student(fName, lName, studentID);
		return studentCollection.addStudent(fName, lName, studentID);
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
	/** Update a Students basic information **/
	updateStudent: function(fName, lName, studentID, degree, degreeLevel, graduationTerm, 					gradYear, externalEmail, uwEmail, gpa) {	
		return StudentCollection.updateStudent(fName, lName, studentID, degree, degreeLevel, 				graduationTerm,	gradYear, externalEmail, uwEmail, gpa);
	},

	/**  Update a Students employment information **/
	updateStudentJob: function(employerName, employeeSalary, startDate, jobTitle) {
		
		return JobCollection.addJob(employerName, employeeSalary, startDate, jobTitle);
	}

//module.exports = Student;
}