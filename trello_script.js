#!/usr/bin/env node

var letters = "acdegilmnoprstuw";
var num = 37;
var init = 7;

var Hasher = require('./trello_exercise.js');
var myHasher = Hasher.createHasher(init,num,letters);

console.log(myHasher.hash("leepadg"));
console.log(myHasher.reverseHash(930846109532517));
