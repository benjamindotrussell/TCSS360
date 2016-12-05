// This is the driver for the web app. It runs the server as well as conatins information
// on the individual views the web app has.

// Variables for building the enviroment
var express = require('express')
, logger = require('morgan')
, app = express()
, homepage = require('jade').compileFile(__dirname + '/source/templates/homepage.jade')
, mainPage = require('jade').compileFile(__dirname + '/source/templates/main_page.jade')
, addPage = require('jade').compileFile(__dirname + '/source/templates/add_page.jade')
, editPage = require('jade').compileFile(__dirname + '/source/templates/edit_page.jade')
, deletePage = require('jade').compileFile(__dirname + '/source/templates/delete_page.jade')
, studentReport = require('jade').compileFile(__dirname + '/source/templates/student_report_page.jade')
, dataReport = require('jade').compileFile(__dirname + '/source/templates/data_report_page.jade')
, lookupStudent = require('jade').compileFile(__dirname + '/source/templates/lookup_student_page.jade')
, loadedStudent = require('jade').compileFile(__dirname + '/source/templates/loaded_student_page.jade')
, generatedStudent = require('jade').compileFile(__dirname + '/source/templates/generated_student_page.jade')
, studentsFulfill = require('jade').compileFile(__dirname + '/source/templates/students_fulfill_page.jade')
, reLogin = require('jade').compileFile(__dirname + '/source/templates/hompagealt.jade')
, reAddingStudent = require('jade').compileFile(__dirname + '/source/templates/hompagealt.jade')
, loadedLookupStudent = require('jade').compileFile(__dirname + '/source/templates/loaded_lookup_student_page.jade')


var mysql      = require('mysql');
var connection = mysql.createConnection({
	host     : 'cssgate.insttech.washington.edu',
	user     : '_360team11',
	password : 'HifOot',
	database : '_360team11'
});

connection.connect(function(err) {

});



app.use(logger('dev'))
app.use(express.static(__dirname + '/static'))

// The login page
app.get('/', function (req, res, next) {
	try {
		console.log('log in page')
		var html = homepage({ title: 'Home' })
		res.send(html)
	} catch (e) {
		next(e)
	}
})


// Page after the login page
app.get('/newpage', function (req, res, next) {

	if (req.query.username != '' && req.query.password != '') {
		try {
			var html = mainPage({ title: 'Home' })
			res.send(html)
		} catch (e) {
			next(e)
		}
	} else {
		

		// window.alert('this is an alert')
		try {
			var html = reLogin({ title: 'Home' })
			res.send(html)
		} catch (e) {
			next(e)
		}
	}
})


// page for adding new students
app.get('/add_student', function (req, res, next) {
	try {
		var html = addPage({ title: 'Home' })
		res.send(html)
	} catch (e) {
		next(e)
	}
})

// page for editing student
app.get('/edit_student', function (req, res, next) {
	try {
		var html = editPage({ title: 'Home' })
		res.send(html)
	} catch (e) {
		next(e)
	}
	 
})


// page for deleting student
app.get('/delete_student', function (req, res, next) {
	
		try {
			var html = deletePage({ title: 'Home' })
			res.send(html)
		} catch (e) {
			next(e)
		}
	
})

// page for deleting student
app.get('/submit_delete', function (req, res, next) {
	if (req.query.st_id != ''){
		try {
			var html = mainPage({ title: 'Home' })
			res.send(html)
		} catch (e) {
			next(e)
		}
	}else {
		console.log('Please enter student id')
	}
})

// page for student report
app.get('/student_report', function (req, res, next) {
	try {
		var html = studentReport({ title: 'Home' })
		res.send(html)
	} catch (e) {
		next(e)
	}
})

// page for data student
app.get('/data_report', function (req, res, next) {
	try {
		var html = dataReport({ title: 'Home' })
		res.send(html)
	} catch (e) {
		next(e)
	}
})

// page for lookup student
app.get('/lookup_student_report', function (req, res, next) {
	// console.log('Page for look up student')
	// console.log('student id = ' + req.query.st_id)
	try {
		var html = lookupStudent({ title: 'Home' })
		res.send(html)
	} catch (e) {
		next(e)
	}
})

// page for lookup student
app.get('/loaded_lookup_student_report', function (req, res, next) {
	console.log('loaded lookup student.')
	console.log('student id = ' + req.query.st_id)
	if(req.query.st_id != '' && req.query.f_name != ''){
		try {
			var html = loadedLookupStudent({ title: 'Home' })
			res.send(html)
		} catch (e) {
			next(e)
		}
	} else {
		console.log('Please enter correct data\n')
	}
})

// page for submit add student
app.get('/submit_add', function (req, res) {
  // Prepare output in JSON format

  // var post  = {id: req.query.st_id, fName: req.query.f_name, lName: req.query.l_name}
  // var query = connection.query('INSERT INTO students SET ?', post, function(err, result) {

  // })
  // console.log('insert\n')
  // console.log(query.sql + '\n')
  	if (req.query.st_id != '' && req.query.f_name != '' && req.query.l_name != '') {
  		//add new student with correct data
  		console.log('student as been added\n')
  	try {
  			var html = mainPage({ title: 'Home' })
	  		res.send(html)
  		} catch (e) {
	  		next(e)
  		}
	} else {

		console.log('Please enter correct data\n')
	}
})

// page for loaded student
app.get('/loaded_student_report', function (req, res, next) {
	if (req.query.st_id != ''){
		try {
			var html = loadedStudent({ title: 'Home' })
			res.send(html)
		} catch (e) {
			next(e)
		}
	}else {
		console.log('Please enter student id')
	}
})

// page for generated student
app.get('/generated_student_report', function (req, res, next) {
	try {
		var html = generatedStudent({ title: 'Home' })
		res.send(html)
	} catch (e) {
		next(e)
	}
})

// page for fulfill student
app.get('/students_fulfill_report', function (req, res, next) {
	try {
		var html = studentsFulfill({ title: 'Home' })

		res.send(html)
	} catch (e) {
		next(e)
	}
})

app.listen(process.env.PORT || 3000, function () {
	console.log('Listening on http://localhost:' + (process.env.PORT || 3000))
})


