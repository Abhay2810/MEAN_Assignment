const express = require("express")
const path = require('path')
const app = express();
const port = 4000;

// Firstly defining all the controllers
var homePage = (req, res) => {
    res.send('Hi Buddy! This is your Abhay Tiwari')
};
var aboutPage = (req, res) => {
    res.sendFile('./Abhay_Tiwari.html', { root: __dirname });
};

// Now defining all the routes
app.get('/', homePage);
app.get('/about', aboutPage);

// Response for every other route
app.use((req, res) => {
    res.send('Error 404, not found!')
});
app.listen(port, () => {
 console.log('Listening on port ${port}...' );
});