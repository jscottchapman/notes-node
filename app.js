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
    var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note created');
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
  } else {
    console.log('Note title taken');
  }
} else if ( command === 'list') {
    notes.getAll();
} else if ( command === 'remove') {
    let noteRemoved = notes.removeNote(argv.title);
    let message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
} else if ( command === 'read') {
    let note = notes.getNote(argv.title);
    if ( note) {
        console.log('Note found');
        console.log('---');
        console.log(`Note Title: ${note.title}`);
        console.log(`Note Body: ${note.body}`);
    } else {
        console.log('Note not found');
    }
} else {
    console.log('Command not found');
} 
console.log('Yargs', argv);

 

