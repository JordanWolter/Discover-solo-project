const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const courseRouter = require('./routes/course.router');
const coursePageRouter = require('./routes/coursePage.router');
const weatherRouter = require('./routes/weather.router');
const courseImagesRouter = require('./routes/courseImages.router');
const holesRouter = require('./routes/holes.router');
const gameIdRouter = require('./routes/gameId.router');
const scoreRouter = require('./routes/score.router');
const historyRouter = require('./routes/history.router');
const scoreHistoryRouter = require('./routes/scoreHistory.router');
const discRouter = require('./routes/disc.router');
const bagRouter = require('./routes/bag.router');
const editBagRouter = require('./routes/editBag.router')
// const userDiscRouter = require('./routes/userDisc.router')

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/course', courseRouter);
app.use('/api/coursePage', coursePageRouter);
app.use('/api/weather', weatherRouter);
app.use('/api/courseImages', courseImagesRouter);
app.use('/api/holes', holesRouter);
app.use('/api/game', gameIdRouter);
app.use('/api/score', scoreRouter);
app.use('/api/history', historyRouter);
app.use('/api/scoreHistory', scoreHistoryRouter);
app.use('/api/disc', discRouter);
app.use('/api/bag', bagRouter);
app.use('/api/editBag', editBagRouter);
// app.use('/api/userDisc', userDiscRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
