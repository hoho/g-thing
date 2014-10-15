var fs = require('fs');
var path = require('path');


function checkGrunt() {
    var cwd = process.cwd(),
        files = ['Gruntfile.js', 'gruntfile.js', 'Gruntfile.coffee', 'gruntfile.coffee'];

    for (var i = 0; i < files.length; i++) {
        if (fs.existsSync(path.join(cwd, files[i]))) {
            return true;
        }
    }

    return false;
}


function checkGulp() {
    return fs.existsSync(path.join(process.cwd(), 'gulpfile.js'));
}


module.exports.checkGrunt = checkGrunt;
module.exports.checkGulp = checkGulp;