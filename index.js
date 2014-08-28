var exec = require('child_process').exec;

function gitConfig (field, callback) {
    var command = 'git config --get user.' + field;
    exec(command, function (err, stdout, stderr) {
        if (err) {
            callback(err);
            return;
        }
        callback(null, stdout.toString().replace(/(\r\n|\n|\r)/gm,""));
    });
}

exports.name = function (callback) {
    gitConfig("name", callback);
};

exports.email = function (callback) {
    gitConfig("email", callback);
};

exports.nameAndEmail = function (callback) {
    gitConfig("name", function (err, name) {
        if (err) {
            callback(err);
            return;
        }

        gitConfig("email", function (err, email) {
            if (err) {
                callback(err);
                return;
            }

            callback(null, name + " <" + email + ">");
        });
    });
};
