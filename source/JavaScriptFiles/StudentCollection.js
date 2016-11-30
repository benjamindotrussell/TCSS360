/**
	A collection of  Students 
	
	Author: Ben Russell
	Date: 	11/27/2016
**/
var students = [];
function StudentCollection() {
	this.addStudent = addStudent;
	this.retrieveStudent = retrieveStudent;
	this.deleteStudent = deleteStudent;
	this.studentReport = studentReport;
	this.findID = findID;
}

retrieveStudent = function(id){
	for (i = 0; i < students.length; i++) {
		if (students[i].studentID = id) {
			return student[i];
		}
	}
	return null;
}

retrieveStudent = function(lName){
	for (i = 0; i < students.length; i++) {
		if (students[i].lName = lName) {
			return student[i];
		}
	}
	return null;
}

addStudent = function(Student) {
	var numberOfStudents = students.length;
	return (numberOfStudents + 1 == students.push(Student));
}

deleteStudent = function(Student) {
	var numberOfStudents = students.length;
	for (i = 0; i < students.length; i++) {
		if (students[i].studentID = Student.studentID) {
			students.splice(i, 1);
		}
	}
	var newNumberOfStudents = students.length;
	return (numberOfStudents == newNumberOfStudents + 1);
}

studentReport = function() {
	//return data about a specified student?
	return true;
}

dataReport = function() {
	//return a list of students fitting a specified criteria
	return true;
}

findID = function() {
	return true;
}
