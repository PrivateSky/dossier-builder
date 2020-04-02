let updater = require("updater");
const config = {
	workDir: '.',
	dependencies: [
		{
			"name": "foundation_structure",
			"src": "",
			"actions":[
				{
					"type": "mkdir",
					"target": "cardinal_dist"
				},
				{
					"type": "mkdir",
					"target": "psk-release"
				},
				{
					"type": "mkdir",
					"target": "domain"
				},
				{
					"type": "mkdir",
					"target": "app"
				},
                {
                    "type": "mkdir",
                    "target": "loader"
                }
			]
		}
	]
};

updater.setTag("[StructureBuilder]");
updater.run(config, function(err){
	if(err){
		throw err;
	}
});
