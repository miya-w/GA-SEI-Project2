
[project-2-brief](https://git.generalassemb.ly/seir66anz/project-2-brief)

npx express-generator -e project2
cd project2
# rename app.js to server.js
npm install
git init
touch .env
touch .gitignore
# add .env and node_modules to .gitignore
# visit github.com/new and create a new repo
git add .
git commit -m 'First commit'
# copy git remote && git branch && git push commands from github and paste into the terminal


---
[Jikan API](https://jikan.moe/)


express-generator

```
//-e use -e as the default view engine
npx express-generator -e project2
```

Add models, controllers


install MongoDB

install Mongoose
```
npm i mongoose
mkdir config
touch config/database.js
```

```
// database.js
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);
```
```
// server.js
const logger = require('morgan');

require('dotenv').config();
```

```javascript
// database.js
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);
	
// shortcut to mongoose.connection object
const db = mongoose.connection;
	
db.on('connected', function() {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});
```