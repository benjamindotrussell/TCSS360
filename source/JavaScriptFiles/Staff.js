/**
	A class to represent Staff
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
	
	
connection.end();