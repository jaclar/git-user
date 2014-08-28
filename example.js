var gitUser = require("./index");

gitUser.nameAndEmail(function (err, result) {
    if (err) {
        console.err(err);
        return;
    }

    console.log(result); // your git username
});
