/**
	Represents a Student in the system.
	
	Author: Ben Russell
	Date: 	11/27/2016
**/
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
}

/** Add a student to the system with all information. **/
addStudent = function(fName, lName, studentID, degree, degreeLevel, graduationTerm, 			gradYear, externalEmail, uwEmail, gpa) {
	var student = new Student(fName, lName, studentID, graduationTerm, gradYear, 				externalEmail, uwEmail, gpa);
	//Degree.addDegree(degree, degreeLevel);	
}

/** Add a student to the system with just name and id. **/
addNewStudent = function(fName, lName, studentID) {
	var student = new Student(fName, lName, studentID);
	
	return true;
}

/** Update a Students basic information **/
updateStudent = function() {
	
	return true;
}

/**  Update a Students employment information **/
updateStudentJob = function(employerName, employeeSalary, startDate, jobTitle) {
	return JobCollection.addJob(employerName, employeeSalary, startDate, 				jobTitle);
}