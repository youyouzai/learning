var compiler = require('./compiler.js');
compiler('example.txt').then(stats => {
    if(stats.toJson().modules[0]){
        const output = stats.toJson().modules[0].source;
        console.log(output)
    }
})