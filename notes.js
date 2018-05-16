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

let removeNote = ( title ) => {
    let notes = fetchNotes();
    //fetch notes
    let filteredNotes = notes.filter((note) => note.title !== title);
    //filter notes, remove the one with the title argument
    saveNotes(filteredNotes);
    //save the new notes array

    return notes.length !== filteredNotes.length;
}
let getAll = function () {
    console.log('Getting all the notes');
}
let getNote = (title) => {
    //fetch the notes
    let notes = fetchNotes();
    //use filter find the one we want
    let filteredNote = notes.filter((note) => note.title === title);
    //access the first element in that array
    return filteredNote[0];
}


module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}
