
// function でまとめる
// みている時間が分からないため、
// unsafe_download()
const { execSync } = require('child_process')
var validator = require('validator');
var fs = require('fs');
var path = require('path');
var readline = require('readline');

var rs = fs.createReadStream(path.join(__dirname,'data','list.txt'));

var rl = readline.createInterface(rs, {});

rl.on('line', function(line) {
    if(validator.isURL(line)){
        const stdout = execSync(['youtube-dl','-o', "'" + path.join(__dirname,'data','output','%(title)s.%(ext)s') + "'",line].join(' '))
        console.log(`stdout: ${stdout.toString()}`)

    }

});

