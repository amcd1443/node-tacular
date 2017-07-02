var fileSystem = require('fs');

var request = require('request');



request('https://raw.githubusercontent.com/dariusk/corpora/master/data/science/planets.json', function(error, response, body){


	if (error) {
		console.log('this Error occurred: ', error);
	} else {
		console.log("HTTP page was read");
	};
	if (body){
		console.log("body of HTTP page is ", body);
		var bodyAsJSON = JSON.parse(body);
		var listOfPlanets = bodyAsJSON.planets;
		console.log('we have ', listOfPlanets.length);
		for (var i = 0; i < listOfPlanets.length; i = i + 1) {
			var planet = listOfPlanets[i];
			var filePath = "moons/"
			var fileName = planet.name;
			var fileData = planet.moons;
			fileSystem.writeFile(filePath + fileName, fileData, function (error) {
				if (error) {
					console.log(" error is ", error);
				} else {
					console.log(fileName + " written succesfully");
					console.log(fileData + " also written successfully");
				}
			});

		};
		

	} else {
		console.log(" body NOT found");
	} 

	

});