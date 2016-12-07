

var assert = require('assert');
var student = require('./source/JavaScriptFiles/Student.js');

describe('listStudents and addStudent Tests', function() {
	it('asserts equal if after adding a student the size of the list retured is +1', function(done) {
		student.listStudents(function(err, result1) {
			var fName = 'Ben', lName = 'Russell', studentID = '1';
			student.addStudent(fName, lName, studentID);
			student.listStudents(function(err, result2) {
				assert.deepEquals(result1.length + 1 == result2.length);
				done();
			});
			done();
		});
	});
});
describe('listStudents and deleteStudent Tests', function() {
	it('asserts equal if after deleteing a student the size of the list retured is -1', function(done) {
		student.listStudents(function(err, result1) {
			var fName = 'Ben', lName = 'Russell', studentID = '1';
			student.deleteStudent(studentID);
			student.listStudents(function(err, result2) {
				assert.deepEquals(result1.length == result2.length);
				done();
			});
			done();
		});
	});
});

	