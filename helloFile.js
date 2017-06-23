var fileSystem = require('fs');

fileSystem.readFile("states.txt", "utf8", function(err, data) {
	if (err) {
		console.log(" there was an error reading the data", err);
	} else {
//		console.log(data);
		processFile(data);
	}
});


function processFile(fileData) {
	var statesArray = fileData.split("\n");
	console.log(' the fifth state is', statesArray[49]);
}

//print 5th country


fileSystem.readFile("countries.txt", "utf8", function(err, data) {
	if (err) {
		console.log(" country error is ", err);
	} else {
		processCountryFile(data);
	}
});

function processCountryFile(countryData) {
	var countryArray = countryData.split("\n\n");
	console.log(" the 2nd and 5th countries are ", countryArray[0], " and ", countryArray[4]);
};

fileSystem.writeFile("output.txt", "hey jerk", function(err) {
	if (err) {
	console.log(" this is an error bc of ", err);
		} else {
			console.log(" successful writing of output.txt");
		};

});