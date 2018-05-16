console.log('Starting notes.js');
const fs = require('fs');

let fetchNotes = () => {
    try {
        let notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch(e) {
        console.log('notes-data.json doesn\'t exist. creating new file');
        return [];
    }
}

let saveNotes = (someNotes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(someNotes));
}

let addNote = function (title, body) {
    let notes = fetchNotes();
    let note = {
        title,
        body
    };
    
    let duplicateNotes = notes.filter((note) => note.title === title);
    if ( duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
    }
    
}
let getAll = function () {
    console.log('Getting all the notes');
}
let getNote = function (title) {
    console.log('Getting note:', title);
}
let deleteNote = function (title) {
    console.log('Deleting note:', title);
}

module.exports = {
    addNote,
    getAll,
    getNote,
    deleteNote
}
