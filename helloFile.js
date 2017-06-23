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
		console.log("reading of file countries.txt was successful");
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




// homework assignment: make 1 file for each country; either named of the country or country name in it

//readFile then processCountryFile(add a counter for the array) then writeFile


fileSystem.readFile("countries.txt", "utf8", function(err, data){
	function processCountryFile(countryData) {
				var countryArray = countryData.split("\n\n");
				console.log(" the first cont in the list ", countryArray[0]);
			};
		if (err) {
			console.log( "reading file countries.txt created the error of " , err);
		} else if (true) {
			processCountryFile(data);
			console.log("keep going austin");
// maybe dont use the function and just do the split one line up?

			}
			else {
			
			};
})








