
const express = require('express');
const app = express();

// const config = require('config');
const morgan = require('morgan');
const helmet = require('helmet');

const users = require('./src/routes/users');

const debugDB = require('debug')('app:db');

// enable reading the body via middleware
app.use(express.json());  // populates req.body
app.use(express.urlencoded({extended: true}));
app.use(helmet());

app.use('/api/users', users);

// Configuration
// TODO: Hook it up with AWS secrets parameter store if feasible
// console.log(`App run key:, ${config.get('config.key')}`);

if (app.get('env') === 'development') {
  app.use(morgan('tiny'));
}

// TODO: Monitor Database activities here..
debugDB('DebugDB: Morgan enabled...');

const port = process.env.PORT || 2000;
app.listen(port, () => console.log(`Listening on port ${port}`));