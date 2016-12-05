
// This is the driver for the web app. It runs the server as well as conatins information
// on the individual views the web app has.

// Compiles all of the Jade files used into HTML.
var express = require('express')
, logger = require('morgan')
, app = express()
, homepage = require('jade').compileFile(__dirname + '/source/templates/homepage.jade')
, mainPage = require('jade').compileFile(__dirname + '/source/templates/main_page.jade')
, addPage = require('jade').compileFile(__dirname + '/source/templates/add_page.jade')

, editPage = require('jade').compileFile(__dirname + '/source/templates/edit_page.jade')

, deletePage = require('jade').compileFile(__dirname + '/source/templates/delete_page.jade')
, lookupStudent = require('jade').compileFile(__dirname + '/source/templates/lookup_student_page.jade')

, studentReport = require('jade').compileFile(__dirname + '/source/templates/student_report_page.jade')
, dataReport = require('jade').compileFile(__dirname + '/source/templates/data_report_page.jade')

, generatedStudent = require('jade').compileFile(__dirname + '/source/templates/generated_student_page.jade')
, studentsFulfill = require('jade').compileFile(__dirname + '/source/templates/students_fulfill_page.jade')

, loadedStudent = require('jade').compileFile(__dirname + '/source/templates/loaded_student_page.jade')
, reLogin = require('jade').compileFile(__dirname + '/source/templates/hompagealt.jade')
, reAddingStudent = require('jade').compileFile(__dirname + '/source/templates/hompagealt.jade')
, loadedLookupStudent = require('jade').compileFile(__dirname + '/source/templates/loaded_lookup_student_page.jade')
, student = require('./source/JavaScriptFiles/Student.js')
, submitAddJob = require('jade').compileFile(__dirname + '/source/templates/add_job.jade')
, job = require('./source/JavaScriptFiles/JobCollection.js')

//A Data connection for searching the database

var mysql      = require('mysql');
var connection = mysql.createConnection({
	host     : 'cssgate.insttech.washington.edu',
	user     : '_360team11',
	password : 'HifOot',
	database : '_360team11'
});

connection.connect(function(err) {

});


app.set('view engine', 'jade');

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

//A page to list all the students in the datbase
app.get('/list_students', function(req, res){
  connection.query('SELECT * FROM students', function (err, results, fields) {
    if (err) {
      throw err;
    }
    
    var these = []
    these[0] = "Last Name 	First Name 	E-Mail"
    for( var i = 0; i < results.length; ++i) {
    	if(results[i].lName.length > 6) {
    		these[i + 1] = results[i].lName + " 	" + results[i].fName + "		" + results[i].uwEmail
    	} else {
    		these[i + 1] = results[i].lName + " 		" + results[i].fName+ "		" + results[i].uwEmail
    	}
    }

    console.log(these)
    res.render('list_students', {
      title: results,
      results: these

    });
  })
})


// Page after the login page
app.get('/newpage', function (req, res, next) {
	var username = req.query.username
	var password = req.query.password
	console.log(username + " " + password)
	//Checking to see if the user is in the database.
	// var post = {staff.userName = username AND staff.`password` = password}
	var query = connection.query("SELECT * FROM staff WHERE staff.userName = \"" + username 
		+ "\" AND staff.`password` = \"" + password + "\""
		, function(err, rows) {
		console.log(query.sql)
		if(rows[0] == undefined){
			try {
				var html = reLogin({ title: 'Home' })
				res.send(html)
			} catch (e) {
				next(e)
			}
		} else if(rows[0].userName == username && rows[0].password == password) {
  			try {
				var html = mainPage({ title: 'Home' })
				res.send(html)
			} catch (e) {
				next(e)
			} 
		}
	})

})


// page for adding new students
app.get('/back_homepage', function (req, res, next) {
	try {
		var html = mainPage({ title: 'Home' })
		res.send(html)
	} catch (e) {
		next(e)
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
if (req.query.st_id != ''){
		try {
			var html = deletePage({ title: 'Home' })
			res.send(html)
		} catch (e) {
			next(e)
		}
	}else {
		console.log('Please enter student id')
	}
})


// page for deleting student
app.get('/submit_delete', function (req, res, next) {
	

	if (req.query.st_id != ''){
		
		student.deleteStudent(req.query.st_id);
		try {
			var html = mainPage({ title: 'Home' })
			res.send(html)
		} catch (e) {
			next(e)
		}
	}else {
		
	}
})

// page for student report
app.get('/student_report', function (req, res, next) {
	try {
		var html = generatedStudent({ title: 'Home' })
		res.send(html)
	} catch (e) {
		next(e)
	}
})

// page for data student
app.get('/data_report', function (req, res, next) {

	try {
		var html = studentsFulfill({ title: 'Home' })
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

app.get('/submit_add_job', function(req, res, next) {
	try {
		var html = submitAddJob({title: 'Home'})
		res.send(html)
	} catch(e) {
		next(e)
	}
})

app.get('/submit_add_job_action', function(req, res, next) {
	if(req.query.employer != '', req.query.salary != '', req.query.start_date != '', req.query.end_date != '', req.query.fullTime != '', req.query.title != '', req.query.st_id != '')
	var fulltime
	if(req.query.fullTime == 'True' || req.query.fullTime == 'true' || req.query.fullTime == 'yes' || req.query.fullTime == 'Yes') {
		fulltime = 1
	} else {
		fulltime = 0
	}
	
	job.addJob(req.query.employer, req.query.salary, req.query.start_date, req.query.end_date, fulltime, req.query.title, req.query.st_id)
	try {
		var html = mainPage({title: 'Home'})
		res.send(html)
	} catch(e) {
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
  	if (req.query.st_id != '' && req.query.f_name != '' && req.query.l_name != '') {
  		console.log(req.query.st_id + req.query.f_name + req.query.l_name)
  		//add new student with correct data
		student.addStudent(req.query.f_name, req.query.l_name, req.query.st_id);  		
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
	// if (req.query.st_id != '' && req.query.f_name != '' && req.query.l_name != ''
	// 	req.query.ext_mail != '' && req.query.uw_mail != '') {
  	console.log(req.query.st_id + req.query.f_name + req.query.l_name)
	if (req.query.st_id != '' && req.query.f_name != '' && req.query.l_name != '' 
		&& req.query.ext_mail != '' && req.query.uw_mail != ''){
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

// // page for generated student
// app.get('/generated_student_report', function (req, res, next) {
// 	try {
// 		var html = generatedStudent({ title: 'Home' })
// 		res.send(html)
// 	} catch (e) {
// 		next(e)
// 	}
// })

// page for fulfill student
// app.get('/students_fulfill_report', function (req, res, next) {
// 	try {
// 		var html = studentsFulfill({ title: 'Home' })

// 		res.send(html)
// 	} catch (e) {
// 		next(e)
// 	}
// })


app.get('/data_report', function (req, res, next) {
  try {
    var html = template7({ title: 'Home' })
    res.send(html)
  } catch (e) {
    next(e)
  }
})

app.get('/lookup_student_report', function (req, res, next) {
  try {
    var html = template8({ title: 'Home' })
    res.send(html)
  } catch (e) {
    next(e)
  }
})


app.listen(process.env.PORT || 3000, function () {
	console.log('Listening on http://localhost:' + (process.env.PORT || 3000))
})


