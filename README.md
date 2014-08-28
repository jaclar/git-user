# Git user

Small module for getting details about the current git user.

```
npm install git-user
```

## Usage

```javascript
var gitUser = require("git-user");

gitUser.name(function (err, name) {
    if (err) {
        console.err(err);
        return;
    }

    console.log(name); // your git username
});
```

## Methods

```name``` get user name

```email``` get user email

```nameAndEmail``` get combination of user and email (John Doe <john@doe.com>)
