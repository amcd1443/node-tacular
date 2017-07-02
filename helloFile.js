var fileSystem = require('fs');

fileSystem.readFile("states.txt", "utf8", function(err, data) {
	if (err) {
		console.log(" there was an error reading the data", err);
	} else {
		processFile(data);
	}
});
///////////////////////////

function processFile(fileData) {
	var statesArray = fileData.split("\n");
	console.log(' the fifth state is', statesArray[4]);
}

/////////////////////////////
fileSystem.readFile("countries.txt", "utf8", function(err, data) {
	if (err) {
		console.log(" country error is ", err);
	} else {
		processCountryFile(data);
		console.log("reading of file countries.txt was successful");
	}
});
//////////////////////////////
function processCountryFile(countryData) {
	var countryArray = countryData.split("\n\n");
	console.log(" the 2nd and 5th countries are ", countryArray[0], " and ", countryArray[4]);
	for (var i = 0; i < countryArray.length; i = i + 1) {
		fileSystem.writeFile("countries/ " + countryArray[i] + ".txt", countryArray[i], function(err) {
			if (err) {
				console.log(" this is an error bc of ", err);
			}; 
		});
	}
};
/////////////////////////////////
fileSystem.writeFile("output.txt", "hey jerk", function(err) {
	if (err) {
	console.log(" this is an error bc of ", err);
		} else {
			console.log(" successful writing of output.txt");
		};

});
// homework assignment: make 1 file for each country; either named after the country or country name in it













