var fileSystem = require('fs');





//https://www.npmjs.com/package/riot-games-api-nodejs

//riot.<library>.<function>(options, {}, callback)

//command to fix node module: 
// $cp node_modules/riot-games-api-nodejs/lib/riot-games-api-nodejs.js node_modules/riot-games-api-nodejs/app.js

//his example: https://github.com/HardTacos/riot-games-api-nodejs/blob/master/examples/example.js
//summonerName: grymShardda
//summonerID: 20521097 (from: https://developer.riotgames.com/my-account/)

var riot = require('riot-games-api-nodejs');


riot.developerKey = ('RGAPI-03528269-dd7c-4eec-856a-4a0b031835e5');





var pathParam = {
	championID: '21',
	freeToPlay: "true",
	summonerID: '20521097',
	summonerName: "grymShardda",
	teamID: null,
	teamIDs: null,

}

riot.settings = {
	region: "na"
}

riot.summoner.byName("grymShardda",{},function (err, data) {
	if (err) {
		console.log("error loading lol data")
	} else {
		console.log("got lol data:",data);
	}
});





//homework: use the api to pull your last 10 games and write a file for each one
		




// logs all the champions that are free to play
// riot.champion.all(
// {
// 	'freeToPlay': 'true'
// },
// console.log
// );



//logs list of the champion's id, key, name, and title
// riot.staticData.champions.name( 
				
// 		console.log

// 	)


// riot.staticData.item(
// 	{	
// 		itemData: 'id, description'
// 	},
// 		console.log
// )

// riot.champion.all(
// {
// 	'freeToPlay': 'true'
// },
// console.log
// );


// riot.champion.all(
// {
// 	'freeToPlay': 'true'
// },
// console.log
// )



// if (freeChampions) {
// 	console.log(" these are the free to play champions ", freeChampions);
// } else {
// 	console.log(" no champs are free")
// };



// riot.staticData.item(
// {
// 	itemData: 'name'
// },
// 	console.log
// );

// riot.game.bySummoner("20521097", {}, function (error, data) {
// 	 //console.log("the games were", data.games);
// 	console.log("for game one, champion was: " + data.games[0].championId + " and spell2 was:" + data.games[0].spell2);
// });



riot.game.bySummoner("20521097", {}, function (error, data) {
	//console.log("the games were", data.games);
	// var listOfGames = data.games.length;
	// for (i = 0; i < listOfGames; i++) {
	// 	console.log("champion id is ", listOfGames[i].championId); 

	// }
	for (i = 0; i < data.games.length; i++) {
		var lolFilePath = "LoLgamedata/";
		var lolFileName = data.games[i].championId;
		var lolFileData = data.games[i].createDate;

		fileSystem.writeFile(lolFilePath + lolFileName, lolFileData, function(err){
			if (err) {
				console.log("LoL's error is ", err);
			}
		
		})
	console.log("for game, champion was: ", data.games[i].championId, " spell1 was ", data.games[i].spell1, " and, spell2 was: ", data.games[i].spell2);
	}
	console.log("data.games.length is ", data.games.length);
});



	// for (var i = 0; i < listOfPlanets.length; i = i + 1) {
	// 		var planet = listOfPlanets[i];
	// 		var filePath = "moons/"
	// 		var fileName = planet.name;
	// 		var fileData = null;
	// 		if (planet.moons.length == 0) {
	// 			fileData = "there are no moons";
	// 		} else {
	// 			fileData = planet.moons;
	// 		}
	// 		fileSystem.writeFile(filePath + fileName, fileData, function (error) {
	// 			if (error) {
	// 				console.log(" error is ", error);
	// 			} else {
	// 				console.log(fileName + " written succesfully");
	// 				console.log(fileData + " also written successfully");
	// 			}
	// 		});

	// 	};







