/**
		Class that represents a Job in the system.
		Author: Nursultan Irgaliyev
		Date: 11/30/2016
		
**/

//imports 
var mysql = require('mysql');
	
var connection = mysql.createConnection({
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
* method to set endDate
* Param endDate - endDate to set in mm/dd/year
**/
	setEndDate = function(endDate) {
		var post = {endDate: endDate};
		connection.query('INSERT INTO job Set ?', post, function(err, result) {
			if(err) { 
				console.log(err);
				return false;
			};
		});
	return true;	
	};
	
}

connection.end();