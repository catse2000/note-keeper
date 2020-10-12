const express = require('express');
const app = express();
const { notes } = require('./Develop/db/db.json');
const PORT = process.env.PORT || 3001;

function findById(id, notesArray) {
    const result = notesArray.filter(note => note.id === id)[0];
    return result;
};

app.get('/api/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
        res.json(result);
    }
    else {
        res.send(404);
    }
});


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});