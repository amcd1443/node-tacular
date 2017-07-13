var fileSytem = require('fs');

//https://www.npmjs.com/package/riot-games-api-nodejs

//riot.<library>.<function>(options, {}, callback)

//command to fix node module: 
// $cp node_modules/riot-games-api-nodejs/lib/riot-games-api-nodejs.js node_modules/riot-games-api-nodejs/app.js

//his example: https://github.com/HardTacos/riot-games-api-nodejs/blob/master/examples/example.js
//summonerName: grymShardda
//summonerID: 20521097 (from: https://developer.riotgames.com/my-account/)

var riot = require('riot-games-api-nodejs');
riot.developerKey = ('RGAPI-70e4323b-581d-4294-a678-2e619fa33228');

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

freeChampions = [

riot.champion.all(
{
	'freeToPlay': 'true'
},
console.log
)

];

if (freeChampions) {
	console.log(" these are the free to play champions ", freeChampions);
} else {
	console.log(" no champs are free")
};


riot.staticData.item(
{
	itemData: 'name'
},
	console.log
);





