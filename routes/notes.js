// ----------------------------- //
// ----- routes > notes.js ----- //
// ----------------------------- //

const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const {
    readFromFile,
    readAndAppend,
    writeToFile,
  } = require('../helpers/fsUtils');



// POST Route for a new note
notes.post('/', (req, res) => {
    console.log(req.body);
  
    const { username, topic, tip } = req.body;
  
    if (req.body) {
      const newTip = {
        username,
        tip,
        topic,
        tip_id: uuidv4(),
      };
  
      readAndAppend(newTip, './db/db.json');
      res.json(`Tip added successfully 🚀`);
    } else {
      res.error('Error in adding tip');
    }
  });



module.exports = notes;