// Express supports routing with either app.route(path).get(callback) or
// app.get('path', callback)

const express = require('express');
const app = express();

// With the approcah of app.get('path', callback) we can only define
// a single route with a single HTTP verb. Example code is shown below
app.get('/', (req, res) => {
    res.send('Hi Buddy!');
});
app.post('/', (req, res) => {
    res.send('Data posted successfully')
});

// The same code can be written in a easier way with the help of express
app.route('/home').get((req, res) => {
    res.send('Abhay Tiwari');
}).post((req, res) => {
    res.send('Data posted successfully');
});

// We can also chain multiple middleware functions
var hasName = function (req, res, next) {
    if (req.param('name')) {
        next();
    }
    else {
        res.send('What is your name?');
    }
};
var sayHello = function (req, res, next) {
    res.send('Hello' + req.param('name'));
};
app.get('/home1', hasName, sayHello);

// You will get the view on localhost:8000
app.listen(8000, () => {
    console.log('Get it on localhost:8000');
});