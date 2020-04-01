let updater = require("updater");
const config = {
	workDir: '.',
	dependencies: [
		{
			"name": "psk-release",
			"src": "http://github.com/privatesky/psk-release.git",
			"actions":[
				{
					"type": "smartClone",
					"target": "."
				},
				{
					"type":"remove",
					"target": "latest-change-set.txt"
				},
				{
					"type":"remove",
					"target": "psk-release/.git"
				},
				{
					"type":"executeAsync",
					"cmd": "echo 'install process will take a while. please wait...'"
				},
				{
					"type":"executeAsync",
					"cmd": "echo cd psk-release && npm install"
				}
			]
		}
	]
};

updater.setTag("[PSK Installer]");
updater.run(config, function(err){
	if(err){
		throw err;
	}
	console.log("Finished installing PrivateSky")
});