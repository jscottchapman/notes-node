const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const { age, sign, dlnumber } = notes;
const _ = require('lodash');
const yargs = require('yargs');

const argv = yargs.argv;
let command = argv._[0];



 console.log('Starting app');

if (command === 'add') {
    notes.addNote(argv.title, argv.body);
} else if ( command === 'list') {
    notes.getAll();
} else if ( command === 'remove') {
    notes.deleteNote(argv.title);
} else if ( command === 'read') {
    notes.getNote(argv.title);
} else {
    console.log('Command not found');
} 
console.log('Yargs', argv);

 

