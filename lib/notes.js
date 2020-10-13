const fs = require('fs');
const path = require('path');

//Function to query data based on title and text
function filterByQuery(query, notesArray) { 
    let filteredResults = notesArray;
    if(query.title) {
        filteredResults = filteredResults.filter(note => note.title === query.title);
    }
    if(query.text) {
        filteredResults = filteredResults.filter(note => note.text === query.text);
    }
    return filteredResults;
};

//Function to query data by ID, so that the program has a way of identifying specific tasks
function findById(id, notesArray) {
    const result = notesArray.filter(note => note.id === id)[0];
    return result;
};

// function to create a new note
function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );

    return note;
};

// function to review information in note and validate that information is being entered as a string
function validateNote(note) {
    if(!note.title || typeof note.title !== 'string') {
        return false;
    }
    if(!note.text || typeof note.text !== 'string') {
        return false;
    }
    return true;
};

// export functions to be used in other parts of the program
module.exports = {
    filterByQuery,
    findById,
    createNewNote,
    validateNote,
}