const router = require('express').Router(); //import router so as to make express functions useable through other parts of the application
const { filterByQuery, findById, createNewNote, validateNote } = require('../../lib/notes'); //import functions to be used in this file
const { notes } = require('../../db/db.json'); //import data
const uniqid = require('uniqid');

// Get data from web and filter based on query
router.get('/notes', (req, res) => {
    let results = notes;
    if(req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
});

// Get data from web and filter based on id query
router.get('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
        res.json(result);
    }
    else {
        res.send(404);
    }
});

// post data to db
router.post('/notes', (req, res) => {
    req.body.id = uniqid();

    if(!validateNote(req.body)) {
        res.status(400).send('This note is not properly formatted.');
    }
    else {
        const note = createNewNote(req.body, notes); // call function createNewNote in order to create new note
        res.json(note); //post to server in json format
    }
});

router.delete('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    notes.splice(result, 1);
    res.json(notes);
});

module.exports = router; //export for use in other parts of the application