var compiler = require('./test/compiler.js');
compiler('example.txt').then(stats => {
    const output = stats.toJson().modules[0].source;
    console.log(output)
})