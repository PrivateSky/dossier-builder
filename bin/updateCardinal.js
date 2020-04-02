let updater = require("updater");
const config = {
    workDir: '.',
    dependencies: [
        {
            "name": "cardinal",
            "src": "http://github.com/privatesky/cardinal.git",
            "actions":[
                {
                    "type": "smartClone",
                    "target": "./temp/update/"
                },
                {
                    "type": "executeAsync",
                    "cmd": "cd ./temp/update/cardinal && npm install"
                },
                {
                    "type": "executeAsync",
                    "cmd": "cd ./temp/update/cardinal && npm run build"
                },
                {
                    "type": "remove",
                    "target": `./app/cardinal`
                },
                {
                    "type": "copy",
                    "src": "./temp/update/cardinal/dist/cardinal",
                    "target": "./app/cardinal",
                    "options":{
                        "overwrite": true
                    }
                }
            ]
        }
    ]
};

updater.setTag("[Update cardinal]");
updater.run(config, function(err){
    if(err){
        throw err;
    }
    console.log("Finished updating cardinal")
});
