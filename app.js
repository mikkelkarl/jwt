// const express = require('express');
// const mongoose = require('mongoose');
// const { requireAuth, checkUser } = require('./middleware/authMiddleware');


// const app = express();

// // middleware
// app.use(express.static('public'));

// // view engine
// app.set('view engine', 'ejs');

// // database connection
// const dbURI = 'mongodb+srv://mikkelkarlsson:zumxuh-qyxMad-3wifho@cluster0.ytpxlty.mongodb.net/?retryWrites=true&w=majority';
// mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
//   .then((result) => app.listen(80))
//   .catch((err) => console.log(err));

// // routes
// app.get('*', checkUser);
// app.get('/', (req, res) => res.render('home'));
// app.get('/smoothies', requireAuth, (req, res) => res.render('smoothies'));
// app.get('/signup', (req, res) => res.render('signup'));



// app.get('/set-cookies', (req, res) => {

//   res.setHeader('Set-Cookie', 'newUser=true');

//   res.send('you got the cookies');

// });

// app.get('/read-cookies', (req, res) => {


// c
// });


const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

// view engine
app.set('view engine', 'ejs');

// database connection
// const dbURI = 'mongodb+srv://shaun:test1234@cluster0.del96.mongodb.net/node-auth';
const dbURI = 'mongodb+srv://mikkelkarlsson:zumxuh-qyxMad-3wifho@cluster0.ytpxlty.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(8000))
  .catch((err) => console.log(err));

// routes
app.get('*', checkUser);
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', requireAuth, (req, res) => res.render('smoothies'));
app.use(authRoutes);