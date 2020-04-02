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
                    "type":"executeAsync",
                    "cmd": "echo updating dependencies. please wait..."
                },
                {
                    "type": "executeAsync",
                    "cmd": "cd ./psk-release && npm install"
                },
                {
                    "type":"executeAsync",
                    "cmd": "echo dependencies updated."
                },
                {
                    "type":"executeAsync",
                    "cmd": "echo building. please wait..."
                },
                {
                    "type": "executeAsync",
                    "cmd": "cd ./psk-release  && npm run build"
                },
                {
                    "type":"executeAsync",
                    "cmd": "echo build finished."
                }
            ]
        },
    ]
};

updater.setTag("[Update privatesky]");
updater.run(config, function(err){
    if(err){
        throw err;
    }
    console.log("Finished updating privatesky")
});
