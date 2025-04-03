let http = require('http');
http.createServer(function (req, res) {
    res.write('hello from server');//write a response to the client
    res.end();//end of response from server
}).listen(6000);//the server instance listens for http requests on port 6000

const fs = require('fs');
// Asynchronously read the file 'sample.txt'
fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    // Print the contents of 'sample.txt' to the console
    console.log(data);
});

// Read the contents of the file '/content.md' synchronously and store them in 'data'
const data = fs.readFileSync('D:/USER/Downloads/0xKNOWLEDGE/IBM Full Stack Coding Challenges/6.1.1. Advanced Nodejs Modules/content.md', 'utf8');
// Print the contents of 'content.md' to the console
console.log(data);

let os = require('os');
console.log("Computer OS Platform Info : " + os.platform());
console.log("Computer OS Architecture Info: " + os.arch());

const path = require('path');
let result = path.basename('/content/index/home.html');
console.log(result); //outputs home.html to the console

let util = require('util');
let str = 'The loop has executed %d time(s).';
for (let i = 1; i <= 10; i++) {
    console.log(util.format(str, i)); //outputs 'The loop has executed i time(s)'
}

const url = require('url');
let webAddress = 'http://localhost:2000/index.html?lastName=Kent&firstName=Clark';
let qry = url.parse(webAddress, true);
let qrydata = qry.query; //returns an object: {lastName: 'Kent', firstName: 'Clark'}
console.log(qrydata.firstName); //outputs Clark

let qry2 = require('querystring');
let qryParams = qry.parse('lastName=Kent&firstName=Clark');
console.log(qryParams.firstName); //returns Clark