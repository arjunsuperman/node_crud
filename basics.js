var fs = require('fs');
var os = require('os');
var _ = require('lodash'); //A modern JavaScript utility library delivering modularity, performance & extras.

var genericHelper = require('./genericHelper.js');

var user = os.userInfo();
console.log(user.username)

// fs.appendFile("Greeting.txt","Hello "+user.username+"!\n",()=>console.log("file Created."))


// 
let minimin = genericHelper.findMinValue([2,5,10,23,232]);
console.log(minimin)



// lodash - A modern JavaScript utility library delivering modularity, performance & extras.
// Find unique from below array
let mixedArray = ['Arjun','Vivek','Apple',1,3,'Vivek',890,3];

// let result = _.uniq(mixedArray);
// let result = _.last(mixedArray);
let result = _.includes(mixedArray,'Arjun');
console.log(result)



