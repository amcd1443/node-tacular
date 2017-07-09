var fileSytem = require('fs');

//https://www.npmjs.com/package/riot-games-api-nodejs

//riot.<library>.<function>(options, {}, callback)

//command to fix node module: 
// $cp node_modules/riot-games-api-nodejs/lib/riot-games-api-nodejs.js node_modules/riot-games-api-nodejs/app.js

//his example: https://github.com/HardTacos/riot-games-api-nodejs/blob/master/examples/example.js
//summonerName: grymShardda
//summonerID: 20521097 (from: https://developer.riotgames.com/my-account/)

var riot = require('riot-games-api-nodejs');
riot.developerKey = ('RGAPI-e6494e54-7201-4a69-a396-1a7486220041');

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
		//var listOfGames = data.games;


riot.champion.id(
    '21',
    {},
    function(err, data) {
        if (err instanceof Error) {
            console.log("Error 1: " + err);
            return 0;
        }
        else {
            var rankedEnabled = data.rankedPlayEnabled;
            if (rankedEnabled == true){
                console.log('Champion 21 (Miss Fortune) can be played in ranked');
            } else {
                console.log('Champion 21 (Miss Fortune) can not be played in ranked');
            }
        }
    }
)