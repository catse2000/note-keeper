const path = require('path');
const router = require('express').Router();

// opens index.html at server
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// opens notes.html when "Create Note" is clicked
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

module.exports = router; //export to be used in other parts of the application