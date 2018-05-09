### Install express
```
npm install express mongoose body-parser passport bcryptjs jsonwebtoken dotenv
```
### Create tsconfig.json
```json
{
  "compileOnSave": true,
  "compilerOptions": {
    "outDir": "./dist/server",
    "baseUrl": "",
    "module": "commonjs",
    "sourceMap": true,
    "declaration": false,
    "moduleResolution": "node",
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "target": "es5",
    
    "typeRoots": [
      "node_modules/@types"
    ],
    "lib":[
      "es2016",
      "dom"
    ]

  }
}
```
### Add dev dependency
```json
"devDependencies": {
    "@types/node": "~6.0.60",
    "ts-node": "~3.0.4",
    "tslint": "~5.3.2",
    "typescript": "~2.3.3",
    "concurrently":"^3.5.1"
  }
```

### Create server.js
```js
const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
const path = require('path');
/**
 * Load router module in the app
 */
const users = require('./routes/users');

const app = express();

/**
 * use router module in the app
 */
app.use('/api/users', users)

dotenv.load({path: '.env'});
app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), ()=>{
  console.log("Server listening on port" +app.get('port'));
});
```
### Create user router
```js
import * as express from 'express';
const router = express.Router();

router.get('/test' , (req, res)=>res.json({
  msg: '/test rout works'
})
);

module.exports = router;
```
### Add script to run
```json
"dev": "concurrently \"tsc -w\" \"nodemon ./dist/server/server.js\""
```
