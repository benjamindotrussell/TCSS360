/**
	Represents a Student in the system.
	
	Author: Ben Russell
	Date: 	11/27/2016
**/
var Degree 			= require("./Degree");
var TransferSchool 	= require("./TransferSchool");
var students = [];
/**	Student with fields.**/
function Student(fName, lName, studentID, graduationTerm, gradYear, externalEmail				, uwEmail, gpa) {
	this.fName = fName;
	this.lName = lName;
	this.studentID = studentID;
	this.graduationTerm = graduationTerm;
	this.gradYear = gradYear;
	this.externalEmail = externalEmail;
	this.uwEmail = uwEmail;
	this.gpa = gpa;
	
	this.addStudent = addStudent;
	this.addNewStudent = addNewStudent;
	this.updateStudent = updateStudent;
	this.updateStudentJob = updateStudentJob;
	return this;
}

/** Add a student to the system with all information. **/
addStudent = function(fName, lName, studentID, degree, degreeLevel, graduationTerm, 					gradYear, externalEmail, uwEmail, gpa) {
	var student = new Student(fName, lName, studentID, graduationTerm, gradYear, 						externalEmail, uwEmail, gpa);
	addDegree(degree, degreeLevel, student);	
}

/** Add a student to the system with just name and id. **/
addNewStudent = function(fName, lName, studentID) {
	var student = new Student(fName, lName, studentID);
	
	return true;
}
/** 
* Add a degree to the students information.
* param1: degreeName: name of the degree, 
* param2: degreeLvl: level of the degreee Bachelors, Masters....
* param3: student The student to add the degree to.
* return: boolean Success or failure.
*/
addDegree = function(degreeName, degreeLvl, student) {
	return Degree.addDegree(degreeName, degreeLvl, student.studentID);	
}
/** Update a Students basic information **/
updateStudent = function(Student) {
	
	return true;
}

/**  Update a Students employment information **/
updateStudentJob = function(employerName, employeeSalary, startDate, jobTitle) {
	return JobCollection.addJob(employerName, employeeSalary, startDate, 				jobTitle);
}
module.exports = Student;