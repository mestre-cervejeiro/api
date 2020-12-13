Esse é o backend do app Mestre Cervejeiro

#Instalar
```
$ npm install
```

#Run express server without nodemon watch
```
$ node app.js
```


#Run express server with auto watch
```
$ npm run nodemon
```

#Should know
####package.json
```
//package.json

  "scripts": {
    "start": "node app.js",
    "dev": "npm start", 
    "test": "echo \"Error: no test specified\" && exit 1",
    "nodemon": "./node_modules/nodemon/bin/nodemon.js --exec npm run dev"
  },
```

####nodemon.json

```
{
  "restartable": "rs",
  "ignore": [
    ".git",
    "node_modules/**/node_modules",
    "package.json"
  ],
  "verbose": true,
  "events": {
    "restart": "osascript -e 'display notification \"App restarted due to:\n'$FILENAME'\" with title \"nodemon\"'"
  },
  "watch": [
    "app.js"
  ],
  "env": {
    "NODE_ENV": "development"
  },
  "ext": "js json"
}

```
