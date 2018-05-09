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
