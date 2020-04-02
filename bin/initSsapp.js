let updater = require("updater");
const config = {
    workDir: '.',
    dependencies: [
        {
            "name": "app",
            "src": "https://github.com/PrivateSky/ssapp-template.git",
            "actions":[
                {
                    "type": "smartClone",
                    "target": "."
                },
                {
                    "type":"remove",
                    "target": "loader/.git"
                }
            ]
        }
    ]
};

updater.setTag("[Ssapp Init]");
updater.run(config, function(err){
    if(err){
        throw err;
    }
    console.log("Finished installing PrivateSky")
});
