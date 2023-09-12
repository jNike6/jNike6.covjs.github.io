//index.js
//Start server by typing "node index.js" into the console. 
//For further information, see https://webdeasy.de/das-ultimative-node-js-einsteiger-tutorial/#what-is-nodejs
const express = require('express');     //Require npm:express
const app = express();                  //Initialization of express module
const path = require('path');           //Require file path

//Dev server
const hostname = 'localhost';           //Server hostname
const port = 3000;                      //Set server port
//https://devcenter.heroku.com/articles/troubleshooting-node-deploys#check-for-differences-between-development-and-production

//Static files
app.use(express.static('.'));           //Access files in upper folder
app.use('/css', express.static(path.join(__dirname + '/css/style.css')));       //Link css file
app.use('/images', express.static(path.join(__dirname + '/images')));           //Link images
app.use('/js', express.static(path.join(__dirname + '/js')));                   //Link js files

//Views Files (https://raddy.co.uk/blog/nodejs-setup-with-html-css-js-ejs/)
app.set('views', './views');            //Access html subpages
app.set('viewengine', 'ejs');           //Set server render engine to ejs

// Navigation
app.get('/', (req, res) => {            //Routing
    res.sendFile(path.join(__dirname + '/index.html'));     //Send html file; __dirname : resolve to project folder   
});

app.get('/worldwide', (req, res) => {
    res.sendFile(path.join(__dirname + '/worldwide.html'));
})
app.get('/switzerland', (req, res) => {
    res.sendFile(path.join(__dirname + '/switzerland.html'));
})

// Listen for development
app.listen(port, hostname, () => {
    console.log(`Connected successfully. Server running at http://${hostname}:${port}/`);       //${}: Reference on hostname and port
});
//Listen for deploy
app.listen(process.env.PORT || port);
