require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
// const favicon = require('serve-favicon');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');
const cors = require('cors');

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const flash = require('connect-flash');

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`,
    );
  })
  .catch(err => {
    console.error('Error connecting to mongo', err);
  });

const app_name = require('./package.json').name;
const debug = require('debug')(
  `${app_name}:${path.basename(__filename).split('.')[0]}`,
);

const app = express();

app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:3000'],
  }),
);
// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup
app.use(express.static(path.join(__dirname, 'public')));
// app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';

// Enable authentication using session + passport
app.use(
  session({
    secret: 'doghero',
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  }),
);
app.use(flash());
require('./passport')(app);

const index = require('./routes/index');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const dogRoutes = require('./routes/dogs');
const walkRoutes = require('./routes/walks');

app.use('/', index);

app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', dogRoutes);
app.use('/api', walkRoutes);

app.use((req, res, next) => {
  // If no routes match, send them the React HTML.
  res.sendFile(`${__dirname}/public/index.html`);
});

module.exports = app;
